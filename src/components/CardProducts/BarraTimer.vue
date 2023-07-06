<template>
    <div>
        <div class="" style="position: relative;height: 5px;">
            <span class="icono_bottom_right px-2">
                <img :src="icono_colorPaletta"  style="height: 30px;width:30px">
            </span>
            <div class="container-times ml-2">
                <span :style="`${products_offers.cupon.agotado ? 'filter: grayscale(.9);' : ''}`" class="time-barra"
                    :class="{ 'offer-grid-item-img-discount': !products_offers.oclock, 'offer-grid-item-img-discount-oclock': products_offers.oclock, }">-{{
                        products_offers.discount }}%</span>
                <span class="time-barra-timer"
                    :class="{ 'badget-discount ps-1 pe-1 badget-static': !products_offers.oclock, 'badget-discount ps-1 pe-1 badget-buttom': products_offers.oclock + 'badget-discount ps-1 pe-1' }">
                    <div class="countdown  d-flex  ">
                        <div class="countdown--date ">
                            <Timer width="16.82" height="15.88" />
                            <small class="ms-1">00:29:44</small>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import icono_colorPaletta from '../../assets/iconos/colorPaletta.svg';
import Timer from '../svg/oclock.vue';
export default {
    props: 
    {
    products_offers: {
      type: Object,
      required: true
    }
},
    components:{
        Timer
    },
    setup(props) {
        return {
            icono_colorPaletta,
            ...props
        }
    }
}
</script>

<style lang="scss" scoped>
.icono_bottom_right {
    position: absolute;
    right: 5px;
    bottom: 3px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-times {
    // margin-left: 10px !important;
    position: absolute;
    height: 100%;
    bottom: -3px;
}

.time-barra {
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: Center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15.6561px !important;
}

.time-barra-timer {
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: Center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15.6561px !important;
    margin-left: 10px !important;
}
.buttom_agotado {
    background: #CC2323;
    padding: 0px;
    border-radius: 0px;
    width: 80%;
    height: 12%;
    color: #fff;
}

.countdown--date {
    text-align: center;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    display: flex;
}

.badget-discount {
    position: absolute;
    left: 40px;
    background: #f8f9fa;
    color: #cc2323;
    border: 2px solid #CC2323;
    padding: 0.12rem;
    margin: 0;
    font-size: .68rem;
    font-weight: 700;
}
</style>