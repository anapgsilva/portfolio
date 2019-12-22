<template>
<div id="projects">

  <h1>Projects</h1>

  <div class="articles">
    <article>
      <a href="anapgsilva.github.io/memory_game/memory_game/">Memory Card Game</a>
      <p>This is a simple card game where the player needs to turn two cards that match. Built using Javascript, HTML and CSS.</p>
    </article>

    <article>
      <a href="anapgsilva.github.io/tictactoe-nxn">Tic-Tac-Toe Game</a>
      <p>This is a classical game of noughts and crosses, with the option of either a 3X3 or a 9X9 board game. Built using Javascript, HTML and CSS.</p>
    </article>

    <article>
      <a href="github.com/anapgsilva/movie_library">Movie Library</a>
      <p>Users can create their own libraries and populate them with movies, which information is pulled directly from the Internet Movie DataBase. Based on their libraries, users can request a movie suggestion. Project built solely in Ruby on Rails and deployed to Heroku.</p>
    </article>

    <article>
      <a href="github.com/anapgsilva/restaurant_client">Babbo Restaurant website</a>
      <p>A version of Menu Log for an individual restaurant. Users can create their own account and make orders for pick-up or delivery. Website built using REACT and RAILS. Deployed to Heroku and Github Pages.</p>
    </article>

    <article>
      <a href="">colourPicker</a>
      <p>This is an easy to use colour picker built in Vue.</p>
    </article>

    <article>
      <a href="https://colourfill.firebaseapp.com/">colourFill</a>
      <p>This is a colouring application, where users choose their pictures by theme (requested from Bing Image Search) or take a photo using the camera. These black and white pictures are loaded onto a canvas where the user can colour them using a palette of colours. This application was built using React and Firebase as hosting, database and functions. I adapted available functions to do both image edge detection and colour filling.</p>
    </article>
  </div>

</div>
</template>

<script>
export default {
  name: 'projects'
}
</script>

<style>

#projects {
  padding-top: 100px;
}

.articles {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

article {
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin: 20px;
  text-align: left;
  padding: 20px;
}

article a {
  text-decoration: none;
  color: #22cef5;
}

article a:hover {
  font-weight: bold;
}

</style>
