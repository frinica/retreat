<template>
  <div>
    <header>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li v-if="authenticated">
          <nuxt-link to="/profile">Profile</nuxt-link>
        </li>
        <li v-if="!authenticated"><nuxt-link to="/login">Login</nuxt-link></li>
      </ul>
    </header>
    <div>
      <slot />
    </div>
    <footer>
      <h3>Footer</h3>
    </footer>
  </div>
</template>
