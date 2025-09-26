<template>
    <div id="page" class="page font--jakarta">
        <HeaderLayout1 />

        <main>
            <slot />
        </main>

        <KeepAlive>
                <component :is="footerComponent" />
        </KeepAlive>
    </div>
</template>

<script setup lang="ts">
import { footerComponent } from '~/composables/useLang'
</script>

<style src="~/assets/css/color-scheme/default.scss" lang="scss"></style>
