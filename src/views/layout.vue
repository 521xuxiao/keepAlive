<template>
    <div class="layout">
        <div class="left">
            <ul>
                <li class="li1" @click="$router.push('/system')">系统管理</li>
                <li class="li1" @click="$router.push('/user')">用户管理</li>
                <li class="li1" @click="$router.push('/role')">角色管理</li>
            </ul>
        </div>
        <div class="right">
            <transition mode="out-in">
                <keep-alive :include="catchList">
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        computed: {
            catchList() {
                return this.$store.state.catchList;
            }
        }
    }
</script>

<style scoped lang="scss">
    .layout{
        display: flex;
        height: 90vh;
        .left{
            width: 200px;
            ul{
                .li1{
                    padding-bottom: 20px;
                    list-style: none;
                }
            }
        }
        .right{
            flex: 1;
            .v-enter, .v-leave-to {
                opacity: 0;
            }
            .v-enter-active, .v-leave-active {
                transition: all 0.2s  ease
            }

        }
    }
</style>