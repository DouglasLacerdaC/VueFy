<script>

import FormAccess from '../components/FormAccess.vue';

export default {
  name: 'Login',
  components: {
    FormAccess
  },
}

</script>

<template>
  
  <section class="login">
    
    <img src="/src/assets/imgs/logo.svg" alt="">
    
    <div class="description">
      <h1>Bem vindo ao <span>VueFY</span></h1>
      <p>Insira um apelido para acessar as músicas</p>
    </div>

    <FormAccess />

  </section>

</template>

<style scoped>

.login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login .description {
  text-align: center;
  margin: 50px 0;
}

.login .description h1 span {
  color: var(--color-first);
}

.login .description p {
  color: #ffffff90;
}

</style>