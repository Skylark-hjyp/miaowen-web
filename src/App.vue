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
    <div class="floating-component">
        <!-- 悬浮内容 -->
        <el-tooltip placement="left" effect="light" popper-class="too">
            <template v-slot:content>
                <div>
                    <el-button icon="el-icon-s-comment" class="butto" @click="handleQuestion"
                        >问题反馈
                    </el-button>
                    <br />
                    <el-button icon="el-icon-question" class="butto" @click="handleHelp"
                        >帮助手册
                    </el-button>
                </div>
            </template>
            <el-button icon="el-icon-menu" circle class="but"></el-button>
        </el-tooltip>
    </div>
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

.floating-component {
    position: fixed; /* 固定位置 */
    bottom: 5%; /* 下边距 */
    right: 1%; /* 右边距 */
    padding: 0;
    border-radius: 50%; /* 圆角 */
    z-index: 10000; /* 设置 z-index 确保悬浮在顶层 */
}
.but {
    font-size: larger;
    color: rgb(0, 119, 216);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2); /* 阴影 */
}
.butto {
    border: 0;
    padding: 10px;
    margin: 0;
}

.too.el-tooltip__popper.is-light {
    border: none !important;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
    padding: 5px;
}
/* 修改箭头边框 这里方位是left，所以 x-placement^="left" 并且是设置 border-right-color 的颜色*/
.too.el-tooltip__popper.is-light[x-placement^='left'] .popper__arrow {
    border-left-color: #eaeaea !important;
}
.too.el-tooltip__popper[x-placement^='left'] .popper__arrow {
    border-left-color: #eaeaea !important;
}
</style>
