<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    provide() {
        return {
            form: this
        };
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object
        }
    },
    methods: {
        validate(cb) {
            // 过滤没有规则后进行校验
            const tasks = this.$children
                .filter(item => item.prop)
                .map(ite => ite.validate());
            Promise.all(tasks)
                .then(() => cb(true))
                .catch(() => cb(false));
        }
    }
};
</script>

<style>
</style>