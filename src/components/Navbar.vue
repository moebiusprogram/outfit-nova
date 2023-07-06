<template>
  <nav :class="{navbar: true, white: white,'shadow':show}" class="container_header--nav" > 
    <!-- :style="'align-items: center;height:'+height+';'" -->
    <div :class="{bg: true, show: show}"></div>
    <button :class="{white: !show && white}" style="width: 54px;">
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 6.96165C0 7.22911 0.102262 7.45723 0.314651 7.66175L6.45034 13.6637C6.61554 13.8368 6.83579 13.9233 7.08751 13.9233C7.59882 13.9233 8 13.53 8 13.0108C8 12.7591 7.89774 12.531 7.72468 12.3579L2.19469 6.96165L7.72468 1.56539C7.89774 1.38446 8 1.15634 8 0.904621C8 0.393314 7.59882 0 7.08751 0C6.83579 0 6.61554 0.086529 6.45034 0.259587L0.314651 6.26155C0.102262 6.46608 0.00786627 6.6942 0 6.96165Z"
          :fill="white && !show ? 'white' : 'black'" />
      </svg>
      <!-- Atras -->
    </button>
    <span class="navbar-title">
      <div class="" v-if="show && !showLogo"> {{ name }}</div> 
      <div class="logo_product" v-if="show && showLogo"> 
        <img :src="imgLogo" alt="" class="rounded-circle" style="max-width:36px;max-height:36px;"> </div> 
    </span>
    <div>
      <div  v-if="show && showLogo && accion=='comprar'">
       <button type="button" class="shoppingBtn" style=""> 
        <img :src="link" alt="" style="width:12px; height:12px">
        Comprar </button>
      </div>
     <ul v-if="!show" class="p-0 m-0">
      <li>
        <NavbarButton v-if="button_right=='liked'" class=" justify-content-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 13.9999V16.9999H22V18.9999H18.999L19 21.9999H17L16.999 18.9999H14V16.9999H17V13.9999H19ZM20.243 4.75694C21.3261 5.84008 21.9539 7.29643 21.9978 8.82754C22.0417 10.3586 21.4983 11.8486 20.479 12.9919L19.059 11.5739C20.39 10.0499 20.32 7.65994 18.827 6.16994C18.1043 5.44873 17.1331 5.03114 16.1124 5.0027C15.0918 4.97425 14.0989 5.3371 13.337 6.01694L12.002 7.21494L10.666 6.01794C9.90409 5.33661 8.91015 4.97291 7.8884 5.00155C6.86664 5.03019 5.89464 5.44899 5.17205 6.17194C4.4563 6.88764 4.03851 7.84808 4.00288 8.85964C3.96725 9.8712 4.31643 10.8587 4.98005 11.6229L13.412 20.0689L12 21.4849L3.52005 12.9929C2.4993 11.8489 1.95525 10.3575 1.99958 8.82492C2.04391 7.29235 2.67327 5.83489 3.75844 4.75177C4.84361 3.66865 6.30225 3.04205 7.83491 3.00061C9.36756 2.95917 10.8579 3.50604 12 4.52894C13.1426 3.50614 14.6335 2.95981 16.1664 3.00221C17.6993 3.04462 19.1578 3.67254 20.242 4.75694H20.243Z"
              :fill="white && !show ? 'white' : 'black'" />
          </svg>
     

        </NavbarButton>
        <NavbarButton v-if="button_right=='saved'" class=" justify-content-center">
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path :stroke="white && !show ? 'white' : 'black'"   d="M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NavbarButton>
      </li> 
    </ul>
    </div>

  </nav>
</template>

<script>
import NavbarButton from './NavbarButton.vue'

import link from "../assets/single-product/gotbtn.svg";
export default {
  setup () {
    let show = true
  },
  data() {
    return {
      link: link
    }
  },
  components: {
    NavbarButton,
  },
  props: ['secondary', 'show', 'name', 'white','showLogo','imgLogo','accion','button_right','height'],
  mounted () {
    console.log(this.button_right)
  }
};

</script>
<style lang="scss" scoped>

.logo_product{
margin-left:4rem;
}
.shoppingBtn{
  width: 85px;
height: 34px;
left: 293px;
top: 13px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 4px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
/* identical to box height */


color: #FFFFFF;
background: #000000;
border-radius: 4px;
}

.container_header--nav{
  height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    background: #FFFFFF;
    border-bottom: 1px solid #ededed;
}
</style>
