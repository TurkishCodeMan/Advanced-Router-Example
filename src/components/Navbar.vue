<template>
  <nav class="navbar navbar-expand-lg d-flex flex-column align-items-start">
    <a class="navbar-brand" href="#"><i class="fas fa-crow"></i></a>

    <ul class="navbar-nav mr-auto d-flex flex-column">
      <li class="nav-item active">
        <a class="nav-link" href="#">
          <i class="fas fa-home"></i> <b>Anasayfa</b>
          <span class="sr-only">(current)</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> <b>#</b> <b>Keşfet</b></a>
        <a class="nav-link p-0 m-0 search" href="#"><i class="fas fa-search"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="far fa-bell"></i> <b>Bildirimler</b></a
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
  </nav>
</template>

<script>
export default {};
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
      & > li >  .search {
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
.navbar {
  position: sticky;
  top: 0;

  .navbar-brand {
    font-size: 2.2em;
  }
  .btn-tweet {
    background-color: $blue;
    color: $homeText;
    width: 100%;
    border-radius: 18px;
    padding: 0.7em;
    margin-top: 1rem;
    &:hover {
      background: rgba($blue, 0.9);
    }
  }
}
.navbar-brand {
  margin-left: 0.3rem;
  margin-bottom: 1rem;
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