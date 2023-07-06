<template>
  <section class="lang">
    <LanguageSelector />
  
  <section class="register-img">
    <RegisterImg :large="true"/>
  </section>
  </section>
  <section class="logo">
    <HexagonImage :image="img" :style="style"/>
  </section>
  <section class="content-wrapper">
    <h1>OUTFIT<strong>NOVA</strong></h1>
    <h2>Tu código es la llave</h2>
    <div class="separador" />
      <h4 style="margin:20px auto 0 auto; max-width:80vw;" class="rem08">
        Revela ahora las mejores ofertas de moda con un mínimo del 40% de descuento.
      </h4>
    <CustomInput
      type="text"
      name="register-code"
      id="register-code"
      :isValid="valid"
      placeholder="Escribe aquí tu código"
      @update="checkCode"
      style="width: calc(100% - 24px);
      margin: 10px 12px;"/>
      <p
        v-if="valid==false"
        class="invalid-input-reminder-text"
        style="float:left; margin-left:12px;margin-top:-6px;"
        >
        <strong>&nbsp;CÓDIGO NO VÁLIDO </strong>&nbsp; &nbsp; &nbsp; ¿No tienes código? Haz click <a href="#" class="nolink">aquí</a>
      </p>
    <!-- <router-link :to="'/registration-step-one'"> -->
    <router-link :to="isDisabled ? '#' : '/registration-step-one/register'" 
      @click="checkValid()"
      class="btn btn-block text-white w-100" 
      style="border-radius: 0px;background: rgb(0, 0, 0);
      display: flex;
      justify-content: center;
      font-size:17px;
      padding: 13px;
      letter-spacing: 4px; margin-top:15px;"
    >
      REGISTRARME AHORA
    </router-link>

    <h4 class="my-10 rem08" style="color:rgb(100, 100, 100);">¿Busca iniciar sesión?</h4>
    <router-link :to="'/registration-step-one/login'" style="text-decoration:none; color:inherit;">
      <h4 class="my-10 rem08">
        <strong>Entrar con mi cuenta</strong>
      </h4>
    </router-link>
  </section>

</template>

<script>

import RegisterImg from '../components/RegisterImg.vue'
import LanguageSelector from '../components/LanguageSelector.vue'
import HexagonImage from '../components/HexagonImage.vue'
import CustomInput from '../components/CustomInput.vue';
import logo from '../assets/register_logo.png'

export default {
  components: {
    RegisterImg,
    HexagonImage,
    LanguageSelector,
    CustomInput
  },
  data () {
    return {
      codigo: '',
      codeRegex:  /^1234$/, //change with code constraints
      img: logo,
      style: 'width:80px; height:70px; margin:0 0 20px 40vw !important;',
      valid: true,
      isDisabled: true
    }
  },
  methods: {
    checkCode (code, inputType) {
      this.codigo = code
      if (this.codeRegex.test(this.codigo)) {this.isDisabled = false}
      else {this.isDisabled = true}
    },
    checkValid () {
      this.codeRegex.test(this.codigo) ? this.valid = true : this.valid = false
    }
  },
  }

</script>
