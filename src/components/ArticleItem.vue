<template>
    <div class="article-item">
        <div class="article-item-left">
            <div class="avatar">
                <el-avatar :size="50" :src="articleItem.authorAvatar" />
            </div>
            <div class="article-info">
                <div>
                    <h4>
                        <RouterLink
                            :to="{
                                name: 'article',
                                query: {
                                    article: JSON.stringify(articleItem)
                                },
                                params: {
                                    articleId: articleItem.articleId
                                }
                            }"
                        >
                            {{ articleItem.articleTitle }}
                        </RouterLink>
                    </h4>
                </div>
                <div>
                    作者 {{ articleItem.articleAuthorName }} | 浏览量
                    {{ articleItem.articleBrowseCount }} | 点赞量 {{ articleItem.articleLikeCount }}
                </div>
            </div>
        </div>
        <div class="article-button">
            <el-button type="primary" size="small">加入清单</el-button>
        </div>
    </div>
    <el-divider style="margin: 0px 0px" />
</template>

<script setup>
import { RouterLink } from 'vue-router'

// import { ref } from 'vue'

// 定义 props
defineProps({
    articleItem: {
        type: Object,
        required: true,
        default: () => ({
            articleId: '123',
            articleTitle: 'TCP可靠性传输（默认）',
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
        })
    }
})

// 定义 URL 安全函数
// const sanitizeUrl = (url) => {
//     if (!url.startsWith('http')) {
//         return '#'
//     }
//     return url
// }

// const sanitizedArticleLink = ref(sanitizeUrl(props.articleItem.articleLink));
</script>

<style lang="css">
.article-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    border-radius: 0.5em;
    height: 80px;
    background-color: #ffffff;
}

.article-item-left {
    display: flex;
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
