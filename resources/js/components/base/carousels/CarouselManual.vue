<template>
    <div>
        <!-- Faire un background radient aléatoire aux slides -->
        <vueper-slides>
            <vueper-slide class="slide" :style="'background:' + randomGradient()" v-for="i in 5" :key="i" :title="i.toString()" />
        </vueper-slides>
    </div>

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: { VueperSlides, VueperSlide },
    name: 'CarouselManual',
    data() {
        return {
            // Faire un background radient aléatoire aux slides
            gradient: this.randomGradient(),
        }
    },
    methods: {
        // Faire un background radient aléatoire aux slides
        randomGradient() {
            const randomColor = () => Math.floor(Math.random() * 255)
            return `linear-gradient(45deg, rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 1) 0%, rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 1) 100%)`
        },
    }
}
</script>
<style scoped lang="scss">

.slide {
    background: linear-gradient(45deg, rgba(255, 0, 0, 1) 0%, rgba(0, 0, 255, 1) 100%);
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: white;
}
</style>
