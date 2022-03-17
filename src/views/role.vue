<template>
    <div class="roleList">
        role
        <br>
        <br>
        <button @click="$router.push('/roleAdd')">新增</button>
        <button @click="$router.push('/roleDetail')">详情</button>
    </div>
</template>

<script>
    export default {
        name: "Role",

        mounted() {
            console.log("角色管理没有缓存");
        },

        activated() {
            console.log("角色管理缓存了");
        },

        beforeRouteLeave(to, from, next) {
            if(to.name == "RoleDetail") {
                this.$store.commit("keepAlive", "Role");
            }else{
                this.$store.commit("noKeepAlive");
            }
            next();
        }
    }
</script>

<style scoped>

</style>