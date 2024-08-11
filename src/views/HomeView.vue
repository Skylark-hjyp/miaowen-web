<template>
    <!-- <div style="width: 100%; height: 100%; background-color: antiquewhite">sdf</div>-->

    <div class="content">
        <div class="left">left</div>
        <div class="main">main</div>
        <div class="right">right</div>
    </div>
</template>

<script setup>
import Api from '@/api/api'

Api.login('hjf')
</script>

<style>
.content {
    display: flex;
    justify-content: space-between;
    padding: 20px 8%;
}

.left {
    display: flex;
    flex-direction: column;
    width: 18%;
}

.main {
    display: flex;
    flex-direction: column;
    width: 60%;
}

.right {
    display: flex;
    flex-direction: column;
    width: 18%;
}
</style>
