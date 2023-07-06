<template>
    <div>
       
      <Navbar
        :show="showMenuScroll"
      />

        <div class="container__colaboramos">
           
            <div class="container__img--portada" style="margin-top: 16%;">
                <Avatar  />
                <div class="overlay pt-4">
                    <h1>Upload image</h1>
                </div>
            </div>


            <div class="contenedor__main--perfilEdit">
                <div class="input-container">
                    <input type="text" id="input-field" required placeholder="Editar nombre"
                        :style="{ '--background-imagen': `url(${imagePlaceholderInstagram})` }" />
                    <label for="input-field">Alias</label>
                </div>
                <div class="btn__perfil--guardar">
                    <button>Guardar</button>
                </div>

                <h2>¿Cómo te gustaría que nos dirijamos a ti?</h2>

                <div class="checkbox__radio--genero">
                    <span class="container-input--radio">
                        <input type="radio" id="radio1" value="Option 1" v-model="selectedOption">
                        <label
                            :style="(selectedOption === 'Option 1') ? '--background-imageno:#171717' : '--background-imageno:#D2D2D2'"
                            :class="(selectedOption === 'Option 1') ? 'text_Activo--labelRadio' : ''"
                            for="radio1"><span>Mujer</span></label>
                    </span>

                    <span class="container-input--radio">
                        <input type="radio" id="radio2" value="Option 2" v-model="selectedOption">
                        <label
                            :style="(selectedOption === 'Option 2') ? '--background-imageno:#171717' : '--background-imageno:#d2d2d2'"
                            :class="(selectedOption === 'Option 2') ? 'text_Activo--labelRadio' : ''"
                            for="radio2"><span>Hombre</span></label>
                    </span>
                    <span class="container-input--radio">
                        <input type="radio" id="radio3" value="Option 3" v-model="selectedOption">
                        <label
                            :style="(selectedOption === 'Option 3') ? '--background-imageno:#171717' : '--background-imageno:#d2d2d2'"
                            :class="(selectedOption === 'Option 3') ? 'text_Activo--labelRadio' : ''" for="radio3"><span>No
                                binario</span></label>
                    </span>

                </div>

                <hr>

                <span>¿Qué dia es tu cumpleaños?</span>

                <div class="input-container calneder__input">
                    <input type="text" id="input-field" required placeholder="30/11/1995"
                        :style="{ '--background-imagen': `url(${imagePlaceholderCalender})` }" />
                    <label for="input-field"></label>
                </div>

                <div class="calender__perfil">
                    <h2>Tallas favoritas</h2>
                    <span>Tienes configuradas: XS, S, M, L, XL, XXL, 3XL, 39, 40, 41</span>

                    <div class="btn__perfil--guardar">
                        <button>VER Y CONFIGURAR TALLAS FAVORITAS</button>
                    </div>
                </div>

                <div class="section__update--pass">

                    <h2>Actualizar Contraseña</h2>
                    <div class="input__container--pass">
                        <input id="input-field" type="password" required placeholder="Nueva contraseña" />
                        <label for="input-field"></label>
                    </div>


                    <h2>Confirmar Contraseña</h2>
                    <div class="input__container--pass">
                        <input id="input-field" type="password" required placeholder="Confirmar contraseña" />
                        <label for="input-field"></label>
                    </div>
                </div>

                <div class="section__update--pais">
                    <h2>País</h2>
                    <span>Selecciona el país donde quieres ver las ofertas</span>


                    <!-- <select>
                        <option value="" disabled selected>Seleccionar &#x25BC;</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Chile">Chile</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Perú">Perú</option>
                        <option value="Venezuela">Venezuela</option>
                    </select> -->
                    <SelectCountry/>

                </div>

                <div class="section__update--ropa">

                    <h2>¿Qué ropa buscas?</h2>
                    <span class="sub_title--ropa">Selecciona el tipo de ropa que estás buscando. (hemos
                        dividido la app así para una mejor experiencia del usuario) </span>



                    <div class="checkbox__radio--genero checkbox__update--ropa">
                        <span class="container-input--radio">
                            <input type="radio" id="radio1" value="Option 1" v-model="selectedOption">
                            <label
                                :style="(selectedOption === 'Option 1') ? '--background-imageno:#171717' : '--background-imageno:#D2D2D2'"
                                :class="(selectedOption === 'Option 1') ? 'text_Activo--labelRadio' : ''"
                                for="radio1"><span>Mujer</span></label>
                        </span>

                        <span class="container-input--radio">
                            <input type="radio" id="radio2" value="Option 2" v-model="selectedOption">
                            <label
                                :style="(selectedOption === 'Option 2') ? '--background-imageno:#171717' : '--background-imageno:#d2d2d2'"
                                :class="(selectedOption === 'Option 2') ? 'text_Activo--labelRadio' : ''"
                                for="radio2"><span>Hombre</span></label>
                        </span>
                        <span class="container-input--radio">
                            <input type="radio" id="radio3" value="Option 3" v-model="selectedOption">
                            <label
                                :style="(selectedOption === 'Option 3') ? '--background-imageno:#171717' : '--background-imageno:#d2d2d2'"
                                :class="(selectedOption === 'Option 3') ? 'text_Activo--labelRadio' : ''"
                                for="radio3"><span>No binario</span></label>
                        </span>

                    </div>
                </div>

                <div class="section__update--notifications">
                    <hr>
                    <div class="alerta_notifications">
                        <div class="alerta_title">
                            <img :src="alertaNotifyImg" alt="">
                            <h2>Notificaciones push</h2>
                        </div>

                    </div>



                    <span class="sub_title--notify">
                        Recibe notificaciones push sobre tus pedidos,
                        cupones personalizados y productos nuevamente
                        disponibles.
                    </span>
                    <hr>
                    <div class="permitir_notify">
                        <span>Permitir notificaciones push</span>
                        <SwitchesBasic :modelValue="modelValueBasic" @update:modelValue="modelValueBasic = $event" />
                    </div>

                    <div class="container__text__switches" v-for="(item, index) in notifyAlerts" :key="index">

                        <span class="subtitle__switches">{{ item.text }}</span>
                        <Switches :modelValue="modelValue.slice(index * 3, index * 3 + 3)"
                            @update:modelValue="updateModelValue(index * 3, $event)" />
                        <hr>
                    </div>
                </div>




                <div class="section__update--notifications--correo">
                    <div class="alerta_notifications">
                        <div class="alerta_title">
                            <img :src="alertaNotifyEmailImg" alt="">
                            <h2>Notificaciones por correo electrónico</h2>
                        </div>
                    </div>
                    <span class="sub_title--notify">
                        Recibe en tu correo electrónico las últimas noticias
                        de moda, nuestras ofertas, cupónes y mucho más.
                        Puedes cancelas la suscripción en cualquier...
                    </span>


                    <div class="permitir_notify">
                        <span>Permitir notificaciones por correo</span>
                        <SwitchesBasic :modelValue="SwitchNoyifyEmail" @update:modelValue="SwitchNoyifyEmail = $event" />
                    </div>

                </div>
                <hr>

                <div class="section__update--notifications--newsletter">

                    <div class="permitir_notify">
                        <span class="texto__resaltado-notify">Newsletter ABOUT YOU</span>
                        <SwitchesBasic :modelValue="SwitchNoyifyAbout" @update:modelValue="SwitchNoyifyAbout = $event" />
                    </div>
                    <span class="sub_title--notify">
                        Recibe información sobre tendencias de moda y
                        promociones. Obtén cupónes personalizados.
                    </span>

                    <span>Permitir notificaciones por correo</span>

                </div>

                <div class="section__update--notifications--privacidad">

                    <div class="alerta_notifications">
                        <div class="alerta_title">
                            <img :src="alertaNotifyPrivacidadImg" alt="">
                            <h2>Privacidad</h2>
                        </div>
                    </div>
                    <h2>Tu perfil ahora es</h2>

            <div class="section__user--publico">
                <div class="contenedor_btn--public">
                               <button  class="btn_publico" Vv-on:click="toggleFollow">PÚBLICO</button>
                                <div class="perfil__follow--container">
                                <button  class="btn_privado" v-on:click="toggleFollow">Cambiar a perfil privado</button>
                                </div>
                    </div>             
              </div> 

                    <span class="sub_title--notify ">
                        Con un Perfil Privado los usuarios no podrás ver tu actividad,
                        tus chollos compartidos, tus medallas conseguidas y tus
                        estadísticas como usuario. Tampoco podrán seguirte
                        y perderás todos tus seguidores.
                    </span>

                    <span>Permitir notificaciones por correo</span>

                </div>

                <div class="section__update--user__follow">
                    <div class="alerta_notifications">
                     <div class="alerta_title">
                            <img :src="alertaNotifyUsuariosImg" alt="">
                            <h2>Usuarios que sigues</h2>
                    </div>
                    </div>
                    <span class="sub_title--notify">
                        Puedes dejarlos de seguir en cualquier momento pulsando
                        la campanita
                    </span>
                </div>

                
                <div class="sectiom__user--following">
                <div class="alerta_notifications">
                     <div class="alerta_title">
                            <img :src="AvatarImgNotify" alt="">
                            <h2>Usuario unknown</h2>
                    </div>
                    </div>
                <div class="perfil__follow--container">
          <button  v-on:click="toggleFollow">
              <img :src="CampanaImgNotify" alt="">
            Siguiendo</button>
          </div>
          </div>   

          <hr> 

          <div class="delete__personal--data">
            <h2 class="titulo__delete--data">Eliminar datos personales</h2>
            <span>Eliminaremos todos tus datos personales, pero se mantendrá la información no personal como usuario anónimo. Si deseas eliminar una opinión, contáctanos: <a>Formulario de contacto.</a></span>
            <button>Eliminar datos personales</button>
          </div>


            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import Avatar from "../components/Avatar.vue";
import alertaNotifyImg from "../assets/profile/alerta_notify.svg"
import alertaNotifyEmailImg from "../assets/profile/alerta_email.svg"
import alertaNotifyPrivacidadImg from '../assets/profile/alerta_privacidad.svg'
import alertaNotifyUsuariosImg from '../assets/profile/usuarios.svg'
import SelectCountry from '../components/SelectCountry.vue'
import AvatarImgNotify from '../assets/profile/avatar_perfile.png'
import CampanaImgNotify from '../assets/profile/campana.svg'
import Switches from '../components/Switches.vue';
import Navbar from '../components/Navbar.vue'
import SwitchesBasic from '../components/SwitchesBasic.vue';
export default {
    components: {
        Avatar,
        Switches,
        SwitchesBasic,
        SelectCountry,
        Navbar
    },



    
    setup() {
        const selectedOption = ref('Option 1');
        const showMenuScroll = ref(true);
        const imagePlaceholderInstagram = new URL('../assets/profile/cerrar_input.svg', import.meta.url)
        const imagePlaceholderCalender = new URL('../assets/profile/calender_input.svg', import.meta.url)
        const modelValue = ref([
                    { id: '1', text: 'En app', switcheState: true },
                    { id: '2', text: 'En web', switcheState: true },
                    { id: '3', text: 'Al correo', switcheState: false },
                    { id: '4', text: 'En app', switcheState: true },
                    { id: '5', text: 'En web', switcheState: true },
                    { id: '6', text: 'Al correo', switcheState: false },
                    { id: '7', text: 'En app', switcheState: true },
                    { id: '8', text: 'En web', switcheState: true },
                    { id: '9', text: 'Al correo', switcheState: false },
                    { id: '10', text: 'En app', switcheState: true },
                    { id: '11', text: 'En web', switcheState: true },
                    { id: '12', text: 'Al correo', switcheState: false },
                    { id: '13', text: 'En app', switcheState: true },
                    { id: '14', text: 'En web', switcheState: true },
                    { id: '15', text: 'Al correo', switcheState: false },
        ]);
        const notifyAlerts = [
            { text: 'Notificación de comentarios nuevos en mi oferta.' },
            { text: 'Notificación de respuesta a un comentario mío.' },
            { text: 'Notificación cuando recibo una medalla nueva.' },
            { text: 'Notificación cuando recibo chollocoins.' },
            { text: 'Notificación cuando un usuario al que sigo sube un chollo.' },
        ]
        const modelValueBasic = ref([
            { id: '88', text: '', switcheState: true },
        ]);
        const SwitchNoyifyEmail = ref([
            { id: '98', text: '', switcheState: true },
        ]);
        const SwitchNoyifyAbout = ref([
            { id: '99', text: '', switcheState: true },
        ]);
        function updateModelValue(index, updatedSubArray) {
            modelValue.value.splice(index, updatedSubArray.length, ...updatedSubArray);
        }

        return {
            selectedOption,
            notifyAlerts,
            imagePlaceholderInstagram,
            imagePlaceholderCalender,
            alertaNotifyPrivacidadImg,
            alertaNotifyUsuariosImg,
            modelValue,
            AvatarImgNotify,
            alertaNotifyEmailImg,
            CampanaImgNotify,
            SwitchNoyifyEmail,
            SwitchNoyifyAbout,
            updateModelValue,
            showMenuScroll,
            modelValueBasic,
            alertaNotifyImg
        }
    }
}
</script>

<style lang="scss" scoped>

.overlay h1{
    font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
/* identical to box height */


color: #000000;
}
.sectiom__user--following{
    display:flex;
    padding-top:5%;
    justify-content: center;
    align-items: center;
}
.perfil__follow--container button {
  width: 120px;
  height: 32px;
  left: 106px;
  top: 136px;
  border: none;
  background: #000000;
  border-radius: 24px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
}

.delete__personal--data{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:10px;
padding:15px;
background: #FEE4E5;
border-radius: 8px;

.titulo__delete--data{
    color:#CC0002;
}

span{
    color:#CC0002;

    a{
        text-decoration:underline;
    }
}

button{
    width: 237px;
height: 38px;
border:none;
background: #F92426;
border-radius: 4px;
color:white;
}
}


.subtitle__switches {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    padding-top: 10px;

    color: #B1B1B1;
}

.texto__resaltado-notify {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #171717;

}

.section__user--publico{ 
    display: flex;
    padding-top: 5%;
    justify-content: flex-start;
    align-items: center;
    padding-bottom:13px;
    .contenedor_btn--public{
        display: flex;
        gap:10px;

            .btn_publico{
        width: 101px;
height: 34px;
border:none;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
/* identical to box height */

text-align: center;

color: #FFFFFF;
background: #02BB16;
border-radius: 24px;
    }

    .btn_privado{
        width: 100%;
height: 34px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
/* identical to box height */

text-align: center;
padding:10px;
color: #FFFFFF;

background: #171717;
border-radius: 24px;
    }
    }
}
.sub_title--notify {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    width: 90%;
    color: #171717;

}

.permitir_notify {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.section__update--ropa .sub_title--ropa {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    color: #626262;

}

.alerta_notifications {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;


}

.alerta_title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px !important;
    align-content: center;
    gap: 14px;
    padding-bottom:10px;
}

.checkbox__radio--genero {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    text-align: center;
}

.contenedor__main--perfilEdit h2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 17px;
    /* identical to box height */
    margin: 0px;

    color: #000000;
}

.calender__perfil {
    margin-top: 15px;
}

.calender__perfil span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */


    color: #000000;
}

.calender__perfil button {
    width: 100%;
    height: 54px;
    left: 12px;
    top: 673px;

    background: #171717;
    border-radius: 4px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #FFFFFF;
}

.btn__perfil--guardar {
    padding-top: 12px;
    padding-bottom: 12px;
}

.contenedor__main--perfilEdit {
    padding: 15px;

}

.calneder__input {
    padding-top: 10px;
}

input[type="radio"]+label:before {
    content: "";
    width: 20px;
    height: 20px;
    float: left;
    background: #fff;
    border: 2px solid var(--background-imageno);
    border-radius: 100%;
    position: relative;
}

.text_Activo--labelRadio {
    color: #171717;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
}

.container-input--radio {
    width: 100%;
    gap: 4px;
    position: relative;
    margin: 4px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

label {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    height: 100%;
    gap: 8px;
    font-size: 14px;
    padding: 10px;
    color: #D2D2D2;
    position: relative;
    padding-left: 0px;
}

label span {
    display: flex;
    width: max-content;

}

input[type="radio"] {
    display: none;
}


input[type="radio"]:checked+label:after {
    content: "";
    width: 0;
    height: 0;
    border: 5.2px solid #000000;
    float: left;
    margin-top: 0.8em;
    border-radius: 100%;
    position: absolute;
    left: 0.32rem;
    margin-top: 0em;
}



.checkbox__update--ropa {
    padding-top: 6%;
}

button {
    width: 173px;
    height: 54px;
    left: 12px;
    top: 332px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    background: #171717;
    border-radius: 4px;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
}

.container__img--portada {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 220px;
}

.input-container {
    position: relative;
}

.section__update--pass {
    padding-top: 10%;
}

.section__update--pais {
    padding-top: 10%;
}

.section__update--notifications {
    padding-top: 5%;
}

.section__update--notifications--correo {
    padding-top: 10%;
}

.section__update--notifications--newsletter {
    padding-top: 0%;
}

.section__update--notifications--privacidad {
    padding-top: 10%;
    h2 {
        padding-top: 5%;
    }
}

.section__update--ropa {
    padding-top: 10%;
}

.section__update--pais span {

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */


    color: #626262;
}

.section__update--pass h2 {
    margin-top: 5px;
    padding-bottom: 4px;
}

.input__container--pass {
    position: relative;
    margin-top: 10px;
}


.section__update--user__follow {
    padding-top: 5%;

    h2 {
        padding-top: 3%;
    }
}

.input__container--pass input {
    width: 100%;
    height: 54px;
    left: 12px;
    top: 804px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 18px 24px;
    gap: 10px;
    background: #F2F2F7;
    border-radius: 4px;
    border: none;
}

select {
    width: 100%;
    height: 54px;
    left: 12px;
    top: 804px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 18px 24px;
    gap: 10px;
    background: #F2F2F7;
    border-radius: 4px;
    border: none;
}

.input__container--pass input[type=text]::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: left;

    color: #C4D3E7;
}

.input-container input {
    width: 100%;
    height: 58px;
    left: 12px;
    top: 260px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    gap: 12px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 4px;
}

.input-container input[type=text]::placeholder {
    padding-left: 10px;
    margin-left: 0px;
    padding-right: 0px;
    background-image: var(--background-imagen);
    background-repeat: no-repeat;
    background-position: center right;
    height: auto;
    padding: 5px;
}

.container__text__switches {
    padding-top: 1px;
}

.input-container label {
    position: absolute;
    top: -12px;
    height: max-content;
    left: 10px;
    background-color: #fff;
    padding: 0 5px;
    color: #000;
}
</style>