<template>
  <div style="width:95vw; display:flex; margin: 0 auto">
    <input
    type="text"
    name=""
    id="keyword-input"
    aria-disabled="true"
    :disabled="!enabled"
    :placeholder="placeHolder"
    class="alert-keyword-input">
    <div v-if="!enabled" @click.prevent="enableInput()" class="alert-keyword-btn">Editar</div>
    <div v-if="enabled" @click.prevent="disableInput()" class="alert-keyword-btn-save">Guardar</div>
  </div>
</template>

<script>
export default {
  props: {
    editable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      enabled: false
    }
  },
  methods: {
    enableInput () {
      $('#keyword-input')[0].disabled = false
      this.enabled = true
      $('#keyword-input').focus()
    },
     disableInput () {  
      $('#keyword-input')[0].disabled = true
      this.enabled = false
    }
  },
  beforeMount () {
    this.enabled = this.editable
  },
  computed: {
    placeHolder () {
      return this.enabled ? "Pincha en 'Guardar' para guardar" : "Pincha en 'Editar' para cambiar"
    }
  }
}
</script>

<style scoped>
.alert-keyword-input {
  border: none;
  border-bottom: 1px solid black;
  height: 38px;
  width: 70vw;
  text-indent: 10px;
}

.alert-keyword-input::placeholder {
  transform: translateY(-4px);
  text-indent: 5px;
}

.alert-keyword-input:focus {
  outline: none;
}

.alert-keyword-btn {
  border: none;
  border-bottom: 1px solid black;
  height: 38px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  width: 20vw;
  align-items: center;
  color: #A7A7A7;
  font-size:12px;
  align-content: center;
  padding-bottom: 5px
}


.alert-keyword-btn-save {
  border: none;
  border-bottom: 1px solid black;
  height: 38px;
  background: #fff;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between; 
  font-size:12px;
  align-items: center;
  color: #A7A7A7;
  width: 20vw;
  padding-bottom: 5px;
  flex-wrap: wrap;
}
</style>