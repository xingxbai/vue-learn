<template>
    <div class="home">
        <KFormTest msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import KFormTest from '@/components/KFormTest.vue';

export default {
    name: 'Home',
    components: {
        KFormTest
    }
};
</script>
