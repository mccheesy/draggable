<template>
  <div class="draggable-mat">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DraggableMat',
  props: {},
};
</script>

<style scoped>
.draggable-mat {
  background-color: #ded;
  border: 1px dashed #cac;
  display: flex;
  height: 50vh;
  min-height: 400px;
  min-width: 600px;
  width: 35vw;
}
</style>
