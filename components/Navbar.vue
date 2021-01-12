<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/post">Post</nuxt-link>
      </li>
    </ul>
    <hr>
  </div>
</template>

<style>
li{
  display: inline;
  font-size: 1.8em;
  margin-right: 30px;
}
.nuxt-link-exact-active{
  background-color: greenyellow;
}
</style>
