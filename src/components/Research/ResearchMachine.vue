<template>
    <div class="research-content">
        <ul>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;In recent years, in order to support the research activities in computational biology and genomics, we have been focusing on developing effective computational methods for finding and analyzing modular structures in large (biological) networks.
            </li>
            <li class="research_title">Identification of network modules in complex networks: </li>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;The network GWAS and co-expression network approaches described above rely heavily on accurately and efficiently finding network modules. Nevertheless, finding structures in large networks is a challenging problem in machine learning and datamining. 
                First, network structural properties can be characterized in several different ways, by node connectivity, by properties on links (such as relationships among connected individuals), or by semantics of nodes and links (such as the social roles that individuals play in a society network). 
                In our research, we considered these different types of information for network module finding and developed effective novel methods for finding modules of nodes (<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">Jin, Chen, He and Zhang, Proc. AAAI-15</a>), modules of links (<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">He, Liu, Jin and Zhang, Proc. AAAI-15</a>), and modules that are defined by network structural 
                information and node semantics (<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">He, et al., Proc AAAI-17</a>). We adopted a few different machine learning techniques in developing our methods, including non-negative matrix factorization (<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">Wang, et al., Proc. AAAI-16</a>), stochastic modeling (<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">He, Liu, Jin and Zhang, Proc. AAAI-15</a>), deep learning (<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">Yang, et al., Proc. IJCAI-16</a>), 
                and Markov Random Fields (<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">He, et al., Proc. AAAI-18</a>).
            </li>
            <li class="research_title">Applications of network module analysis:</li>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;One of the applications of this line of research is the network-based GWAS, as discussed in (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/25233071/" target="_blank">Climer, Templeton and Zhang, PLOS Comp. Biol., 10(9):e1003766, 2014</a>) and (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/25813846/" target="_blank">Climer, Templeton and Zhang, Nature Comm., 6:6534, 2015</a>). 
                Another area of application is network-based transcriptome analysis for elucidation of gene regulation, which has been studied in the Zhang lab, as discussed in (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/18842138/" target="_blank">Ray, Ruan and Zhang, Genome Biol., 9(10):R148, 2008</a>), 
                (<a class="research_link" href="https://bmcsystbiol.biomedcentral.com/counter/pdf/10.1186/1752-0509-4-8.pdf" target="_blank">Ruan, Dean and Zhang, BMC Syst. Biol., 4:136, 2010</a>) and (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/18351912/" target="_blank">Ruan and Zhang, Physics Review E, 77:016104, 2008</a>).
                <a href="https://sci-hub.se/10.1186/1752-0509-4-8" target="_blank">
                    <img class="icon" src="data:image/png;base64,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"/>
                </a>
            </li>

        </ul>    
    </div>
 </template>

 <script>
    export default {

    }
</script>

<style lang="less" scoped>
</style>