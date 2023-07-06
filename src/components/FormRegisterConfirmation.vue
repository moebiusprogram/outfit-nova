<template>
  <div class="custom-form px-4">
  
    <h1>
      Para finalizar el registro, como es normal, tienes que aceptar nuestros términos de uso y política de privacidad.
    </h1>

    <div class="row py-2 d-flex justify-content-center">
      <div class="col-10"> 
        <button class="btn w-100" style="font-weight:500;border-radius:0px;background:#F2F3F5;">TÉRMINOS DE USO</button> 
      </div>
    </div>

    <div class="row py-2 d-flex justify-content-center">
      <div class="col-10"> 
        <button class="btn w-100" style="font-weight:500;border-radius:0px;background:#F2F3F5;">POLÍTICA DE PRIVACIDAD</button> 
      </div>
    </div>


    <form class="form py-5">
     
      <div class="checkbox-group">
         <div class="p-0">
          <input type="checkbox" id="newsletter" name="newsletter">
          <label for="newsletter" class="small" style="color:#A7A7A7">Acepto recibir vía email mejores ofertas</label>
        </div>
      </div>
       
      <div class="checkbox-group">
         <div class="p-0">
          <input type="checkbox" id="newsletter2" name="newsletter2">
          <label for="newsletter2" class="small" style="color:#A7A7A7">Acepto los Términos de Uso y Políticas de Privacidad</label>
        </div>
      </div>
       
 
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
