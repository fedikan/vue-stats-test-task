<template>
    <div class="analitics">
          <Title title="Аналитика"/>
          <Graph class="graph"/>
    </div>
</template>

<script>
import Graph from './Graph.vue';
import Title from './Title.vue';

export default {
  name: 'Analitics',
  components: { Graph, Title },
  created() {
    if (!localStorage.getItem('leadhit-site-id')) {
      this.$router.push({ name: 'auth', params: { authAlarm: 'Вам небходимо авторизироваться!' } });
    }
  },
  data() {
    return {
      somedata: true,
    };
  },
};
</script>
<style scoped>
.analitics{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width: 1000px;
}
</style>
