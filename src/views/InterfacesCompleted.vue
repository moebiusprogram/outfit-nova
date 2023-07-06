<template>
    <section style="display:flex; flex-wrap:wrap; gap:10px; justify-content: space-evenly;">
      <Panel v-for="(panel, i) in panels" :key="i" :name="panel.name" :img="panel.img" :link_to="panel.link_to"/>
    </section>
</template>
<script>
  import Panel from '../components/Panel.vue'
  
  import perfilRedesSociales from '../assets/screens/interfaces-completas/perfil-redes-sociales.png' 
  import colaboramos from '../assets/screens/interfaces-completas/colaboramos.png'
  import perfilEdit from '../assets/screens/interfaces-completas/perfil-edit.png'
  import singleProductAdd from '../assets/screens/interfaces-completas/single-product-add.png'
  import singleProduct from '../assets/screens/interfaces-completas/single-product.png'
  import filtros from '../assets/screens/interfaces-completas/filtros.png'
  
  
  export default {
    name: 'Panels',
    data () {
      return {
        screens
      }
    },
    components: {
      Panel
    },
    data () {
      return {
        panels:[
        {
         link_to: "/colaboramos",
        name: "colaboramos",
        img: colaboramos
      },
      {
         link_to: "/perfil-redes-sociales",
        name: "PerfilRedesSociales",
        img: perfilRedesSociales
      },
      {
         link_to: "/perfil-edit",
        name: "PerfilEdit",
        img: perfilEdit
      },
      {
         link_to: "/single-product",
        name: "SingleProduct",
        img: singleProductAdd
      },
      {
         link_to: "/single-product",
        name: "SingleProduct",
        img: singleProduct
      },
      {
         link_to: "/filtros",
        name: "Filtros",
        img: filtros
      }]
      }
    }
  }
  </script>
  