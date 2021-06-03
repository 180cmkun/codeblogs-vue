<template>
  <div class="blog-header">
    <header id="site-header">
      <div class="row">
        <div class="col-md-4 col-sm-5 col-xs-8">
          <div class="logo">
            <h1>
              <a href="#"><b>Code</b> &amp; Blogs</a>
            </h1>
          </div>
        </div>
        <!-- col-md-4 -->
        <div class="col-md-8 col-sm-7 col-xs-4">
          <nav class="main-nav" role="navigation">
            <div class="navbar-header">
              <button type="button" id="trigger-overlay" class="navbar-toggle">
                <span class="ion-navicon"></span>
              </button>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li class="cl-effect-11">
                  <router-link to="/" data-hover="Home">Home</router-link>
                </li>
                <li class="cl-effect-11">
                  <router-link to="/details" data-hover="Blog">Blog</router-link>
                </li>
                <li class="cl-effect-11">
                  <router-link to="/about" data-hover="About">About</router-link>
                </li>
                <li class="cl-effect-11">
                  <router-link to="/contact" data-hover="Contact">Contact</router-link>
                </li>
              </ul>
            </div>
            <!-- /.navbar-collapse -->
          </nav>
          <div id="header-search-box">
            <a id="search-menu" href="#"
              ><span id="search-icon" class="ion-ios-search-strong"></span
            ></a>
            <div id="search-form" class="search-form">
              <form role="search" method="get" id="searchform" action="#">
                <input type="search" placeholder="Search" required />
                <button type="submit">
                  <span class="ion-ios-search-strong"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <!-- col-md-8 -->
      </div>
    </header>
    <div class="overlay overlay-hugeinc" id="menuModal">
      <button type="button" class="overlay-close">
        <span class="ion-ios-close-empty"></span>
      </button>
      <nav>
        <ul>
          <li>
            <router-link to="/" data-hover="Home">Home</router-link>
          </li>
          <li>
            <router-link to="/details" data-hover="Blog">Blog</router-link>
          </li>
          <li>
            <router-link to="/about" data-hover="About">About</router-link>
          </li>
          <li>
            <router-link to="/contact" data-hover="Contact">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import "bootstrap3/dist/css/bootstrap.css";
import "ionicons/css/ionicons.css";
import "../../public/blog/css/custom.css";

import "bootstrap3/dist/js/bootstrap.js";
import "../../public/blog/js/script.js";
export default {
  name: "blog-header",
};
</script>

<style>
#menuModal {
  z-index: 999;
}
</style>