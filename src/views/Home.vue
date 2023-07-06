<template>
  <section class="home">
    <SearchBar />

    <!-- <HeadBand
      :data="{
        title: 'TOP OFERTAS',
        categories: [{ id: 'as', name: 'HASTA' }],
        discount: '12',
      }"
    />

    <SwiperHome :slides="products" /> -->

    <!-- <HeadBandCategorias
      :data="{
        title: 'CATEGORIAS',
        categories: [{ id: 'as', name: 'cat 1' }],
        discount: '12',
      }"
    />

    <GridCategories :categories="categories" />

    <HeadBandOfertas
      :data="{
        title: 'OFERTAS',
        categories: [{ id: 'as', name: 'cat 1' }],
        discount: '12',
      }"
    /> -->

    <SwiperHomeOfferts :products="products_offers" />

    <section class="raffles" style="margin-top: 15px; background: #fff">
      <img src="../assets/bell.svg" alt="" style="height: 25px; width: 25px" />
      <h1 class="raffles-title">
        Añade alerta de <strong>lo que estes buscando</strong>
      </h1>
      <p class="raffles-info" style="text-align: center">
        Recibe un aviso en tu e-mail cada vez que una oferta que tenga tus palabras claves
      </p>

      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Palabras claves..."
          aria-label="Palabras claves..."
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">Agregar</span>
        </div>
      </div>
    </section>

    <div class="card mb-3 mt-3 border-0">
      <div class="row mx-0 px-0 d-flex">
        <div class="col-6 mx-0 px-0 d-flex">
          <div class="card-body text-center">
            <p class="card-text small">
              Aprende como activar las alertas con este <strong> tutorial </strong>
            </p>
            <button class="btn btn-block bg-black text-white">Ver Video</button>
          </div>
        </div>
        <div class="col-6 d-flex mx-0 px-0">
          <img
            src="/src/assets/video.png"
            style="height: 130px; width: 190px"
            class="rounded-start"
            alt="..."
          />
        </div>
      </div>
    </div>
  </section>

  <div style="margin-top: 100px"></div>

  <FooterNavbar :showMenu="true" />
</template>

<script>
import { products } from "../products";
import { categories } from "../categories";
import FooterNavbar from "../components/FooterNavbar.vue";
import SearchBar from "../components/SearchBar.vue";
import HeadBand from "../components/HeadBand.vue";
import HeadBandCategorias from "../components/HeadBandCategorias.vue";
import HeadBandOfertas from "../components/HeadBandOfertas.vue";
import SwiperHome from "../components/SwiperHome.vue";
import GridCategories from "../components/GridCategories.vue";
import SwiperHomeOfferts from "../components/SwiperHomeOfferts.vue";
import Menubar from "../components/Menubar.vue";
import prod1 from "../assets/product_1.webp";
import prod2 from "../assets/product_2.webp";

export default {
  components: {
    SearchBar,
    HeadBand,
    HeadBandCategorias,
    HeadBandOfertas,
    SwiperHome,
    GridCategories,
    SwiperHomeOfferts,
    Menubar,
    FooterNavbar,
  },
  data() {
    return {
      products_offers: products,
      categories: categories,
      products: [
        {
          name: "JACKET SILVER",
          label_top: "Amazon",
          label_top_bg: "#FAE7CB",
          label_top_color: "#E4B408",
          cost_init: "250",
          cost_end: "150",
          discount: "35",
          categories: [
            {
              id: "112",
              name: "Black",
            },
            {
              id: "112",
              name: "Silver Metallic",
            },
          ],
          image: prod1,
          date: "1 Febrero",
        },
        {
          name: "TIRO TKJKT VIP",
          label_top: "ABOUT YOU",
          label_top_bg: "#FFF",
          label_top_color: "#000",
          cost_init: "35",
          cost_end: "30",
          discount: "10",
          categories: [
            {
              id: "112",
              name: "Legend Ink",
            },
          ],
          image: prod2,
          date: "2 Febrero",
        },
      ],
    };
  },
};
</script>
