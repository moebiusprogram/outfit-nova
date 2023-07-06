<template>
  <div>
    <div class="px-5 py-3 m-2" style="background:#F3F3F3">
      <div class="row text-center bg-white rounded d-flex align-items-center">
        <div class="col-5 py-3 d-flex align-items-center justify-content-center" @click="type='Chollo'">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7912 5.8605C12.134 1.053 4.33845 0 4.33845 0C4.33845 0 7.93695 4.005 3.33795 7.17525C0.430953 9.17475 -0.719547 11.7728 0.525453 14.6108C1.47795 16.7858 3.49545 17.6677 5.67045 18C5.1117 16.9245 4.97145 15.3713 5.3847 13.779C5.42499 13.6182 5.47153 13.4591 5.5242 13.302C6.13395 14.2455 7.1352 14.7615 8.1117 14.5238C9.44895 14.2057 10.2335 12.5872 9.8682 10.9245C9.78466 10.5639 9.64925 10.2173 9.4662 9.8955C9.5187 9.90825 9.5712 9.9135 9.6252 9.93075C11.294 10.407 12.101 12.9022 11.4275 15.5062C11.2281 16.2953 10.8918 17.0431 10.4337 17.7157C13.2987 16.7933 15.2037 14.4825 15.7287 12.4237C16.2807 10.2818 15.8615 7.785 14.7912 5.8605Z" fill="#D43D43"/>
          </svg>
          <span class="mx-1 fw-bold small" :class="{'chollo_active':type=='Chollo'}">
            Chollo
          </span>
        </div>
        <div class="col-2">
          <svg width="1" height="21" viewBox="0 0 1 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1" height="21" fill="#141414"/>
          </svg>
        </div>
        <div class="col-5 py-3 d-flex align-items-center justify-content-center" @click="type='Cupón'">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 10.25L10.25 5.75" stroke="#141414" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.125 6.5C6.33211 6.5 6.5 6.33211 6.5 6.125C6.5 5.91789 6.33211 5.75 6.125 5.75C5.91789 5.75 5.75 5.91789 5.75 6.125C5.75 6.33211 5.91789 6.5 6.125 6.5Z" fill="#141414" stroke="#141414" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.875 10.25C10.0821 10.25 10.25 10.0821 10.25 9.875C10.25 9.66789 10.0821 9.5 9.875 9.5C9.66789 9.5 9.5 9.66789 9.5 9.875C9.5 10.0821 9.66789 10.25 9.875 10.25Z" fill="#141414" stroke="#141414" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.7501 4.39998C2.7501 3.96237 2.92394 3.54269 3.23338 3.23325C3.54281 2.92382 3.96249 2.74998 4.4001 2.74998H5.1501C5.58578 2.74973 6.00367 2.57718 6.3126 2.26998L6.8376 1.74498C6.99094 1.59078 7.17324 1.46841 7.37403 1.38491C7.57482 1.30141 7.79014 1.25842 8.0076 1.25842C8.22506 1.25842 8.44038 1.30141 8.64117 1.38491C8.84196 1.46841 9.02427 1.59078 9.1776 1.74498L9.7026 2.26998C10.0115 2.57718 10.4294 2.74973 10.8651 2.74998H11.6151C12.0527 2.74998 12.4724 2.92382 12.7818 3.23325C13.0913 3.54269 13.2651 3.96237 13.2651 4.39998V5.14998C13.2654 5.58565 13.4379 6.00355 13.7451 6.31248L14.2701 6.83748C14.4243 6.99082 14.5467 7.17312 14.6302 7.37391C14.7137 7.5747 14.7567 7.79002 14.7567 8.00748C14.7567 8.22494 14.7137 8.44026 14.6302 8.64105C14.5467 8.84184 14.4243 9.02414 14.2701 9.17748L13.7451 9.70248C13.4379 10.0114 13.2654 10.4293 13.2651 10.865V11.615C13.2651 12.0526 13.0913 12.4723 12.7818 12.7817C12.4724 13.0911 12.0527 13.265 11.6151 13.265H10.8651C10.4294 13.2652 10.0115 13.4378 9.7026 13.745L9.1776 14.27C9.02427 14.4242 8.84196 14.5465 8.64117 14.63C8.44038 14.7135 8.22506 14.7565 8.0076 14.7565C7.79014 14.7565 7.57482 14.7135 7.37403 14.63C7.17324 14.5465 6.99094 14.4242 6.8376 14.27L6.3126 13.745C6.00367 13.4378 5.58578 13.2652 5.1501 13.265H4.4001C3.96249 13.265 3.54281 13.0911 3.23338 12.7817C2.92394 12.4723 2.7501 12.0526 2.7501 11.615V10.865C2.74985 10.4293 2.5773 10.0114 2.2701 9.70248L1.7451 9.17748C1.5909 9.02414 1.46853 8.84184 1.38503 8.64105C1.30153 8.44026 1.25854 8.22494 1.25854 8.00748C1.25854 7.79002 1.30153 7.5747 1.38503 7.37391C1.46853 7.17312 1.5909 6.99082 1.7451 6.83748L2.2701 6.31248C2.5773 6.00355 2.74985 5.58565 2.7501 5.14998V4.39998" stroke="#141414" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="mx-1 fw-bold small"  :class="{'chollo_active':type=='Cupón'}" >Cupón</span>
        </div>
      </div>
    </div>

  <div class="px-2 py-3 m-2" >

 <div class="row text-center bg-white rounded d-flex align-items-center">
<Transition mode="out-in">
  
      <div class="col-12 pt-4 pb-2 d-flex align-items-center justify-content-center" v-if="type=='Chollo'">
        <span style="font-weight: 600;
font-size: 18px;
line-height: 22px;">

          Copia el enlace del {{type}}
        </span>
      </div>
      <div class="col-12 pt-4 pb-2 d-flex align-items-center justify-content-center" v-else>
        <span style="font-weight: 600;
font-size: 18px;
line-height: 22px;">

          Copia el enlace del {{type}}
        </span>
      </div>
</Transition>
      <div class="col-12 px-4 d-flex align-items-center justify-content-center">
        <div class="input-group mb-3">
          <input type="text" style="background:#F2F3F5;border-right: 0px; padding-top:0px;" class="form-control form-control-lg" placeholder="http://www.deckow.com/et-dicta-illum-dolor" aria-label="Recipient's username" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2" style="border: none;background:#F2F3F5;border-left: 0px;">
              <button class="btn bg-white py-0 px-1">

              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_75_282)">
              <path d="M10 4.5H5.5C4.94772 4.5 4.5 4.94772 4.5 5.5V10C4.5 10.5523 4.94772 11 5.5 11H10C10.5523 11 11 10.5523 11 10V5.5C11 4.94772 10.5523 4.5 10 4.5Z" stroke="#A7A7A7" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.5 7.5H2C1.73478 7.5 1.48043 7.39464 1.29289 7.20711C1.10536 7.01957 1 6.76522 1 6.5V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H6.5C6.76522 1 7.01957 1.10536 7.20711 1.29289C7.39464 1.48043 7.5 1.73478 7.5 2V2.5" stroke="#A7A7A7" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_75_282">
              <rect width="12" height="12" fill="white"/>
              </clipPath>
              </defs>
              </svg>

              </button>

            </span>
          </div>
        </div>
      </div>
      </div>
      </div>
  </div>
</template>


<script>
import NavbarSearch from './NavbarSearch.vue';

import img from '../assets/registration-bg.png';
import arrow_right from '../assets/arrow-right.svg';
export default {
  data() {
    return {
      arrow_right: arrow_right,
      type:'Chollo'
    }
  },
  components: {
    NavbarSearch,
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler);
  },
  methods: {
    scrollHandler() {
      this.lastKnownScrollPosition = window.scrollY;

      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.calculateOffset(this.lastKnownScrollPosition);
          this.ticking = false;
        });

        this.ticking = true;
      }
    }, 
  },
 
}
</script>
