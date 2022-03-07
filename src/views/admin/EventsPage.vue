<template>
  <section class="main-section">
    <h2>Databáze aktivit</h2>
    <div class="views-buttons">
      <button :class="getButtonClass('all')" @click="changeView('all')">všechny</button>
      <button :class="getButtonClass('reports')" @click="changeView('reports')">reporty</button>
      <button :class="getButtonClass('proposals')" @click="changeView('proposals')">návrhy</button>
    </div>
    <keep-alive>
      <component :is="view" @changeView="changeView"/>
    </keep-alive>
  </section>
</template>

<script>
import All from '../../components/admin/events/All'
import Proposals from '../../components/admin/events/Proposals'
import Reports from '../../components/admin/events/Reports'

export default {
  name: 'events-page',
  components: { All, Proposals, Reports },
  data () {
    return {
      view: All.name
    }
  },
  methods: {
    getButtonClass (buttonView) {
      if (this.view === buttonView) {
        return 'button active'
      }
      return 'button'
    },
    changeView (newView) {
      this.view = newView
    }
  }
}
</script>

<style scoped lang="scss">
section.main-section {
  padding: 100px 0 60px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  h2 {
    font-size: 25px;
    padding-bottom: 20px;
  }

  .views-buttons {
    width: 30%;
    margin-left: auto;
    margin-right: auto;
  }

  .button {
    margin-right: 15px;
    &.active {
      background: #f06027;
      color: white;
    }
  }
}

</style>
