<template>
  <div class="row">
    <div class="search-card">
      <div class="card-header header-home">
        <div
          class="header-info d-flex justify-content-between align-items-center"
        >
          <h5 class="home-page"><b>Anasayfa</b></h5>
          <i class="fab fa-galactic-republic"></i>
        </div>
      </div>
      <div class="avatar-tab">
        <div class="what-say d-flex flex-column">
          <div class="avatar-text d-flex">
            <img
              src="@/assets/image.jpg"
              class="rounded-circle"
              alt=""
              width="60"
            />
            <input
              type="text"
              placeholder="Neler Oluyor ?"
              class="w-100 input-area"
            />
          </div>
          <div class="show-info d-flex align-items-center">
            <i class="fas fa-globe-asia mb-2 mr-2"></i>
            <p><b>Herkes Yanıtlayabilir</b></p>
          </div>
        </div>

        <div
          class="folder-area d-flex justify-content-between align-items-center"
        >
          <div class="icon-box">
            <i class="fas fa-image"></i>
            <i class="fas fa-gift"></i>
            <i class="fas fa-shopping-basket"></i>
            <i class="fas fa-smile"></i>
            <i class="fas fa-stopwatch"></i>
          </div>
          <div class="btn-group">
            <a class="btn btn-tweet rounded-5" href="#"><b>Tweetle</b></a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
 
};
</script>

<style lang="scss">
@import "@/assets/scss/config/colors.scss";
.search-card {
  background: transparent;

  .header-home {
    position: sticky;
    top: 0;
    background:$bgMain;
 
    z-index: 10;
    border:1px solid $borderCard;
    margin-bottom: 10px;
    i {
      font-size: 22px;
      color: $blueText;
    }
  }
  .what-say {
    .show-info {
      visibility: hidden;
      color: $blueText;

      i {
        font-size: 19px;
      }
    }
  }
  .folder-area {
    .icon-box {
      & > i {
        padding: 5px;
        font-size: 24px;
        color: $blueText;
      }
    }
  }

  .input-area {
    background: transparent;
    border: none;
    color: white;
    font-size: 18px;
    margin-left: 0.4rem;

    ::placeholder {
      color: $darkColor;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>