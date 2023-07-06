<template>
    <div>
        <section
          class="description p-0 m-0"
          style="border: none; padding-top: 11px !important; "
        >
          <span class="description-title pt-2">
            {{ myObject.description.title }}
          </span>
          <p class="sub-header mt-2">{{ myObject.description.subHeader }}</p>
          <div class="row px-0 mx-0">
            <div class="col-1">
              <img :src="comillas" alt="" style="height: 20px; width: 20px" />
            </div>
            <Transition mode="out-in">
              <div
                class="col-12 m-0 p-0 truncate-text"
                v-if="!leer_mas_boton"
                style="
                  position: relative;
                  background: linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.65) 7.81%,
                    #ffffff 100%
                  );
                "
              >
                <p class="sub-header">{{ truncate(myObject.description.content) }}</p>
                <span style="" class="box_text_transparent"></span>
              </div>
              <div class="col-12 p-0 m-0" v-else>
                <p class="sub-header" style="padding: 15px 17px 0px 21px !important">
                  {{ myObject.description.content }}
                </p>
                <div class="w-lg-50 mr-lg-5">
                  <div class="flex-lg">
                    <div class="mr-10 none block-lg">
                      <div id="slider-pager" class="cycle-pager external slider-preview">
                        <div class="mb-2">
                          <img
                            src="../../assets/images/moda/single/1.png"
                            class="img-fluid wpx-60 w-100"
                            alt=""
                            style="padding: 0px 0px 0px 0px !important"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </section>


        <div class="w-100">
          <div class="container__btn--information">
            <button @click="toggleExpandedContent()">
              {{ buttonText }}
              <img
                :class="leer_mas_boton ? 'flecha_arriba' : 'flecha_abajo'"
                src="../../assets/images/flecha_abajo.svg"
                alt=""
              />
            </button>
            <span class="link__mas--info"
              >Más información en
              <a>adidas.es <img src="../../assets/images/link_descarga.svg" alt="" /> </a
            ></span>
          </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from "vue";
import comillas from "../../assets/comillas.svg";

export default {
    setup () 
    {
    const leer_mas_boton = ref(false);
    const buttonText = ref("Leer más");

    const toggleExpandedContent = () => {
      leer_mas_boton.value = !leer_mas_boton.value;
      buttonText.value = leer_mas_boton.value ? "Leer menos" : "Leer más";
    };

    const myObject = ref({
      country: {
        name: "China",
        img: "", // Agrega la URL de la imagen aquí
      },
      description: {
        title: "Zapatillas deportivas bajas Calvin Klein en Beige",
        subHeader:
          "Color liso, Cuero, Con Plataforma, Punta redonda, Acordonado con 6 agujeros.",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, nostrum error! Inventore consectetur, laboriosam dolorem quam nostrum, sit cumque nulla ipsum perspiciatis non ab perferendis iusto iste veritatis ipsa libero.",
      },
    });

    const truncate = computed(() => (v) => {
      let reqdString = "";
      const num = 130;
      for (let i = 0; i < num; i++) {
        reqdString += v[i];
      }
      return reqdString;
    });

        return {
            toggleExpandedContent,
            truncate,
            myObject,
            leer_mas_boton,
            buttonText,
            comillas
        }
    }
}
</script>

<style lang="scss" scoped>

.container__btn--information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
  height: 119px;
  background: #ffffff;
}

.container__btn--information span a {
  cursor: pointer;
  color: #ffa700;
}
.container__btn--information span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 3%;
  color: #000000;
}

.container__btn--information button {
  width: auto;
  padding: 0px 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 15px;
  color: #000000;
  height: 28px;
  background: #ffffff;
  border: 1px solid #989898;
  border-radius: 16px;
  gap: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.description {
  .description-title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    padding: 13px 2px 0px 12px !important;
    color: #000000;
  }

  .sub-header {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    padding: 0px 2px 0px 12px !important;
    color: #374047;
  }
}

.truncate-text {
  padding: 15px 17px 0px 21px !important;
}

.flecha_abajo {
  transform: rotate(0deg);
  transition: transform 0.5s;
}

.flecha_arriba {
  transform: rotate(180deg);
  transition: transform 0.5s;
}
</style>