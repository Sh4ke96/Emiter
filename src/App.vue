<template>
  <div id="app">
    <router-view />
    <div class="bottom__bar">
      <div class="bottom__container">
        <div>
          <router-link to="/">
            <i class="bottom__icon fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
          </router-link>
        </div>
        <div>
          <router-link to="/todo">
            <i class="bottom__icon fa fa-plus" aria-hidden="true" />
            <span>Todo</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./scss/app.scss"></style>