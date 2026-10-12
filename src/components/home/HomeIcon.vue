<template>
  <svg class="home-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <template v-if="name === 'arrow-right'"><path d="M4 12h16m-6-6 6 6-6 6" /></template>
    <template v-else-if="name === 'arrow-left'"><path d="M20 12H4m6-6-6 6 6 6" /></template>
    <template v-else-if="name === 'external'"><path d="M6 18 18 6M6 6h12v12" /></template>
    <template v-else-if="name === 'grid'"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></template>
    <template v-else-if="name === 'search'"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></template>
    <template v-else-if="name === 'user'"><circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" /></template>
    <template v-else-if="name === 'mail'"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></template>
    <template v-else-if="name === 'instagram'"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" /></template>
    <template v-else-if="name === 'facebook'"><path d="M14 21v-9h3l.5-4H14V6c0-1 .5-2 2-2h2V1h-3c-3 0-5 2-5 5v2H7v4h3v9" /></template>
    <template v-else-if="name === 'linkedin'"><rect x="3" y="9" width="4" height="12" rx=".5" /><circle cx="5" cy="4" r="2" /><path d="M11 21V9h4v2c1-2 6-3 6 2v8m-6 0v-7" /></template>
    <template v-else-if="name === 'book'"><path d="M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Zm0 0v15" /></template>
    <template v-else-if="name === 'close'"><path d="m6 6 12 12M6 18 18 6" /></template>
    <template v-else-if="name === 'chevron'"><path d="m6 9 6 6 6-6" /></template>
    <template v-else><path d="M4 7h16M4 17h16" /></template>
  </svg>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: { name: { type: String, required: true } }
}
</script>
