<template>
  <section class="naming">
    <div class="naming-top-section">
      <figure><img src="../assets/computer-naming.png" alt="computer"></figure>
      <p>Vamos a usar tu nombre en Google
        Pero puedes cambiarlo si así lo quieres</p>
    </div>

    <div class="naming-body">
      <CustomInput type="text" placeholder="Nombre de usuario" name="name"></CustomInput>
      <figure class="user-wrapper">
        <img src="../assets/Vector.png" alt="user" class="user-img">
      </figure>
      <h2 class="user-welcome">¡Bienvenida Rosalía!</h2>
      <p>Ya formas parte de nuestra comunidad.
        <br>
        <br>
        Podrás participar en sorteos de cajas sorpresa
        con ropa, agregar alertas personalizadas,
        seguir marcas, usuarios, tiendas, comentar,
        enviar ofertas y mucho mucho más
      </p>
    </div>
  </section>
</template>

<script>
import CustomInput from '../components/CustomInput.vue';
export default {
  components: {
    CustomInput,
  }
}
</script>
