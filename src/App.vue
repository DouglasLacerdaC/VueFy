<script>
</script>


<template>
  
  <div class="router">
    <router-view />
  </div>

  <div class="responsive">
    <h3>Disponivel apenas para telas maiores de 1150px</h3>
  </div>

</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap');

:root {
  
  --white: #ffffff;
  --black: #000000;

  --gray900: #212121;
  --gray800: #2a2a2a;
  --gray700: #353535;
  --gray600: #505050;

  --color-first: #1ed760;

}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 10px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--white);
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: var(--gray900);
}

input {
  outline: none;
}

button {
  outline: none;
  cursor: pointer;
}

li {
  list-style: none;
}

h1, h2, h3, h4, h5, h6 {
  font-size: 42px;
  font-weight: 700;
}

h2 {
  font-size: 34px;
}

h3 {
  font-size: 26px;
}

h4 {
  font-size: 22px;
}

h5 {
  font-size: 18px;
}

h6 {
  font-size: 14px;
}

a {
  text-decoration: none;
}

.responsive {
  display: none;
}

@media(width <= 1150px) {
  .router {
    display: none;
  }
  
  .responsive {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }

}

</style>
