<template>
    <div class="publications_content_all">
        <div class="note">(Note: IJCAI and AAAI are two leading International AI Confs that adopt double-blind review with acceptance rates being typically around 20%)</div>
        <div class="publications_nav">
                <ul>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/all">ALL</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/2023">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2023</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/2022">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2022</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/2020">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2020</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/2019">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2019</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/2018">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2018</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/2017">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2017</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/2016">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2016</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/2015">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2015</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/2014">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2014</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/2013">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2013</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/2010">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2010</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/2009">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2009</RouterLink></li>
                        <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/2008">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2008</RouterLink></li>
                    <li class="publications_nav_byYear"><RouterLink class="publications_link" to="/publications/peer-reviewed/2008before">
                        <span class="dot"><span class="indot"></span></span>&nbsp;2008 before</RouterLink></li>
                </ul>
            </div>
            <router-view/>

    </div>
 </template>

 <script>
    export default {

    }
</script>

<style lang="less" scoped>


.publications_nav_byYear{
    color: @timeColor;
    padding-top: 8px;
    &:hover{
        .dot{
            background: @highLightColor;
        }
    }
    .router-link-exact-active{
        color: @highLightColor;
        .dot{
            background: @highLightColor;
            }
    }
}

.dot{
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    background: #e6e6e6;
    text-align: center;
    position: relative;
}
.indot{
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -3px;
    margin-top: -3px;
}


.publications_link{
    color: @timeColor;
    font-size: 15px;
    font-weight: bold;
    &:hover{
        color: @highLightColor;
    }
}

.note{
    padding-top: 10px;
    text-align: center;
    font-size: 13.3px;
    font-weight: bold;
}

</style>