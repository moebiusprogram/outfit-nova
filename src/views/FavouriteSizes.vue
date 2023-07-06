<template>
   <section class="bg-white " style="height:100vh">
    <NavbarSearch :route_to="'/profile'" :show="true" :white="true" name="Tus tallas favoritas" :shadow="true" :search="true"/>
    <section class="resaltar" style="margin-top: 60px; padding: 0px 12px;">
      <h2 style="font-size:18px;display: inline-block;">Resaltar mis tallas en los listados</h2>
      <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>
      <p style="font-size: 12px;color: #878787; padding-right:30px;">Durante la compra, filtrar automáticamente por el buscador de tallas</p>
      <h3 style="font-weight: 500; font-size: 14px; padding-right:30px;">En los listados aparecerán las primeras resaltadas de color verde.</h3>
      <img src="../assets/helper-img.png" alt="How it looks when you hit the button" style="margin: 0 auto; display:block; width: 200px; height: auto;">
      <p style="text-align:center;font-size: 14px;color: #323232;">Puedes agregar más de 1 talla por categoría</p>
    </section>
    <section>
      <SizeSelector v-for="(clothe, i) in clothes" :key="i" class="size-selector" :name="clothe.name" :selectedSizes="clothe.selectedSizes"/>
    </section>
  </section>
  <footer style="height: 60px;">
    <FooterNavbar/>
  </footer>
</template>
<script>
import NavbarSearch from '../components/NavbarSearch.vue';
import SizeSelector from '../components/SizeSelector.vue';
import FooterNavbar from '../components/FooterNavbar.vue'


export default {
  name: 'FavouriteSizes',
  components: {
    SizeSelector,
    NavbarSearch,
    FooterNavbar
    },
    data () {
      return {
        clothes: [
            {
            name: 'calzado',
            selectedSizes: []
          },
          {
            name: 'camiseta',
            selectedSizes: ['M']
          },
          {
            name: 'pantalones',
            selectedSizes: ['38', '40']
          }
        ]
      }
    }
  }

</script>
<style scoped>


.switch {
  position: relative;
  width: 34px;
  height: 21px;
  float: right;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 2px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #03E5B6;
}

input:focus + .slider {
  box-shadow: 0 0 1px #03E5B6;
}

input:checked + .slider:before {
  -webkit-transform: translateX(15px);
  -ms-transform: translateX(15px);
  transform: translateX(15px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>