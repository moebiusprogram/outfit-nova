<template>
<section class="shipping bg-white">
  <div class="shipping-info">
    Por:
    <ImgHexa :img="shipper" size="42px"></ImgHexa>  
    ofertas
  </div>
  <div>
    <span>
      <span class="pe-2 shipping-envio">
        Envío
      </span>
        <button class="btn btn-warning px-2 py-2 " style="background:#FAE7CB; border:none;">
          <div>
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  stroke="#E4B408"  d="M8.33317 12.1666H13.3332V2.99998C13.3332 2.55795 13.1576 2.13403 12.845 1.82147C12.5325 1.50891 12.1085 1.33331 11.6665 1.33331H3.33317C2.89114 1.33331 2.46722 1.50891 2.15466 1.82147C1.8421 2.13403 1.6665 2.55795 1.6665 2.99998V11.3333C1.6665 11.5543 1.7543 11.7663 1.91058 11.9226C2.06686 12.0788 2.27882 12.1666 2.49984 12.1666H3.33317M18.3332 9.66665H16.6665M18.3332 11.3333V7.99998C18.3332 7.11592 17.982 6.26808 17.3569 5.64296C16.7317 5.01784 15.8839 4.66665 14.9998 4.66665H13.3332V12.1666H17.4998C17.7209 12.1666 17.9328 12.0788 18.0891 11.9226C18.2454 11.7663 18.3332 11.5543 18.3332 11.3333ZM12.4998 12.1666C12.4998 12.8297 12.7632 13.4656 13.2321 13.9344C13.7009 14.4033 14.3368 14.6666 14.9998 14.6666C15.6629 14.6666 16.2988 14.4033 16.7676 13.9344C17.2364 13.4656 17.4998 12.8297 17.4998 12.1666H12.4998Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path  stroke="#E4B408"  d="M5.83301 14.6666C7.21372 14.6666 8.33301 13.5473 8.33301 12.1666C8.33301 10.7859 7.21372 9.66663 5.83301 9.66663C4.4523 9.66663 3.33301 10.7859 3.33301 12.1666C3.33301 13.5473 4.4523 14.6666 5.83301 14.6666Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<span class="shipping-amazon">Amazon</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path   d="M6 12L10 8L6 4" stroke="#E4B408" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
</div>
        <!-- {{ price }}€
        <img :src="country.img" :alt="country.name">
        {{ country.name }} -->
        </button>
      </span>
    </div>
  </section>
</template>
<script>
import shipper from '../assets/images/avatar@2x.png';
import hexagon from '../assets/hexagon-model-hex.png';
import ImgHexa from '../components/ImgHexa.vue';

export default {
  components: {
    ImgHexa,
  },
  data() {
    return { 
      shipper : shipper,
      hexagon : hexagon
    }
  },
  props: ['price', 'country', "person"],
}
</script>
<style lang="scss" scoped>
.shipping {
  background: #F5F5F5;
  border: none !important;
  
  .shipping-info {
    font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
/* identical to box height */


color: #616364;
  }
  
  .shipping-envio {
    font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
/* identical to box height */


color: #616364;
  }

  .shipping-amazon {
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    color:#E4B408;
    line-height: 13px;
  }
}
</style>