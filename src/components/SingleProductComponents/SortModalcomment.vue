<template>
    <div>
        <div class="container__comentarios" style="">
              <span class=""> 120 comentarios </span>

              <span class="texto_commentarios--title" style="position: relative"
                >Ordenados por
                <p class="p-0 m-0" @click="toggleModal">
                  Antiguos primero
                  <svg
                    width="10"
                    height="5"
                    viewBox="0 0 10 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 5L0 0H10L5 5Z" fill="#6328E0" />
                  </svg>
                </p>

                <div class="modal-selection" v-if="state.showModalSelect">
                  <span
                    class="item-list-setting"
                    @click="selectOption('Antiguos primero')"
                    :style="{
                      color: state.selectedOption === 'Antiguos primero' ? '#6328e0' : '',
                    }"
                  >
                    Antiguos primero
                  </span>
                  <span
                    class="item-list-setting"
                    @click="selectOption('Nuevos primero')"
                    :style="{
                      color: state.selectedOption === 'Nuevos primero' ? '#6328e0' : '',
                    }"
                  >
                    Nuevos primero
                  </span>
                  <span
                    class="item-list-setting"
                    @click="selectOption('Mejor valorados primero')"
                    :style="{
                      color:
                        state.selectedOption === 'Mejor valorados primero'
                          ? '#6328e0'
                          : '',
                    }"
                  >
                    Mejor valorados primero
                  </span>
                </div>
              </span>

              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="currentColor"
                class="hover:text-red-101 cursor-pointer campana_svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 18H0V16H1V9.031C1 4.043 5.03 0 10 0C14.97 0 19 4.043 19 9.031V16H20V18ZM3 16H17V9.031C17 5.148 13.866 2 10 2C6.134 2 3 5.148 3 9.031V16ZM7.5 19H12.5C12.5 19.663 12.2366 20.2989 11.7678 20.7678C11.2989 21.2366 10.663 21.5 10 21.5C9.33696 21.5 8.70107 21.2366 8.23223 20.7678C7.76339 20.2989 7.5 19.663 7.5 19Z"
                />
              </svg>
            </div>
    </div>
</template>

<script>
import { reactive } from "vue";
export default {
    setup () {
        
        function toggleModal() {
      state.showModalSelect = !state.showModalSelect;
    }
    const state = reactive({
      showModalSelect: false,
      selectedOption: "Antiguos primero",
    });

  

    // Crea una función para seleccionar una opción
    function selectOption(option) {
      state.selectedOption = option;
    }
        return {
            state,
            toggleModal,
            selectOption
        }
    }
}
</script>

<style lang="scss" scoped>
.item-list-setting {
  border: none !important;
}

.container__comentarios {
  display: flex;
  justify-content: space-between;
  gap: 3px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 15px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;

  color: #000000;
}

.texto_commentarios--title {
  color: #a6a6a6;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
  gap: 5px;
}

.modal-selection {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* padding: 13px 14px; */
  /* gap: 10px; */
  background: #ffffff;
  width: 94%;
  top: 120%;
  z-index: 1000;
  right: -3px;
  filter: drop-shadow(0px 1px 24px rgba(0, 0, 0, 0.07));
}
.campana_svg {
  width: 1.041875rem;
  height: 1.12rem;
}

.texto_commentarios--title p {
  color: #6328e0 !important;
  gap: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>