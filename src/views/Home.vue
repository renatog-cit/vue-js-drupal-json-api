<template>
  <div class="home">
    <h1>Decoupled <i class="fab fa-drupal"></i> + <i class="fab fa-vuejs"></i></h1>
    <p class="text-dark">This project demonstrates how to use Drupal Decoupled with front-end applications.</p>
    <h3 class="text-dark">Used technologies</h3>

    <div class="col-md-2 mt-3">
      <ul v-for="(requirement, id) in requirementsList.data" :key="id">
        <li class="d-flex"><i class="fas fa-caret-right mr-2 text-danger"></i> {{requirement.attributes.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        requirementsList: [],
      }
    },
    methods: {
      loadRequirements() {
        this.$http.get('/jsonapi/taxonomy_term/requirements')
          .then((res) => {
            this.requirementsList = res.data
          })
      }
    },
    created() {
      this.loadRequirements()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../scss/partials/variables';

  li {
    color: $info;
    cursor: pointer;

    &:hover {
      color: $danger;
    }
  }
  .fa-caret-right {
    position: relative;
    top: 2px;
  }
</style>