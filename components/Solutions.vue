<template>
  <section id="solutions" class="py-24 bg-slate-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4 animate-fade-up">
          Nos Solutions
        </h2>
        <p class="text-xl text-slate-600 max-w-2xl mx-auto animate-fade-up animate-delay-100">
          Des outils digitaux conçus pour répondre précisément à vos enjeux métiers
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        <template
          v-for="(item, index) in solutions"
          :key="index"
        >
          <div
            v-if="item.type === 'solution'"
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-slate-100 hover:border-cyan-200 hover:-translate-y-1 interactive-hover animate-fade-up"
            :style="{ animationDelay: `${index * 0.08 + 0.15}s` }"
          >
            <div :class="['w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300', item.color]">
              <component :is="item.icon" :size="28" class="text-white" />
            </div>

            <h3 class="text-2xl font-bold text-slate-900 mb-3">
              {{ item.title }}
            </h3>

            <p class="text-slate-600 leading-relaxed">
              {{ item.description }}
            </p>
          </div>

          <div
            v-else-if="item.type === 'heading'"
            class="lg:col-span-3 md:col-span-2 col-span-1 mt-8 mb-2 animate-fade-up"
            :style="{ animationDelay: `${index * 0.08 + 0.15}s` }"
          >
            <h2 class="text-3xl font-bold text-slate-800">
              {{ item.title }}
            </h2>
            <hr class="mt-2 border-slate-200" />
          </div>
          
        </template>
      </div>

      <div class="text-center mt-16">
        <button
          @click="goToContact"
          class="px-8 py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white rounded-lg font-semibold text-lg interactive-hover interactive-gradient animate-fade-up animate-delay-200"
        >
          Discutons de votre projet
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { navigateTo } from '#app';
import { 
  Database, Workflow, Layers, BarChart3, Zap, Smartphone,
  FileSearch, Share2, Compass, Wrench, Handshake, TrendingUp,
  ShieldCheck, Activity, KeyRound, UserCheck,
  Palette, LayoutGrid, PlayCircle
} from 'lucide-vue-next';

const solutions = [
  {
    type: 'heading',
    title: 'Développement'
  },
  {
    type: 'solution',
    icon: Database,
    title: 'CRM personnalisés',
    description: 'Gérez vos relations clients avec des outils adaptés à vos processus métiers et vos besoins spécifiques.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    type: 'solution',
    icon: Layers,
    title: 'ERP internes',
    description: 'Centralisez la gestion de votre entreprise : stocks, comptabilité, RH, et bien plus encore.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    type: 'solution',
    icon: Workflow,
    title: 'Intégrations web',
    description: 'Connectez vos systèmes existants via des API robustes et des architectures front/back sur mesure.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    type: 'solution',
    icon: BarChart3,
    title: 'Tableaux de bord & outils de gestion',
    description: 'Visualisez vos données en temps réel avec des dashboards intuitifs et performants.',
    color: 'from-orange-500 to-red-500'
  },
  {
    type: 'solution',
    icon: Zap,
    title: 'Automatisations',
    description: 'Éliminez les tâches répétitives et gagnez du temps avec des workflows automatisés intelligents.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    type: 'solution',
    icon: Smartphone,
    title: 'Applications web et mobiles',
    description: 'Développement d\'applications performantes pour tous les supports, adaptées à votre activité.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    type: 'heading',
    title: 'Marketing et Communication'
  },
  {
    type: 'solution',
    icon: FileSearch,
    title: 'Étude de marché',
    description: 'Analyser votre secteur, vos concurrents et votre public cible pour identifier les meilleures opportunités et définir un positionnement unique.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    type: 'solution',
    icon: Share2,
    title: 'Gestion des réseaux sociaux',
    description: 'Prendre en charge vos comptes, créer du contenu engageant, interagir avec votre communauté et analyser les performances pour optimiser la stratégie.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    type: 'solution',
    icon: Compass,
    title: 'Stratégie digitale sur mesure',
    description: 'Élaborer un plan d\'action complet incluant le choix des bons canaux (site, réseaux sociaux, email) pour un impact maximal.',
    color: 'from-purple-500 to-violet-500'
  },
  {
    type: 'solution',
    icon: Wrench,
    title: 'Mise en place d\'outils numériques',
    description: 'Sélectionner, configurer et intégrer les logiciels adaptés (CRM, emailing, analyse) pour automatiser et améliorer votre efficacité.',
    color: 'from-slate-500 to-gray-600'
  },
  {
    type: 'solution',
    icon: Handshake,
    title: 'Conseil & relation humaine',
    description: 'Vous accompagner à chaque étape avec une approche basée sur l\'écoute. Nous sommes des partenaires alignés sur votre vision.',
    color: 'from-emerald-500 to-green-500'
  },
  {
    type: 'solution',
    icon: TrendingUp,
    title: 'Suivi et amélioration continue',
    description: 'Mesurer en permanence les résultats de nos actions (KPIs) pour ajuster la stratégie en temps réel et optimiser le retour sur investissement.',
    color: 'from-orange-500 to-amber-500'
  },
  {
    type: 'heading',
    title: 'Cybersécurité'
  },
  {
    type: 'solution',
    icon: ShieldCheck,
    title: 'Audit : infra, dev, conformité',
    description: 'Évaluer la sécurité de votre infrastructure, de vos applications et votre conformité aux normes (RGPD, ISO).',
    color: 'from-red-500 to-rose-600'
  },
  {
    type: 'solution',
    icon: Activity,
    title: 'Analyse de risque',
    description: 'Identifier et hiérarchiser les menaces potentielles pour votre système d\'information afin de prioriser les actions.',
    color: 'from-orange-500 to-red-500'
  },
  {
    type: 'solution',
    icon: KeyRound,
    title: 'Test de pénétration (Pentest)',
    description: 'Simuler des attaques informatiques réelles (internes et externes) pour découvrir et corriger les failles de sécurité.',
    color: 'from-gray-700 to-black'
  },
  {
    type: 'solution',
    icon: UserCheck,
    title: 'Gestion du CISO',
    description: 'Vous fournir une expertise de Responsable de la Sécurité (CISO) à temps partagé pour piloter votre stratégie de cybersécurité.',
    color: 'from-blue-600 to-slate-800'
  },
  {
    type: 'heading',
    title: 'Design'
  },
  {
    type: 'solution',
    icon: Palette,
    title: 'Identité visuelle',
    description: 'Création ou refonte de votre identité (logo, charte graphique, palette de couleurs, typographies) pour un impact mémorable.',
    color: 'from-pink-500 to-purple-600'
  },
  {
    type: 'solution',
    icon: LayoutGrid,
    title: 'Design Web (UI/UX)',
    description: 'Conception des maquettes, de l\'arborescence et de l\'expérience utilisateur (UI/UX) de votre futur site web.',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    type: 'solution',
    icon: PlayCircle,
    title: 'Motion Design',
    description: 'Création de vidéos animées percutantes pour présenter vos services, expliquer un concept ou dynamiser votre communication.',
    color: 'from-red-500 to-orange-500'
  }

];

const goToContact = () => {
  navigateTo('/contact');
};
</script>