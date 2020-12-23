<template>
    <div class="hello">
        <KForm :model="userInfo" :rules="rules" ref="loginForm">
            <KFormItem label="账户名" prop="username">
                <KInput
                    v-model="userInfo.username"
                    placeholder="请输入账户名"
                ></KInput>
            </KFormItem>
            <KFormItem label="密码" prop="password">
                <KInput
                    v-model="userInfo.password"
                    placeholder="请输入密码"
                ></KInput>
            </KFormItem>
            <KFormItem label="地址">
                <KInput
                    v-model="userInfo.address"
                    placeholder="请输入地址"
                ></KInput>
            </KFormItem>
            <KFormItem>
                <button @click="login">登陆</button>
            </KFormItem>
        </KForm>
    </div>
</template>

<script>
import KInput from './form/KInput';
import KFormItem from './form/KFormItem';
import KForm from './form/KForm';
export default {
    components: {
        KInput,
        KFormItem,
        KForm
    },
    name: 'KFormTest',
    props: {
        msg: String
    },
    data() {
        return {
            userInfo: {
                username: '',
                password: '',
                address: ''
            },
            rules: {
                username: [{ required: true, message: '请输入用户名称' }],
                password: [{ required: true, message: '请输入密码' }]
            }
        };
    },
    methods: {
        login() {
            this.$refs['loginForm'].validate(valid => {
                if (valid) {
                    alert('成功');
                } else {
                    alert('失败');
                }
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
