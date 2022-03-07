<template>
  <section class="others">
    <h2>TOP {{ num }} finalistů soutěže {{ title }}</h2>

    <div class="top-twenty">
      <div>
        <p v-for="(row, index) in firstRow" v-bind:key="index">{{row}}</p>
      </div>
      <div>
        <p v-for="(row, index) in secondRow" v-bind:key="index">{{row}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'other-finalists',
  props: ['firstRow', 'secondRow', 'title', 'num']
}
</script>

<style scoped lang="scss">
.others{
  h2 {
    text-align: center;
  }

  .top-twenty {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-left: auto;
    margin-right: auto;
    width: 80%;

    @media (max-width: 600px) {
      flex-direction: column;

      & > div {
        padding-bottom: 15px;
      }
    }
  }
}
</style>
