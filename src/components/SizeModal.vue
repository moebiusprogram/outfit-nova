<template>
  <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container" :style="{height:modalHeight}">

              <div class="modal-header" >
                <div style="display:flex;justify-content: space-between;width:100%;padding: 0 20px">
                  <div style="flex:1; margin-left:20px;"></div>
                  <div class="separador" style="background:#D9D9D9; margin-bottom:20px;"></div>
                  <div @click="$emit('close')" style="display:flex; flex:1; justify-content: flex-end;">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 8.586L7.172 5.757L5.757 7.172L8.586 10L5.757 12.828L7.172 14.243L10 11.414L12.828 14.243L14.243 12.828L11.414 10L14.243 7.172L12.828 5.757L10 8.586Z" fill="#DEDEDE"></path>
                    </svg>
                  </div>
                </div>
                <slot name="header">
                  default header
                </slot>
                
              </div>

              <div class="modal-body" :style="`height: ${bodyHeight}`">
                <slot name="body">
                  Uh-oh! Something went wrong!
                </slot>
              </div>

              <div class="modal_footer" :style="{bottom:footerPosition}">
                <slot name="footer">
                  <section style="background:#fafafa;display:flex;gap:10px; margin-bottom:1px; position:sticky" class="px-3">
                    <div @click="$emit('close')" style="height:50px;width:100%;display:flex;align-items:center;justify-content:center;font-size: 13px;font-weight: 600;color:#bababa;border-radius:0.25rem">
                      Cancelar
                    </div>
                    <div @click="$emit('close')" style="height:50px;width:100%;font-size: 13px;font-weight: 600;color:#fff;background:#000;display:flex;align-items:center;justify-content:center;border-radius:0.25rem">
                      Aceptar
                    </div>
                  </section>
                </slot>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'SizeModal',
  props: {
    modalHeight: String,
    bodyHeight: String,
    footerPosition: String
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 100%;
  height: 90%;
  position:absolute;
  bottom:0;
  margin: 0px auto;
  padding: 20px 0;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  flex-direction: column;
}

.modal-body {
  margin: 20px 0;
  height: calc(100vh - 320px);
  overflow-y: auto;
}

.modal-default-button {
  float: right;
}
.modal_footer {
  position:fixed;
  width: 100%;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>