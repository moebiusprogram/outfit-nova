<template>
  <div class="custom-form px-4">
  
    <h1>Regístrate con tu correo electrónico</h1>
    <form class="form" @submit="checkForm">
      <CustomInput type="email" name="email" id="email" placeholder="Dirección de correo electrónico"  required @update="checkForm" :isValid="email"/>
      <p v-if="email==false" class="invalid-input-reminder-text">
        Escribe una dirección de correo correcta
      </p>
      <CustomInput v-if="role === 'register'" type="text" name="nombre" id="alias" placeholder="Alias" required @update="checkForm" :isValid="nombre"/>
      <p v-if="nombre==false" class="invalid-input-reminder-text">
        Escribe tu nombre de usuario
      </p>
      <CustomInput type="password" name="password" id="password"
        :placeholder="(role === 'register') ? 'Contraseña (minimo 6 caracteres)' : 'Contraseña'" required @update="checkForm" :isValid="password"/>
      <p v-if="password==false" class="invalid-input-reminder-text">
        Escribe una contraseña de al menos 6 caracteres.
      </p>
      <div v-if="role === 'register'" class="gender p-0">
        <p>
          ¿Cómo te gustaría que nos dirijamos a ti?
        </p>
        <ul class="gender-group p-0">
          <li>
            <input type="radio" name="gender" id="female"  :class="{'uncheck':genero!='female','check':genero=='female'}" value="female" v-model="genero">
            <label for="female" :class="{'text-dark':genero=='female'}">Mujer</label>
          </li>
          <li>
            <input type="radio" name="gender" id="male" :class="{'uncheck':genero!='male','check':genero=='male'}" value="male" v-model="genero">
            <label for="male" :class="{'text-dark':genero=='male'}">Hombre</label>
          </li>
          <li>
            <input type="radio" name="gender" id="nonBinary" :class="{'uncheck':genero!='nonBinary','check':genero=='nonBinary'}" value="nonBinary" v-model="genero">
            <label for="nonBinary" :class="{'text-dark':genero=='nonBinary'}">No binario</label>
          </li>
        </ul>
      </div>
      
       <!-- <PrimaryButton type="button" style="font-size: 14px;
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

  -->
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
  data() {
    return {
      genero : '',
      email: true,
      nombre: true,
      password: true
    }
  },
  methods: {
    checkForm (e, eType) {
      console.log('input value:', e)
      console.log('input type:', $(`#${eType}`)[0].classList)
      
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

      //check for empty boxes
      if (e.length === 0) { 
        if (eType === 'email') return this.email = false
        if (eType === 'nombre') return this.nombre = false
        if (eType === 'password') return this.password = false
      }

      //check for correct email
      if (eType === 'email' && !regex.test(e)) return this.email = false

      //check for correct password
      if (eType === 'password' && e.length < 6) return this.password = false

      //all good
      else {
        if (eType === 'email') {
          this.email = true
          this.$emit('update', e, eType)
        }
        if (eType === 'nombre') {
          this.nombre = true
          this.$emit('update', e, eType)
        }
        if (eType === 'password'){
          this.password = true
          this.$emit('update', e, eType)
        }
      }
    },
    
  },
  watch: {
    genero (newValue, oldValue) {
      this.$emit('updateGender', newValue)
    }
  }
}
</script>
