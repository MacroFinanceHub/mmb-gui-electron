<template>
    <div class="d-flex flex-column">
        <div class="text">Max {{model}} columns per row</div>
        <vue-slider class="slider" v-model="model" v-bind="options"></vue-slider>
    </div>
</template>

<script>
  import vueSlider from 'vue-slider-component';
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    components: {
      vueSlider,
    },
    data() {
      return {
        options: {
          data: null,
          eventType: 'drag-end',
          width: 'auto',
          height: 6,
          dotSize: 16,
          dotHeight: null,
          dotWidth: null,
          min: 1,
          max: 12,
          interval: 1,
          show: true,
          speed: 0.5,
          disabled: false,
          piecewise: false,
          usdKeyboard: false,
          enableCross: true,
          piecewiseLabel: false,
          tooltip: 'hover',
          tooltipDir: 'top',
          reverse: false,
          clickable: true,
          realTime: false,
          lazy: true,
          formatter: null,
          bgStyle: null,
          sliderStyle: null,
          processStyle: null,
          piecewiseActiveStyle: null,
          tooltipStyle: null,
          labelStyle: null,
          labelActiveStyle: null,
        },
      };
    },
    computed: {
      ...mapGetters('comparison', ['colsPerRow']),
      model: {
        get() {
          return this.colsPerRow;
        },
        set(value) {
          this.setColsPerRow(value);
        },
      },
    },
    methods: {
      ...mapMutations('comparison', ['setColsPerRow']),
    },
  };
</script>

<style scoped lang="scss">
    .text {
        font-size: 0.9rem;
    }
</style>
