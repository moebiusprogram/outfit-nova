<template>
  <div class="custom-form px-4">
  
    <h1>
      
      ¿Quieres participar en sorteos?

    </h1>
    <div class="row">
      <div class="col-12 py-2" style="font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
letter-spacing: -0.03em;

color: #171717;">
        Usaremos esta información para intentar enviarte
ofertas adecuadas a tus tallas, y si te toca algún
sorteo mandarte la caja sorpresa con prendas de tu talla.
      </div>
      
      <div class="col-12 py-2">
        <span style="font-style: normal;
          font-weight: 500;
          font-size: 10px;
          line-height: 17px;
          letter-spacing: -0.03em;
          color:#ACACAC
          "
        >
          Este paso es opcional. Si no quieres participar, 
          <router-link :to="'/registration-step-five'" style="font-style: normal;
            font-weight: 700;
            font-size: 10px;
            line-height: 17px;
            letter-spacing: -0.03em;
            color:#171717"
          >
           salta este paso
          </router-link>
        </span>
      </div>
    </div>
    <form class="form">
    <div class="row">
      <div class="col">     
        <div class="form-group">
          <label for="" style="font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;"
          >
            ¿Qué dia es tu cumpleaños?
          </label>
          <input type="date" class="form-control w-100" style="border-radius:5px"> 
          </div>   
      </div>
    </div>
    <div class="row">
      <div class="col">     
        <FormTalla label_input="¿Qué talla de zapatillas usas?" :tallas="tallas"></FormTalla>
      </div>
    </div>
    <div class="row">
      <div class="col">     
        <FormTalla label_input="¿Qué talla de camisetas usas?" :tallas="tallas"></FormTalla>
      </div>
    </div>
    <div class="row">
      <div class="col">     
        <FormTalla label_input="¿Qué talla de pantalones usas?" :tallas="tallas"></FormTalla>
       </div>
    </div>
    
    </form>
  </div>
  <div style="margin-top:50px"></div>
</template>

<script>
import ButtonToSocial from './ButtonToSocial.vue';
import CustomInput from './CustomInput.vue';
import PrimaryButton from './PrimaryButton.vue';
import FormTalla from './FormTalla.vue';
 
import notification from "../assets/notification.svg";
export default {
  data() {
    return {
      notification: notification,
      tallas:[{
          name:'ue',
          sizes : [
            { id:'1', nro:'34', available:true },
            { id:'2', nro:'35', available:true },
            { id:'3', nro:'37', available:true },
            { id:'4', nro:'38', available:true },
            { id:'5', nro:'39', available:true },
          ]
        },
        {
          
          name:'us',
          sizes : [
            { id:'6', nro:'34', available:true },
            { id:'7', nro:'35', available:true },
            { id:'8', nro:'37', available:true },
          ]
        }
      ]
    }
  },
  components: {
    ButtonToSocial,
    CustomInput,
    PrimaryButton,
    FormTalla,
  },
  props: ['role'],
}
</script>
