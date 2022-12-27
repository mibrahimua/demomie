<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link to="{name: 'home}" class="navbar-brand">
        conduit
      </router-link>
      <ul v-if="!isAuthenticated" class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
              :to="{name: 'home'}"
              class="nav-link"
              active-class="active"
              exact
          >
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
              :to="{name :'login'}"
              class="nav-link"
              active-class="active"
              exact>
            Sign in
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
              :to="{name : 'register'}"
              class="nav-link"
              active-class="actie"
              exact>
            Sign up
          </router-link>
        </li>
      </ul>
      <ul v-else class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
              :to="{name: 'home'}"
              class="nav-link"
              active-class="active"
              exact>
            Home
          </router-link>
          <router-link
              :to="{name : 'article-edit'}">
            New Article
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
              :to="{name : 'settings'}"
              class="nav-link"
              active-class="active"
              exact
          >
            <i class="ion-gear-a"></i>Settings
          </router-link>
        </li>
        <li class="nav-item" v-if="currentUser.username">
          <router-link
              :to="{
            name: 'profile',
            params: {username: currentUser.username}
          }">{{ currentUser.username }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "RwvHeader",
  computed: {
    ...mapGetters("currentUser", "isAuthenticated")
  }
}
</script>

<style scoped>

</style>