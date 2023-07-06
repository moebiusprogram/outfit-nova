<template>
  <div class="brand-banner-wrapper">
    <div >
    </div>
    <figure class="brand-banner-logo" :style=" {
      transform: `translate(${xPos}px, -${yPos}px) scale(${scale})`,
    'box-shadow' : shadow ? '' : 'none', 
    borderRadius: `${rad}px` }" >
      <img src="../assets/logos/nike.svg" alt="nike" style="height:32px">
    </figure>
    <div class="placeholder" style="width:150px; height: 1px; background: white"></div>
    <div class="brand-banner-title">
      <div v-if="title=='marca'">Marca <span class="text-capitalize">{{ name }}</span></div>
      <div v-if="title=='tienda'">Tienda <span class="text-capitalize">{{ name }}</span></div>
      <div> <strong>9.884.733 followers</strong></div>
    </div>
    <div class="brand-banner-follow">
      <span>
        <img src="../assets/question-circle.svg" alt="helper icon" class="helper-icon" style="height:13px;position:relative;right: -55px; top: -12px;">
      </span>
      <button>Follow</button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'BrandBanner',
  props: {
    name: {
      type: String
    },
    title: {
      type: String
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler);
  },
  methods: {
    scrollHandler() {
      this.lastKnownScrollPosition = window.scrollY;

      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.calculateOffset(this.lastKnownScrollPosition);
          this.ticking = false;
        });

        this.ticking = true;
      }
    },
    calculateOffset(scrollPos) {
      const width = window.innerWidth / 2 / 2;
      const maxHeigth = 180 - 140;
      if (scrollPos > 0 && scrollPos < maxHeigth) {
        this.yPos = scrollPos * 1.7 ;
        this.xPos = scrollPos * width * 1.3/ maxHeigth;
        this.scale = 1 - scrollPos * 0.5 / maxHeigth;
        this.rad = 0 + scrollPos / 2
        this.shadow = true
      } else if (scrollPos === 0) {
        this.yPos = 0;
        this.xPos = 0;
        this.rad = 2;
        this.scale = 1;
      } else {
        this.yPos = maxHeigth + 25;
        this.xPos = maxHeigth * width * 1.25/ maxHeigth;
        this.scale = 1 - maxHeigth * 0.5 / maxHeigth;
        this.shadow = false;
        this.rad = maxHeigth / 2
      }

      if (scrollPos > maxHeigth) {
        this.showNav = true
      } else {
        this.showNav = false;
      }

      if (scrollPos > maxHeigth + 74) {
        this.showBrandNav = true;
      } else {
        this.showBrandNav = false;
      }
    }
  },
  data() {
    return {
      rating: 9.2,
      brandName: 'Tienda Amazon',
      lastKnownScrollPosition: null,
      views: 795,
      ticking: false,
      yPos: 0,
      xPos: 0,
      scale: 1,
      rad: 0,
      shadow: true,
      showNav: false,
      showBrandNav: false,
    }
  }
}
</script>

<style>
.brand-banner-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  height: 104px;
  /* border-bottom: 1px solid #D7D7D7; */
}

.brand-banner-logo {
  position: fixed;
  padding: 2px;
  border: 1px solid #D7D7D7;
  background-color: #E8E8E8;
  width: 118px;
  height: 80px;
  align-content: center;
  flex-wrap: wrap;
  z-index: 100;
  display: flex;
  justify-content: center;
}

.brand-banner-logo img {
  height: 65%;
}

.brand-banner-title {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  margin-left: 32px;
  font-weight: 500;
  font-size: 14px;
}

.brand-banner-follow {
  display: flex;
  align-content: center;
  flex-wrap: wrap;

}

.brand-banner-follow button {
  font-weight: 600;
  font-size: 14px;
  color: #FFF;
  background: #000;
  border: none;
  width: 68px;
  height: 28px;
  margin-top: -12px;
}
</style>