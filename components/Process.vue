<template>
  <section id="process" class="py-24 bg-slate-900 relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up">
          Notre Process
        </h2>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto animate-fade-up animate-delay-100">
          Une méthodologie éprouvée pour transformer vos idées en solutions concrètes
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative mb-12 last:mb-0 animate-fade-up"
          :style="{ animationDelay: `${index * 0.1 + 0.15}s` }"
        >
          <div v-if="index < steps.length - 1" class="hidden md:block absolute left-[31px] top-20 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-transparent"></div>

          <div class="flex flex-col md:flex-row gap-6 items-start">
            <div class="flex-shrink-0 relative">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                <component :is="step.icon" :size="32" class="text-white" />
              </div>
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center border-2 border-cyan-500">
                <span class="text-xs font-bold text-cyan-400">{{ step.number }}</span>
              </div>
            </div>

            <div class="flex-1 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <h3 class="text-2xl font-bold text-white mb-2 sm:mb-0">
                  {{ step.title }}
                </h3>
                <span class="text-sm font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full w-fit">
                  {{ step.duration }}
                </span>
              </div>
              <p class="text-slate-300 leading-relaxed">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <div class="inline-block bg-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
          <p class="text-lg text-slate-300 mb-6 max-w-2xl animate-fade-up">
            Chaque projet est unique. Notre approche agile nous permet de nous adapter à vos contraintes et d'ajuster le calendrier selon vos priorités.
          </p>
          <button
            @click="goToContact"
            class="px-8 py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white rounded-lg font-semibold text-lg interactive-hover interactive-gradient animate-fade-up animate-delay-100"
          >
            Démarrons votre projet
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { navigateTo } from '#app';
import { Search, Palette, Code, TestTube, Rocket } from 'lucide-vue-next';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Audit',
    description: 'Analyse approfondie de vos besoins, de vos processus métiers et de votre écosystème technique existant.',
    duration: '1-2 semaines'
  },
  {
    icon: Palette,
    number: '02',
    title: 'Conception UX/UI',
    description: 'Création de maquettes interactives et définition de l\'expérience utilisateur optimale pour vos équipes.',
    duration: '2-3 semaines'
  },
  {
    icon: Code,
    number: '03',
    title: 'Développement agile',
    description: 'Développement itératif avec démonstrations régulières pour ajuster et valider chaque fonctionnalité.',
    duration: '4-12 semaines'
  },
  {
    icon: TestTube,
    number: '04',
    title: 'Tests & Livraison',
    description: 'Tests rigoureux, formation de vos équipes et mise en production progressive et sécurisée.',
    duration: '1-2 semaines'
  },
  {
    icon: Rocket,
    number: '05',
    title: 'Suivi post-lancement',
    description: 'Accompagnement continu, maintenance évolutive et optimisations basées sur les retours utilisateurs.',
    duration: 'En continu'
  }
];

const goToContact = () => {
  navigateTo('/contact');
};
</script>

