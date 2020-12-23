<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <slot></slot>
        <div class="error" v-if="error">{{ error }}</div>
    </div>
</template>

<script>
// Asyc-validator
import Schema from 'async-validator';
export default {
    inject: ['form'],
    props: {
        label: String,
        prop: String
    },
    data() {
        return {
            error: '' // error是空说明校验通过
        };
    },
    mounted() {
        this.$on('validate', () => {
            this.validate();
        });
    },
    methods: {
        validate() {
            //schema.validate 返回 promise
            const rules = this.form.rules[this.prop];
            const value = this.form.model[this.prop];
            const desc = { [this.prop]: rules };
            const schema = new Schema(desc);
            return schema.validate({ [this.prop]: value }, (errors, fields) => {
                if (errors) {
                    this.error = errors[0].message;
                } else {
                    this.error = '';
                }
            });
        }
    }
};
</script>

<style>
.error {
    color: red;
    font-size: 12px;
}
</style>