<template>
  <footer class="bg-slate-900 text-slate-300">
    <div class="container mx-auto px-6 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div class="flex items-center gap-3 mb-6">
            <img src="/public/logo1.png" alt="Numéa" class="h-20 w-20" />Numéa 
          </div>
          <p class="text-slate-400 mb-6 leading-relaxed">
            Solutions digitales sur mesure pour transformer vos défis métiers en opportunités de croissance.
          </p>
          <div class="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Linkedin :size="20" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Github :size="20" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Twitter :size="20" />
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-white font-bold text-lg mb-6">Navigation</h3>
          <ul class="space-y-3">
            <li v-for="(item, index) in navigation" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="hover:text-cyan-400 transition-colors duration-200 animate-fade-up"
                :style="{ animationDelay: `${index * 0.06 + 0.1}s` }"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold text-lg mb-6">Services</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service" class="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
              {{ service }}
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold text-lg mb-6">Contact</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <Mail :size="20" class="text-cyan-400 flex-shrink-0 mt-0.5" />
              <a href="mailto:contact@agence-dev.fr" class="hover:text-cyan-400 transition-colors duration-200">
                numea.projet@gmail.com
              </a>
            </li>
          </ul>
          <NuxtLink
            to="/contact"
            class="mt-6 block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white text-center rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 interactive-hover interactive-gradient"
          >
            Obtenir un devis
          </NuxtLink>
        </div>
      </div>

      <div class="border-t border-slate-800 pt-8">
        <div class="mb-8">
          <h4 class="text-white font-semibold mb-4">Technologies maîtrisées</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, index) in technologies"
              :key="index"
              class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm hover:bg-slate-700 transition-colors duration-200 chip-animate animate-fade-up"
              :style="{ animationDelay: `${index * 0.04 + 0.15}s` }"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            {{ currentYear }} Numéa. Tous droits réservés.
          </p>
          <div class="flex gap-6">
            <a href="#" class="hover:text-cyan-400 transition-colors duration-200">
              Mentions légales
            </a>
            <a href="#" class="hover:text-cyan-400 transition-colors duration-200">
              Politique de confidentialité
            </a>
            <a href="#" class="hover:text-cyan-400 transition-colors duration-200">
              CGV
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Mail, Linkedin, Github, Twitter } from 'lucide-vue-next';

const currentYear = new Date().getFullYear();

const navigation = [
  { label: 'Accueil', to: '/' },
  { label: 'Offre', to: '/solutions' },
  { label: 'Contact', to: '/contact' }
];

const services = [
  'CRM personnalisés',
  'ERP internes',
  'Intégrations web',
  'Tableaux de bord',
  'Automatisations',
  'Applications web & mobile'
];

const technologies = [
  'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'Docker', 'AWS', 'Next.js', 'Vue.js',
  'Tailwind CSS', 'Express', 'FastAPI', 'GraphQL', 'REST API'
];

</script>
