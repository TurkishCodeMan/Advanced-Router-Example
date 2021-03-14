<template>
  <nav class="navbar navbar-expand-lg d-flex flex-column align-items-start p-0 m-0">
    <button
      class="navbar-toggler m-0 p-0"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click.prevent="navbarToggle = !navbarToggle"
    >
      <a class="navbar-brand m-0" href="#"><i class="fas fa-crow mr-2"></i></a>
    </button>
    <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
      <ul class="navbar-nav w-100 d-flex flex-row justify-content-center align-items-center">
        <li class="nav-item active">
          <router-link class="nav-link" tag="a" :to="{ name: 'home' }">
            <i class="fas fa-home"></i> <b>Anasayfa</b>
            <span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> <b>#</b> <b>Keşfet</b></a>
          <a class="nav-link p-0 m-0 search" href="#"
            ><i class="fas fa-search"></i
          ></a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" tag="a" to="/admin">
            <i class="fas fa-home"></i> <b>Bildirimler</b>
            <span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="far fa-envelope-open"></i> <b>Mesajlar</b></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fas fa-location-arrow"></i> <b>Yer İşaretleri</b></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="far fa-user"></i> <b>Profil</b></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"
            ><i class="far fa-comment-dots"></i> <b>Daha Fazla</b></a
          >
        </li>
        <li class="nav-item btn-item">
          <a class="btn btn-tweet" href="#"
            ><i class="fab fa-pied-piper"></i><b>Tweetle</b></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbarToggle: false,
    };
  },
  watch: {
    navbarToggle() {
      return this.$emit("toggle", this.navbarToggle);
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/scss/config/colors.scss";
@import "@/assets/scss/global/mixins.scss";
@include mq("tablet") {
  .navbar {
    display: flex;
    align-items: flex-start;

    .navbar-nav {
      & > li > a > b {
        display: none;
      }
      & > li > .search {
        display: block;
      }
      & > li {
        text-align: center;

        padding: 0.2em;
      }

      & .btn-tweet > i {
        display: block;
      }
    }
  }
}

.navbar-nav {
  .nav-item {
    padding: 1rem;
  }
  & > li > a > i {
    font-size: 25px;
  }
  & > li > a > b {
    display: none;
  }
}

.navbar {
  position: sticky;
  top: 0;

  .navbar-brand {
    font-size: 2.2em;
  }
}
.navbar-toggler {
  .navbar-brand {
    i {
      font-size: 30px;
    }
  }
}

.navbar-nav {
  font-size: 20px;
  & > li > .search {
    display: none;
  }
  & > li {
    padding: 0.2rem;
    margin-bottom: 0.5rem;
    &:hover:not(:last-child) {
      background: #162d40;
      border-radius: 20px;
    }
  }
  & .btn-tweet > i {
    display: none;
  }
}
</style>