<template>
  <nav aria-label="Page navigation example">
    <ul class="brand-pagination">
      <li class="page-item"><a class="page-link" href="#">{{ firstPage }}</a></li>
      <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
      <li class="page-item"><a class="page-link current" href="#">Página {{ pNumber }}</a></li>
      <li class="page-item"><a class="page-link" href="#">Próxima</a></li>
      <li class="page-item"><a class="page-link" href="#">{{ lastPage }}</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pNumber: 2,
      firstPage: 1,
      lastPage: 4,
    }
  },
}
</script>
