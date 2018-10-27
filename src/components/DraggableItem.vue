<template>
  <div
    class="draggable-item"
    :class="classes"
    @mousedown="select"
    :style="styles"
    @touchstart="select"
  >
    <div class="box">
      <font-awesome-icon icon="lightbulb" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    classes () {
      return {
        'is-active': this.isActive,
        'is-static': this.isStatic,
      };
    },
    styles () {
      return {
        height: `${this.height}px`,
        left: `${this.left}px`,
        top: `${this.top}px`,
        width: `${this.width}px`,
        zIndex: this.isActive ? 2 : 1,
      };
    },
  },
  data () {
    return {
      height: {
        type: Number,
        default: 0,
        validator: val => val >= 0,
      },
      isActive: {
        type: Boolean,
        default: false,
      },
      isStatic: {
        type: Boolean,
        default: false,
      },
      left: {
        type: Number,
        default: 0,
        validator: val => val >= 0,
      },
      top: {
        type: Number,
        default: 0,
        validator: val => val >= 0,
      },
      touch: {
        type: Object,
        default: { x: 0, y: 0 },
        validator: obj => typeof obj === 'object' &&
          'x' in obj && typeof obj.x === 'number' && obj.x >= 0 &&
          'y' in obj && typeof obj.y === 'number' && obj.y >= 0,
      },
      width: {
        type: Number,
        default: 0,
        validator: val => val >= 0,
      },
    };
  },
  methods: {
    drag (e) {
      const ev = e.touches ? e.touches[0] : e;
      const dX = ev.pageX - this.touch.x;
      const dY = ev.pageY - this.touch.y;

      this.touch.x = ev.pageX;
      this.touch.y = ev.pageY;
      this.move(dX, dY);
    },
    select (e) {
      this.touch.x = e.touches ? e.touches[0].pageX : e.pageX;
      this.touch.y = e.touches ? e.touches[0].pageY : e.pageY;
      if (!this.isStatic) {
        this.isActive = true;
        document.addEventListener('mousemove', this.drag);
        document.addEventListener('mouseup', this.deselect);
        document.addEventListener('touchcancel', this.deselect);
        document.addEventListener('touchend', this.deselect);
        document.addEventListener('touchmove', this.drag);
      }
    },
    deselect () {
      if (this.isActive) {
        this.isActive = false;
        document.removeEventListener('mousemove', this.drag);
        document.removeEventListener('mouseup', this.deselect);
        document.removeEventListener('touchcancel', this.deselect);
        document.removeEventListener('touchend', this.deselect);
        document.removeEventListener('touchmove', this.drag);
      }
    },
    move (dX, dY) {
      this.left = this.left + dX;
      this.top = this.top + dY;
    },
  },
  mounted () {
    const computedStyle = window.getComputedStyle(this.$el);

    this.height = parseInt(computedStyle.height, 10);
    this.isActive = false;
    this.isStatic = false;
    this.left = parseInt(computedStyle.left, 10);
    this.top = parseInt(computedStyle.top, 10);
    this.touch = { x: 0, y: 0 };
    this.width = parseInt(computedStyle.width, 10);
  },
  name: 'DraggableItem',
  props: {},
  watch: {},
  beforeDestroy () {
    // emit signal to parent to resort
  },
};
</script>

<style scoped>
.draggable-item {
  cursor: pointer;
  height: 4rem;
  margin: 8px;
  position: relative;
  text-align: center;
  width: 4rem;
  z-index: 1;
}
.draggable-item box {
  display: inline-block;
  padding: auto;
}
.draggable-item box:hover {
  background-color: #eae;
}
</style>
