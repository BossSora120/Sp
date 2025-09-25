<template>
  <div id="main-menu" class="wsmainfull menu clearfix">
    <div class="wsmainwp clearfix" style="display: flex; align-items: center; justify-content: space-between;">

      <!-- LOGO -->
      <div class="desktoplogo">
        <NuxtLink :to="currentLang === 'en' ? '/' : '/th'" class="logo-black">
          <img src="/assets/images/logo-default.png" :alt="currentLang === 'en' ? 'logo' : 'โลโก้'" />
        </NuxtLink>
      </div>

      <!-- MAIN MENU -->
      <nav class="wsmenu clearfix">
        <ul class="wsmenu-list nav-theme">
          <li class="nl-simple"><NuxtLink :to="currentLang === 'en' ? '/demo-6' : '/th/demo-6'" class="h-link">
            {{ currentLang === 'en' ? 'Home' : 'หน้าแรก' }}
          </NuxtLink></li>
          <li class="nl-simple"><NuxtLink :to="currentLang === 'en' ? '/about' : '/th/about'" class="h-link">
            {{ currentLang === 'en' ? 'About Us' : 'เกี่ยวกับเรา' }}
          </NuxtLink></li>
          <li class="nl-simple"><NuxtLink :to="currentLang === 'en' ? '/features' : '/th/features'" class="h-link">
            {{ currentLang === 'en' ? 'Features' : 'คุณสมบัติ' }}
          </NuxtLink></li>
          <li class="nl-simple"><NuxtLink :to="currentLang === 'en' ? '/pricing-1' : '/th/pricing-1'" class="h-link">
            {{ currentLang === 'en' ? 'Pricing' : 'ราคา' }}
          </NuxtLink></li>
          <li class="nl-simple"><NuxtLink :to="currentLang === 'en' ? '/contacts' : '/th/contacts'" class="h-link">
            {{ currentLang === 'en' ? 'Contact' : 'ติดต่อ' }}
          </NuxtLink></li>
          <li class="nl-simple reg-fst-link mobile-last-link">
            <NuxtLink :to="currentLang === 'en' ? '/login-2' : '/th/login-2'" class="h-link">
              {{ currentLang === 'en' ? 'Sign in' : 'เข้าสู่ระบบ' }}
            </NuxtLink>
          </li>
          <li class="nl-simple">
            <NuxtLink :to="currentLang === 'en' ? '/signup-2' : '/th/signup-2'" class="btn r-04 btn--theme hover--tra-white last-link">
              {{ currentLang === 'en' ? 'Sign up' : 'สมัครสมาชิก' }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- LANGUAGE TOGGLE -->
      <div style="margin-left: 20px;">
        <button @click="toggleLang" class="lang-toggle">
          {{ currentLang === 'en' ? 'TH' : 'EN' }}
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '~/composables/useLang'

const { currentLang, toggleLang } = useLang()
</script>

<style scoped>
.lang-toggle {
  position: absolute;
  background: #0a00ce;
  color: #1b263b;
  border: none;
  border-radius: 5px;
  padding: 0.3rem 0.8rem;
  cursor: pointer;
  font-weight: bold;
  top: 50%;
  transform: translateY(-50%);
}
</style>