<template>
  
  <div class="search-slide">
      <div
    class="search-slide-cat"
    :style="{color:fillColor, background: fillBgColor, border: `1px solid ${fillColor}`}"
    @click="openDropdown()"
    >
      <div class="search-slide-name">
        {{load.name}}
      </div>
      <div class="search-slide-chosen">
        {{load.chosen}}
      </div>
      <svg width="10" height="6" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg" class="dropdown-icon">
        <path d="M0.0839844 0.833496L3.00065 3.75016L5.91732 0.833496H0.0839844Z" :fill="fillColor"/>
      </svg>
    </div>
    <!-- <div class="choose-category-dropdown" v-if="open">
      <span v-for="(item, i) in load.options" :key="i" @click="switchCat" class="choose-category-option">{{item}}</span>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    toggled: String,
    load: Object
  },
  data () {
    return {
      styles: {
        style1: {
          color: '#80796D',
          bgColor: '#F3EFE9'
      },
        style2: {
          color: '#BBBBBB',
          bgColor: '#FFFFFF'
      },
    },
    open:true
    }
  },
  mounted() {
    console.log(this.styles[this.toggled])
  },
  computed: {
    fillColor () {
      return this.styles[this.toggled].color
    },
    fillBgColor () {
      return this.styles[this.toggled].bgColor
    }
  },
  methods: {
    openDropdown () {
      // const list = [...$('.choose-category-option')]
      // list.forEach( l => l.style.opacity === '1' ? l.style.opacity = '0' : l.style.opacity = '1' )
      this.open = !this.open
    }
  }
}
</script>

<style>
.search-slide-cat {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;
  padding: 17px 18px;
  gap: 10px;
  margin-left: 15px;
  width: 152px;
  height: 58px;

  border-radius: 16px;
}

.search-slide-name{
  font-size: 8px;
  position: relative;
  top: -7px;
  margin-right: 20px;
}
.choose-category-dropdown {
  position:absolute;
  display:flex;
  flex-direction: column;
  top:6px;
  right:16px;
  z-index:100;
}

.choose-category-option {
  position:relative;
  top: 5px;
}

.search-slide-chosen{
  font-weight: 700;
  font-size: 12px;
  position: relative;
  top: -11px;
}

.dropdown-icon {
  position:relative;
  bottom:15px;
  left: -5px;
}
</style>