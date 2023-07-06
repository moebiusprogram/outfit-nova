<template>
  <section id="alert" style="margin-left: -24px;">
    <div id="counter">
      <ul>
        <li class="green bold size-14 counter-item"> <span style="font-size:18px;">12</span> recientes</li>
        <li class="bold size-14 counter-item"><span style="font-size:18px;">1004</span> total</li>
      </ul>
    </div>
    <div id="description" style="margin-top:15px; width: -webkit-fill-available;">
      <ul>
        <li><strong>Categoría: </strong>Ropa y Accesorios</li>
        <li><strong>Marca: </strong>Nombres de marcas</li>
        <li><strong>Tiendas: </strong>Nombres de tiendas</li>
        <li><strong>Palabra Clave: </strong>Palabras claves</li>
        <li><strong>Tallas: </strong>Tallas</li>
        <li><strong>Precio: </strong>Desde 30 € a 50 €</li>
      </ul>
    </div>
    <div id="next" style="align-self:center">
      <router-link :to="'/'">
      <img class="next-screen" src="../assets/next.svg" alt="" style="display:block;">
    </router-link>
    </div>
  </section>
  <section id="toolbar">
    <div id="icons">
      <img src="../assets/menu-item.svg" alt="menu icon" style="margin-right:16px;">
      <img src="../assets/phone-outline.svg" alt="phone icon" style="margin-right:60px;">
    </div>
    <div id="tools">
      <span class="blue underlined size-12" style="margin-right:20px;">Editar</span>
      <span class="red underlined size-12">Eliminar</span>
      <img  src="../assets/clock.svg" alt="clock" width="10px" height="10px" style="margin-left: 15px;"/>
      <span class="gray size-6 ml-3">Creada el 28/10/2023</span>
    </div>
  </section>
</template>
<script>

export default {
  name: 'CreatedAlerts'
}
</script>

<style scoped>
#alert {
  display: flex;
}

#counter {
  width:50%;
}

#counter ul, #description ul{
  display:block;
}

#description ul li {
  font-family: 'Inter';
  font-size: 12px;
  line-height: 1.4rem;
}
</style>