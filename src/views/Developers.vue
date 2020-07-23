<template>
  <div class="about">
    <h1 class="mb-0"><font-awesome-icon icon="code" /> Developers</h1>
    <hr>
      <div class="row" >
        <div class="col-6 col-sm-3 col-lg-2" v-for="(user) in usersList" :key="user.uid">
          <img :src="baseURL + user.user_picture" class="mx-auto d-block rounded-circle img-developers">
          <p class="text-center mt-3 text-info name-developers">{{user.field_firstname}} {{user.field_familyname}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        usersList: [],
        baseURL: process.env.VUE_APP_BASEURL
      }
    },
    methods: {
      loadUsers() {
        this.$http.get('/api/users')
          .then((res) => {
            this.usersList = res.data
          })
      }
    },
    created() {
      this.loadUsers()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../scss/partials/variables';
  .img-developers {
    border: 2px solid $info;
    cursor: pointer;
    max-width: 100px;
    padding: 5px;
    transition: all .3s ease;

    &:hover {
      box-shadow: 7px 7px 13px 0px gray;
      transform: scale(1.05);
    }
  }

  .name-developers {
    font-size: 1.1rem;
  }
</style>
