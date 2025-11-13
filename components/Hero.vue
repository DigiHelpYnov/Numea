<template>
  <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

    <div class="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-5xl mx-auto text-center">
        <div class="flex justify-center mb-8 animate-fade-up">
          <div class="p-4 bg-cyan-500/10 rounded-2xl backdrop-blur-sm border border-cyan-500/20">
            <Code2 :size="48" class="text-cyan-400" />
          </div>
        </div>

        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-up animate-delay-100">
          Des solutions digitales <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">sur mesure</span> pour booster votre activité
        </h1>

        <p class="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up animate-delay-200">
          CRM, ERP, intégrations complexes et automatisations intelligentes.
          Nous transformons vos défis métiers en outils performants.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animate-delay-300">
          <button
            @click="goToContact"
            class="group px-8 py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white rounded-lg font-semibold text-lg flex items-center gap-2 interactive-hover interactive-gradient"
          >
            Obtenir un devis gratuit
            <ArrowRight :size="20" class="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            @click="goToContact"
            class="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border border-white/10 hover:bg-white/10 interactive-hover"
          >
            Réserver un appel
          </button>
        </div>

        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center animate-fade-up"
            :style="{ animationDelay: `${index * 0.12 + 0.35}s` }"
          >
            <div class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
              {{ stat.value }}
            </div>
            <div class="text-slate-400 text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
        <div class="w-1 h-3 bg-white/50 rounded-full"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { navigateTo } from '#app';
import { Code2, ArrowRight } from 'lucide-vue-next';

const stats = [
  { value: '50+', label: 'Projets livrés' },
  { value: '100%', label: 'Satisfaction client' },
  { value: '24/7', label: 'Support disponible' },
  { value: '5 ans', label: "D'expérience" }
];

const goToContact = () => {
  navigateTo('/contact');
};
</script>

