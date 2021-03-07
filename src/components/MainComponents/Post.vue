<template>
  <div class="post-wrapper">
    <div class="card post-card">
      <div class="card-content">
        <div class="avatar-area d-flex">
          <div class="avatar-tab mr-2">
            <img
              src="@/assets/image.jpg"
              class="rounded-circle"
              alt=""
              width="60"
            />
          </div>
          <div class="post-detail">
            <div class="post-header">
              <span><b>John Doe</b></span>
              <span class="text-muted mr-2"> @johndoe</span>
              <span class="text-muted">8d</span>
            </div>
            <div class="post-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate earum optio iusto. Hic quaerat provident atque esse,
                totam reprehenderit ipsam officiis illum sint! Illo tempora
                veritatis blanditiis ipsam omnis aut?
              </p>
            </div>
            <div class="state-detail d-flex justify-content-between">
              <i class="far fa-comments"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="fas fa-upload"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/scss/config/colors.scss";
.post-card {
    border: 1px solid $borderCard;
    padding: 15px;
  .card-content {
    .post-detail {
      .state-detail {
        & > i {
          font-size: 18px;
          color: $darkColor;
          padding: 7px;
          &:hover{
          
              border-radius: 50%;
              background: #263637;
              color:#0b7937 ;
          }
        }
      }
    }
  }
}
</style>