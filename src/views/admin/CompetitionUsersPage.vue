<template>
  <section class="main-section">
    <h2>Soutěž</h2>
    <component :is="view" :index="index" :id="id" @changeView="changeView"/>
  </section>
</template>

<script>
import List from '../../components/admin/registrations/List'
import Detail from '../../components/admin/registrations/Detail'

export default {
  name: 'competition-users-page',
  components: { List, Detail },
  data () {
    return {
      view: 'list',
      id: null,
      index: null
    }
  },
  methods: {
    changeView (obj) {
      if (obj && obj.id) {
        this.id = obj.id
        this.index = obj.index
        this.view = 'detail'
      } else {
        this.id = null
        this.index = null
        this.view = 'list'
      }
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
}

</style>
