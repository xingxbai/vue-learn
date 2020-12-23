<template>
    <!-- 自定义组件双向绑定：:value  @input -->
    <!-- v-bind="$attrs"展开$attrs -->
    <div>
        <input :type="type" :value="value" @input="onInput" v-bind="$attrs" />
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInput(e) {
            this.$emit('input', e.target.value);
            this.$parent.$emit('validate', e.target.value);
        }
    }
};
</script>

<style>
</style>