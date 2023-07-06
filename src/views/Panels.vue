<template>
  <section style="display:flex; flex-wrap:wrap; gap:10px">
    <Panel v-for="(panel, i) in panels" :key="i" :name="panel.name" :img="panel.img" :link_to="panel.link_to"/>
  </section>
</template>
<script>
import Panel from '../components/Panel.vue'
import home from '../assets/screens/home.png'
import register from '../assets/screens/register.png'
import registrationStepOne from '../assets/screens/registration-step-one.png'
import registrationStepTwo from '../assets/screens/registration-step-two.png'
import registrationStepThree from '../assets/screens/registration-step-three.png'
import registrationStepFour from '../assets/screens/registration-step-four.png'
import registrationStepFive from '../assets/screens/registration-step-five.png'
import registrationStepSix from '../assets/screens/registration-step-six.png'
import profile from '../assets/screens/profile.png'
import notifications from '../assets/screens/notifications.png'
import alerts from '../assets/screens/alerts.png'
import shop from '../assets/screens/shop.png'
import search from '../assets/screens/search.png'
import brand from '../assets/screens/brand.png'
import createAlert from '../assets/screens/create-alert.png'
import confirmAlert from '../assets/screens/confirm-alert.png'
import favouriteSizes from '../assets/screens/favourite-sizes.png'
import offers from '../assets/screens/offers.png'
import offer from '../assets/screens/offer.png'
import offerConfirmation from '../assets/screens/offer-confirmation.png'
import product from '../assets/screens/product.png'
import categories from '../assets/screens/categories.png'
import chollosCategories from '../assets/screens/chollos-categories.png'
import codeShare from '../assets/screens/code-share.png'
import raffles from '../assets/screens/raffles.png'
import raffle from '../assets/screens/raffle-example.png'
import naming from '../assets/screens/naming.png'
import topProducts from '../assets/screens/top-products.png'

import test from '../assets/screens/test.png'
import ProductsOld from '../assets/screens/productold.png'
import ProductsCoupons from '../assets/screens/productcoupons.png'

import perfilRedesSociales from '../assets/screens/interfaces-completas/perfil-redes-sociales.png' 
  import colaboramos from '../assets/screens/interfaces-completas/colaboramos.png'
  import perfilEdit from '../assets/screens/interfaces-completas/perfil-edit.png'
  import singleProductAdd from '../assets/screens/interfaces-completas/single-product-new.png'
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
      panels:[{
        name: 'Home',
        link_to: '/',
        img: home
      },
      {
        name: 'Register',
        link_to: '/register',
        img: register
      },
      {
        name: 'Reg. Step One',
        link_to: '/registration-step-one/login',
        img: registrationStepOne
      },
      {
        name: 'Reg. Step Two',
        link_to: '/registration-step-two',
        img: registrationStepTwo
      },
      {
        name: 'Reg. Step Three',
        link_to: '/registration-step-three',
        img: registrationStepThree
      },
      {
        name: 'Reg. Step Four',
        link_to: '/registration-step-four',
        img: registrationStepFour
      },
      {
        name: 'Reg. Step Five',
        link_to: '/registration-step-five',
        img: registrationStepFive
      },
      {
        name: 'Reg. Step Six',
        link_to: '/registration-step-six',
        img: registrationStepSix
      },
      {
        name: 'Profile',
        link_to: '/profile',
        img: profile
      },
      {
        name: 'Notifications',
        link_to: '/notifications',
        img: notifications
      },
      {
        name: 'Alerts',
        link_to: '/alerts',
        img: alerts
      },
      {
        name: 'Create Alert',
        link_to: '/create-alert',
        img: createAlert
      },
      {
        name: 'Confirm Alert',
        link_to: '/confirm-alert',
        img: confirmAlert
      },
      {
        name: 'Favourite Sizes',
        link_to: '/favourite-sizes',
        img: favouriteSizes
      },
      {
        name: 'Offers',
        link_to: '/offers',
        img: offers
      },
      {
        name: 'Shop',
        link_to: '/shops/nike',
        img: shop
      },
      {
        name: 'Search',
        link_to: '/search/nike',
        img: search
      },
      {
        name: 'Brand',
        link_to: '/brands/nike',
        img: brand
      },
      {
        name: 'Send Offer',
        link_to: '/offer',
        img: offer
      },
      {
        name: 'Offer Confirmation',
        link_to: '/offer-confirmation',
        img: offerConfirmation
      },
      {
        name: 'Product (Example)',
        link_to: '/products/1',
        img: product
      },
      {
        name: 'Categories',
        link_to: '/categories',
        img: categories
      },
      {
        name: 'Chollos Categories',
        link_to: '/chollos-categories',
        img: chollosCategories
      },
      {
        name: 'Code Share',
        link_to: '/code-share',
        img: codeShare
      },
      {
        name: 'Raffles',
        link_to: '/raffles',
        img: raffles
      },
      {
        name: 'Raffle Example',
        link_to: '/raffle/1',
        img: raffle
      },
      {
        name: 'Naming',
        link_to: '/naming',
        img: naming
      },
      {
        name: 'Top Products',
        link_to: '/top-products',
        img: topProducts
      },
      {
          name: 'Test',
          link_to: '/test',
          img: test
      },
      {
          name: 'Products coupons',
          link_to: '/products_coupons/1',
          img: ProductsCoupons
      },
      {
          name: 'Products Old',
          link_to: '/products_old/1',
          img: ProductsOld
      },
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
