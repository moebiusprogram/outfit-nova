<template>
  <div class="custom-form px-4">
  
    <h1>
      
      Vamos a usar tu nombre de Google como tu nombre de usuario, pero puedes cambiarlo desde aquí si quieres.

    </h1>
    <form class="form">
      <CustomInput type="text" name="text" placeholder="Nombre de usuario" />
     
      
 
    </form>
  </div>
  <!-- <div style="margin-top:500px"></div> -->
</template>

<script>
import ButtonToSocial from './ButtonToSocial.vue';
import CustomInput from './CustomInput.vue';
import PrimaryButton from './PrimaryButton.vue';

export default {
  components: {
    ButtonToSocial,
    CustomInput,
    PrimaryButton,
  },
  props: ['role'],
}
</script>
