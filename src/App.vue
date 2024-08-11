<template>
    <div class="header">
        <div id="logo">
            <img src="./assets/logo.png" height="50px" />
        </div>
        <div id="menu">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                :ellipsis="false"
                router="true"
                @select="handleSelect"
            >
                <el-menu-item index="/">技术文章</el-menu-item>
                <el-menu-item index="/readList">阅读清单</el-menu-item>
                <el-menu-item index="/techNews">科技资讯</el-menu-item>
                <el-menu-item index="/contribute">我要贡献</el-menu-item>
                <el-menu-item index="/about">关于本站</el-menu-item>
                <!-- <div class="flex-grow" /> -->
            </el-menu>
        </div>
        <div id="user">登录</div>
    </div>
    <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'

import { ref } from 'vue'

const activeIndex = ref('/')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 110px;
    /* box-sizing: border-box; */
    height: 70px;
}

#logo {
    display: flex;
    align-items: center;
    width: 15%;
}

#menu {
    width: 60%;
}

/* .flex-grow {
    flex-grow: 1;
} */

#user {
    width: 20%;
}
</style>
