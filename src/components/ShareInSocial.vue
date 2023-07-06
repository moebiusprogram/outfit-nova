<template>
  <section class="socials">
    <header>
      <h2>{{ title }}</h2>
      <ul>
        <li><img src="../assets/wsp.svg" alt="Whatsapp"></li>
        <li><img src="../assets/fb.svg" alt="Facebook"></li>
        <li><img src="../assets/twit.svg" alt="Twitter"></li>
        <li><img src="../assets/copy.svg" alt="Copy"></li>
      </ul>
    </header>
    <Alerts :alerts="alerts" />
  </section>
</template>

<script>
import Alerts from "./Alert.vue"
export default {
  components: {
    Alerts,
  },
  props: ["title", "alerts"],
}
</script>
