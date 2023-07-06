<template>
  <div>
    <div
      style="overflow: scroll !important"
      class="modalbox position-fixed position-lg-center top-0 left-0 w-100 h-100 w-lg-70 index-160 bg-white rounded-lg-2 flex flex-column flex-lg-row hpx-lg-520"
    >
      <div class="fw-bold fs-120 py-3 border-bottom flex align-center px-4 none-lg">
        <div class="text-center w-100">Todos los filtros</div>
      </div>

      <div class="p-lg-5 w-100 flex-1 flex flex-column overflow-scroll">
        <div class="mb-lg-3 pt-3 pb-2 pt-lg-0 flex align-center px-0 px-lg-0" style="">
          <div class="flex flex-wrap filtros-activos">
            <div class="fw-bold mr-1 pt-0.2 text-nowrap mb-2">Filtros activados:</div>

            <div
              v-for="(filter, index) in filters"
              :key="filter.id"
              :class="filter.type"
              class="badged-filtro-select "
            >
              <div class=" pt-0.2">{{ filter.text }}</div>
              <CerrarFiltro @click="removeFilter(index)" />
            </div>
          </div>
        </div>

        <div class="flex flex-1 overflow-scroll section-barra-filtros">
          <div class="min-width-120 hpx-lg-440 bg-gray-138">
            <div
              v-for="(Menufilter, index) in dataFilterMenu"
              :key="Menufilter.id"
              @click="selectMenu(index)"
              :class="['filter-bar-menu', { active: index === selectedIndex }]"
            >
              <span>{{ Menufilter.text }}</span>
            </div>
          </div>

          <div class="w-100 overflow-auto pr-lg-0 py-lg-0 flex flex-column flex-1" style="overflow-x:none;">
            <ul class="p-0 m-0" style="padding-left: 0rem !important">
              <li v-for="(selectfiltro, indexo) in sortFilterOptions" :key="indexo">
                <div class="flex align-center justify-between text-black">
                  <span class="flex align-center">
                    <span class="text-interno-filtros">
                      {{ selectfiltro.text }}
                    </span>
                  </span>

                  <CheckBoxBasic
                    :modelValue="selectfiltro.checkedModel"
                    @update:modelValue="updateChecked(selectfiltro.id, $event)"
                  />
                </div>
              </li>
            </ul>
            <div class="data mb-lg-4" >
              <div data-content="talla" class="hide">
                <div
                  class="search-input bg-gray-101 border-0 hpx-30 wpx-lg-360 px-3 pt-3 rounded-6 flex align-center mb-1"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.22222 2.13889C9.42563 2.13779 10.6023 2.49364 11.6035 3.16141C12.6046 3.82919 13.3852 4.77889 13.8465 5.89038C14.3077 7.00187 14.429 8.2252 14.1949 9.40561C13.9608 10.586 13.3819 11.6705 12.5313 12.5218C11.6808 13.3731 10.5968 13.9531 9.41662 14.1883C8.23642 14.4234 7.01298 14.3033 5.90107 13.843C4.78917 13.3828 3.83875 12.603 3.17006 11.6025C2.50137 10.602 2.14445 9.42563 2.14445 8.22222C2.15174 6.61203 2.79425 5.06979 3.93231 3.93068C5.07038 2.79157 6.61204 2.14766 8.22222 2.13889ZM8.22222 1C6.7938 1 5.39746 1.42358 4.20977 2.21716C3.02209 3.01075 2.0964 4.13871 1.54976 5.4584C1.00313 6.77809 0.860105 8.23023 1.13878 9.63121C1.41745 11.0322 2.1053 12.3191 3.11534 13.3291C4.12539 14.3392 5.41227 15.027 6.81324 15.3057C8.21421 15.5843 9.66636 15.4413 10.986 14.8947C12.3057 14.3481 13.4337 13.4224 14.2273 12.2347C15.0209 11.047 15.4444 9.65064 15.4444 8.22222C15.4444 6.30677 14.6835 4.46977 13.3291 3.11534C11.9747 1.76091 10.1377 1 8.22222 1Z"
                    ></path>
                    <path
                      d="M18.5952 17.8278L14.5008 13.7056L13.7119 14.4889L17.8064 18.6111C17.8578 18.6629 17.9189 18.7041 17.9863 18.7323C18.0536 18.7604 18.1258 18.7751 18.1988 18.7753C18.2718 18.7756 18.3442 18.7615 18.4117 18.7338C18.4792 18.7061 18.5407 18.6653 18.5925 18.6139C18.6443 18.5625 18.6854 18.5013 18.7136 18.434C18.7418 18.3666 18.7564 18.2944 18.7567 18.2214C18.7569 18.1484 18.7428 18.0761 18.7151 18.0086C18.6874 17.941 18.6467 17.8796 18.5952 17.8278Z"
                    ></path>
                  </svg>

                  <input
                    type="search"
                    placeholder="Buscar todas las marcas"
                    class="w-100 border-0"
                  />
                </div>
              </div>

              <div data-content="marca" class="show">
                <div
                  
                  class="flex flex-wrap align-center px-3 border-bottom  filtros-activos"
                  style="gap:7px 10px !important;"
                >
                  <div
                    v-for="filter in filtersSeleccionado"
                    :key="filter.id"
                    :class="filter.type"
                    v-bind:style="{
                    display: filtersSeleccionado.length === 0 ? 'none' : '',
                  }"
                    class="badged-filtro-select flex rounded-6 flex align-center hover:bg-black fs-80 
                    fw-bold text-gray-107 hover:text-white bg-gray-143 pl-3 pr-2 mb-2 cursor-pointer 
                    hpx-24 mr-1 text-nowrap"
                  >
                    <div class="mr-1 pt-0.2">{{ filter.text }}</div>
                    <CerrarFiltro @click="removerFiltersSeleccionado(index)" />
                  </div>
                  <div class="fw-bold w-100 fs-140 pb-2">Seleccionado</div>
                </div>

               
                <ul class="p-0 m-0" style="padding-left: 0rem !important">
                  <li
                    v-for="(selectfiltro, indexo) in sortFilterOptionsSelection"
                    :key="indexo"
                  >
                  <div class="flex align-center justify-between text-black"
                  :class="
                            selectfiltro.checked == null &&
                            selectfiltro.tagsCount == null &&
                            !selectfiltro.switchesModel
                              ? 'border-section-off'
                              : ''
                          "
                  >
                  <span class="flex align-center tags-count">
                        <span
                        
                          :class="
                            selectfiltro.checked == null &&
                            selectfiltro.tagsCount == null &&
                            !selectfiltro.switchesModel
                              ? 'text_resaltado'
                              : 'text-interno-filtros'
                          "
                        >
                          {{ selectfiltro.text }}
                        </span>

                        <span
                          v-if="selectfiltro.tagsCount"
                          class="tags-count-filterOptions"
                        >
                          2
                        </span>
                      </span>

                      <label v-if="selectfiltro.checked" for="marca-1">
                        <span class="checkbox">
                          <input
                            type="checkbox"
                            id="marca-1"
                            checked
                            v-model="selectfiltro.checked"
                          />
                          <span class="checkbox-mark"></span>
                        </span>
                      </label>

                      <CheckBoxBasic
                        v-if="selectfiltro.checkedModel"
                        :modelValue="selectfiltro.checkedModel"
                        @update:modelValue="updateChecked(selectfiltro.id, $event)"
                      />

                      <SwichesBasic
                        v-if="selectfiltro.switchesModel"
                        :margin="false"
                        :padding="true"
                        :modelValue="selectfiltro.switchesModel"
                        @update:modelValue="updateSwitchesModel(selectfiltro.id, $event)"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          
        </div>

        <div class="container-btns">
              <div
                class="btn-cancel"
              >
                Cancelar
              </div>

              <div
                class="btn-offert"
              >
              <span>Ver 123 ofertas</span>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import CheckBoxBasic from "../components/CheckBoxBasic.vue";
import SwichesBasic from "../components/SwitchesBasic.vue";
import CerrarFiltro from "../components/svg/cerrarFiltro.vue";
export default {
  components: {
    CerrarFiltro,
    SwichesBasic,
    CheckBoxBasic,
  },
  setup() {
    const pants = reactive([
      { size: "XS", amount: 120 },
      { size: "S", amount: 220 },
      { size: "M", amount: 133 },
      { size: "L", amount: 455 },
      { size: "XL", amount: 105 },
      { size: "3XL", amount: 110 },
    ]);

    const filters = reactive([
      { id: 1, text: "Seleccionar tallas", type: "type-1" },
      { id: 2, text: "Gucci", type: "type-1" },
      { id: 3, text: "Adidas", type: "type-1" },
      { id: 4, text: "S", type: "type-1" },
      { id: 5, text: "M", type: "type-1" },
      { id: 6, text: "Amazon", type: "type-2" },
      { id: 7, text: "ABOUTYOU", type: "type-3" },
      { id: 8, text: "-50% de descuento", type: "type-1" },
    ]);

    const filtersSeleccionado = reactive([
      { id: 1, text: "Seleccionar tallas", type: "type-1" },
      { id: 2, text: "Adidas Final", type: "type-1" },
      { id: 3, text: "Gucci", type: "type-1" },
      { id: 4, text: "Nike", type: "type-1" },
    ]);

    const sortFilterOptions = reactive([
      {
        id: 133,
        text: "Lo más caro",
        checkedModel: [{ id: "888", text: "", checkState: true }],
      },
      {
        id: 233,
        text: "Lo más barato",
        checkedModel: [{ id: "988", text: "", checkState: false }],
      },
      {
        id: 333,
        text: "Las novedades",
        checkedModel: [{ id: "088", text: "", checkState: true }],
      },
    ]);

    const sortFilterOptionsSelection = reactive([
      {
        id: 1,
        text: "Burberry",
        checkedModel: [{ id: "188", text: "", checkState: true }],
        tagsCount: "2",
        switchesModel: false,
      },
      { id: 2, text: "#", checkedModel: null, tagsCount: null, switchesModel: false },
      {
        id: 3,
        text: "Filtrar por marcas favoritas",
        checkedModel: null,
        tagsCount: null,
        switchesModel: [{ id: "88", text: "", switcheState: true }],
      },
      {
        id: 4,
        text: "Non Signé / Unsigned",
        checkedModel: [{ id: "288", text: "", checkState: true }],
        tagsCount: "2",
        switchesModel: false,
      },
      {
        id: 5,
        text: "Burberry",
        checkedModel: [{ id: "388", text: "", checkState: false }],
        tagsCount: "2",
        switchesModel: false,
      },
      {
        id: 6,
        text: "Gucci",
        checkedModel: [{ id: "488", text: "", checkState: true }],
        tagsCount: "2",
        switchesModel: false,
      },
      {
        id: 7,
        text: "Dolce & Gabbana",
        checkedModel: [{ id: "588", text: "", checkState: false }],
        tagsCount: "2",
        switchesModel: false,
      },
      {
        id: 8,
        text: "A",
        checkedModel: null,
        tagsCount: null,
        switchesModel: false,
      },
      {
        id: 9,
        text: "Avenir",
        checkedModel: [{ id: "788", text: "", checkState: true }],
        tagsCount: "2",
        switchesModel: false,
      },
    ]);
    const dataFilterMenu = reactive([
      {
        text: "Ordenar",
      },
      {
        text: "Filtrar",
      },
      {
        text: "Talla",
      },
      {
        text: "Categoría",
      },
      {
        text: "Marca",
      },
      {
        text: "Tienda",
      },
      {
        text: "Precio",
      },
      {
        text: "Color",
      },
      {
        text: "% Descuentos",
      },
      {
        text: "Entrega",
      },
    ]);

    const selectedIndex = ref(0);

    const modelValueBasic = ref([{ id: "88", text: "", switcheState: true }]);
    const selectMenu = (index) => {
      selectedIndex.value = index;
    };

    const removeFilter = (index) => {
      filters.splice(index, 1);
    };

    const removerFiltersSeleccionado = (index) => {
      filtersSeleccionado.splice(index, 1);
    };

    const updateSwitchesModel = (id, value) => {
      const item = sortFilterOptionsSelection.find((item) => item.id === id);
      if (item) {
        item.switchesModel = value;
      }
    };

    const updateChecked = (id, value) => {
      const item = sortFilterOptionsSelection.find((item) => item.id === id);
      if (item) {
        item.checkedModel = value;
      }
    };

    return {
      pants,
      filters,
      updateChecked,
      updateSwitchesModel,
      removerFiltersSeleccionado,
      modelValueBasic,
      dataFilterMenu,
      sortFilterOptionsSelection,
      selectedIndex,
      filtersSeleccionado,
      removeFilter,
      selectMenu,
      sortFilterOptions,
    };
  },
};
</script>

<style lang="scss" scoped>

::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
.btn-cancel{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px 24px;
gap: 10px;



background: #FFFFFF;
border-radius: 4px;
/* identical to box height */

letter-spacing: -0.03em;

color: #C2C2C2;

background: #FFFFFF;
border-radius: 4px;
}
.btn-offert{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px 24px;
gap: 10px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */

letter-spacing: -0.03em;

color: #FFFFFF;

background: #171717;
border-radius: 4px;
}
.container-btns{
  display: flex;
  padding:10px;
  display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.text_resaltado {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 19px;
  /* identical to box height, or 106% */

  display: flex;
  align-items: center;

  /* BLACK COLOR */

  color: #000000;
}
.text-interno-filtros {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  overflow-wrap: break-word;
  /* identical to box height, or 183% */
  width: max-content;
  display: flex;
  align-items: center;

  /* BLACK COLOR */

  color: #000000;
}
.container-tagsCount {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 4px;
}

.tags-count-filterOptions {
  width: 14px;
  height: 14px;
  background: #f9f9f9;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 6px;
  line-height: 7px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  color: #5d5d5d;
}
.type-1 {
  background: #f2efe9;
  color: #5d5017;
}

.type-2 {
  background: #fae7cb;
  color: #e4b408;
}

.type-3 {
  background: #030303;
  color: #ffffff;
}



.search-input {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  /* gap: 10px; */
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
 
  color: #9d9d9d;

  svg {
    position: absolute;
    top: 64%;
    left: 13%;
    transform: translate(-63%, -76%);
  }

  input[type="search"]:focus {
  padding-left: 25px !important;

}
  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 18px 16px;
    gap: 12px;

    width: max-content;
    height: 28px;

    background: #f7f7f7;
    border-radius: 25px;
  }
}

input::placeholder {
  padding-left: 10px;
}

.active {
  background: #ffffff !important;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700 !important;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */
  padding: 14px 16px;
  display: flex;
  align-items: center;
  font-feature-settings: "case" on;

  /* BLACK COLOR */
  border-top: #ffffff !important;
  border-right: #ffffff !important;
  color: #000000 !important;
  border-bottom: 1px solid #f7cf54 !important;

  span {
    width: max-content;
  }
}

.filter-bar-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  font-feature-settings: "case" on;
  color: #000000;
  background: #f7f7f7;
  border: 1px solid #eeeeee;

  span {
    width: max-content;
  }
}

.section-barra-filtros {
  display: flex;
}

.filtros-activos {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  gap: 4px 6px;
}


.border-section-off{
  border-bottom: none !important;
}
.badged-filtro-select {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 5px;
  gap: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-align: center;

  border-radius: 16px;
}

ul li div {
 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 6px 10px 16px;
 
  gap: 10px;
box-sizing: border-box;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
}

.tags-count{
  display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
}
</style>
