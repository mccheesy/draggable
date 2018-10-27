<template>
  <div class="draggable-area">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DraggableArea',
  props: {},
};
</script>

<style scoped>
.draggable-area {
  background-color: #ded;
  border: 1px dashed #cac;
  display: flex;
  height: 50vh;
  min-height: 400px;
  min-width: 600px;
  width: 35vw;
}
</style>
