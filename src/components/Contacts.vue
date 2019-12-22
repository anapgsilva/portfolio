<template>
  <div id="contacts">

    <h3>Get in contact for a chat!</h3>

    <a href="mailto:apgsilva81@gmail.com">
      <img src="@/assets/email.png" alt="Email"/>
    </a>

    <a href="http://linkedin.com/in/ana-pg-silva/">
      <img src="@/assets/linkedin.jpeg" alt="LinkedIn">
    </a>

    <a href="http://github.com/anapgsilva">
      <img src="@/assets/github.png" alt="GitHub">
    </a>
  </div>
</template>

<script>
export default {
  name: 'contacts'
}
</script>

<style>

#contacts {
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#contacts h3 {
  margin-right: 20px;
}

img {
  width: 30px;
  margin: 10px;
}

a::before {
  display: none;
}

</style>
