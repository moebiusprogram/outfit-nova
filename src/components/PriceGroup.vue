<template>
  <div class="price-group">
    <div class="price-iva">
      <span class="price-iva-price">{{ discount }} €</span>
      <!-- <span class="iva">IVA incluido</span> -->
      </div>
    <div class="discount d-flex p-0 m-0">
      <div class="price-discount  d-flex p-0 m-0">
        <span style="text-decoration:line-through; display:inline-flex;width:max-content;">
          {{priceSet}}&nbsp;€ 
        </span>
         -{{ discountPorcent }}%
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["price", "discountPorcent"],
  computed: {
    priceSet() {
      const noTruncarDecimales = {maximumFractionDigits: 20};
      var numero = this.price;
      return numero.toLocaleString('es', noTruncarDecimales);
    }, 
    discount() {      
      const noTruncarDecimales = {maximumFractionDigits: 20};      
      var numero = this.price - (this.price * (this.discountPorcent / 100));
      return numero.toLocaleString('es', noTruncarDecimales);
    }
  },
}
</script>
