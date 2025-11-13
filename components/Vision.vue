<template>
  <section id="vision" class="py-24 bg-gradient-to-br from-slate-50 to-white">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-up">
            Notre Vision
          </h2>
          <div class="max-w-3xl mx-auto">
            <p class="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600 mb-6 animate-fade-up animate-delay-100">
              Allier innovation et pragmatisme pour créer des outils vraiment utiles
            </p>
            <p class="text-lg text-slate-600 leading-relaxed animate-fade-up animate-delay-200">
              Nous croyons que la technologie doit servir votre métier, pas le contraindre.
              Notre mission est de concevoir des solutions digitales qui s'intègrent naturellement
              dans vos processus et simplifient vraiment le quotidien de vos équipes.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-16">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 animate-fade-up"
            :style="{ animationDelay: `${index * 0.1 + 0.15}s` }"
          >
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                <component :is="value.icon" :size="24" class="text-white" />
              </div>
            </div>
            <div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">
                {{ value.title }}
              </h3>
              <p class="text-slate-600">
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl animate-fade-up animate-delay-200">
          <h3 class="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-up">
            Pourquoi nous choisir ?
          </h3>
          <div class="grid md:grid-cols-3 gap-8 mt-12">
            <div
              v-for="(reason, index) in reasons"
              :key="index"
              class="animate-fade-up"
              :style="{ animationDelay: `${index * 0.1 + 0.25}s` }"
            >
              <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
                {{ reason.value }}
              </div>
              <div class="text-slate-300">
                {{ reason.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Lightbulb, Users, Target, TrendingUp } from 'lucide-vue-next';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation pragmatique',
    description: 'Nous utilisons les technologies les plus adaptées, pas les plus à la mode.'
  },
  {
    icon: Users,
    title: 'Collaboration étroite',
    description: 'Votre expertise métier + notre savoir-faire technique = succès garanti.'
  },
  {
    icon: Target,
    title: 'Orienté résultats',
    description: 'Chaque fonctionnalité doit apporter une valeur mesurable à votre activité.'
  },
  {
    icon: TrendingUp,
    title: 'Évolutivité',
    description: 'Des solutions qui grandissent avec votre entreprise.'
  }
];

const reasons = [
  { value: '100%', label: 'Accompagnement personnalisé' },
  { value: 'Sur mesure', label: 'Chaque solution est unique' },
  { value: 'Long terme', label: 'Partenariat durable' }
];
</script>

