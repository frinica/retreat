<template>
  <div>
    <header>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li>
          <nuxt-link to="/profile">Profile</nuxt-link>
        </li>
        <li><nuxt-link to="/login">Login</nuxt-link></li>
      </ul>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <h3>Footer</h3>
    </footer>
  </div>
</template>
