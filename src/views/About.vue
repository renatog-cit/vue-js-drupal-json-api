<template>
  <div class="about">
    <h1 class="mb-0"><font-awesome-icon icon="users" /> Team</h1>
    <hr>
    <div class="row" >
      <div class="col-12" >
        <ul v-for="(user) in usersList.data" :key="user.uid">
          <li class="text-center mt-3 text-dark d-flex">
            <font-awesome-icon icon="grin-beam" class="mr-2 smile text-danger" />
            {{user.attributes.name}}
          </li>
        </ul>
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
        this.$http.get('/jsonapi/user/user/?include=user_picture')
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

  li {
    cursor: pointer;
    font-size: 1.4rem;
    transition: all .3s ease;

    .smile {
      position: relative;
      top: 5px;
    }

    &:hover {
      color: $danger !important;
    }
  }

</style>
