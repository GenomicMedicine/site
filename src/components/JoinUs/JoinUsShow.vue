<template>
    <div class="join_us">
        <div class="content">
            <div class="title">
                <span class="title_span">Current Available Positions</span>
            </div>

            <div class="text_area">
                <span class="join_content"><b>We are looking for young talents with background in <span style="color: #7030A0;"> Computer Science and Engineering, Math, Biology, Medicine, and related fields</span>. We have multiple positions available at all levels - <span style="color: #7030A0;">Research fellow, postdoc fellow, research assistant and PhD, MS, and undergraduate student</span>.</b></span>
                <span class="join_content"><b>Prospective applicants may sent inquiry to:</b>  weixiong.zhang [at] polyu.edu.hk</span>
            </div>

            <div class="title">
                <span class="title_span">Example position</span>
            </div>

            <RouterLink to="/joinUs/ai">
            <div class="text_area">
                <span class="join_content"><b>Post Specification for <span style="color: #4F81BD;">AI-related openning</span> </b></span>
                <span class="join_content1"><b>Postdoctoral Fellow / Research Associate / Research Assistant (under the Research Talent Hub of ITF projects) (three posts)</b> (Ref. 22012809)</span>
            </div>
            </RouterLink>

            <RouterLink to="/joinUs/biology">
            <div class="text_area">
                <span class="join_content"><b>Post Specification for <span style="color: #4F81BD;">Biology-related openning </span> </b></span>
                <span class="join_content1"><b>Postdoctoral Fellow / Research Associate / Research Assistant (under the Research Talent Hub of ITF projects)</b> (Ref. 22012808)</span>
            </div>
            </RouterLink>

            <div class="title">
                <span class="title_span">Remuneration</span>
            </div>
            <div class="text_area">
                <span class="join_content">A highly competitive remuneration package will be offered. current and expected salary in the application.</span>
            </div>

            <div class="title">
                <span class="title_span">Application</span>
            </div>
            <div class="text_area">
                <span class="join_content">Please send a completed application form by post to Human Resources Office, 13/F, Li Ka Shing Tower, The Hong Kong Polytechnic University, Hung Hom, Kowloon, Hong Kong or via email to <a href="mailto: weixiong.zhang@polyu.edu.hk" style="color: #0000FF;"><i><u>weixiong.zhang [at] polyu.edu.hk.</u></i></a></span>
                <span class="join_content">Application forms can be downloaded from <a href="https://www.polyu.edu.hk/hro/careers/guidelines_and_forms/forms" style="color: #0000FF;"><i><u>https://www.polyu.edu.hk/hro/careers/guidelines_and_forms/forms.</u></i></a> If a separate curriculum vitae is to be provided, please still complete the application form which will help speed up the recruitment process.</span>
                <span class="join_content"><b>Recruitment will continue until the position is filled. Applications should be addressed directly to Prof. Zhang Weixiong (please state Department of Health Technology and Informatics on the envelope). </b></span>
                <span class="join_content">The University’s Personal Information Collection Statement for recruitment can be found at<a href="https://www.polyu.edu.hk/hro/careers/guidelines_and_forms/pics_for_recruitment" style="color: #0000FF;"><i><u> https://www.polyu.edu.hk/hro/careers/guidelines_and_forms/pics_for_recruitment.</u></i></a></span>
            </div>
        </div>
    </div>
 </template>

 <script>
    export default {
    }
</script>

<style lang="less" scoped>
.join_us{
    background-color: @intervalColor;
}
.text_area{
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
    background-color: #fff;
    padding-top: 15px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    font-size: 20px;
    ul{
        display: flex;
        padding-left: 90px;
        li{
            width: 400px;
        }
        padding-top: 20px;
        &:last-child {
            padding-bottom: 20px
        }
    }
    .hoverShadow();
}
.join_content{
        padding-top: 15px;
        display: inline-block;
        font-size: 20px;
        padding-left: 90px;
        letter-spacing: 1px;
}
.join_content1{
        padding-top: 15px;
        display: inline-block;
        font-size: 17px;
        padding-left: 90px;
        letter-spacing: 1px;
}


</style>