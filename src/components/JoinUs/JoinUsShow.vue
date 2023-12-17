<template>
    <div class="join_us">
        <div class="content">
            <div class="title">
                <span class="title_span">Current Available Positions</span>
            </div>

            <div class="text_area">
                <span class="join_content">We are looking for young talents with background in <span
                        style="color: #7030A0;"> Computer Science and Engineering, Biology, Computational Biology, Genomics,
                        Biomedical Engineering, Medicine</span> and related disciplines to join the Hong Kong Jockey Club
                    STEM Laboratory of Genomics in Healthcare.</span>
                <span class="join_content">
                    <b>Multiple positions are available</b><br>
                    <span style="color: #7030A0;"><b> • Research Assistant Professors</b></span><br>
                    <span style="color: #7030A0;"> • (Senior) <b>Research Fellows</b></span><br>
                    <span style="color: #7030A0;"><b> • Postdoctoral Fellows</b></span><br>
                    <span style="color: #7030A0;"> • Research Assistants</span><br>
                    <span style="color: #7030A0;"> • PhD and Master's students</span><br>
                    <span style="color: #7030A0;"> • Undergraduate Interns</span>
                </span>
                <span class="join_content">If you are passionate about advancing genomic medicine and developing AI
                    technology for healthcare, you will find a home at this interdisciplinary systems biology and genomics
                    lab. Join our active research team and be part of groundbreaking research at the forefront of AI,
                    genomics and molecular biology.</span>
                <span class="join_content">The laboratory, supported by the Research Grants Council of Hong Kong and The
                    Hong Kong Jockey Club Charities Trust, is a comprehensive facility consisting of a Computational
                    Genomics Laboratory and a Molecular Biology Laboratory. Facilitated by ~200 square meters of office/lab
                    space, it can accommodate over 40 researchers and students. The Computational Laboratory has a cluster
                    of CPUs, GPUs, file servers, and petabyte-scale disk arrays. The Molecular Biology Laboratory is
                    equipped with instruments related to genomics, cellular/molecular mechanisms, and conventional
                    techniques.</span>
            </div>

            <!-- <div class="title">
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
            </div> -->

            <div class="title">
                <span class="title_span">Application</span>
            </div>
            <div class="text_area">
                <span class="join_content"><b>Prospective applicants may sent inquiry to:</b>genomics@polyu.edu.hk</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.join_us {
    background-color: @intervalColor;
}

.text_area {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
    background-color: #fff;
    padding-top: 15px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    font-size: 20px;

    ul {
        display: flex;
        padding-left: 90px;

        li {
            width: 400px;
        }

        padding-top: 20px;

        &:last-child {
            padding-bottom: 20px
        }
    }

    .hoverShadow();
}

.join_content {
    padding-top: 15px;
    display: inline-block;
    font-size: 20px;
    padding-left: 90px;
    letter-spacing: 1px;
}

.join_content1 {
    padding-top: 15px;
    display: inline-block;
    font-size: 17px;
    padding-left: 90px;
    letter-spacing: 1px;
}</style>
