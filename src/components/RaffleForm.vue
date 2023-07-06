<template>
  <form action="#" class="raffles-form">
    <section>
      <SizeSelector v-for="(clothe, i) in clothes" :key="i" class="size-selector" :name="clothe.name" :selectedSizes="clothe.selectedSizes"/>
    </section>
    <section style="margin: 30px 0 12px 0; ">
      <label for=""> ¿Cuál es tu fecha de nacimiento?
        <CustomInput type="date" :name="'date'" />
      </label>
    </section>
    <button type="submit" class="raffles-form-next-btn" style="margin: 0 -12px 0 -12px;">
      Siguiente
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3605 8L11.4805 9.88L17.5871 16L11.4805 22.12L13.3605 24L21.3605 16L13.3605 8Z" fill="white" />
      </svg>
    </button>
  </form>
</template>

<script>
import SizeSelector from '../components/SizeSelector.vue'
import CustomInput from '../components/CustomInput.vue'
export default {
  components: { SizeSelector, CustomInput },
  data () {
    return {
      clothes: [
        {
          name: 'calzado',
          selectedSizes: []
        },
        {
          name: 'camiseta',
          selectedSizes: ['M']
        },
        {
          name: 'pantalones',
          selectedSizes: ['38', '40']
        }
      ],
      birthday: ''
    }
  },
  methods: {
   
  }
}
</script>
