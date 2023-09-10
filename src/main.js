import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/mdc-light-deeppurple/theme.css';
import InputText from 'primevue/inputtext';
import 'primeicons/primeicons.css';
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import Checkbox from 'primevue/checkbox';
const i18n =  createI18n({
    locale:'pt',
    messages:{
        es:{
            'ContactMessage':'Este es un espacio para contactarnos',
            'TextPublicy':'Este es un espacio para recibir publicidad',
            'Name':'Nombre',
            'PlaceName': 'Ingresa tu nombre',
            'Email':'Correo',
            'PlaceEmail': 'Ingresa tu correo',
            'Message':'Mensaje',
            'PlaceMessage': 'Ingresa tu mensaje',
            'Send':'Enviar',
            'PhoneNumber':'Teléfono',
            'Terms':'Acepta Términos y condiciones',
            'InvalidEmail': 'Email inválido',
        },
        en:{
            'TextPublicy':'This is a space to receive publicity',
            'ContactMessage':'This is an space to contact us ',
            'Name':'Name',
            'PlaceName': 'Enter your name',
            'Email':'Email',
            'PlaceEmail': 'Enter your email',
            'Message':'Message',
            'PlaceMessage': 'Enter your message',
            'Send':'Send    ',
            'PhoneNumber':'Phone Number',
            'Terms':'Accept Terms and Conditions',
            'InvalidEmail': 'Invalid email'
        },
        pt:{
            'TextPublicy':'Este é um espaço para receber publicidade',
            'ContactMessage':'Este é um espaço para nos contatar',
            'Name':'Nome',
            'PlaceName': 'Digite seu nome',

            'Email':'Email',
            'PlaceEmail': 'Digite seu email',
            'Message':'Mensagem',
            'PlaceMessage': 'Digite sua mensagem',
            'Send':'Enviar',
            'PlacePhoneNumber': 'Digite seu telefone',
            'PhoneNumber':'Telefone',
            'Terms':'Aceitar termos e condições',
            'InvalidEmail': 'Email inválido'
        }
    }
})
const app =createApp(App);
app.use(i18n);
app.use(PrimeVue);
app.component('pv-button', Button );
app.component('input-text', InputText);
app.component('text-area', Textarea);
app.component('checkbox', Checkbox);

app.mount('#app');
