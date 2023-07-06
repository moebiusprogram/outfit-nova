<template>
  <div class="custom-form px-4">
    <p v-if="role === 'register'" class="welcome pt-3" style="font-weight: 700;
font-size: 14px;
line-height: 17px;
text-align: center;">¡Bienvenido (a)! Crea una cuenta en unos segundos,
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
    <ul class="social-registration">
      <li>
        <ButtonToSocial content="Continuar con Google"><img src="../assets/google.svg" alt="google"></ButtonToSocial>
      </li>
      <li>
        <ButtonToSocial content="Continuar con Facebook"><img src="../assets/fb.svg" alt="facebook"></ButtonToSocial>
      </li>
      <li>
        <ButtonToSocial :dark="true" content="Iniciar sesión con Apple"><img src="../assets/apple.svg" alt="apple">
        </ButtonToSocial>
      </li>
    </ul>
    <p v-if="role === 'register'" class="gray-text p-0 pt-4">Iniciar sesión mediante una cuenta de redes sociales es
      muy rápido, ya que no necesitas ninguna contraseña adicional</p>
    <div class="division"><span>O</span></div>
    <h1>Iniciar sesión con la dirección de correo electrónico</h1>
    <form class="form">
      <CustomInput type="email" name="email" placeholder="Dirección de correo electrónico" />
      <CustomInput v-if="role === 'register'" type="text" name="nombre" placeholder="Nombre" />
      <CustomInput v-if="role === 'register'" type="text" name="lastName" placeholder="Apellido" />
      <CustomInput type="password" name="password"
        :placeholder="(role === 'register') ? 'Contraceña (minimo 6 caracteres)' : 'Contraceña'" />
      <div class="division"></div>
      <div v-if="role === 'register'" class="gender p-0">
        <p>
          ¿Cómo te gustaría que nos dirijamos a ti?
        </p>
        <ul class="gender-group p-0">
          <li>
            <input type="radio" name="gender" id="female" value="female">
            <label for="female">Mujer</label>
          </li>
          <li>
            <input type="radio" name="gender" id="male" value="male">
            <label for="male">Hombre</label>
          </li>
          <li>
            <input type="radio" name="gender" id="nonBinary" value="nonBinary">
            <label for="nonBinary">No binario</label>
          </li>
        </ul>
      </div>
      <div v-if="role === 'register'" class="checkbox-group">
        <p>Mantente al día</p>
        <div class=" p-0">
          <input type="checkbox" id="newsletter" name="newsletter">
          <label for="newsletter" class="small" style="color:#A7A7A7">Me gustaría recibir en mi correo electrónico información
            actual sobre tendencias de moda, ofertas y cupones de descuento de About You. Puedes cancelar la suscripción
            en cualquier momento
            y de forma gratuita.</label>
        </div>
      </div>

       <PrimaryButton type="button" style="font-size: 14px;
    padding: 0px 6px;
    width: 100%;
    height: 50px;
    left: 166px;
    top: 664px;font-weight: 700;
    background: #000000;
    border-radius: 8px;
    color: #fff;
    border: none;
    margin: 0px;">
        {{role === 'register' ? 'Registrarse ahora' : 'Iniciar secion' }}
      </PrimaryButton>

 
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
