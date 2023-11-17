<template>
    <div class="contact">
        <div class="content">
            <div style="height: 20px;"></div>
            <div>
                <img src="images/map.jpg" class="contact_img">
                <div class="contact_statement">
                <div class="text_area">
                    <span class="contact_title">Address</span>
                    <br><br>
                    <span class="contact_content">The Hong Kong Polytechnic University Lee Shau Kee Building, Block Y520, Yuk Choi Rd, Hung Hom</span>
                    <br><br>
                    <span class="contact_content"><a style="color: #0088CC;" href="https://www.google.com/maps/place/%E9%A6%99%E6%B8%AF%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6%E6%9D%8E%E5%85%86%E5%9F%BA%E6%A5%BC/@22.3060286,114.1782798,17z/data=!3m1!4b1!4m6!3m5!1s0x340400e7ea4cd421:0xc9fb261caeaaf54a!8m2!3d22.3060237!4d114.1808547!16s%2Fg%2F11b67ll0tq?entry=ttu" target="_blank">show Map</a></span>
                </div>
                <div class="text_area">
                    <span class="contact_title">Phone</span>
                    <br><br>
                    <span class="contact_content">+852 3400 8567</span>
                </div>

                <div class="text_area">
                    <span class="contact_title">Email</span>
                    <br><br>
                    <span class="contact_content">weixiong.zhang [at] polyu.edu.hk</span>
                </div>
                </div>
            </div>
        </div>
    </div>
 </template>

 <script>
    export default {
    }
</script>

<style lang="less" scoped>
.contact{
    background-color: @intervalColor;
    margin-bottom: 80px;
}
.contact_img{
    width: 690px;
}
.contact_statement{
    float: right;
}
.text_area{
    background-color: #fff;
    font-size: 20px;
    cursor: pointer;
    .hoverShadow();
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
    width: 500px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 10px;  
}


.contact_title{
    font-size: 20px;
    font-weight: bold;
}

.contact_content{
    font-size: 18px;
    color: @timeColor;
}
</style>