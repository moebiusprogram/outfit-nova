<template>
  <section class="registration">
    <TopRegistration />
    <div class="btn-group" role="group" aria-label="button group" @click="clickHandler">
      <button type="button" role="register" data-toggle="true" class="toggle">Cliente nuevo</button>
      <span style="color:transparent">x</span>
      <button type="button" role="login" class="toggle">Iniciar sesión</button>
    </div>
    <Form :role="role" />
  </section>
</template>

<script>
import TopRegistration from '../components/TopRegistration.vue';
import Form from '../components/Form.vue';

export default {
  components: {
    TopRegistration,
    Form,
  },
  methods: {
    clickHandler(e) {
      if (e.target.className !== "toggle") return;
      const buttons = Array.from(e.currentTarget.children);
      for (const button of buttons) {
        button.dataset.toggle = false
      }
      e.target.dataset.toggle = true;
      this.role = e.target.getAttribute('role');
    }
  },
  data() {
    return {
      role: 'register'
    }
  },
}
</script>
