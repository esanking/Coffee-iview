<template>
  <div class="wrap">
    <Carousel
      autoplay="true"
      autoplaySpeed="2000"
      v-model="value2"
      loop
      height="700px"
    >
      <CarouselItem>
        <div class="demo-carousel HomeImg"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel HomeImg2"></div>
      </CarouselItem>
    </Carousel>
    <Row type="flex" class="column" style="width: 100%; margin-top: 10px">
      <Row type="flex" justify="center" class="article">
        <img style="width: 90%" src="../img/coffee.jpg"
      /></Row>
      <Row type="flex" justify="center" align="middle" class="article">
        <div style="width: 80%">
          <h2 style="text-align: center">咖啡的好處</h2>
          <p>
            在每天適量喝咖啡的情況下，到底有什麼健康好處？咖啡含有千種以上複雜內含物，除了咖啡因外，其他如酚類化合物，包含綠原酸、咖啡酸和內酯類，
            二萜包含咖啡醇和咖啡豆醇，菸鹼酸及其前趨物葫蘆巴鹼等。
            其中咖啡因、綠原酸及咖啡豆醇，可以對抗部份疾病的慢性發炎因子，延緩老化，因此，除了上班族，也可以看到不少老年人也慢慢嘗試喝咖啡。
            而咖啡酸具有抑制細胞分裂、加速癌細胞死亡的作用，以及二萜之咖啡醇和咖啡豆醇，也有抗癌特性。
          </p>
        </div>
      </Row>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2: 0,
    };
  },
};
</script>

<style lang="scss">
.wrap {
  width: 100%;
}
.HomeImg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("../img/coffee2.jpg");
}
.HomeImg2 {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("../img/coffee1.jpg");
}
.article {
  width: 50%;
  @media (max-width: 767px) {
    width: 90%;
  }
}
@media (max-width: 767px) {
  .column {
    flex-direction: column;
    align-items: center;
  }
}
</style>
