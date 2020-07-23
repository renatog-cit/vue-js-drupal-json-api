<template>
  <div class="card">
    <img :src="imageURL" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title text-dark">{{ title }}</h5>
      <p class="card-text text-secondary">{{ desc }}</p>
    </div>
    <div class="card-footer">
      <!-- <router-link :to="getUrlId()" class="btn btn-info btn-sm float-right"> -->
      <router-link :to="getUrlId()" class="btn btn-info btn-sm float-right">
        See more <font-awesome-icon icon="angle-double-right" />
      </router-link>
      <!-- <router-link :to="{ name: 'productinfo', params: { prodNumber: idProduct } }" class="btn btn-warning btn-sm float-right">
        See more <font-awesome-icon icon="angle-double-right" />
      </router-link> -->
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      idProduct: {
        type: String
      },
      image: {
        type: String,
        default: 'https://fcbb.com/images/no-available-image.jpg'
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        default: 'No text'
      }
    },
    data() {
      return {
        // Todo: Create one file for config. E.g: config.js.
        baseURL: process.env.VUE_APP_BASEURL,
        desc: this.description.replace(/<\/?[^>]+(>|$)/g, "")
      }
    },
    methods: {
      // Get parameter with id URL
      getUrlId() {
        return '/productinfo/' + this.idProduct
      }
    },
    computed: {
      imageURL() {
        return this.baseURL + this.image
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    transition: all .5s ease;

    &:hover {
      box-shadow: 0px 0px 10px 0px #8f8f8f;
    }  }
</style>
