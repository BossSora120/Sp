// useLang.ts
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import FooterLayout1 from '~/components/footer/Layout1.vue'
import FooterLayout1Th from '~/components/footer/Layout1Th.vue'

// เริ่มด้วย en เป็นค่า default (อย่าเรียก localStorage ตรงนี้)
export const currentLang = ref<'en' | 'th'>('en')

export const footerComponent = computed(() =>
  currentLang.value === 'en' ? FooterLayout1 : FooterLayout1Th
)

export function useLang() {
  const router = useRouter()
  const route = useRoute()

  function toggleLang() {
    if (currentLang.value === 'en') {
      currentLang.value = 'th'
      if (process.client) localStorage.setItem('lang', 'th')

      if (route.path === '/') {
        router.push('/th')
      } else {
        router.push(`/th${route.path}`)
      }
    } else {
      currentLang.value = 'en'
      if (process.client) localStorage.setItem('lang', 'en')

      const newPath = route.path.replace(/^\/th/, '') || '/'
      router.push(newPath)
    }
  }

  // โหลดค่าภาษาตอน client mount
  onMounted(() => {
    if (!process.client) return

    const savedLang = localStorage.getItem('lang') || 'en'
    currentLang.value = savedLang as 'en' | 'th'

    if (savedLang === 'th' && !route.path.startsWith('/th')) {
      if (route.path === '/') {
        router.replace('/th')
      } else {
        router.replace(`/th${route.path}`)
      }
    }

    if (savedLang === 'en' && route.path.startsWith('/th')) {
      const newPath = route.path.replace(/^\/th/, '') || '/'
      router.replace(newPath)
    }
  })

  return { currentLang, footerComponent, toggleLang }
}
