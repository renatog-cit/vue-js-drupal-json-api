<template>
  <div class="products container">
    <h1 class="mb-0"><font-awesome-icon icon="home" /> Products</h1>
    <hr>
    <div class="row product-list">
      <div class="col-lg-3 col-md-4 col-sm-6" v-for="(product, id) in productsList.data" :key="id">
      <card-product
        :idProduct="product.id"
        :image="productsList.included[id].attributes.uri.url"
        :title="product.attributes.title"
        :description="product.attributes.body.value"
      />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productsList: []
    }
  },
  methods: {
    loadProduct() {
      this.$http.get('/jsonapi/node/products/?include=field_picture')
        .then((res) => {
          this.productsList = res.data
        })
    }
  },

  created() {
    this.loadProduct();
  }
}
</script>

<style lang="scss">
  @import '../scss/style';
  h1 {
    font-weight: 700;
    margin: 30px 0;
    text-align: left;
    text-transform: uppercase;
    color: $danger;
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

</style>
