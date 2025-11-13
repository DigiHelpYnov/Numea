<template>
  <div class="min-h-screen flex flex-col bg-white text-slate-900">
    <SiteHeader />

    <main class="flex-1 pt-24">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import SiteHeader from '~/components/SiteHeader.vue';
</script>
