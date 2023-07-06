<template>
  <section class="registration"  style="height:calc(100% - 10px);">
    <NavbarSearch :show="true" :search="false" show_name_back="Atrás" :white="true" name=""  route_to="/registration-step-two" />
    
    <div style="margin-top:75px"></div>

    <FormRegisterName :role="role" />


  <div class="row mx-0 px-4 py-5">
    <div class="col d-flex justify-content-end" style="background:#000; ">
 
 
<router-link :to="'/registration-step-four'" class="btn btn-block text-white w-100" style="border-radius: 0px;
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
import FormRegisterName from '../components/FormRegisterName.vue';


import arrow_right from '../assets/arrow-right.svg';
import NavbarSearch from '../components/NavbarSearch.vue';
export default {
  components: {
    TopRegistration,
    FormRegisterName,
    NavbarSearch,
  },
  methods: {
    clickHandler(e) {
      if (e.target.className !== "toggle") return;
      const buttons = Array.from(e.currentTarget.children);
      for (const button of buttons) {
        button.dataset.toggle = false
      }
      e.target.dataset.toggle = true;
      this.role = e.target.getAttribute('role');
    }
  },
  data() {
    return {
      role: 'register',
      arrow_right: arrow_right
    }
  },
}
</script>
