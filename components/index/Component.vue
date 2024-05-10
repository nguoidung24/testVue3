<template>
    <div>
        <section v-motion-slide-visible-left :delay="500" :class="className">
            <div>
                {{text}}
            </div>
        </section>
    </div>
</template>
<script>
export default {
    props:["text","className"],
    created(){
        this.test();
    },
    methods:{
        test(){
            // console.log(this.className);
        }
    }
}
</script>