<template>
  <div class="custom-form px-4">
    <p v-if="role === 'register'" class="welcome pt-3" style="font-weight: 700;
font-size: 14px;
line-height: 17px;
text-align: center;">¡Bienvenido/a! Crea una cuenta en unos segundos,
      y únete a nuestra comunidad.</p>
    <p v-if="role === 'register'" class="gray-text p-0  pt-1 pb-3" style="font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
text-align: center;">Tendrás muchos beneficios: alertas personalizadas en tiempo
      real, participar en sorteos de
      cajas
      sorpresa, y
      muchas sorpresas mas.</p>


      <div class="row">
        <div class="col-12 py-1">

           <button class="btn btn-outline-secondary rounded-pill w-100 bg-white d-flex text-hover-dark justify-content-center align-items-center" :class="{dark: dark}" :href="pathToSocial" :style="'text-decoration: none;font-weight: 500;border: 1px solid #e5e7eb;background: url('+google+');background-repeat: no-repeat;background-size: 20px;background-position: 15px 8px;'">           
             {{(role === 'register')?'Registrarse con Google':'Iniciar sesión con Google'}}
          </button> 
         </div>
        <div class="col-12 py-1">
          
           <button class="btn btn-outline-secondary rounded-pill w-100 bg-white d-flex text-hover-dark justify-content-center align-items-center" :class="{dark: dark}" :href="pathToSocial" :style="'text-decoration: none;font-weight: 500;border: 1px solid #e5e7eb;    background: url('+fb+');    background-repeat: no-repeat;    background-size: 20px;    background-position: 15px 8px;'">
            {{(role === 'register')?'Registrarse con Facebook':'Iniciar sesión con Facebook'}}
          </button> 

         </div>
        <div class="col-12 py-1">
          
           <button class="btn btn-outline-secondary rounded-pill w-100 bg-white d-flex text-hover-dark justify-content-center align-items-center" :class="{dark: dark}" :href="pathToSocial" :style="'text-decoration: none;font-weight: 500;border: 1px solid #e5e7eb;    background: url('+apple+');    background-repeat: no-repeat;    background-size: 20px;    background-position: 15px 8px;'">
            {{(role === 'register')?'Registrarse con Apple':'Iniciar sesión con Apple'}}
          </button> 
 
         </div>
        <div class="col-12 py-1">
          <router-link :to="'/registration-step-two'" style="text-decoration: none;">
          
           <button class="btn btn-outline-secondary rounded-pill w-100 bg-white d-flex text-hover-dark justify-content-center align-items-center" :class="{dark: dark}" :href="pathToSocial" :style="'text-decoration: none;font-weight: 500;border: 1px solid #e5e7eb;    background: url('+email+');    background-repeat: no-repeat;    background-size: 20px;    background-position: 15px 8px;'">
             {{(role === 'register')?'Registrarse con Email':'Iniciar sesión con Email'}}
          </button> 
  
           </router-link>
        </div> 
      </div> 
    
      <Transition mode="out-in">
        
          <div class="division d-flex justify-content-center"  v-if="role === 'register'"><div class="bg-white px-5" style="margin-top: -13px;" @click="changeRole('login')">¿Busca iniciar sesion?</div></div>
       
          <div class="division d-flex justify-content-center" v-else><div class="bg-white px-5" style="margin-top: -13px;" @click="changeRole('register')">¿Busca crear una cuenta?</div></div>

      </Transition>


    </div>
  <div style="margin-top:100px"></div>
</template>

<script>
import ButtonToSocial from './ButtonToSocial.vue';
import CustomInput from './CustomInput.vue';
import PrimaryButton from './PrimaryButton.vue';
import google from '../assets/google.svg';
import fb from '../assets/fb.svg';
import apple from '../assets/apple.svg';
import email from '../assets/email2.png'; 

export default {
  components: {
    ButtonToSocial,
    CustomInput,
    PrimaryButton,
  },
  props: ['role'],
  data() {
    return {
        google:google,
        fb:fb,
        apple:apple,
        email:email,
    }
  },
  methods: {
    changeRole(roles) {
      console.log("🚀 ~ file: FormLogin.vue ~ line 77 ~ changeRole ~ roles", roles)
      
       this.$emit('changeRole',roles);
     },
  }
}
</script>
