<template>
  <div>
      <header>
        <nav class="navbar navbar-toggleable-md navbar-light bg-primary">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">FFinder</a>
          <div class="collapse navbar-collapse" id="navbarText">
          <span class="navbar-nav mr-auto"></span>
            <span class="navbar-text">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/find-friends" class="nav-link">Find Friend</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about-us" class="nav-link">About us</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/contact-us" class="nav-link" >Contact us</router-link>
                </li>
              </ul>
            </span>
          </div>
        </nav>
      </header>
    <section class="container-fluid">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ffinder',
};
</script>

<style>
#ffinder {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
