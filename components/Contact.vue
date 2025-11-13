<template>
  <section id="contact" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4 animate-fade-up">
            Contactez-nous
          </h2>
          <p class="text-xl text-slate-600 max-w-2xl mx-auto animate-fade-up animate-delay-100">
            Accompagnement 100% personnalisé. Parlons de votre projet dès aujourd'hui.
          </p>
        </div>

        <div class="grid lg:grid-cols-5 gap-12">
          <div class="lg:col-span-2 space-y-8">
            <div>
              <h3 class="text-2xl font-bold text-slate-900 mb-6 animate-fade-up">
                Prenons contact
              </h3>
              <p class="text-slate-600 mb-8 animate-fade-up animate-delay-100">
                Nous répondons généralement sous 24h. Pour les demandes urgentes, n'hésitez pas à nous appeler directement.
              </p>
            </div>

            <div class="space-y-6">
              <div class="flex items-start gap-4 animate-fade-up" :style="{ animationDelay: '0.15s' }">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Mail :size="24" class="text-white" />
                </div>
                <div>
                  <div class="font-semibold text-slate-900 mb-1">Email</div>
                  <a href="mailto:contact@agence-dev.fr" class="text-cyan-600 hover:text-cyan-700">
                    numea.projet@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4 animate-fade-up" :style="{ animationDelay: '0.25s' }">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <MapPin :size="24" class="text-white" />
                </div>
                <div>
                  <div class="font-semibold text-slate-900 mb-1">Localisation</div>
                  <p class="text-slate-600">
                    Lyon, France<br />
                    Interventions partout en France
                  </p>
                </div>
              </div>
            </div>

            </div>

          <div class="lg:col-span-3">
            <div v-if="submitted" class="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-12 text-center animate-fade-up">
              <div class="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 :size="32" class="text-white" />
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-3">
                Message envoyé avec succès !
              </h3>
              <p class="text-slate-600">
                Nous avons bien reçu votre demande. Notre équipe vous contactera dans les plus brefs délais.
              </p>
            </div>

            <form
              v-else
              @submit.prevent="handleSubmit"
              class="bg-slate-50 rounded-2xl p-8 border border-slate-200 animate-fade-up"
            >
              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="name" class="block text-sm font-semibold text-slate-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    v-model="formData.name"
                    type="text"
                    id="name"
                    required
                    class="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 form-field"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label for="email" class="block text-sm font-semibold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    v-model="formData.email"
                    type="email"
                    id="email"
                    required
                    class="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 form-field"
                    placeholder="jean@entreprise.fr"
                  />
                </div>

                <div>
                  <label for="company" class="block text-sm font-semibold text-slate-700 mb-2">
                    Entreprise
                  </label>
                  <input
                    v-model="formData.company"
                    type="text"
                    id="company"
                    class="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 form-field"
                    placeholder="Mon Entreprise"
                  />
                </div>

                <!-- <div>
                  <label for="phone" class="block text-sm font-semibold text-slate-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    v-model="formData.phone"
                    type="tel"
                    id="phone"
                    class="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 form-field"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div> -->
              </div>

              <div class="mb-6">
                <label for="projectType" class="block text-sm font-semibold text-slate-700 mb-2">
                  Type de projet * 
                </label>
                
                <div class="w-full flex flex-wrap items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-transparent transition-all duration-200">
                  
                  <span 
                    v-for="projectValue in formData.projectTypes" 
                    :key="projectValue"
                    class="flex items-center bg-cyan-100 text-cyan-800 text-sm font-medium px-2.5 py-1 rounded-full"
                  >
                    <span>{{ getLabelForValue(projectValue) }}</span>
                    <button 
                      @click.prevent="removeProjectType(projectValue)"
                      type="button"
                      class="ml-1.5 flex-shrink-0 text-cyan-600 hover:text-cyan-800 focus:outline-none"
                      aria-label="Supprimer"
                    >
                      <X :size="16" />
                    </button>
                  </span>
                  
                  <select
                    v-model="selectedOption"
                    @change="addProjectType"
                    id="projectType"
                    class="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none p-1 min-w-[200px]"
                  >
                    <option value="" disabled>Ajoutez un type de projet...</option>
                    <option
                      v-for="option in projectOptions"
                      :key="option.value"
                      :value="option.value"
                      :disabled="formData.projectTypes.includes(option.value)"
                    >
                      {{ option.label }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="mb-6">
                <label for="message" class="block text-sm font-semibold text-slate-700 mb-2">
                  Décrivez votre projet *
                </label>
                <textarea
                  v-model="formData.message"
                  id="message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none form-field"
                  placeholder="Décrivez vos besoins, vos objectifs et vos contraintes..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/25 interactive-hover interactive-gradient animate-fade-up"
                :style="{ animationDelay: '0.2s' }"
              >
                <Send :size="20" />
                Envoyer la demande
              </button>

              <p class="text-sm text-slate-500 text-center mt-4">
                * Champs obligatoires
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle2, X } from 'lucide-vue-next';

const projectOptions = ref([
  { value: 'crm', label: 'CRM personnalisé' },
  { value: 'erp', label: 'ERP interne' },
  { value: 'integration', label: 'Intégration web' },
  { value: 'dashboard', label: 'Tableau de bord' },
  { value: 'automation', label: 'Automatisation' },
  { value: 'app', label: 'Application web/mobile' },
  { value: 'other', label: 'Autre' }
]);

const formData = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  projectTypes: [] as string[],
  message: ''
});

const selectedOption = ref("");

const submitted = ref(false);

const addProjectType = () => {
  const value = selectedOption.value;
  if (value && !formData.value.projectTypes.includes(value)) {
    formData.value.projectTypes.push(value);
  }
  selectedOption.value = "";
};

const removeProjectType = (typeToRemove: string) => {
  formData.value.projectTypes = formData.value.projectTypes.filter(
    (type) => type !== typeToRemove
  );
};

const getLabelForValue = (value: string) => {
  return projectOptions.value.find(opt => opt.value === value)?.label || value;
};

const handleSubmit = () => {
  if (formData.value.projectTypes.length === 0) {
    alert('Veuillez sélectionner au moins un type de projet.');
    return;
  }

  console.log('Form submitted:', formData.value);
  submitted.value = true;
  setTimeout(() => {
    submitted.value = false;
    formData.value = {
      name: '',
      email: '',
      company: '',
      phone: '',
      projectTypes: [],
      message: ''
    };
  }, 3000);
};

const openCalendar = () => {
  window.open('https://calendly.com', '_blank');
};
</script>
