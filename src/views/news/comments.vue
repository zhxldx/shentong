<template>
<ul>
    <li v-for="comment in comments">
        <div class="comment">
            <div class="comment-head">
                <div class="avatar">
                    <img src="{{comment.avatar}}" alt="">
                </div>
                <div class="meta-data">
                    <span>{{comment.realName}}</span>
                    <span>{{comment.addTime}}</span>
                </div>
            </div>
            <div class="comment-body">
                {{comment.comment}}
            </div>
        </div>
    </li>
</ul>
<div class="comment-input">
    <input type="text" placeholder="输入你的想法">
    <button>发送</button>
</div>
</template>

<script>
import avatar from 'assets/paihangbang_touxiang@2x.png'
export default {
  data () {
    return {
        comments:[
            {
                avatar: avatar,
                realName: '李大仁',
                addTime: '8-11 09:00',
                comment: '善良的上课困了睡觉肯定疯了空间感动了空间舍得离开就是对方'
            },
            {
                avatar: avatar,
                realName: '李大仁',
                addTime: '8-11 09:00',
                comment: '善良的上课困了睡觉肯定疯了空间感动了空间舍得离开就是对方'
            }
        ]
    };
  }
};
</script>

<style lang="css" scoped>
</style>