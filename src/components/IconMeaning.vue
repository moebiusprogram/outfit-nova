<template>
  <section style="background:#E3E3E3; height:100vh">
    <section class="icon-meaning-wrapper" style="font-size:12px;">
      <div class="row">
        <div class="col-2">
          <img src="../assets/fire-0.svg" alt="">
        </div>
        <div class="col-10">
          <p>
            <strong>Medidor de likes - </strong>Una escala del 0 al 5 de los likes que tiene la oferta. (Sin llama es 0/5)
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <img src="../assets/fire-5.svg" alt="">
        </div>
        <div class="col-10">
          <p>
            <strong>¡Muchísimos Likes! - </strong>Nuestros usuarios han reventado el boton de like. 5 llamas. ¡Chollazo!
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <img src="../assets/icon-new.svg" alt="">
        </div>
        <div class="col-10">
          <p>
            <strong>¡Nuevo! - </strong>Publicado hace menos de 4 horas
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <img src="../assets/selection.svg" alt="">
        </div>
        <div class="col-10">
          <p>
            <strong>Outfitnova Selection - </strong>Nuestro equipo ha seleccionado este chollo como favorito
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <img src="../assets/hurry-up.svg" alt="">
        </div>
        <div class="col-10">
          <p>
            <strong>¡Date prisa! - </strong>Una escala del 0 al 5 de los likes que tiene la oferta. (Sin llama es 0/5)
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <img src="../assets/scissors.svg" alt="">
        </div>
        <div class="col-10">
          <p>
            <strong>¡Con cupón! - </strong>Una escala del 0 al 5 de los likes que tiene la oferta. (Sin llama es 0/5)
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <img src="../assets/big-s.svg" alt="">
        </div>
        <div class="col-10">
          <p>
            <strong>Patrocinado - </strong>Una escala del 0 al 5 de los likes que tiene la oferta. (Sin llama es 0/5)
          </p>
        </div>
      </div>
    </section>
  </section>
</template>
<script>

export default {
  name: 'IconMeaning'
}
</script>
<style scoped>
.icon-meaning-wrapper {
  position: absolute;
  width: 90vw;
  height: 434px;
  left: 5vw;
  background: #FFFFFF;
  border-radius: 16px;
  top:15%;
  margin: 0 auto;
  padding: 20px 12px;
}

.icon-meaning-wrapper img {
  display: block;
  margin: 0 auto;
}

</style>