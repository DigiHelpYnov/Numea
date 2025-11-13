<template>
  <section id="case-studies" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4 animate-fade-up">
          Cas clients
        </h2>
        <p class="text-xl text-slate-600 max-w-2xl mx-auto animate-fade-up animate-delay-100">
          Des résultats concrets pour des métiers variés
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(caseStudy, index) in cases"
          :key="index"
          class="bg-slate-50 rounded-2xl p-8 border-2 border-slate-100 hover:border-cyan-200 transition-all duration-300 hover:shadow-xl animate-fade-up"
          :style="{ animationDelay: `${index * 0.1 + 0.2}s` }"
        >
          <div class="flex items-start gap-4 mb-6">
            <div :class="['w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0', caseStudy.color]">
              <component :is="caseStudy.icon" :size="24" class="text-white" />
            </div>
            <div>
              <div class="text-sm font-semibold text-cyan-600 mb-1">
                {{ caseStudy.industry }}
              </div>
              <h3 class="text-xl font-bold text-slate-900">
                {{ caseStudy.title }}
              </h3>
            </div>
          </div>

          <div class="space-y-4">
            <div>
              <div class="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Défi
              </div>
              <p class="text-slate-700">
                {{ caseStudy.challenge }}
              </p>
            </div>

            <div>
              <div class="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Solution
              </div>
              <p class="text-slate-700">
                {{ caseStudy.solution }}
              </p>
            </div>

            <div>
              <div class="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Résultats
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(result, idx) in caseStudy.results"
                  :key="idx"
                  class="px-3 py-1 bg-white rounded-full text-sm font-medium text-slate-700 border border-slate-200 chip-animate"
                >
                  {{ result }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <p class="text-lg text-slate-600 mb-6 animate-fade-up">
          Votre projet est unique. Créons ensemble la solution qui vous correspond.
        </p>
        <button
          @click="goToContact"
          class="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold text-lg hover:bg-slate-800 interactive-hover animate-fade-up animate-delay-100"
        >
          Parlez-nous de votre métier
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { navigateTo } from '#app';
import { Car, UtensilsCrossed, Hammer, Building2 } from 'lucide-vue-next';

const cases = [
  {
    icon: Car,
    industry: 'Garage automobile',
    title: 'Suivi client et facturation intégré',
    challenge: 'Gestion manuelle des RDV et devis clients',
    solution: 'CRM avec planning automatique, historique véhicules et facturation intégrée',
    results: [
      'Gain de 10h/semaine',
      'Satisfaction client +35%',
      'Suivi en temps réel'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: UtensilsCrossed,
    industry: 'Restaurant',
    title: 'ERP de gestion complète',
    challenge: 'Stocks désorganisés et réservations perdues',
    solution: 'Système de gestion des stocks, réservations en ligne et tableau de bord analytique',
    results: [
      'Réduction gaspillage 40%',
      'Réservations +50%',
      'Visibilité totale'
    ],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Hammer,
    industry: 'Artisan',
    title: 'CRM de devis et planification',
    challenge: 'Suivi commercial et planning chaotiques',
    solution: 'Outil de génération de devis, planification chantiers et suivi paiements',
    results: [
      'Devis générés en 5min',
      'Taux conversion +25%',
      'Zéro retard de paiement'
    ],
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: Building2,
    industry: 'PME',
    title: 'Dashboard analytique stratégique',
    challenge: 'Données dispersées, décisions à l\'aveugle',
    solution: 'Dashboard centralisé connecté à tous les outils métiers avec KPI en temps réel',
    results: [
      'Décisions data-driven',
      'ROI visible instantané',
      'Productivité +30%'
    ],
    color: 'from-purple-500 to-pink-500'
  }
];

const goToContact = () => {
  navigateTo('/contact');
};
</script>

