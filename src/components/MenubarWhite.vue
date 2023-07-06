<template>
  <div :class="{menubar: true, menubarShow: show}" >
    <nav :class="{show: showMenu}" style="background: #fff; box-shadow: 0 -1px 0 0 #EDEDED; ">
      <ul class="p-0 m-0">
        <MenuItem>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
    style="margin-bottom:-1px;"
>
<path d="M3.67127 10.4033L10.6713 4.18109C11.429 3.50752 12.571 3.50752 13.3287 4.18109L20.3287 10.4033C20.7557 10.7828 21 11.3269 21 11.8981V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V11.8981C3 11.3269 3.2443 10.7828 3.67127 10.4033Z" stroke="#0D0D0D" stroke-width="1.7"/>
</svg>

        </MenuItem>
        
          <button v-if="name=='categories'" style="
            width:89px;
            height:32px;
            transform:translateY(12px);
            background: #EEEFEE;
            border-radius: 24px;
            border: none;
            font-size:12px;
            font-weight:600;
            line-height:28px;"
          >
            <svg width="34" height="34" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: -4px;margin-left: -4px;">
              <circle cx="12" cy="12" r="12" fill="#0D0D0D"/>
              <path d="M8.25 9.75H4.5V8.25H8.25V9.75ZM8.25 12H4.5V13.5H8.25V12ZM18.4425 17.25L15.57 14.3775C14.97 14.7675 14.265 15 13.5 15C11.43 15 9.75 13.32 9.75 11.25C9.75 9.18 11.43 7.5 13.5 7.5C15.57 7.5 17.25 9.18 17.25 11.25C17.25 12.015 17.0175 12.72 16.6275 13.3125L19.5 16.1925L18.4425 17.25ZM15.75 11.25C15.75 10.0125 14.7375 9 13.5 9C12.2625 9 11.25 10.0125 11.25 11.25C11.25 12.4875 12.2625 13.5 13.5 13.5C14.7375 13.5 15.75 12.4875 15.75 11.25ZM4.5 17.25H12V15.75H4.5V17.25Z" fill="white"/>
            </svg>

            Explorar 
          </button>
        <MenuItem v-else>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.5" cy="12.5" r="7.5" stroke="#0D0D0D" stroke-width="1.7"/>
            <path d="M15.5 17.5L19 21" stroke="#0D0D0D" stroke-width="1.7" stroke-linecap="round"/>
            <path d="M18 6H21.5" stroke="#0D0D0D" stroke-width="1.7" stroke-linecap="round"/>
            <path d="M19.5 10H21.5" stroke="#0D0D0D" stroke-width="1.7" stroke-linecap="round"/>
            <path d="M19.5 14H21.5" stroke="#0D0D0D" stroke-width="1.7" stroke-linecap="round"/>
          </svg>


        </MenuItem>
        <button v-if="name=='Notifications'" style="
            width:89px;
            height:26px;
            transform:translateY(13px);
            background: #F2F2F2;
            border-radius: 24px;
            border: none;
            font-size:12px;
            font-weight:600;
            line-height:28px;"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-top:-2px;margin-left: -15px;">
              <rect width="24" height="24" rx="14" fill="black"/>
              <path d="M5 11C5 7.13401 8.13401 4 12 4V4C15.866 4 19 7.13401 19 11V14.6754C19 14.8904 19.0347 15.104 19.1026 15.3079L19.5613 16.6838C19.7771 17.3313 19.2951 18 18.6126 18H5.38743C4.70487 18 4.2229 17.3313 4.43874 16.6838L4.89737 15.3079C4.96534 15.104 5 14.8904 5 14.6754V11Z" stroke="#FFFFFF" stroke-width="1.7" stroke-linejoin="round"/>
            <path d="M8.12598 18C8.57002 19.7252 10.1361 21 12 21C13.8638 21 15.4299 19.7252 15.8739 18" stroke="#FFFFFF" stroke-width="1.7"/>
            </svg>
            <div class="notification-pulse notification-pulse-active">
              <div class="notification-pulse-counter menubar-counter-active">2</div>
            </div>
            Alertas 
          </button>
        <MenuItem v-else>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 11C5 7.13401 8.13401 4 12 4V4C15.866 4 19 7.13401 19 11V14.6754C19 14.8904 19.0347 15.104 19.1026 15.3079L19.5613 16.6838C19.7771 17.3313 19.2951 18 18.6126 18H5.38743C4.70487 18 4.2229 17.3313 4.43874 16.6838L4.89737 15.3079C4.96534 15.104 5 14.8904 5 14.6754V11Z" stroke="#0D0D0D" stroke-width="1.7" stroke-linejoin="round"/>
            <path d="M8.12598 18C8.57002 19.7252 10.1361 21 12 21C13.8638 21 15.4299 19.7252 15.8739 18" stroke="#0D0D0D" stroke-width="1.7"/>
          </svg>

          <div class="notification-pulse notification-pulse-not-active">
            <div class="notification-pulse-counter menubar-counter-not-active">2</div>
          </div>
        </MenuItem >
          <button v-if="name=='profile'" style="
            width:89px;
            height:26px;
            transform:translateY(15px);
            background: #EEEFEE;
            border-radius: 24px;
            border: none;
            font-size:12px;
            font-weight:600;
            line-height:28px;"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right:12px; margin-left: -12px; transform: translateY(-2px);">
              <rect width="24" height="24" rx="12" fill="black"/>
              <path d="M17 9C17 12.3137 14 15 12 15C10 15 7 12.3137 7 9C7 5.68629 9 4 12 4C15 4 17 5.68629 17 9Z" stroke="#FFFFFF" stroke-width="1.7"/>
              <path d="M8.5 13.5C4.21573 14.913 3 17 3 18C3 19 6.5 21 12 21C17.5 21 21 19 21 18C21 17 19.2843 14.913 15 13.5" stroke="#FFFFFF" stroke-width="1.7"/>
            </svg>
            Perfil  
          </button>
          <MenuItem v-else>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 9C17 12.3137 14 15 12 15C10 15 7 12.3137 7 9C7 5.68629 9 4 12 4C15 4 17 5.68629 17 9Z" stroke="#0D0D0D" stroke-width="1.7"/>
              <path d="M8.5 13.5C4.21573 14.913 3 17 3 18C3 19 6.5 21 12 21C17.5 21 21 19 21 18C21 17 19.2843 14.913 15 13.5" stroke="#0D0D0D" stroke-width="1.7"/>
              </svg>
          </MenuItem>
      </ul>
    </nav>
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";
import PriceGroup from "./PriceGroup.vue";
import PrimaryButton from "./PrimaryButton.vue";
import { useRouter } from 'vue-router';
export default {
  props: {
    showMenu: {
      type: Boolean,
      default: true
    },
    withProduct: {
      type: Boolean,
      default: false
    },
    
  },
  components: {
    MenuItem,
    PriceGroup,
    PrimaryButton,
  },
  data () {
    return {
      name: ''
    }
  },
  beforeMount () {
    const router = useRouter()

    let currentPathObject = router.currentRoute.value; 

    console.log(currentPathObject)

    this.name = currentPathObject.name
    
  }
  
}
</script>

<style scoped>
.notification-pulse-not-active {
  height: 11px;
  width: 11px;
  position: relative;
  right: 8px;
  top: 1px;
}

.notification-pulse-active {
  height: 12px;
  width: 12px;
  right: 8px;
  top: 8px;
  position: relative;
}

.menubar-counter-active {
  font-size: 8px;
  margin-left: 0px;
  margin-top: -8px;
}

.menubar-counter-not-active {
  font-size: 7px;
  margin-left: 2px;
  margin-top: 0;
}
</style>