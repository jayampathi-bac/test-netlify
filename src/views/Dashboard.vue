<template>
  <button @click="testFunc">test</button>
</template>

<script setup>
import axios from 'axios'

const testFunc = async () => {
  console.log("hi")
  const result = await axios.post('/.netlify/functions/scrap-background', {
    url_x: 'https://login-absolute.netlify.app/',
    url_y: 'https://login-output-responsive.netlify.app/',
    email: 'jayampathi.bac@gmail.com'
  })
  console.log("result", result.data)
}

</script>

<style scoped>

</style>