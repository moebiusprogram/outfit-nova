<template>
  <section class="alerts bg-white " style="height:100%;">
    <div>
     <NavbarSearch :route_to="'/profile'" :show="true" :white="true" name="Alertas" :search="true" :show_name_back="'Atrás'" :shadow="true"/>

    </div>
    
    <div style="margin-top:50px;">
      <AlertCounter />
    </div>
    <CreateAlert/>
    <hr />
    <div v-for="(alert, i) in alerts" :key="i">
      <CreatedAlerts />
      <hr />
    </div>

  </section>
</template>
<script>

import Navbar from '../components/Navbar.vue';
import AlertCounter from '../components/AlertCounter.vue';
import CreateAlert from '../components/CreateAlert.vue';
import CreatedAlerts from '../components/CreatedAlerts.vue';
import NavbarSearch from '../components/NavbarSearch.vue';


export default {
  name: 'Alerts',
  components: {
    AlertCounter,
    CreatedAlerts,
    CreateAlert,
    NavbarSearch,
    Navbar},
  data () {
    return {
      alerts: [1, 2, 3]
    }
  }
}
</script>
