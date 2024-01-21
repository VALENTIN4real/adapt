import './bootstrap';
import { createApp } from "vue";
import Home from "./components/base/headers/HeaderSimple.vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.esm.min.js'
import { BIconBatteryFull, BIconArrow90degDown, BIconBookmark } from 'bootstrap-icons-vue';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';




import SimpleDarkBlue from "./components/base/headers/HeaderSimple.vue";
import DoubleLineDarkBlue from "./components/base/headers/HeaderDoubleRow.vue";
import TypeOne from "./components/base/carousels/CarouselManual.vue";
import FooterSimple from "./components/base/footers/FooterSimple.vue";
import ContentAreaSimple from "./components/base/content-areas/ContentAreaSimple.vue";

const app = createApp({});

app.component('BIconBatteryFull', BIconBatteryFull);
app.component('BIconArrow90degDown', BIconArrow90degDown);
app.component('BIconBookmark', BIconBookmark);
app.use(BootstrapIconsPlugin);

app.component('simpleDarkBlue', SimpleDarkBlue);
app.component('doubleLineDarkBlue', DoubleLineDarkBlue);
app.component('typeOne', TypeOne);
app.component('footerSimple', FooterSimple);
app.component('contentAreaSimple', ContentAreaSimple);
app.mount('#app');
