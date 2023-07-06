<template>
  <div class="dropdown">
    <div class="dropdown__selected" @click="toggleDropdown">
        <div v-if="!selectedCountry" class="country__seleccionado">
        <span class="select_placeholder">Seleccionar</span>
        <div class="container_CountryBandera">
        <div class="bandera_textoCountry">
          <img :src="BanderasCountrysImg" alt=""  />
        <span>España</span>
      </div>
        <img :src="FlechaSelectCountry" width="20" height="20" alt="">
        </div>
      </div>
      <div v-else class="country__seleccionado">
        <span class="select_placeholder">Seleccionar</span>
        <div class="container_CountryBandera">
        <div class="bandera_textoCountry">
        <img :src="flagUrl" alt="" width="20" height="20" />
        <span>{{ selectedCountry }}</span>
        
      </div>
        <img :src="FlechaSelectCountry" alt="">
        </div>
      </div>
    </div>
    <ul v-show="isOpen" class="dropdown__options">
      <li v-for="country in countries" :key="country.name" @click="selectCountry(country)">
        <img :src="country.flag" width="20" height="20" alt="" />
        {{ country.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import BanderasCountrysImgEspaña from "../assets/profile/banderas/es.png";
import BanderasCountrysImgArg from "../assets/profile/banderas/ar.png"
import BanderasCountrysImgBr from "../assets/profile/banderas/br.png"
import BanderasCountrysImgCl from "../assets/profile/banderas/cl.png"
import BanderasCountrysImgCo from "../assets/profile/banderas/co.png"
import BanderasCountrysImgEc from "../assets/profile/banderas/ec.png"
import BanderasCountrysImgPu from "../assets/profile/banderas/pe.png"
import BanderasCountrysImgVe from "../assets/profile/banderas/ve.png"


import FlechaSelectCountry from '../assets/profile/flecha_select_country.svg';
export default {
  data() {
    return {
      isOpen: false,
      selectedCountry: "",
      flagUrl: "",
      BanderasCountrysImg: BanderasCountrysImgEspaña,
      FlechaSelectCountry: FlechaSelectCountry,
      countries: [
        { name: "España", flag: BanderasCountrysImgEspaña },
        { name: "Argentina", flag: BanderasCountrysImgArg },
        { name: "Brasil", flag: BanderasCountrysImgBr },
        { name: "Chile", flag: BanderasCountrysImgCl },
        { name: "Colombia", flag: BanderasCountrysImgCo },
        { name: "Ecuador", flag: BanderasCountrysImgEc },
        { name: "Perú", flag: BanderasCountrysImgPu },
        { name: "Venezuela", flag: BanderasCountrysImgVe },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectCountry(country) {
      this.selectedCountry = country.name;
      this.flagUrl = country.flag;
      this.isOpen = false;
    },
  },
};
</script>
<style lang="scss" scoped>

.container_CountryBandera{
  display: flex;
    gap: 13px;
}

.bandera_textoCountry{
  display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
.country__seleccionado{
      display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
    align-content: flex-end;
    width: 100%;

    .select_placeholder {
      font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
/* identical to box height */


color: #969696;

    }
}
.dropdown {
  position: relative;
}

.dropdown__selected {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.dropdown__options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  background:#ccc;
  z-index:100;
}

.dropdown__options li {
  padding: 10px;
  cursor: pointer;
}

.dropdown__options li:hover {
  background-color: #eee;
}
</style>
  
