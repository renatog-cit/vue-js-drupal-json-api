<template>
  <div class="container">
    <h1 class="mb-0"><font-awesome-icon icon="clipboard-list" /> Products Details</h1>
    <hr>
    <router-link to="/products" class="btn btn-sm btn-info mb-3">
      <font-awesome-icon icon="angle-double-left" />
      Back
    </router-link>

    <div class="row">

      <div class="col-md-3">
        <img :src="baseURL + '/' + product.included[0].attributes.uri.url" alt="" class="img-fluid rounded">
        <ul class="list-group list-group-flush text-dark">
          <li class="list-group-item">Id Product: {{ product.data.id }}</li>
          <li class="list-group-item">Name: {{ product.data.attributes.title }}</li>
          <li class="list-group-item text-success" v-if="product.data.attributes.field_price">Price: {{ product.data.attributes.field_price }}</li>
          <li class="list-group-item text-success" v-else>Price: <span class="text-danger">No price</span> </li>
          <li class="list-group-item" v-if="product.data.attributes.field_phone">Phone: {{ product.data.attributes.field_phone }}</li>
        </ul>
      </div>

      <div class="col-md-9">
        <div class="row">
          <div class="col-4">
            <h3 class="text-dark">{{ product.data.attributes.title }}</h3>
          </div>
          <div class="col-8">
            <span class="float-right">
              <font-awesome-icon icon="home" class="ml-2 text-info icon-info" />
              <font-awesome-icon icon="house-user" class="ml-2 text-info icon-info" />
              <font-awesome-icon icon="laptop-house" class="ml-2 text-info icon-info" />
              <font-awesome-icon icon="chrome" class="ml-2 text-info icon-info" />
              <font-awesome-icon icon="key" class="ml-2 text-info icon-info" />
            </span>
          </div>
        </div>
        <hr>
        <p class="text-secondary" :v-model="removeTag(product.data.attributes.body.value)">{{ desc }}</p>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    props: ["prodNumber"],
    data() {
      return {
        product: [],
        baseURL: process.env.VUE_APP_BASEURL,
        desc: ''
      }
    },
    methods: {
      loadProduct(e) {
        // Get product by URL parameter
        this.$http.get('/jsonapi/node/products/' + e + '/?include=field_picture')
          .then((res) => {
            this.product = res.data
          })
      },
      removeTag(e){
        this.desc = e.replace(/<\/?[^>]+(>|$)/g, "")
      }
    },

    created() {
      // Get product by URL parameter
      this.loadProduct( this.$route.params.id );
      // console.log(this.$route.params.id)
    }
  }
</script>

<style lang="scss">
  @import '../scss/style';
  h1 {
    color: $danger;
    font-weight: 700;
    margin: 30px 0;
    text-transform: uppercase;
  }

  .product-list {
    .card {
      margin-top: 25px;

      .card-body {
        height: 180px;
        overflow-y: auto;

        p {
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          display: -webkit-box;
          font-size: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }
      }
    }
  }

  .icon-info {
    cursor: pointer;
    font-size: 24px;
    position: relative;
    top: 8px;

    &:hover {
      color: $danger !important;
    }
  }
</style>
