<template>
    <div class="systemList">
        systemList
        <br>
        <br>
        <button @click="$router.push('/systemAdd')">新增</button>
        <button @click="$router.push('/systemDetail')">详情</button>
    </div>
</template>

<script>
    export default {
        name: "System",

        mounted() {
            console.log("系统管理没有缓存");
        },

        activated() {
            console.log("系统管理缓存了");
        },

        beforeRouteLeave(to, from, next) {
            if(to.name == "SystemDetail") {
                this.$store.commit("keepAlive", "System");
            }else{
                this.$store.commit("noKeepAlive");
            }
            next();
        }
    }
</script>

<style scoped>

</style>