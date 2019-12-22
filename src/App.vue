<template>
  <div id="app">
    <div id="nav">
      <a href="/">Home</a> |
      <a href="/#projects">Projects</a> |
      <a href="/#skills">Tech Skills</a> |
      <a href="/#education">Education</a> |
      <a href="/#experience">Experience</a> |
      <a href="/#contacts">Contacts</a>
    </div>
    <div>
      <img class="headshot" src="@/assets/headshot.jpg" alt="Photo of Ana">
    </div>

    <div class="pbs">
      <h1>Hi, I'm Ana!</h1>
      <p>After being a biochemist for 15 years, I have recently graduated from Software Engineering Immersive at General Assembly, Sydney.</p>

      <p>I always enjoy solving puzzles, learning and building things. I used to be challenged every day as a scientist and I am ready to apply my problem
      solving skills, analytical and logical thinking in my future profession in tech.</p>

    </div>

    <projects></projects>

    <skills></skills>

    <education></education>

    <experience></experience>
    <hr/>
    <contacts></contacts>

  </div>
</template>

<script>
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Contacts from '@/components/Contacts'

export default {
  name: 'App',
  components: {
    'projects': Projects,
    'skills': Skills,
    'education': Education,
    'experience': Experience,
    'contacts': Contacts
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  /* background-image: url("./assets/bg-space.jpg"); */
  max-width: 960px;
}

#nav {
  max-width: 960px;
  min-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #fff;
  height: 80px;
  border-bottom: 1px solid #ccc;
  overflow: scroll;
  white-space: nowrap;
}

#nav a {
  font-size: 25px;
  text-decoration: none;
  text-align: center;
  color: #22cef5;
  margin: 0 10px;
}

#nav a:hover {
  text-decoration: none;
  background-color: #d6f1ff;
}

.pbs {
  margin: 40px auto 0;
  max-width: 600px;
}
.pbs h1 {
  text-align: center;
  margin: 50px auto;
  font-size: 60px;
}
.pbs p {
  font-size: 20px;
  font-weight: bold;
}

.headshot {
  margin-top: 100px;
  width: 400px;
  border-radius: 400px;
  border: 1px solid #ccc;
}
</style>
