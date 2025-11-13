<template>
  <div class="bg-white">
    <section class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-center text-white">
      <div class="container mx-auto px-6 space-y-6 max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-bold animate-fade-up">
          Des solutions taillées pour votre métier
        </h1>
        <p class="text-lg md:text-xl text-slate-200 animate-fade-up animate-delay-100">
          Explorez nos offres et approches pour concevoir, intégrer et faire évoluer vos outils digitaux.
        </p>
        <button
          type="button"
          class="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold text-lg interactive-hover"
          @click="goToContact"
        >
          Lancer un projet
        </button>
      </div>
    </section>

    <Solutions />
    <CaseStudies />
    <Process />
    <Vision />
  </div>
</template>

<script setup lang="ts">
import { navigateTo } from '#app';
import Solutions from '~/components/Solutions.vue';
import CaseStudies from '~/components/CaseStudies.vue';
import Process from '~/components/Process.vue';
import Vision from '~/components/Vision.vue';

const goToContact = () => {
  navigateTo('/contact');
};
</script>

