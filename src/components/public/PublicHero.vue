<template>
  <section class="public-hero" aria-labelledby="public-page-title">
    <div class="home-container public-hero-grid">
      <div>
        <p class="home-eyebrow">{{ eyebrow }}</p>
        <h1 id="public-page-title">{{ title }}</h1>
        <p class="public-hero-lead">{{ lead }}</p>
        <p v-if="description" class="public-hero-description">{{ description }}</p>
        <div class="public-hero-actions"><slot /></div>
      </div>
      <figure v-if="photo" class="public-hero-photo">
        <img :src="photo.src" :alt="photo.alt" :width="photo.width" :height="photo.height" :style="{ objectPosition: photo.position || 'center' }" fetchpriority="high">
        <figcaption v-if="caption">{{ caption }}</figcaption>
      </figure>
      <div v-else class="public-hero-aside"><slot name="visual" /></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PublicHero',
  props: {
    eyebrow: { type: String, required: true },
    title: { type: String, required: true },
    lead: { type: String, required: true },
    description: { type: String, default: '' },
    photo: { type: Object, default: null },
    caption: { type: String, default: '' }
  }
}
</script>
