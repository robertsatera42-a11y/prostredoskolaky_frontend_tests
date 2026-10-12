// Presentation only: callers outside the student platform keep their current UI.
export const platformAppearanceMixin = {
  props: {
    appearance: {
      type: String,
      default: 'legacy',
      validator: value => ['legacy', 'platform'].includes(value)
    }
  },
  computed: {
    isPlatform () { return this.appearance === 'platform' }
  },
  methods: {
    fieldId (name) { return this.isPlatform ? `platform-${this._uid}-${name}` : null }
  }
}

export function modalAppearanceOptions (appearance) {
  return appearance === 'platform' ? { customClass: 'platform-modal' } : {}
}

// These are the exact social destinations of the previous shared footer.
export const platformSocialLinks = [
  { id: 'instagram', title: 'Instagram', href: 'https://www.instagram.com/prostredoskolaky/', trackingLabel: 'instagram' },
  { id: 'facebook', title: 'Facebook', href: 'https://www.facebook.com/prostredoskolaky/?fref=ts', trackingLabel: 'facebook' },
  { id: 'linkedin', title: 'LinkedIn', href: 'https://cz.linkedin.com/company/prost%C5%99edo%C5%A1kol%C3%A1ky-z-s-', trackingLabel: 'linkedin' }
]

export const platformDialogMixin = {
  mixins: [platformAppearanceMixin],
  mounted () {
    if (!this.isPlatform) return
    this.dialogReturnFocus = document.activeElement
    this.$nextTick(this.focusDialogHeading)
  },
  watch: {
    submitStatus (value) {
      // Success replaces the focused submit button with a confirmation panel.
      if (this.isPlatform && value === 'OK') this.$nextTick(this.focusDialogHeading)
    }
  },
  beforeDestroy () {
    if (this.isPlatform && this.dialogReturnFocus && document.documentElement.contains(this.dialogReturnFocus)) {
      this.dialogReturnFocus.focus()
    }
  },
  methods: {
    focusDialogHeading () {
      if (!this.isPlatform) return
      const heading = this.$el.querySelector('[data-dialog-heading]')
      if (heading) heading.focus()
    },
    trapDialogFocus (event) {
      if (!this.isPlatform || event.key !== 'Tab') return
      const controls = Array.from(this.$el.querySelectorAll('a[href], button, input:not([type="hidden"]), select, textarea, [tabindex="0"]'))
        .filter(control => !control.disabled && !control.closest('[hidden], [aria-hidden="true"]'))
      if (!controls.length) return
      const first = controls[0]
      const last = controls[controls.length - 1]
      const current = document.activeElement
      if (event.shiftKey && (current === first || !controls.includes(current))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (current === last || !controls.includes(current))) {
        event.preventDefault()
        first.focus()
      }
    }
  }
}
