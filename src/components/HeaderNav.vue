<template>
    <div class="header-nav">
        <ul class="header-ul w">
            <li><RouterLink class="link" to="/">Home</RouterLink></li>
            <li><RouterLink class="link" to="/research/fund">Research</RouterLink></li>
            <li><RouterLink class="link" to="/publications/statement">Publications</RouterLink></li>
            <li><RouterLink class="link" to="/team">Team</RouterLink></li>
            <li><RouterLink class="link" to="/joinUs/show">JoinUs</RouterLink></li>
            <li><RouterLink class="link" to="/contact">Contact</RouterLink></li>
        </ul>
    </div>
 </template>

 <script>
    export default {

    }
</script>

<style lang="less" scoped>
.header-nav{
    background-color: @navColor;
    border-radius: 5px;
}

.header-ul {
    // padding-top: 14px;
    // padding-bottom: 14px;
    height: 54px;
    line-height: 54px;
    display: flex;
    justify-content:center;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    li{
        a.router-link-exact-active{
            color: #096dd9;
        }
        .link{
            padding-left: 48px;
            padding-right: 48px;
            cursor: pointer;
            &:hover{
                color: @highLightColor;
            }
        }
    }
}
</style>