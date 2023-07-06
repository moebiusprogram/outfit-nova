<template>
    <div>

        <div class="container" >
              <div class="flex justify-between mb-4 container__searchTallas">
                <span class="fw-bold ml-2 pt-0.2"> Tallas disponibles </span>
                <div class="body_input--SearchTalla w-100 flex align-center rounded-2 bg-gray-101 hpx-50">
                  <input type="text" placeholder="Buscar" :style="{ '--background-image': `url(${imagenSearch})` }"
                    class="search-input ml-3 pt-0.2 h-100 bg-transparent fs-125" />
                </div>
              </div>

              <table class="fs-90 fs-lg-110 table w-100" >
                <thead>
                  <tr class="w-100" style="">
                    <td class="fw-bold text-center" style="">
                      <div class="inline-flex align-center header__tablet mr-1 mr-lg-0">
                        <div class="mr-1 mr-lg-3 pt-0.2 text-nowrap">Talla y color</div>

                        <svg width="10" height="5" class="cursor-pointer" viewBox="0 0 10 5" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 5L0 0H10L5 5Z" fill="#CDCDCD" />
                        </svg>
                      </div>
                    </td>
                    <td class="fw-bold text-center">
                      <div class="flex align-center header__tablet mr-1 mr-lg-0">
                        <div class="mr-1 mr-lg-3 pt-0.2">Precio oferta</div>

                        <svg width="10" height="5" class="cursor-pointer" viewBox="0 0 10 5" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 5L0 0H10L5 5Z" fill="#CDCDCD" />
                        </svg>
                      </div>
                    </td>

                    <td class="fw-bold text-center" style="">
                      <div class="flex align-center header__tablet mr-1 mr-lg-0">
                        <div class="mr-1 mr-lg-3 pt-0.2">Descuento</div>

                        <svg width="10" height="5" class="cursor-pointer" viewBox="0 0 10 5" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 5L0 0H10L5 5Z" fill="#CDCDCD" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                </thead>

                <tbody>
                  <tr style="" v-for="(item, index) in dataSingleProduct" :key="index" :class="index === 1 && Activar_resaltar
                      ? 'activo__resaltado--table py-1 '
                      : 'py-1'
                    ">
                    <td class="py-0 container_tdimg--producto px-2 line-0 talla" data-title="Tu talla"
                      style="position: relative">
                      <img :src="item.imgtabla" width="32px" height="32px" alt="" style="width: 32px; height: 32px" />
                      <span v-if="index === 1 && Activar_resaltar" class="talla__selection" style="">Tu talla</span>
                      <div class="info__product">
                        <span>44.5 EU 602</span>
                        <span>Punk Plin</span>
                      </div>
                    </td>

                    <td class="py-0 px-1 w-20 text-through">
                      <div class="container__precio--oferta">
                        <span class="precio__anterior">55.22€</span>&nbsp;-&nbsp;<span class="precio__nuevo">22.40€</span>
                      </div>
                    </td>

                    <td class="py-0 pr-3">
                      <div
                        class="justify-center inline-flex btn__descuento align-center hpx-40 px-4 rounded-1 min-width-lg-140 cursor-pointer">
                        <span>
                          30%
                          <svg width="3" height="6" viewBox="0 0 9 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M2.00015 0.585938L8.70726 7.29304C9.09778 7.68357 9.09778 8.31673 8.70726 8.70726L2.00015 15.4144L0.585938 14.0002L6.58594 8.00015L0.585938 2.00015L2.00015 0.585938Z" />
                          </svg>
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="w-lg-50 ml-lg-5 container" >
              <div class="container_show-Products_Descuentos">
                <div class="text__showProducts--navigation">
                  Mostrando 1 al 10 de 90 artículos
                </div>
                <div class="text__showTallas--descuento">
                  Ver tallas y colores por debajo del 40% de descuento
                </div>
              </div>

              <hr class="separador_descuento" />
              <div class="flex-lg mb-6 align-start">
                <div class="text-gray-130 text__gastos--envio">Gastos de envío</div>
                <div class="text__entrega--envio">Gratis. Gratis a partir de 60€</div>

                <div class="container_box--gastos">
                  <div class="text-gray-130 text__gastos--envio">Entrega</div>
                  <div class="text__entrega--envio">
                    Entrega entre 4 dias laborales desde
                    <img src="../../assets/images/lang.png" srcset="../../assets/images/lang@2x.png 2x" alt="" />
                  </div>
                </div>

                <div class="container_box--pago">
                  <div class="text-gray-130 mb-1 text__gastos--envio">Forma de pago</div>
                </div>
                <div class="mt-2 mb-2">
                  <span class="sections__cards--pago">
                    <img v-for="(paymentLogo, index) in paymentPlatformLogos" :key="index" :src="paymentLogo" alt="" /></span>
                </div>

                <div class="text-gray-130 text__gastos--envio">Devoluciones</div>
                <div class="text__entrega--envio">
                  Realiza tus devoluciones totalmente gratis
                </div>

                <div class="container__btn--alertaOn mt-4">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#387CFF" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 5.71986L17.4 1.85986L16.11 3.38986L20.71 7.24986L22 5.71986ZM7.88 3.38986L6.6 1.85986L2 5.70986L3.29 7.23986L7.88 3.38986ZM12.5 7.99986H11V13.9999L15.75 16.8499L16.5 15.6199L12.5 13.2499V7.99986ZM12 3.99986C7.03 3.99986 3 8.02986 3 12.9999C3 17.9699 7.02 21.9999 12 21.9999C14.3869 21.9999 16.6761 21.0517 18.364 19.3638C20.0518 17.676 21 15.3868 21 12.9999C21 10.6129 20.0518 8.32373 18.364 6.6359C16.6761 4.94807 14.3869 3.99986 12 3.99986ZM12 19.9999C8.13 19.9999 5 16.8699 5 12.9999C5 9.12986 8.13 5.99986 12 5.99986C15.87 5.99986 19 9.12986 19 12.9999C19 16.8699 15.87 19.9999 12 19.9999Z" />
                  </svg>

                  <div class="activation--alerta">
                    Activar una alerta para chollos similares
                  </div>
                </div>
              </div>

              <div class="pt-2 container_alerta-chollos">
                <hr class="mt-4 separador_alerta--chollos" />
                <span>O</span>
              </div>

              <div class="w-100">
                <div class="container__alerta--linkInfo pt-1">
                  <span class="link__mas--info">Configura tu propia alerta<strong>desde aquí</strong></span>
                </div>
              </div>
            </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { dataSingleProduct } from "../../dataSingleProduct";
import paypal from '../../assets/single-product/paypal.svg'
import visa from '../../assets/single-product/visa.svg'
import mastercard from '../../assets/single-product/mastercard.svg'
import american from '../../assets/single-product/american.svg'
export default {
    setup () {
        const paymentPlatformLogos = [paypal, visa, mastercard, american];
        const Activar_resaltar = ref(true);
        const imagenSearch = new URL(
        "../assets/images/clarity_search-line.svg",
        import.meta.url
        );

        return {
            paymentPlatformLogos,
            dataSingleProduct,
            Activar_resaltar,
            imagenSearch
        }
    }
}
</script>

<style lang="scss" scoped>

.container__searchTallas span {
  display: inline-flex;
  width: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  height: 100%;
}

.container__searchTallas {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  height: 100%;
}

.body_input--SearchTalla {
  justify-content: flex-end;
  display: flex;
}

.body_input--SearchTalla input[type="text"] {
  padding: 10px 10px 10px 0.625rem;
  border: none;
  padding-left: 0.625rem;
  background: #f2f2f2 !important;
  border-radius: 4px;
}

.body_input--SearchTalla input[type="text"]::placeholder {
  padding-left: 20px;
  margin-left: 0px;
  background-image: var(--background-image);
  background-repeat: no-repeat;
  background-position: center left;
  background-position-x: 5px;
  background-color: none;
  background-size: auto 19px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding: 10px 30px 0.625rem;
}

.search-input {
  width: 100px;
}

table tr {
  display: flex;
  width: max-content;
  width: 100%;
  border: none;
  align-items: center;
  justify-content: space-around;
}

table tr td .header__tablet {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 0.625rem;
  line-height: 0.75rem;

  color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

tbody tr .container_tdimg--producto {
  display: flex;
}

tbody tr td span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.75rem;
  border: none;
  color: #000000;
}

tbody td {
  border: none;
}

table td {
  border: none;
}

tbody tr {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border: none !important;
}

.activo__resaltado--table {
  background: #e5fcef;
}

.talla__selection {
  position: absolute;
  top: 25%;
  left: 6%;
  width: 32px;
  font-size: 8px;
  line-height: 0.625rem;
  /* identical to box height */
  padding: 4px 2px;
  text-align: center;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
}


.container__precio--oferta {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.container__precio--oferta .precio__anterior {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.75rem;
  text-decoration-line: line-through;
  color: #000000;
}

.container__precio--oferta .precio__nuevo {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 0.75rem;
  color: #f92a2a;
}

.btn__descuento span {
  height: 24px;
  left: 309px;
  top: 506px;
  display: flex;
  background: #98ffc7;
  border-radius: 8px;
  padding: 7px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 15px;
  /* identical to box height */

  text-align: center;

  color: #1fc039;
}

.container_show-Products_Descuentos {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info__product {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  justify-content: center;
  align-items: flex-start;
  padding-left: 4px;
}

.text__showProducts--navigation {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 0.75rem;

  color: #272727;
}

.text__showTallas--descuento {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 0.75rem;
  text-decoration-line: underline;

  color: #272727;
}

.separador_descuento {
  margin-top: 0.625rem;
}

.text__gastos--envio {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 0.625rem;
  line-height: 0.75rem;

  color: #969696;
}

.text__entrega--envio {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 0.625rem;
  color: #484848;
}

.container_box--gastos {
  margin-top: 0.625rem;
}

.sections__cards--pago {
  display: inline-flex;
  gap: 0.625rem;
}

.container__btn--alertaOn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 4px;

  padding: 8px 9px 9px;
  border-radius: 6px;
  border: 1px solid #387cff;
}

.activation--alerta {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 17px;
  /* identical to box height */

  text-align: center;

  color: #387cff;
}

.container_alerta-chollos {
  position: relative;
}
.activation--alerta {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 17px;
  /* identical to box height */

  text-align: center;

  color: #387cff;
}
.link__mas--info {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 5px;
  font-size: 0.75rem;
}

.link__mas--info a {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 5px;
}

.container_alerta-chollos span {
  position: absolute;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  /* identical to box height */

  text-transform: uppercase;

  color: #000000;
  top: 21px;
  left: 43%;
  background: white;
  width: 50px;
  text-align: center;
}

</style>