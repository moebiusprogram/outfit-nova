<template>
  <nav class=" " :class="{navbar: true, white: white,'shadow-s':shadow}" style="min-height:40px">
    <div :class="{bg: true, show: show}" :style="style"></div>
    
      <router-link
      :to="route_to" class="router-link align-items-center d-flex" :class="{white: !show && white}" style="flex:1">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 6.96165C0 7.22911 0.102262 7.45723 0.314651 7.66175L6.45034 13.6637C6.61554 13.8368 6.83579 13.9233 7.08751 13.9233C7.59882 13.9233 8 13.53 8 13.0108C8 12.7591 7.89774 12.531 7.72468 12.3579L2.19469 6.96165L7.72468 1.56539C7.89774 1.38446 8 1.15634 8 0.904621C8 0.393314 7.59882 0 7.08751 0C6.83579 0 6.61554 0.086529 6.45034 0.259587L0.314651 6.26155C0.102262 6.46608 0.00786627 6.6942 0 6.96165Z"
            :fill="white && !show ? 'white' : 'black'" />
        </svg>
       <!-- <span style="font-size: 12px;margin-left:8px;"> {{show_name_back}}</span> -->
      </router-link>
      <div><span class="navbar-title clip-text" v-if="show">{{ name }}</span></div>
      <div class="navbar-tools">
      <NavbarButton v-if="search">
        <img src="../assets/search.svg" alt="" class="search">
      </NavbarButton>
      <NavbarButton v-if="tutorial">
        <img src="../assets/tutorial.svg" alt="" class="tutorial">

      </NavbarButton>
      <NavbarButton v-if="settings">
        <img src="../assets/settings-thin.svg" alt=""  class="settings">

      </NavbarButton>
      <NavbarButton v-if="whatsApp">
        <img src="../assets/wsp.svg" alt=""  class="whatsapp">

      </NavbarButton>
      <NavbarButton v-if="rating">
        
        <span class="rating">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M13.631 5.11934C13.5891 4.99592 13.512 4.88747 13.4092 4.80738C13.3063 4.72729 13.1823 4.67908 13.0524 4.66868L9.25169 4.36668L7.60703 0.72601C7.55465 0.608751 7.46945 0.509157 7.36172 0.439248C7.25399 0.369339 7.12833 0.332102 6.99991 0.332031C6.87148 0.331961 6.74578 0.36906 6.63798 0.438851C6.53017 0.508642 6.44487 0.608142 6.39236 0.725343L4.74769 4.36668L0.947025 4.66868C0.819329 4.67879 0.697251 4.72548 0.595395 4.80316C0.49354 4.88084 0.416221 4.98622 0.372687 5.1067C0.329154 5.22717 0.321251 5.35763 0.349922 5.48248C0.378593 5.60733 0.442626 5.72127 0.534359 5.81068L3.34303 8.54868L2.34969 12.85C2.31953 12.9802 2.3292 13.1165 2.37744 13.2411C2.42568 13.3657 2.51027 13.473 2.62023 13.549C2.73019 13.6249 2.86044 13.6661 2.99408 13.6671C3.12772 13.6681 3.25859 13.629 3.36969 13.5547L6.99969 11.1347L10.6297 13.5547C10.7432 13.6301 10.8772 13.6689 11.0134 13.6659C11.1497 13.6629 11.2818 13.6183 11.392 13.538C11.5021 13.4577 11.585 13.3456 11.6295 13.2167C11.6741 13.0879 11.6781 12.9485 11.641 12.8173L10.4217 8.55068L13.4457 5.82934C13.6437 5.65068 13.7164 5.37201 13.631 5.11934Z"
            fill="#51AB6A" />
          </svg>
          9.2
        </span>
      </NavbarButton>
      <NavbarButton v-if="visit">
         <span class="visit">
           Visitar tienda
           <img src="../assets/share.svg" alt=""  class="visit-icon">
         </span>
       </NavbarButton>
    </div>
  </nav>
</template>

<script>
import NavbarButton from './NavbarButton.vue'

export default {
  components: {
    NavbarButton,
  },
  props: ['show', 'name', 'white','route_to','search','shadow', 'show_name_back', 'tutorial', 'settings','whatsApp', 'rating', 'visit'],
  mounted () {

  }
};

</script>
<style scoped>
.search {
  width: 20px;

}
.tutorial{
  width: 70px;
  aspect-ratio: 1/1;
}
.settings{
  width: 20px;
  aspect-ratio: 1/1;
}

.whatsapp {
  width: 30px;
  aspect-ratio: 1/1;
}

.rating {
  display: flex;
  align-items: center;
  gap: 3px;
  color: #51ab6a;
  background-color: #acecba;
  padding: 6px;
  border-radius: 4px;
  font-weight: 800;
  font-size: 10px;
  line-height: 12px;
}
.visit {
  display: flex;
  align-items: center;
  gap: 3px;
  padding:6px 0 6px 9px;
  border: 1px solid #D7D7D7;
  width: 85px;
  border-radius: 4px;
  font-weight: 400;
  font-size: 8px;
  line-height: 8px;
}

.visit-icon {
  height: 10px;
}

.shadow-s {
  box-shadow: 1px 1px rgb(0 0 0 / 8%)
}
</style>