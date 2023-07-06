<template>
  <div id="offer-item-wrapper">
    <div id="offer-item-photo">
      <img :src="photo" alt="offer item photo">
      <div id="offer-item-discount">
        -40%
      </div>
    </div>
    <div id="offer-item-description">
      <p id="offer-item-title">
        LICRAS ALPHASKIN OF SPORT
      </p>
      <p style="margin-top:-15px; margin-bottom: 0px;">
        <span id="offer-item-category">Deportes Outlet</span>
        <span id="offer-item-shop">Wild Savage</span>
      </p>
      <p id="offer-item-price">
        <span id="offer-item-final-price">109€</span>
        <span id="offer-item-original-price">230€</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfferItem',
  props: ['photo']
}
</script>

<style scoped>
#offer-item-wrapper{
  background: #FAFAFA;
  display: flex;
  justify-content: space-between;
  padding: 12px 12px 0 12px;
}

#offer-item-discount {
  width: 42px;
  color: #fff;
  background: #CC2323;
  position: relative;
  bottom: 8px;
  padding: 5px;
  margin: 0 auto;
  font-weight: 700;
  font-size: 10px;
  text-align: center;
  margin-left: -12px;
  margin-bottom: -22px;
  z-index: 2;
}

#offer-item-description {
  text-align: right;
}

#offer-item-title {
  font-size: 12px;
  font-weight: 600;
}

#offer-item-category {
  font-size: 10px;
  padding: 5px;
  color: #288ED8;
  background: #C5E8F8;
  font-weight: 500;
}

#offer-item-shop {
  font-size: 10px;
  color: #ABABAB;
  margin-left: 3px;
  font-weight: 600;
}

#offer-item-final-price {
  font-size: 12px;
  color: #CC2323;
  font-weight: 700;
  margin-right: 10px;
}

#offer-item-original-price {
  font-size: 10px;
  color: #ABABAB;
  font-weight: 500;
  text-decoration-line: line-through;
}
</style>