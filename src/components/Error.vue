<template>
    <div v-if="message"
     class="alarm"
     :class="{'visible': visible, }">
        <h3>Ошибка!</h3>
        <span>{{ alarmMessage }}</span>
    </div>
</template>
<script>
export default {
  name: 'error',
  props: ['alarmMessage'],
  data() {
    return {
      visible: false,
      timers: [],
    };
  },
  computed: {
    message() {
      if (this.alarmMessage) {
        this.showAlarm();
        return this.alarmMessage;
      }
      return null;
    },
  },
  methods: {
    showAlarm() {
      if (this.timers) {
        this.visible = false;
        this.timers = [];
      }
      this.timers.push(setTimeout(() => { this.visible = true; }, 0));
      this.timers.push(setTimeout(() => { this.visible = false; }, 4300));
      this.timers.push(setTimeout(() => { this.timers = []; }, 4300));
    },
  },

};
</script>

<style scoped>
.alarm{
    opacity: 0;
    transition:0.7s;
    position:absolute;
    top:0;
    left:0;
    width:280px;
    padding:1rem;
    border:1px solid red;
    background: pink;
    color:red;
    border-radius: 4px;
    font-size: 16px;
    display:flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
}
.visible{
    transform:translateY(-120%);
    opacity:1;
}
</style>
