<template>
    <div class="join_us">
        <div class="content">
            <div class="text_area">
                <span class="join_content"><b>Post Specification for <span style="color: #4F81BD;">AI-related openning</span> </b></span>
                <span class="join_content1"><b>Postdoctoral Fellow / Research Associate / Research Assistant (under the Research Talent Hub of ITF projects) (three posts)</b> (Ref. 22012809)</span>
                <br><br>
                <span class="join_content"><b>Duties</b></span>
                <span class="join_content1">The appointees will assist the project leader in the research project – “Integrative genome medicine”. This project is funded by the HK Global STEM Professorship Scheme. </span>
                <br><br>
                <span class="join_content"><b>Qualifications</b></span>
                <span class="join_content1">Applicants for the <b>Postdoctoral Fellow</b> posts should have a doctoral degree in Computational Biology, Bioinformatics, Computer Science, Genomics, Genetics or other related disciplines and must have no more than five years of post-qualification experience at the time of application.</span>
                <span class="join_content1">Applicants for the <b>Research Associate</b> posts should have a master’s degree in the said disciplines or a good honours degree in the said disciplines with three or more years of research/relevant work experience.</span>
                <span class="join_content1">Applicants for the <b>Research Assistant</b> posts should have an honours degree in the said disciplines or an equivalent qualification.</span>
                <span class="join_content1">For <b>all posts</b>, applicants should also:</span>
                <span class="join_content1">(a) obtain the required degree from a local university or a reputable or well-recognised university (i.e. the top 100 universities for STEM subjects of interest in the world university ranking tables <a href="https://www.itf.gov.hk/filemanager/en/content_90/RTH-ITF%20Guide_en_Mar%202021.pdf" style="color: #0000FF;" target="_blank"><i><u>https://www.itf.gov.hk/filemanager/en/content_90/RTH-ITF%20Guide_en_Mar%202021.pdf</u></i></a>); and</span>
                <span class="join_content1">(b) have experience in the data analytic skills of software development, algorithm design and analysis.</span>
                <span class="join_content1">Preference will be given to those with experience in the bioinformatic skills of genome sequence analysis including sequence/genome mapping, genome assembly, DNA- and RNA-seq data analysis, pathway analysis, RNA and protein 3D structure analysis.</span>
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
    cursor: pointer;
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