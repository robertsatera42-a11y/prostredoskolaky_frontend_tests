<template>
  <div v-if="!cookie" @focusin="rememberFocus">
    <div aria-hidden="true" :style="{ height: noticeHeight + 'px' }"></div>
    <aside ref="notice" class="cookie-notice" aria-labelledby="cookie-notice-title">
      <div class="cookie-heading">
        <h2 id="cookie-notice-title">Cookies na webu</h2>
        <button type="button" class="cookie-close" aria-label="Zavřít oznámení o cookies" @click="hideCookie"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"></path></svg></button>
      </div>
      <p>Procházením tohoto webu souhlasíte s používáním souborů cookies.</p>
      <div class="cookie-actions">
        <a href="https://www.vimkamklikam.cz/zajimavosti/k-cemu-jsou-a-jak-funguji-cookies" target="_blank" rel="noopener noreferrer">Více informací<span class="cookie-sr-only"> (otevře se v nové kartě)</span></a>
        <button type="button" class="cookie-acknowledge" @click="hideCookie">Rozumím</button>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'cookies',
  data () {
    return {
      cookie: this.getCookie('cookie') || false,
      noticeHeight: 0
    }
  },
  mounted () {
    if (this.cookie) return
    this.measureNotice()
    window.addEventListener('resize', this.measureNotice)
    if (window.ResizeObserver) {
      this.noticeObserver = new window.ResizeObserver(this.measureNotice)
      this.noticeObserver.observe(this.$refs.notice)
    }
  },
  beforeDestroy () {
    this.stopMeasuring()
  },
  methods: {
    measureNotice () {
      const notice = this.$refs.notice
      if (!notice) return
      const bottom = parseFloat(window.getComputedStyle(notice).bottom) || 16
      this.noticeHeight = Math.ceil(notice.getBoundingClientRect().height + bottom + 16)
    },
    stopMeasuring () {
      window.removeEventListener('resize', this.measureNotice)
      if (this.noticeObserver) this.noticeObserver.disconnect()
    },
    rememberFocus (event) {
      if (event.relatedTarget && !this.$el.contains(event.relatedTarget)) this.returnTarget = event.relatedTarget
    },
    hideCookie () {
      this.cookie = true
      this.stopMeasuring()
      try {
        this.setCookie('cookie', true, 30)
      } catch (_) {
        // The notice can still be dismissed when browser storage is unavailable.
      }
      this.$nextTick(() => {
        if (this.returnTarget && this.returnTarget.isConnected && !this.returnTarget.disabled) this.returnTarget.focus({ preventScroll: true })
      })
    },
    setCookie (name, value, exdays) {
      const d = new Date()
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
      const expires = 'expires=' + d.toUTCString()
      document.cookie = name + '=' + value + ';' + expires + ';path=/;SameSite=Lax'
    },
    getCookie (cname) {
      const name = cname + '='
      for (const item of document.cookie.split(';')) {
        const cookie = item.trim()
        if (cookie.indexOf(name) === 0) {
          const value = cookie.substring(name.length)
          try { return decodeURIComponent(value) } catch (_) { return value }
        }
      }
      return ''
    }
  }
}
</script>

<style scoped lang="scss">
.cookie-notice {
  --notice-ink: #071b46;
  --notice-muted: #556c94;
  --notice-action: #c44716;
  position: fixed;
  z-index: 20;
  right: max(24px, env(safe-area-inset-right));
  bottom: max(24px, env(safe-area-inset-bottom));
  width: calc(100% - 32px);
  max-width: 420px;
  max-height: calc(100vh - max(100px, 6rem));
  max-height: calc(100dvh - max(100px, 6rem));
  overflow-y: auto;
  padding: 20px 24px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 12px 36px rgba(7, 27, 70, .16);
  color: var(--notice-ink);
  font: 1rem/1.5 'AvenirNextForm', 'AvenirNext', sans-serif;
  overscroll-behavior: contain;
  ::selection { color: var(--notice-ink); background: #ffe2d4; }
  button, a { touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
  button:focus-visible, a:focus-visible { outline: 2px solid var(--notice-ink); outline-offset: 3px; }
}
.cookie-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.cookie-heading h2 { margin: 0; font-size: 1.125rem; font-weight: 700; line-height: 1.3; }
.cookie-close {
  display: inline-flex; align-items: center; justify-content: center; flex: 0 0 44px; width: 44px; height: 44px;
  margin: -8px -12px -4px 0; padding: 0; border: 0; border-radius: 50%; background: #f1f3f8; color: var(--notice-ink); cursor: pointer;
  transition: background-color 140ms ease-out;
  svg { width: 22px; height: 22px; }
  &:hover { background: #e5eaf2; }
  &:active { background: #d5deeb; transition: none; }
}
.cookie-notice p { margin: 12px 0 16px; color: var(--notice-muted); font-size: .9375rem; line-height: 1.5; }
.cookie-actions { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
.cookie-actions a { display: inline-flex; align-items: center; min-height: 44px; color: var(--notice-ink); font-size: .875rem; text-decoration: underline; text-underline-offset: 3px; }
.cookie-actions a:hover { color: var(--notice-action); }
.cookie-acknowledge {
  min-height: 48px; padding: 11px 20px; border: 0; border-radius: 6px; background: var(--notice-action); color: #fff; font: inherit; font-weight: 700; cursor: pointer;
  transition: background-color 140ms ease-out;
  &:hover { background: #a63810; }
  &:active { background: #8e300e; transition: none; }
}
.cookie-sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
@media (max-width: 767px) {
  .cookie-notice { right: 16px; bottom: max(16px, env(safe-area-inset-bottom)); padding: 20px; }
  .cookie-close { margin-right: -8px; }
}
@media (prefers-reduced-motion: reduce) {
  .cookie-notice * { transition: none !important; scroll-behavior: auto !important; }
}
@media (prefers-contrast: more) {
  .cookie-notice { outline: 1px solid var(--notice-ink); }
}
</style>
