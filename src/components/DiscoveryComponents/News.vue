<template>
  <div class="row">
    <div class="col-12 mt-3 pt-2">
      <div class="d-flex flex-column p-2">
        <div class="news-head d-flex text-align-center p-1">
          <h6 class="home-text mr-2"><b>İlginizi Çekebilecek Gündemler</b></h6>
          <i class="fas fa-cog"></i>
        </div>

        <div class="my-news-card">
          <div class="head">
            <span class="text-muted">Türkiye Konumunda Gündemde</span>
          </div>
          <div class="content">
            <b class="home-text">#BinanceCoin</b>
          </div>
          <div class="foot">
            <span class="text-muted"> 1.109 Tweet</span>
          </div>
          <div class="more-icon">
            <i class="fas fa-ellipsis-h text-muted"></i>
          </div>
        </div>
        <div class="my-news-card">
          <div class="head">
            <span class="text-muted">Türkiye Konumunda Gündemde</span>
          </div>
          <div class="content">
            <b class="home-text">#BinanceCoin</b>
          </div>
          <div class="foot">
            <span class="text-muted"> 1.109 Tweet</span>
          </div>
          <div class="more-icon">
            <i class="fas fa-ellipsis-h text-muted"></i>
          </div>
        </div>
        <div class="my-news-card">
          <div class="head">
            <span class="text-muted">Türkiye Konumunda Gündemde</span>
          </div>
          <div class="content">
            <b class="home-text">#BinanceCoin</b>
          </div>
          <div class="foot">
            <span class="text-muted"> 1.109 Tweet</span>
          </div>
          <div class="more-icon">
            <i class="fas fa-ellipsis-h text-muted"></i>
          </div>
        </div>
        <div class="my-news-card">
          <div class="head">
            <span class="text-muted">Türkiye Konumunda Gündemde</span>
          </div>
          <div class="content">
            <b class="home-text">#BinanceCoin</b>
          </div>
          <div class="foot">
            <span class="text-muted"> 1.109 Tweet</span>
          </div>
          <div class="more-icon">
            <i class="fas fa-ellipsis-h text-muted"></i>
          </div>
        </div>
        <div class="my-news-card">
          <div class="head">
            <span class="text-muted">Türkiye Konumunda Gündemde</span>
          </div>
          <div class="content">
            <b class="home-text">#BinanceCoin</b>
          </div>
          <div class="foot">
            <span class="text-muted"> 1.109 Tweet</span>
          </div>
          <div class="more-icon">
            <i class="fas fa-ellipsis-h text-muted"></i>
          </div>
        </div>
        <div class="my-news-card">
          <div class="head">
            <span class="text-muted">Türkiye Konumunda Gündemde</span>
          </div>
          <div class="content">
            <b class="home-text">#BinanceCoin</b>
          </div>
          <div class="foot">
            <span class="text-muted"> 1.109 Tweet</span>
          </div>
          <div class="more-icon">
            <i class="fas fa-ellipsis-h text-muted"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
@import "@/assets/scss/config/colors.scss";



.container {
  max-height: 600px;

  .col-12 {
    background: $bgCard;
    border-radius: 15px;
    min-height: 400px;
    padding: 0;

    .news-head {
      i {
        color: #1c93de;
      }
    }
    .my-news-card {
      padding: 8px 8px 8px 8px;
      border-top: 0.8px solid $borderCard;
      border-bottom: 0.8px solid $borderCard;
      position: relative;
      .head {
        font-size: 12px;
      }
      .foot {
        font-size: 12px;
      }
      .more-icon {
        position: absolute;
        right: 0;
        top: 0;
        margin-right: 12px;
        margin-top: 7px;
      }
      &:hover {
        background: #15202b;
      }
    }
  }
}
</style>