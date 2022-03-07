<template>
  <div>
    <keep-alive>
      <component :is="currentView" @changeView="changeView"/>
    </keep-alive>
  </div>
</template>

<script>
import FirstStep from '../components/form/FirstStep'
import ActivitiesStep from '../components/form/ActivitiesStep'
import FinaliseStep from '../components/form/FinaliseStep'

export default {
  components: { FirstStep, ActivitiesStep, FinaliseStep },
  data () {
    return {
      currentView: FirstStep.name
    }
  },
  methods: {
    changeView (currentView) {
      this.currentView = currentView
    }
  }
}
</script>
