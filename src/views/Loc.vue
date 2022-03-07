<template>
<div class="outer">
  <div v-if="showCounter" class="counter">
    <div>Počkej si...</div>
    <div v-if="loaded">{{hours}}:{{minutes}}:{{seconds}}</div>
    </div>
  <button v-else class="button" @click="goToLink">Go</button>
</div>
</template>

<script>
export default {
  name: 'loc',
  data () {
    return {
      countDownDate: new Date('Aug 29, 2020 16:45:25').getTime(),
      // countDownDate: new Date('Aug 24, 2020 10:45:40').getTime(),
      hours: 0,
      minutes: 0,
      seconds: 0,
      showCounter: true,
      loaded: false
    }
  },
  mounted () {
    let refreshId = this.intervalid1 = setInterval(() => {
      var now = new Date().getTime()
      if (now > this.countDownDate) {
        this.showCounter = false
        clearInterval(refreshId)
      } else {
        var distance = this.countDownDate - now

        let hrs = Math.floor(distance / (1000 * 60 * 60))
        this.hours = hrs < 10 ? '0' + hrs.toString() : hrs

        let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        this.minutes = mins < 10 ? '0' + mins.toString() : mins

        let secs = Math.floor((distance % (1000 * 60)) / 1000)
        this.seconds = secs < 10 ? '0' + secs.toString() : secs
        this.loaded = true
      }
    }, 1000)
  },
  methods: {
    goToLink () {
      window.location.href = 'https://glympse.com/!najdi_posledni'
    }
  }
}
</script>
<style scoped lang="scss">
.outer {
  position: absolute;
  background-color: white;
  width: 100%;
  height: 100vh;
  top:0;
  left:0;
  z-index: 10000;

  .counter{
    display: flex;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 50px;
    text-align: center;

  }

  .button {
    margin-left: 30px;
    margin-top: 30px;
  }

  iframe {
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 90vh;
  z-index: 10000;
}
}
</style>
