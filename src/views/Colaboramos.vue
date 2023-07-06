<template>
    <div class="container__colaboramos">
        <div class="container__img--portada"
        >
        <img width="100%" height="344" :src="imageUrlPortada" alt="iamgen portada" class="img__portada">
            <div class="overlay">
                <h1>¿Colaboramos juntos?</h1>
            </div>
        </div>
        <div class="inputs">
            <input type="text" placeholder="Tu nombre">
            <input type="text" placeholder="Tu correo electrónico">
            <div class="title-container">
                <h3>¿Nos compartes tus redes?</h3>
            </div>
            <div class="body_form--interno" v-for="(input, index) in inputs" :key="index">
                <input type="text" :style="{
                    '--background-image': `url(${input.url})`,
                    '--background-imagendos': `url(${input.urlright})`
                }" :placeholder="input.placeholder" />
            </div>
        </div>
        <div class="title-container">
            <h3>Describe el contenido que generas en tus redes sociales</h3>
        </div>
        <div class="container__textarea">
            <textarea class="textarea" placeholder="Describe el tipo de contenido qué  haces"></textarea>
            <div class="checkbox-container">
                <input type="checkbox" id="politicas" name="politicas" value="aceptado">
                <label for="politicas">Acepto el tratamiento de mis datos personales
                    conforme a la <a>política de privacidad.</a></label>
            </div>
            <button class="button">Enviar solicitud</button>
            <p class="paragraph">El responsable del tratamiento es Outfitnova (titularidad de 7AM Marketing, S.L.), con la
                finalidad de enviarte información relacionada con tu solicitud de información. La legitimación es tu
                consentimiento. No se realizan cesiones, salvo a los proveedores de servicios de alojamiento de los
                servidores ubicados dentro de la UE. Podrás ejercer los derechos de acceso, rectificación, limitación,
                oposición, portabilidad, o retirar el consentimiento enviando un email a data@outfitnova.com. Consulta
                nuestra Política de Privacidad para más información.</p>
        </div>
    </div>
</template>

<script >
import useInputs from '../composables/useImagesColaboramosView';
export default {
    setup() {
        const imageUrlPortada = new URL('../assets/Colaboramos/Portada_colaboramos.png', import.meta.url)
        const { inputs } = useInputs();
        return {
            imageUrlPortada,
            inputs
        };
    },
    
};
</script>

<style lang="scss" scoped>
.body_form--interno {
    gap: 9px;
    display: flex;
    flex-direction: column;
}

.body_form--interno input {
    align-items: center;
    padding: 18px 16px;
    gap: 12px;
    height: 58px;
    left: 12px;
    top: 421px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 4px;
    width: 100%;


}


.img__portada{
    width: 100%;
    height: 344px;
}
.body_form--interno input {
    font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
color: #000000;
padding-left: 33px !important;
}

.body_form--interno input[type=text]::placeholder {
    width: 100%;
    display: grid;
    padding-left: 10px !important;
    background-color: none;
    font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */


color: #A9A9A9;
}

.body_form--interno input[type=text]::placeholder {
    padding-left: 10px;
    margin-left: 10px;
    padding-right: 0px;
    background-image: var(--background-imagendos);
    background-repeat: no-repeat;
    background-position: center right;
}

.body_form--interno input[type=text] {
    padding-left: 25px;
    margin-left: 0px;
    background-image: var(--background-image);
    background-repeat: no-repeat;
    background-position: center left;
    background-position-x: 8px;
    background-color: none;
    background-size: auto 19px;
}

.body_form--interno input[type=text]:focus {
    padding-left: 31px;
}

::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem !important;
    line-height: 19px;
    margin-left: 10px;
    color: #9D9D9D;
}

.container__img--portada {
    position: relative;
    width: auto;
    height: 344px;
}

.container__colaboramos {
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
}

.container__colaboramos h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    text-align: center;
    color: #000000;
}

.container__colaboramos h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */
    text-align: center;
    color: #000000;
}

.overlay {
    position: absolute;
    /* top: calc(50% - 126.5px); */
    left: 0%;
    position: absolute;
    width: 100%;
    height: 344px;
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 92.19%);
    background-image: -webkit-linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 92.19%);
    background: -webkit-linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 92.19%);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 92.19%);
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px;
}

.inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 15px;
    margin: 14px;
    gap: 10px;
}

.inputs input {
    align-items: center;
    padding: 18px 16px;
    gap: 12px;
    height: 58px;
    left: 12px;
    top: 421px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 4px;
}

.container__textarea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container__textarea p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    /* or 160% */
    margin: 15px;
    text-align: justify;

    color: #9C9C9C;
}

.textarea {
    width: 90%;
    height: 168px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 4px;
    padding: 18px 16px;
    font-size: 12px;
}

.textarea::placeholder{
    font-size: 12px !important;
}



.checkbox-container {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-left: 21px;
    margin-right: 20px;
    gap: 10px;
    width: 90%;
}

.checkbox-container input[type=checkbox]{
    width: 22px;
height: 22px;
left: 12px;
top: 1146px;

border: 1px solid #3C3C3C;
border-radius: 4px;
}

.checkbox-container label{
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
text-align: justify;
max-width: 80%;
color: #727272;

a {
    color:#597EFF;
}

}
.button {
    width: 100%;
    margin-top: 10px;
    width: 100%;
    height: 55px;
    left: 12px;
    top: 1220px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: #FFFFFF;
    background: #171717;
}

.paragraph {
    margin-top: 10px;
}</style>