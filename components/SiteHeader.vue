<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/60 backdrop-blur">
    <div class="container mx-auto flex items-center justify-between px-10 py-4">
      <NuxtLink to="/" class="flex items-center gap-3 text-lg font-semibold text-slate-900 interactive-hover" @click="closeMenu">
        <img src="/public/logo1.png" alt="Numéa" class="h-20 w-20" />
        Numéa
      </NuxtLink>

      <nav class="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="relative transition-colors hover:text-cyan-600"
          :class="{ 'text-cyan-600': isActive(link.to) }"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="rounded-full bg-slate-900 px-8 py-2 text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          Nous contacter
        </NuxtLink>
      </nav>

      <button
        type="button"
        class="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 lg:hidden"
        :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
      >
        <svg v-if="!isMenuOpen" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
          <path d="M5 7h14M5 12h14M5 17h14" />
        </svg>
        <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
          <path d="M6 6l12 12M18 6l-12 12" />
        </svg>
      </button>
    </div>

    <transition name="fade">
      <div v-if="isMenuOpen" class="border-t border-slate-200 bg-white lg:hidden">
        <nav class="container mx-auto flex flex-col gap-2 px-6 py-4 text-base font-medium text-slate-700">
          <NuxtLink
            v-for="link in links"
            :key="`mobile-${link.to}`"
            :to="link.to"
            class="rounded-lg px-3 py-2 transition hover:bg-slate-50 hover:text-cyan-600"
            :class="{ 'text-cyan-600 bg-slate-50': isActive(link.to) }"
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="rounded-lg bg-slate-900 px-3 py-2 text-center text-white transition hover:bg-slate-800"
            @click="closeMenu"
          >
            Nous contacter
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from '#app';

const route = useRoute();
const isMenuOpen = ref(false);

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Offre', to: '/solutions' }
] as const;

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const isActive = (path: string) => route.path === path;
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
