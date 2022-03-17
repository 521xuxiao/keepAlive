<template>
    <div class="userList">
        user
        <br>
        <br>
        <button @click="$router.push('/userAdd')">新增</button>
        <button @click="$router.push('/userDetail')">详情</button>
    </div>
</template>

<script>
    export default {
        name: "User",

        methods: {

        },

        mounted() {
            console.log("用户管理没有缓存");
        },

        activated() {
            console.log("用户管理缓存了");
        },

        beforeRouteLeave(to, from, next) {
            if(to.name == "UserDetail") {
                this.$store.commit("keepAlive", "User");
            }else{
                this.$store.commit("noKeepAlive");
            }
            next();
        }
    }
</script>

<style scoped>

</style>