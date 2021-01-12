<template>
  <div class="main">
    <h1>Home Page</h1>
    <h2>{{ this.$store.state.posts[0] }}</h2>
    <!-- start table  -->
    <table id="customers">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Details</th>
      </tr>
      <tr v-for="(post, index) in this.$store.state.posts" :key="index">
        <td> {{ post.id }} </td>
        <td> {{ post.title }} </td>
        <td>
          <nuxt-link :to="{path: `post/${post.id}`}"> SHOW </nuxt-link>
        </td>
      </tr>
    </table>
    <!-- end table  -->
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('getPost')
  },
}
</script>

<style>
.main{
  margin-left: 20px;
  margin-right: 20px;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
