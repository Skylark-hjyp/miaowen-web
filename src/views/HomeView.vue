<template>
    <!-- <div style="width: 100%; height: 100%; background-color: antiquewhite">sdf</div>-->

    <div class="content">
        <div class="left">left</div>
        <div class="main">
            <div v-for="article in articleList" :key="article">
                <ArticleItem :article-item="article"></ArticleItem>
            </div>
            <div class="pagination">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :current-page="1"
                    :page-size="10"
                    :total="total"
                    @current-change="handleCurrentChange"
                ></el-pagination>
            </div>
        </div>
        <div class="right">right</div>
    </div>
</template>

<script setup lang="ts">
// import Api from '@/api/api'
import ArticleItem from '@/components/ArticleItem.vue'
import * as Api from '@/api/api'
import { ref } from 'vue'

const articleList = ref([
    {
        articleId: '123',
        articleTitle: 'TCP可靠性传输',
        articleAuthorId: 2,
        articleAuthorName: '腾讯技术',
        authorAvatar:
            'https://ts4.cn.mm.bing.net/th?id=ODLS.ec018776-f8de-4e96-b7c3-f27332c63d0a&w=18&h=18&o=6&pid=AdsPlus',
        articleLink: 'https://mp.weixin.qq.com/s/qF1IQjy-A4xijW9YRf8Rvg',
        articlePublishTime: '2024-08-13 12:34:15',
        articleReceiveTime: '2024-08-13 12:34:15',
        articleTag: '网络|基础',
        articleBrowseCount: 23,
        articleCommentCount: 6,
        articleLikeCount: 3,
        articleDislikeCount: 7,
        articleMarkCount: 12,
        articleShareCount: 13
    }
])

const total = ref(0)
const pageSize = ref(10)

// 获取文章列表
const loadArticleList = (page: Number, pageSize: Number) => {
    return Api.loadArticleList(page, pageSize)
        .then((response) => {
            articleList.value = response.data.data.articleList
            total.value = response.data.data.totalCount
        })
        .catch((error) => {
            console.log('Error loading articles:', error)
        })
}

loadArticleList(1, 10)

const handleCurrentChange = (page: Number) => {
    loadArticleList(page, pageSize.value)
}
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
    .pagination {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.right {
    display: flex;
    flex-direction: column;
    width: 18%;
}
</style>
