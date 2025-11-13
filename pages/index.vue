<template>
  <div class="bg-white">
    <Hero />

    <section class="container mx-auto px-6 py-24">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 animate-fade-up">
          Une expertise complète, disponible sur mesure
        </h2>
        <p class="text-lg md:text-xl text-slate-600 animate-fade-up animate-delay-100">
          Découvrez nos offres digitales pour transformer vos processus métiers, accélérer vos projets et offrir
          des expériences utilisateurs mémorables.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-200">
          <button
            type="button"
            class="px-8 py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white rounded-lg font-semibold text-lg interactive-hover interactive-gradient"
            @click="goToSolutions"
          >
            Explorer nos offres
          </button>
          <button
            type="button"
            class="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold text-lg interactive-hover"
            @click="goToContact"
          >
            Discuter de votre projet
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { navigateTo } from '#app';
import Hero from '~/components/Hero.vue';

const goToSolutions = () => {
  navigateTo('/solutions');
};

const goToContact = () => {
  navigateTo('/contact');
};
</script>

