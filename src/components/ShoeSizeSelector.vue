<template>
  <section style="height:100vh; background:#F5F5F5">
    <NavbarSearch :route_to="'/favourite-sizes'" :show="true" :white="true" name="Tus tallas de zapatillas" :tutorial="true" :show_name_back="'Atrás'" :shadow="true"/>
    <div style="margin-top:35px; background:#F7F7F7">
    <section class="size-selector-helper">
      <img src="../assets/light-bulb-circle.svg" alt="lightbulb icon" style="margin:auto 20px">
      <p style="font-size:13px;font-weight:600; margin-bottom: 0;">Consejo: selecciona varias tallas que se aproximen a la que usas normalmente</p>
    </section></div>
    <section class="shoe-sizes">
      <button v-for="(size, i) in sizes" :key="i" @click.prevent="size.checked = !size.checked" class="size-btn">
        <span>{{ size.size }}</span>
        <span v-if="size.checked" class="selected-size-tag" style="position:absolute;right:80px;">Tu talla</span>
      </button>
    </section>
    <section style="background:#f5f5f5">
      <button class="accept-btn" style="position:fixed; bottom:0">
        ACEPTAR
      </button>
    </section>
  </section>
</template>
<script>
import NavbarSearch from '../components/NavbarSearch.vue';
export default {
  name: 'ShoeSizeSelector',
  components: {
    NavbarSearch
  },
  data () {
    return {
      sizes:[
      {size: 42, checked: false},
      {size: 42.5, checked: false},
      {size: 43, checked: false},
      {size: 43.5, checked: false},
      {size: 44, checked: false},
      {size: 44.5, checked: false},
      {size: 45, checked: false},
      {size: 45.5, checked: false},
      {size: 46, checked: false},
      {size: 46.5, checked: false},
      {size: 47, checked: false},
      {size: 47.5, checked: false},
      {size: 48, checked: false},
      {size: 48.5, checked: false}
      ]
    }
  }
}
</script>
