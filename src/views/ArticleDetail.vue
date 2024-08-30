<template>
    <div class="article-detail">
        <div class="article-item">
            <div class="article-item-left">
                <div class="avatar">
                    <el-avatar :size="50" :src="article.authorAvatar" />
                </div>
                <div class="article-info">
                    <div>
                        <h4>
                            <a :href="article.articleLink" target="_blank">{{
                                article.articleTitle
                            }}</a>
                        </h4>
                    </div>
                    <div>
                        作者 {{ article.articleAuthorName }} | 浏览量
                        {{ article.articleBrowseCount }} | 评论量
                        {{ article.articleCommentCount }} |
                    </div>
                    <div>
                        点赞量 {{ article.articleLikeCount }} | 点踩量
                        {{ article.articleDislikeCount }} | 收藏量 {{ article.articleMarkCount }} |
                        分享量 {{ article.articleShareCount }} |
                    </div>
                </div>
            </div>
            <div class="article-button">
                <el-button type="primary" size="small">加入清单</el-button>
            </div>
        </div>
        <div>
            <iframe
                :src="article.articleLink"
                frameborder="0"
                :style="{ width: '100%', height: '100%' }"
            ></iframe>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref } from 'vue'

const router = useRoute()
const article = ref({})

article.value = JSON.parse(router.query.article)
console.log('article', article.value)
</script>

<style lang="css" scoped>
.article-detail {
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    width: 60%;
}

.article-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    border-radius: 0.5em;
    /* height: 90px; */
    background-color: #ffffff;
}

.article-item-left {
    display: flex;
    align-items: center;
}

.avatar {
    margin-right: 20px;
}

.articleInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 20px 0px 20px;
}
</style>
