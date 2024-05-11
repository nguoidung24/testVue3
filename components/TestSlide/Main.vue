<style>
@import url("~/assets/samsung/style.css");
@import url("~/assets/samsung/style2.css");
@import url("~/assets/samsung/style3.css");
/* @media only screen and (max-width: 768px) {
    .slide_ss_custom {
        bottom: 30% !important;
    }
}

@media only screen and (min-width: 768px) {
    .slide_ss_custom {
        bottom: 20% !important;
    }
} */
</style>
<script setup>
import TextTop from './Component/TextTop.vue';
import TextLeft from './Component/TextLeft.vue';
import Video from './Component/Video.vue';
import NextAndPrev from './Component/NextAndPrev.vue';
import TimeLine from './Component/TimeLine.vue';
useHead({
    script: [
        {
            src: "/SamSung/script.js",
        },
        {
            src: "/SamSung/script2.js",
            defer: true,
        },
        {
            src: "/SamSung/script3.js",

        },
        {
            src: "/SamSung/script4.js",
        },
    ]
})
const dataSlide = [
    {
        type:"textTop",
        name: "Unbox & Discover 2024",
        textH2Desktop: "",
        textH2Mobile: "",
        textPDesktop: "",
        textPMobile: "",
    },
    {
        type:"video",
        name: "Unbox & Discover 2024",
        textH2Desktop: "",
        textH2Mobile: "",
        textPDesktop: "",
        textPMobile: "",
    },
    {
        type:"textLeft",
        name: "Unbox & Discover 2024",
        textH2Desktop: "",
        textH2Mobile: "",
        textPDesktop: "",
        textPMobile: "",
    },
    
]

</script>
<template>

    <div>

        <div id="wrap">
            <div id="content" role="main">
                <div class="root responsivegrid">
                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                        <div class="pd-g-product-promotion-bar aem-GridColumn aem-GridColumn--default--12"></div>
                        <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">
                            <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                                <div class="static-content aem-GridColumn aem-GridColumn--default--12"></div>
                                <div class="ho-g-home-kv-carousel aem-GridColumn aem-GridColumn--default--12">
                                    <section class="home-kv-carousel  home-kv-carousel--height-medium"
                                        style="height: fit-content;">
                                        <div class="home-kv-carousel__container">
                                            <button tabindex="-1" type="button" class="swiper-autoplay-stop-btn">
                                                <span class="hidden">Dừng trình chiếu tự động</span>
                                            </button>
                                            <div class="home-kv-carousel__wrapper">
                                                <TextTop />
                                                <Video />
                                                <TextLeft />
                                            </div>
                                            <NextAndPrev />
                                        </div>
                                        <TimeLine />
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
