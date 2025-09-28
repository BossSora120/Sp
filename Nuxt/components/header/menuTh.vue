<template>
  <div id="main-menu" class="wsmainfull menu clearfix menu-th">
    <div class="wsmainwp clearfix logo-wraper">
      <!-- LOGO -->
              <!-- LOGO -->
          <div class="desktoplogo">
            <NuxtLink to="/" class="logo-black"><img src="/assets/images/logo-default.png" alt="โลโก้" /></NuxtLink>
          </div>
        <!-- HEADER WHITE LOGO -->
          <div class="desktoplogo">
              <NuxtLink to="/" class="logo-white"><img src="/assets/images/logo-edu-white.png" alt="โลโก้" /></NuxtLink>
          </div>
      <!-- MAIN MENU + SIGNUP BUTTON -->
      <nav class="wsmenu clearfix menu-flex-row">
        <ul class="wsmenu-list nav-theme wsmenu-list-th">
          <li class="nl-simple"><NuxtLink to="/th/demo-6" class="h-link">หน้าแรก</NuxtLink></li>
          <li class="nl-simple"><NuxtLink to="/th/about" class="h-link">เกี่ยวกับเรา</NuxtLink></li>
          <li class="nl-simple"><NuxtLink to="/th/features" class="h-link">คุณสมบัติ</NuxtLink></li>
          <li class="nl-simple"><NuxtLink to="/th/pricing-1" class="h-link">ราคา</NuxtLink></li>
          <li class="nl-simple"><NuxtLink to="/th/contacts" class="h-link">ติดต่อ</NuxtLink></li>
          <li class="nl-simple reg-fst-link mobile-last-link">
            <NuxtLink to="/th/login-2" class="h-link">เข้าสู่ระบบ</NuxtLink>
          </li>
        </ul>
        <div class="signup-btn-wrap">
          <NuxtLink to="/th/signup-2" class="btn r-04 btn--theme hover--tra-white last-link">สมัครสมาชิก</NuxtLink>
        </div>
      </nav>
      <!-- LANGUAGE TOGGLE -->
      <div class="lang-toggle-wrap">
        <button @click="toggleLang" class="lang-toggle">
          EN
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const toggleLang = () => {
  router.push('/') // เปลี่ยนไปหน้าอังกฤษ
}
</script>

<style scoped>
.flex-header-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  box-sizing: border-box;
}
.desktoplogo {
  margin-right: 2.5rem;
  flex-shrink: 0;
}
.menu-flex-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.lang-toggle-wrap {
  margin-inline-start: 20px;
  flex-shrink: 0;
}
.menu-flex-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.wsmenu-list {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;
}
.signup-btn-wrap {
  margin-inline-start: 1.5rem;
}
.lang-toggle-wrap {
  margin-inline-start: 20px;
}
.lang-toggle {
  background: #0a00ce;
  color: #1b263b;
  border: none;
  border-radius: 5px;
  padding: 0.3rem 0.8rem;
  cursor: pointer;
  font-weight: bold;
}

.wsmenu-list-th{
  gap: 0;
}

.nl-simple{
  background-color: #0a00ce;
}
</style>

<script>
import { reactive } from 'vue';
export default {
    setup() {
        const state = reactive({
        isOpen: [false, false]
        });
        const toggle = (index) => {
        state.isOpen[index] = !state.isOpen[index];
        };
        return {
        toggle,
        isOpen: state.isOpen
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const menu = document.getElementById("main-menu");
            const header = document.getElementById("header");
            if (window.pageYOffset > 100) {
                menu.classList.add("scroll");
                header.classList.add("scroll");
            } else {
                menu.classList.remove("scroll");
                header.classList.remove("scroll");
            }
        }
    }
};
</script>