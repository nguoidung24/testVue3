<template>
    <div>
        <nuxt-link to="/s">ssssssssssssssss</nuxt-link>
        <div class="_container">
            <!-- {{ testState }}
        <button @click="handleClick()">++</button>
         -->
            <Component text="top" className="top" />
            <Component text="mid" className="mid" />
            <Component text="bot" className="bot" />
        </div>
    </div>
</template>

<script>
import Component from '~/components/index/Component.vue';
export default {
    components: { Component },

    head() {
        return {
            title: "Trang Chủ"
        }
    },
}
</script>

<!-- import Component from '~/components/index/Component.vue';

// const test1 = useTest.test1();
// const test2 = useTest.test2();

// console.log(test1.value);
// console.log(test2.value);


// const test3 = await $fetch('https://fakestoreapi.com/products/1');
// console.log(test3);

// const testState = useState('testState', () => 12)

// const handleClick = () => {
//     testState.value += 211
// } -->
