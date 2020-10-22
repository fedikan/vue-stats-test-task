<template>
<div class="container">
    <div class="auth">
        <Title title="LeadHit"/>
        <AuthFrom @submit="submitForm"/>
    </div>
    <Error :alarmMessage="alarmMessage"/>
</div>
</template>

<script>
import Error from './Error.vue';
import AuthFrom from './AuthFrom.vue';
import Title from './Title.vue';

export default {
  name: 'Auth',
  components: { Error, AuthFrom, Title },
  props: ['authAlarm'],
  created() {
    if (this.authAlarm) {
      this.showAlarm(this.authAlarm);
    }
  },
  data() {
    return {
      INPUT_LIMIT: 24,
      alarmMessage: null,
      alarmTimer: null,
    };
  },
  methods: {
    authCheck(id) {
      if (id.length === this.INPUT_LIMIT) {
        return true;
      }
      return false;
    },
    async fetchToken(id) {
      const options = {
        methods: 'GET',
        headers: {
          'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
          'Leadhit-Site-Id': id,
        },
      };
      const response = await fetch('https://track-api.leadhit.io/client/test_auth', options);
      const data = await response.json();
      return data;
    },
    responseCheck(data) {
      if (data.message === 'ok') { return true; }
      return false;
    },
    setToken() {
      localStorage.setItem('leadhit-site-id', '5f8475902b0be670555f1bb3');
    },
    showAlarm(message) {
      if (this.alarmTimer) {
        this.alarmMessage = null;
        clearTimeout(this.alarmTimer);
      }
      this.alarmMessage = message;
      this.alarmTimer = setTimeout(() => { this.alarmMessage = null; }, 6000);
    },
    async submitForm(siteId) {
      if (this.authCheck(siteId)) {
        const response = await this.fetchToken(siteId);
        if (this.responseCheck(response)) {
          this.setToken();
          this.$router.push({ name: 'analitics' });
        } else {
          this.showAlarm('Fetch Error!');
        }
      } else {
        this.showAlarm('ID сайта должно содержать 24 символа');
      }
    },
  },
};
</script>

<style scoped>
.container{
    width: 280px;
    height: 280px;
    position: absolute;
    box-shadow: 0 0 10px 1px black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding:1rem;
    z-index: 3;

}
.auth{
    width:100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

</style>
