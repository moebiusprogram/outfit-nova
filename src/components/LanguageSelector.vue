<template>
  
    <button class="btn-select" value="" style="
    position: absolute;
    top: 0;
    right: 0;
    z-index: 11;
    border: none;
    padding: 3px;
    background-color: #fff;
    border-radius:3px;
    "
    @click.prevent="toggleView()"
    >
      <img src="../assets/spanish-flag.svg" alt="" value="sp" style="height:15px;" id="btn-select-flag"/>
      <img v-if="toggle" class="next-icon" src="../assets/open-dropdown.svg" alt="" style="height:10px; margin-left:5px;">
      <img v-else class="next-icon" src="../assets/next.svg" alt="" style="height:15px; margin-left:5px;">
    </button>
  
    <ul id="language-list" style="
    display: block;
    right: 0;
    position: absolute;
    top: -60px;
    z-index: 11;
    opacity: 0
">
      <li v-for="(lang, i) in languages" :key="i" :value="lang.value" class="lang-option">
        <img :src="lang.thumbnail" alt="" :value="lang.value" style="height:15px; margin-right: 22px" @click="switchLang"/>
        
      </li>
    </ul>



</template>



<script>
import spanish from '../assets/spanish-flag.svg'
import english from '../assets/english-flag.svg'
import french from '../assets/french-flag.svg'

export default {
  data () {
     return{
      languages: {
        spanish: {
          value: 'sp',
          thumbnail: spanish,
          lang: 'Spanish'
        },
        english: {
          value: 'en',
          thumbnail: english,
          lang: 'English'
        },
        french: {
          value: 'fr',
          thumbnail: french,
          lang: 'French'
        }
      },
    toggle: false
     }
  },
  methods: {
    toggleView () {
      const list = [...$('#language-list')]
      this.toggle = !this.toggle

      list.forEach( l => l.style.top === '25px' ? l.style.top = '-60px' : l.style.top = '25px' )
      list.forEach( l => l.style.opacity === '1' ? l.style.opacity = '0' : l.style.opacity = '1' )
    },
    switchLang (e) {
      const newFlag = e.target.getAttribute('src')
      $('#btn-select-flag').attr('src', newFlag)
      this.toggleView()
    }
  },
  mounted () {
   
  }
}
</script>

<style scoped>

ul {
  transition: top ease-out 0.5s, opacity 0.6s;

}

 </style>
