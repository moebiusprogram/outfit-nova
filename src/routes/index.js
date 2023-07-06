import { createRouter, createWebHistory } from 'vue-router'

import Profile from '../views/Profile.vue';
import Notifications from '../views/Notifications.vue';
import Product from '../views/Product.vue';
import ProductCoupons from '../views/ProductCoupons.vue';
import Register from '../views/Register.vue';
import RegistrationStepOne from '../views/RegistrationStepOne.vue';
import RegistrationStepTwo from '../views/RegistrationStepTwo.vue';
import RegistrationStepThree from '../views/RegistrationStepThree.vue';
import RegistrationStepFour from '../views/RegistrationStepFour.vue';
import RegistrationStepFive from '../views/RegistrationStepFive.vue';
import RegistrationStepSix from '../views/RegistrationStepSix.vue';
import CategoriesCopy from '../views/CategoriesCopy.vue';
import ChollosCategories from '../views/ChollosCategories.vue'
import FavouriteSizes from '../views/FavouriteSizes.vue'
import Colaboramos from '../views/Colaboramos.vue'
import PerfilRedesSociales from '../views/PerfilRedesSociales.vue'
import PerfilEdit from '../views/PerfilEdit.vue'
import Filtros from '../views/Filtros.vue'
import InterfacesCompleted from '../views/InterfacesCompleted.vue'


import Panels from '../views/Panels.vue';
import Raffles from '../views/Raffles.vue';
import RaffleView from '../views/Raffle.vue';
import Alerts from '../views/Alerts.vue';
import Shops from '../views/Shops.vue';
import Search from '../views/Search.vue';
import Shop from '../views/Shop.vue';
import CreateAlert from '../views/CreateAlert.vue';
import ConfirmAlert from '../views/ConfirmAlert.vue';
import Naming from '../views/Naming.vue';
import Brand from '../views/Brand.vue';
import TopProducts from '../views/TopProducts.vue';
import ProductOld from '../views/Product_info.vue';
import CodeShare from '../views/CodeShare.vue';
import SingleProduct from '../views/SingleProduct.vue';

import Home from '../views/Home.vue';
import Offer from '../views/Offer.vue';
import Offers from '../views/Offers.vue';
import Portada from '../views/Portada.vue';
import OfferConfirmation from '../views/OfferConfirmation.vue';

import Test from '../views/Test.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "index",
      component: Portada
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/registration-step-one/:path",
      name: "registration-step-one",
      component: RegistrationStepOne
    },
    {
      path: "/registration-step-two",
      name: "registration-step-two",
      component: RegistrationStepTwo
    },
    {
      path: "/registration-step-three",
      name: "registration-step-three",
      component: RegistrationStepThree
    },
    {
      path: "/registration-step-four",
      name: "registration-step-four",
      component: RegistrationStepFour
    },
    {
      path: "/registration-step-five",
      name: "registration-step-five",
      component: RegistrationStepFive
    },
    {
      path: "/registration-step-six",
      name: "registration-step-six",
      component: RegistrationStepSix
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      props:true,
    },
    {
      path: "/notifications",
      name: "Notifications",
      component: Notifications,
      props:true,
    },
    {
      path: "/alerts",
      name: "alerts",
      component: Alerts
    },
    {
      path: "/create-alert",
      name: "create-alert",
      component: CreateAlert
    },
    {
      path: "/confirm-alert",
      name: "confirm-alert",
      component: ConfirmAlert
    },
    {
      path: "/favourite-sizes",
      name: "favourite-sizes",
      component: FavouriteSizes
    },
    {
      path: "/offers",
      name: "offers",
      component: Offers
    },
    {
      path: "/shops/:shop",
      name: "shops",
      component: Shops
    },
    {
      path: "/search/:search",
      name: "search",
      component: Search
    },
    {
      path: "/brands/:brand",
      name: "brand",
      component: Brand
    },
    {
      path: "/offer",
      name: "offer",
      component: Offer
    },
    {
      path: "/offer-confirmation",
      name: "offer-confirmation",
      component: OfferConfirmation
    },
    {
      path: "/products/:id",
      name: "product",
      component: Product,
      props:true,
    },
    {
      path: "/categories",
      name: "categories",
      component: CategoriesCopy
    },
    {
      path:"/chollos-categories",
      name: "chollos-categories",
      component: ChollosCategories
    },
    {
      path: "/code-share",
      name: "code-share",
      component: CodeShare
    },
    {
      path: "/raffles",
      name: "raffles",
      component: Raffles
    },
    {
      path: "/raffle/:id",
      name: "raffle-view",
      component: RaffleView
    },
    {
      path: "/naming",
      name: "naming",
      component: Naming
    },
    {
      path: "/top-products",
      name: "top products",
      component: TopProducts
    },
    {
      path: "/colaboramos",
      name: "colaboramos",
      component: Colaboramos 
    },
    {
      path: "/perfil-redes-sociales",
      name: "PerfilRedesSociales",
      component: PerfilRedesSociales 
    },
    {
      path: "/perfil-edit",
      name: "PerfilEdit",
      component: PerfilEdit 
    },
    {
      path: "/single-product",
      name: "SingleProduct",
      component: SingleProduct
    },
    {
      path: "/filtros",
      name: "Filtros",
      component: Filtros
    },




    {
      path: "/test",
      name: "test-view",
      component: Test
    },
    {
      path: "/panels",
      name: "panels",
      component: Panels
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop
    }, 

  
    {
      path: "/interfaces-completed",
      name: "InterfacesCompleted",
      component: InterfacesCompleted
    },
 
  

    {
      path: "/products_cupons/:id",
      name: "product_coupons",
      component: ProductCoupons,
      props:true,
    },
  
    {
      path: "/products_old/:id",
      name: "products_old",
      component: ProductOld,
      props:true,
    },
 
   
   
  ]
});

export default router;
