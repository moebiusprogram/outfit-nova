import { ref } from 'vue';
import imageUrlInstagram from '../assets/Colaboramos/instagram.svg' // => or relative path
import imageUrlTikTok from '../assets/Colaboramos/tiktok.svg' // => or relative path
import imageUrlYoutube from '../assets/Colaboramos/youtube.svg' // => or relative path
import imageUrlFacebook from '../assets/Colaboramos/facebook.svg' // => or relative path
import imageUrlTwitter from '../assets/Colaboramos/twitter.svg' // => or relative path
import imagePlaceholderInstagram from '../assets/Colaboramos/INSTAGRAM.svg' // => or relative path
import imagePlaceholderTikTok from '../assets/Colaboramos/TIKTOK.svg' // => or relative path
import imagePlaceholderYoutube from '../assets/Colaboramos/YOUTUBE.svg' // => or relative path
import imagePlaceholderFacebook from '../assets/Colaboramos/FACEBOOK.svg' // => or relative path
import imagePlaceholderTwitter from '../assets/Colaboramos/TWITTER.svg' // => or relative path

export default function useInputs() {
    const inputs = ref([
        { url: imageUrlInstagram, urlright: imagePlaceholderInstagram, placeholder: 'Escribe tu usuario' },
        { url: imageUrlTikTok,    urlright: imagePlaceholderTikTok, placeholder: 'Escribe tu usuario' },
        { url: imageUrlYoutube,   urlright: imagePlaceholderYoutube, placeholder: 'Escribe tu usuario' },
        { url: imageUrlFacebook,  urlright: imagePlaceholderFacebook, placeholder: 'Escribe tu usuario' },
        { url: imageUrlTwitter,   urlright: imagePlaceholderTwitter, placeholder: 'Escribe tu usuario' },
    ]);

    return {
        inputs
    };
}