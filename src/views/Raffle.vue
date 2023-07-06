<template>
  <section class="bg-white " style="height:100vh; padding:12px;">
    <NavbarSearch :route_to="'/profile'" :show="true" :white="true" name="Sorteos" :shadow="true"/>
    <section class="raffle-suscribe" style="margin-top:40px; display:flex; align-items:center;">
      <div style="margin-top: 15px;">
        <img src="../assets/ringing-bell.svg" alt="" style="margin-right:10px;">
        <h3 style="font-weight: 600; font-size: 16px; display: inline; margin-top:12px;">Suscríbete a los sorteos</h3>
        <p style="font-weight: 500;font-size: 12px; color:#868686">Te avisaremos de los nuevos sorteos y de sus resultados</p>
      </div>
      <label class="switch" style="margin-right: -12px;">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>
    </section>
    <section class="active-raffle">
      <h2 style="font-weight: 600; font-size: 18px;">Sorteos activos</h2>
      <p style="font-size:12px;">Este mes de enero sorteamos una caja misteriosa con unas zapatillas y una camiseta. Asegúrate antes de participar que tienes tus tallas favoritas configuradas 
        <router-link to="/favourite-sizes" style="color:#000; font-weight:700;">aquí </router-link>
        para que te mandemos la ropa de tu talla.</p>
      <img src="../assets/premios-gratis.png" alt="" style="display:block; margin:35px auto;">
      <button
        class="dark fit-all-screen py-10 mb-15"
        style="letter-spacing: 4px; margin-left: 2.5vw; border: none;"
        >
          IR AL SORTEO
      </button>
    </section>
  </section>
    <footer style="height: 60px;">
      <FooterNavbar/>
    </footer>
</template>
<script>
import NavbarSearch from '../components/NavbarSearch.vue';
import FooterNavbar from '../components/FooterNavbar.vue';

export default {
  name: 'RaffleView',
  components: {
    NavbarSearch,
    FooterNavbar
  }
}
</script>
<style scoped>
*{
  font-family: "Inter";
}

.raffle-suscribe {
  background: #F7F7F7;
  border: 1px solid #E3E3E3;
  backdrop-filter: blur(4px);
  border-radius: 3px;
  padding: 14px;
  margin-bottom: 15px;
  max-height: 80px;
}

.switch {
  position: relative;
  width: 34px;
  height: 21px;
  float: right;
  right: 10px;
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