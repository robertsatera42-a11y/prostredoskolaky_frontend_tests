<template>
  <component
    :is="isPlatform ? 'article' : 'a'"
    @click="!isPlatform && openDetailModal()"
    :class="eventKey % 3 === 2
      ? `type-${event.types[0] && event.types[0].short} event event-last-row`
      : `type-${event.types[0] && event.types[0].short} event`"
  >
    <component :is="isPlatform ? 'div' : 'article'">
      <img loading="lazy" :src="event.logoUrl + event.logo" :alt="isPlatform ? 'Úvodní fotografie aktivity ' + event.name : 'logo'" :width="isPlatform ? 640 : null" :height="isPlatform ? 360 : null">
      <div class="content">
        <component :is="isPlatform ? 'h3' : 'h5'">
          <button v-if="isPlatform" type="button" class="database-event-open" @click="openDetailModal">{{event.name}}</button>
          <template v-else>{{event.name}}</template>
        </component>
        <p class="description">
          {{event.description}}
          <span class="overlay"></span>
        </p>
        <div
          v-if="event.categories.length"
          class="categories"
          v-line-clamp:20="2"
        >{{event.categories.map(c => c.full).join(', ')}}</div>
        <div v-else class="categories" v-line-clamp:20="2">neuvedeno</div>
        <div class="event-footer">
          <span v-if="event.types.length">{{event.types.map(c => c.full).join(', ')}}&nbsp;</span>
          <span v-else>neuvedeno&nbsp;</span>
          <span v-if="event.deadlines.length">{{transformDeadline(event.deadlines)}}</span>
          <span v-else>neuvedeno</span>
        </div>
      </div>
    </component>
  </component>
</template>

<script>
import Detail from './Detail'
import transformerUtils from '../../utils/transformerUtils'
import { platformAppearanceMixin, modalAppearanceOptions } from '../platform/presentation'
export default {
  name: 'event',
  mixins: [platformAppearanceMixin],
  components: { Detail },
  props: {
    event: {
      type: Object,
      required: false
    },
    eventKey: {
      type: Number,
      required: false
    },
    events: {
      type: Array,
      required: false
    }
  },
  methods: {
    openDetailModal () {
      this.$modal.open({
        ...modalAppearanceOptions(this.appearance),
        parent: this,
        component: Detail,
        props: {
          events: this.events,
          eventKey: this.eventKey,
          appearance: this.appearance
        },
        events: {
          // 'goToPrevious': (ev) => {
          // }
        },
        hasModalCard: true,
        canCancel: ['escape', 'x', 'outside']
      })
    },
    transformDeadline (dealines) {
      return transformerUtils.transformPeriods(dealines[0])
    }
  }
}
</script>

<style scoped lang="scss">
  .event {
    overflow: hidden;
    border-radius: 8px;

    flex-grow: 1;
    width: 30%;
    max-width: 30%;
    margin-right: 4%;
    margin-bottom: 4%;
    transition: .3s;

    @media (max-width: 850px) {
      width: 48%;
      max-width: 48%;

      &:nth-child(2n) {
        margin-right: 0;
      }
    }
    @media (max-width: 700px) {
      width: 100%;
      max-width: 100%;
      margin-right: 0;
    }

    &.type-SO {
      background: #3E2F5B;
      border-color: #3E2F5B;
      .overlay {
        background: linear-gradient(rgba(62, 47, 91, 0.4), #3E2F5B);
      }
    }

  &.type-VK {
    background: #efca08;
    border-color: #efca08;
    .overlay {
      background: linear-gradient(rgba(239, 202, 8, 0.4), #efca08);
    }
  }

  &.type-PR {
    background: #17bebb;
    border-color: #17bebb;
    .overlay {
      background: linear-gradient(rgba(23, 190, 187, 0.4), #17bebb);
    }
  }

  &.type-EV {
    background: #eb5757;
    border-color: #eb5757;
    .overlay {
      background: linear-gradient(rgba(235, 87, 87, 0.4), #eb5757);
    }
  }

  &.type-OS {
    background: #15be5a;
    border-color: #15be5a;
    .overlay {
      background: linear-gradient(rgba(21, 190, 90, 0.4), #15be5a);
    }
  }

  &.type-other {
    background: #2f80ed;
    border-color: #2f80ed;
    .overlay {
      background: linear-gradient(rgba(47, 128, 237, 0.4), #2f80ed);
    }
  }

  &:hover {
    box-shadow: 0 0 20px 3px #c3c3c3;
  }

    &.event-last-row {
      margin-right: 0;

      @media (max-width: 850px) {
        margin-right: 4%;
      }
      @media (max-width: 700px) {
        margin-right: 0;
      }
    }

  img {
    height: 90px;
    border-radius: 8px 8px 0 0;
    width: 100%;
    opacity: 0.8;
  }

  .content {
    padding: 20px;

    h5 {
      font-size: 32px;
      font-weight: normal;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .description {
      max-height: 120px;
      height: 120px;
      position: relative;
      font-size: 15px;
      color: #fff !important;
      overflow: hidden;
      line-height: 1.1;

      .overlay {
        height: 40px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }

    .categories {
      padding-top: 5px;
      font-size: 12px;
      text-transform: uppercase;
      color: #fff !important;
      height: 40px;
      display: flex;
      flex: 1;
      align-items: flex-end;
    }

    .event-footer {
      margin-top: 10px;
      display: flex;
      flex: 1;
      justify-content: space-between;
      font-size: 10px;
      text-transform: uppercase;
      color: #fff !important;
    }
  }
}
</style>
