<template>
    <div class="col-12 mx-0 px-0  d-flex justify-content-between flex-column "
        :class="{ 'pe-1': (index % 2 == 0), 'ps-1': (index % 2 != 0) }" style="">
        <figure class="offer-grid-item-img position-relative text-center h-100">
            <!-- <img :src="products_offers.image" alt="grid item" style="height:220px; width: 170px;"> -->
            <img class="img_card--products" :src="products_offers.image" alt="grid item" loading="lazy"
                :style="`${products_offers.cupon.agotado ? 'filter: grayscale(.9);' : ''} `">
            <span class="offer-grid-item-img-company label_top" v-html="products_offers.label_top"
                :style="` opacity:85%; background:${products_offers.label_top_bg}; 
                       color:${products_offers.label_top_color}; + ${products_offers.cupon.agotado ? 'filter: grayscale(.8);' : ''} `"></span>
            <span v-if="products_offers.black_friday" class="black_friday fw-bold" v-html="products_offers.black_friday_top"
                :style="'  color:' + products_offers.black_friday_color + '; border:2px solid red;'"></span>
            <span class="iconos_top_right">
                <span v-if="products_offers.icono_medalla" >
                    <IconoMedalla width="22" height="22"  />
                </span>
                <span class="mx-1" v-if="products_offers.icono_alerta">
                    <IconoAlerta  width="22" height="22" />
                </span>
                <span class="mx-1" v-if="products_offers.icono_tijera">
                    <IconoTijera width="22" height="22"   />
                </span>
            </span>
         

            <span class="offer-grid-item-img-oclock" v-if="products_offers.oclock">2d : 20h : 15s</span>
            <div v-if="products_offers.cupon.agotado"
                class="agotado_container d-flex justify-content-center align-items-center">
                <button v-if="products_offers.cupon.agotado" class="btn buttom_agotado">
                    AGOTADO
                </button>
            </div>

        </figure>
        <span class="offer-grid-item-alert" v-if="alerta_notification">
            <img :src="campana_notificacion" alt="" style="height: 10px;width:10px">
            Alerta para marca <strong>Nike</strong> filtrado por...
        </span>
            <div class="" style="position: relative;height: 45px;">
            
            <span class="icono_bottom_right px-2">
                <img :src="icono_colorPaletta" v-if="products_offers.icono_palettaColor" style="height: 32px;width:32px">
            </span>
            <div class="container-times ml-2">
            <span :style="`${products_offers.cupon.agotado ? 'filter: grayscale(.9);' : ''}`"
            class="time-barra"
                :class="{ 'offer-grid-item-img-discount': !products_offers.oclock, 'offer-grid-item-img-discount-oclock': products_offers.oclock, }">-{{ products_offers.discount }}%</span>
            <span
            class="time-barra-timer"
                :class="{ 'badget-discount ps-1 pe-1 badget-static': !products_offers.oclock, 'badget-discount ps-1 pe-1 badget-buttom': products_offers.oclock + 'badget-discount ps-1 pe-1' }">
                <div class="countdown  d-flex  ">
                    <div class="countdown--date ">
                        <Timer width="16.82" height="15.88"/>
                        <small class="ms-1">00:29:44</small>
                    </div>
                </div>
            </span>
        </div>
        </div> 
    </div>
</template>

<script>


import NavTallas from './NavTallas.vue'
import Cupons from './svg/cupons.vue';
import Timer from './svg/oclock.vue';
import CuponsCode from './svg/cupons_code.vue';
import oclock from '../assets/oclock.svg';
import setting_cardProducts from '../assets/single-product/more.svg'
import coche_cardProducts from '../assets/single-product/coche.svg'
import IconoMedalla from './svg/medalla.vue';
import IconoTijera from './svg/IconoTijera.vue';
import IconoAlerta from './svg/alerta.vue';
import campana_notificacion from '../assets/iconos/alert_campana.svg';
import icono_colorPaletta from '../assets/iconos/colorPaletta.svg';
export default {
    props: ["products_offers", "index"],
    props: {
        products_offers: {
            type: Object,
            default: {}
        },
        index: {
            type: Number,
            default: 0
        },
        alerta_notification: {
            type: Boolean,
            default: false
        },
    },
    components: {
        Cupons,
        CuponsCode,
        IconoAlerta,
        IconoMedalla,
        IconoTijera,
        Timer,
        NavTallas

    },


    data() {
        return {
            oclock: oclock,
            setting_cardProducts: setting_cardProducts,
            coche_cardProducts: coche_cardProducts,
            bloquedtouchActiveSlideTallas: true,
            icono_colorPaletta: icono_colorPaletta,
            campana_notificacion: campana_notificacion
        }
    },

    methods: {
        bloquedSlideMainProducts() {
            this.$emit("bloquearSwiperSlideMainProducts", this.bloquedtouchActiveSlideTallas = false)
        },
        bloquedTouchSlideMainProducts() {
            this.$emit("bloquearSwiperSlideMainProducts", this.bloquedtouchActiveSlideTallas = false)
        }
    }
}
</script>

<style lang="scss" scoped>


.container-times{
    margin-left:10px !important;
    position:absolute;
    height:100%;
    margin-bottom:10px;
}
.label_top{
    height:34px;
    width:109px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
/* identical to box height */


color: #E4B408;
}
.time-barra{
    height:34px;
    display:flex;
    justify-content:center;
    align-items:center;
    align-content:Center;
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 15.6561px !important;
}
.time-barra-timer{
    height:34px;
    display:flex;
    justify-content:center;
    align-items:center;
    align-content:Center;
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 15.6561px !important;
margin-left:10px !important;
}
.offer-grid-item-body-prices-delivery {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
    color: #9B9B9B;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
}

.offer-grid-item-body-new {
    background-color: #fff;
    padding: 8px 8px !important;
}

.products-prices-old-prices {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
    /* identical to box height */

    text-decoration-line: line-through;

    color: #9B9B9B;
}

.offer-grid-item-alert {
    font-size: 0.5rem;
    text-align: center;
    background: #F3EEEA;
    padding: 4px;
}

.icono_bottom_right {
    position: absolute;
    right: 2px;
    bottom: 0px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.color_cost_init {
    color: #9B9B9B;
}

.iconos_top_right {
    position: absolute;
    right: 5px;
    top: 0px;
    margin: 2px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.text_footer--cupons {
    font-weight: 400;
    font-size: 0.5rem;
    line-height: 12px;
    color: #9B9B9B;
}

.img_card--products {
    width: 302px;
    height: 413px;
    // object-fit: contain;
    background-size: contain;
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

.badget-buttom {
    bottom: 30px !important;
}

.badget-static {
    bottom: 0px !important;
}


.agotado_container {
    background: rgb(0 0 0 / 51%);
    mix-blend-mode: normal;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
}</style>