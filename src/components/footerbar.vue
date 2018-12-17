<template>
    <div class="footer-wrpaper">
        <router-link active-class="act" to="/index" tag="div" class="item">
            <i class="icon iconfont icon-changyonglogo40"></i>
            <span>外卖</span>
        </router-link>
        <router-link active-class="act" to="/descovery" tag="div" class="item">
            <i class="icon iconfont icon-faxian"></i>
            <span>发现</span>
        </router-link>
        <router-link active-class="act" to="/order" tag="div" class="item">
            <i class="icon iconfont icon-icon"></i>
            <span>订单</span>
        </router-link>
        <router-link active-class="act" to="/mine" tag="div" class="item">
            <i class="icon iconfont icon-wode"></i>
            <span>我的</span>
       </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
@import '../../static/less/var.less';
.footer-wrpaper{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height:@base*100rem;
    background:#fff;
    color: @fc1;
    display: flex;
    border-top: @bc1;
    .item{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        i{
            font-size: @base*38rem;
        }
        span{
            font-size: @base*22rem;
        }
        &.act{
            color: @mc;
        }
    }
}
</style>
