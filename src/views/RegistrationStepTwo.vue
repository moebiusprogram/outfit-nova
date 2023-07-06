<template>
  <section class="registration"  style="height:calc(100% - 10px);">
    <NavbarSearch :show="true" show_name_back="Atrás" :search="false" :shadow="false" :white="true" name=""  route_to="/registration-step-one" />
    
    <div style="margin-top:75px"></div>

    <FormLoginEmail :role="role" @update="updateData" @updateGender="updateGender"/>


  <div class="row mx-0 px-4 py-5">
    <div class="col d-flex justify-content-end" style="background:#000; ">
 
<router-link :to="isDisabled ? '#' : '/registration-step-three'" class="btn btn-block text-white w-100" style="border-radius: 0px;
    position: fixed;
    bottom: 0px;
    right: 0px;
    background: rgb(0, 0, 0);    display: flex;
    justify-content: flex-end;
    font-size:17px;
    padding: 13px;">Siguiente <img :src="arrow_right" alt="" class="ms-3"></router-link>


    </div>
  </div>
 
      <!-- <div style="margin-top:300px"></div> -->
  </section>
</template>

<script>
import TopRegistration from '../components/TopRegistration.vue';
import FormLoginEmail from '../components/FormLoginEmail.vue';

import arrow_right from '../assets/arrow-right.svg';
import NavbarSearch from '../components/NavbarSearch.vue';
export default {
  components: {
    TopRegistration,
    FormLoginEmail,
    NavbarSearch,
  },
  data() {
    return {
      role: 'register',
      arrow_right,
      isDisabled: true,
      genero : '',
      email:'',
      nombre: '',
      password: ''
    }
  },
  methods: {
    clickHandler (e) {
      if (e.target.className !== "toggle") return;
      const buttons = Array.from(e.currentTarget.children);
      for (const button of buttons) {
        button.dataset.toggle = false
      }
      e.target.dataset.toggle = true;
      this.role = e.target.getAttribute('role');
    },
    updateData (e, eType) {
      if (eType === 'email') this.email = e
      if (eType === 'nombre') this.nombre = e
      if (eType === 'password') this.password = e
    },
    updateGender (value) {
      this.genero = value
    }
  },
  watch: {
    genero () {
      if (this.genero && this.email && this.nombre && this.password) this.isDisabled = false
    },
    email () {
      if (this.genero && this.email && this.nombre && this.password) this.isDisabled = false
    },
    nombre () {
      if (this.genero && this.email && this.nombre && this.password) this.isDisabled = false
    },
    password () {
      if (this.genero && this.email && this.nombre && this.password) this.isDisabled = false
    }
  }
}
</script>
