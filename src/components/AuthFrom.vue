<template>
    <form @submit.prevent="submitForm">
            <input class="id_input" v-model="inputValue" placeholder="id сайта" maxlength="24"/>
            <button class="auth_btn" >Войти</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    submitForm() {
      this.$emit('submit', this.inputValue);
    },
  },
};
</script>

<style scoped>
.id_input{
    width:100%;
    font-size: 16px;
    text-align: center;
    margin-bottom:2.5rem;
}
.auth_btn{
    background:rgba(141, 141, 141, 0.377);
    border-radius:4%;
    font-size: 20px;
    width:80px;
    height: 40px;
    margin:0 auto;
}
</style>
