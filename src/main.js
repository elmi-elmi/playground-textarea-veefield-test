import { createApp } from 'vue';
import App from './App.vue';
import {Field} from 'vee-validate';
const app =  createApp(App);
app.component('Field', Field);
app.mount('#app');
