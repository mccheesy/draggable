<template>
  <div id="app">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <font-awesome-icon icon="hand-lizard" />
            Draggables
          </h1>
          <h2 class="subtitle">Get to draggin&lsquo;, baby!</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-narrow">
          <draggable-mat>
            <draggable-item />
            <draggable-item />
            <draggable-item />
          </draggable-mat>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import DraggableMat from './components/DraggableMat';
import DraggableItem from './components/DraggableItem';

export default {
  name: 'app',
  components: {
    HelloWorld,
    DraggableMat,
    DraggableItem,
  },
};
</script>

<style>
#app {
  font-family: 'Bitter', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0a0;
  margin-top: 60px;
}
.hero {
  text-align: center;
}
</style>
