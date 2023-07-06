<template>
    <div class="container-sheckedBasic"  v-for="(item, index) in modelValue" :key="index">
      <label :for="item.id">
        <span class="checkbox">
          <input type="checkbox" :id="item.id" v-model="item.checkState" @change="updateValue()" />
          <span class="checkbox-mark"></span>
        </span>
      </label>
    </div>
</template>
  
  <script>
  import { ref } from "vue";
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
      modelValue: {
        type: Array,
        required: true,
        default: () => ([]),
      },
    },
    setup(props, { emit }) {
      const checked = ref(props.modelValue);
  
      const updateValue = () => {
        emit("update:modelValue", checked.value);
      };
  
      return {
        checked,
        updateValue,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
.container-sheckedBasic{
  border:none;
}
.checkbox {
  input[type="checkbox"] {
    display: none;
  }

  .checkbox-mark {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid #000000;
    border-radius: 2px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      transition: background-color 0.2s ease-in-out;
    }



    &::after {
      background-image: url("data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 4.5L3.5 6.5L8.5 1.5' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
  }

  input[type="checkbox"]:checked+.checkbox-mark {
    &::before {
      width: 100%;
      height: 100%;
      border: none;
      background-color: #000000; // Change this to the desired background color
    }

    &::after {
      opacity: 1;
    }
  }
}
</style>