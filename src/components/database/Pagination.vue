<template>
  <div class="pagination">
    <button :disabled="isDisabledLeft" class="button" @click="goToPage(actualPage - 1)"> &lt; </button>
    <span v-for="(item, index) in actualField" :key="index">
      <button :class="activePage(item)" @click="goToPage(item)">{{item}}</button>
    </span>
    <button :disabled="isDisabledRight" class="button" @click="goToPage(actualPage + 1)"> &gt; </button>
  </div>
</template>

<script>
import { FETCH_EVENTS, TOTAL_PAGES, ACTUAL_PAGE } from '../../types'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      totalArray: [],
      actualField: []
    }
  },
  mounted () {
    this.generateTotalArray()
    this.handleActualArray()
  },
  methods: {
    ...mapActions({ fetchEvents: FETCH_EVENTS }),
    async goToPage (index) {
      await this.fetchEvents(index)
      this.scroll('event-section')
    },
    handleActualArray () {
      if (this.total >= 5) {
        this.updateActualArray()
      } else {
        this.setActualArray()
      }
    },
    updateActualArray () {
      if (this.actualPage < 3) {
        this.actualField = this.totalArray.slice(0, 5)
      } else if (this.actualPage > this.totalArray.length - 3) {
        this.actualField = this.totalArray.slice(this.totalArray.length - 5)
      } else {
        this.actualField = this.totalArray.slice(this.actualPage - 3, this.actualPage + 2)
      }
    },
    setActualArray () {
      this.actualField = this.totalArray
    },
    generateTotalArray () {
      this.totalArray = Array.apply(null, { length: this.total + 1 }).map(Number.call, Number)
      this.totalArray = this.totalArray.slice(1)
    },
    activePage (item) {
      return this.actualPage === item ? 'button active' : 'button'
    },
    scroll (elementId) {
      let offset = 0
      let y = 0
      let dy
      let call = setInterval(() => {
        if (Math.abs((dy = offset - y)) > 1) {
          y += dy / 12
        } else {
          clearInterval(call)
          y = offset
        }
        document.documentElement.scrollTop = y - 100
      }, 10)
      offset = document.getElementById(elementId).offsetTop
      y = document.documentElement.scrollTop
    }
  },
  computed: {
    ...mapGetters([TOTAL_PAGES, ACTUAL_PAGE]),
    isDisabledLeft: function () {
      return this.actualPage === 1
    },
    isDisabledRight: function () {
      return this.actualPage === this.total
    }
  },
  watch: {
    total: function () {
      this.generateTotalArray()
      this.handleActualArray()
    },
    actualPage: function () {
      this.handleActualArray()
    }
  }
}
</script>

<style scoped lang="scss">
.pagination {
  padding: 20px 0;
  button {
    margin: 0 10px;
    @media (max-width: 500px) {
      margin: 0 5px;
      width: 30px;
    }
    &.active {
      background-color: #F06027;
      color: white;
      border-color: white;
    }
  }

}
</style>
