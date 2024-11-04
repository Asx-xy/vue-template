<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  name: { type: String, required: true },
  color: String,
  areaBtn: { type: Boolean, default: false }
})

defineEmits(['click'])

const symbolId = computed<string>(() => `#${props.name}`)
</script>

<template>
  <span v-if="areaBtn" @click="$emit('click', $event)" class="area-btn">
    <svg class="svg-icon" aria-hidden="true">
      <use :xlink:href="symbolId" :fill="color" />
    </svg>
  </span>
  <svg class="svg-icon" aria-hidden="true" @click="$emit('click', $event)" v-else>
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
  display: inline-block;
  &.btn {
    cursor: pointer;
    &:hover {
      color: #172a88;
    }
  }
}
.area-btn {
  cursor: pointer;
  overflow: visible;
  position: relative;
  display: inline-block;
  line-height: 1;
  &::after {
    position: absolute;
    content: '';
    display: block;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    background: rgba(23, 42, 136, 0.1);
    border-radius: 4px;
    visibility: hidden;
  }
  &:hover {
    &::after {
      visibility: visible;
    }
  }
  &:active {
    color: #172a88;
  }
}
</style>
