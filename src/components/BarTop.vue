<template>
  <b-navbar toggleable="lg" type="dark" variant="info fixed-top">
    <b-navbar-brand href="https://br.ciandt.com/" target="_blank">
      <img src="@/assets/cit.png" class="img-fluid logo-cit mr-2" alt="Logo CI&T">
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <router-link :to="{ name: 'home' }" class="nav-link"> Home  <span class="sr-only">(current)</span></router-link>
        <router-link :to="{ name: 'products' }" class="nav-link"> Products</router-link>
        <router-link :to="{ name: 'developers' }" class="nav-link"> Developers</router-link>
        <router-link :to="{ name: 'about' }" class="nav-link"> About</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  @import '../scss/style';
  .logo-cit {
    width: 100px;
  }

  .navbar {
    box-shadow: 0px 0px 10px 0px $dark, inset 160px -25px 0px -25px white;

    .nav-link {
      color: white !important;

      @include media-breakpoint-down(md) {
        color: $info !important;
      }

      &:hover {
        color: rgba(255, 255, 255, 0.7) !important;

        @include media-breakpoint-down(md) {
          color: $danger !important;
        }
      }
    }

    button {
      &:focus {
        outline: none;
      }

      &:hover {
        outline: 1px dotted;
      }
    }

    ul a {
      color: $info;

      @include media-breakpoint-down(md) {
        color: $info !important;
        &:hover {
          box-shadow: -11px 0px 0px 0px white, -16px 0px 0px 0px $danger;
          margin-left: 0px;
        }
      }
    }
  }
</style>
