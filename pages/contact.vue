<template>
  <div class="bg-white">
    <section class="bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 py-24 text-center text-white">
      <div class="container mx-auto px-6 space-y-6 max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-bold animate-fade-up">
          Parlez-nous de votre projet
        </h1>
        <p class="text-lg md:text-xl text-white/80 animate-fade-up animate-delay-100">
          Nos experts reviennent vers vous sous 24h pour cadrer vos enjeux et co-construire la solution idéale.
        </p>
      </div>
    </section>

    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import ContactSection from '~/components/Contact.vue';
</script>

