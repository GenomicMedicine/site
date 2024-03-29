<template>
    <div class="research-content">
        <ul>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;The work in the Zhang lab in this broad field is mainly computational and falls into the category of Data Sciences (or Big Data). 
                We aim to find and understand biological “stories” through building models and identifying patterns from large quantities of genome-scale biological data. 
                In the process, we integrate the bench work of molecular biology and develop novel methods and efficient software tools along the way. In this broad area, we pursue two overarching themes,<b>network systems biology </b> and <b>gene regulation via noncoding RNA genes. </b> We are interested in basic biological questions (e.g., the biogenesis of small noncoding RNAs, transcriptional and post-transcriptional gene regulation) and their applications to complex diseases (e.g., Alzheimer’s disease (AD) and psoriasis) and plant stress response (e.g., rice blast and rice bacterial blight).
            </li>
            <li class="research_title">Network-based, allele-specific genome-wide association study (GWAS): </li>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;GWAS and single-gene approaches have been popular in identifying risk factors of Mendelian diseases, such as familial Alzheimer's disease (AD). 
                Despite a tremendous amount of effort, however, these methods fail to decipher the missing inheritability of complex diseases, such as late-onset AD (or simply AD),
                 diabetes, and psoriasis. A key factor that impairs conventional GWAS on polygenic diseases is the lack of effective ways to identify multiple genomic loci or genes whose interactions 
                 or associations underlie the manifestation of disease phenotypes. For example, a brute-force search of possible associations among only three markers within one million single nucleotide 
                 polymorphisms (SNPs) requires examining a prohibitive number of 1.7×1017 trios. In the Zhang lab, we took a network perspective toward this problem and focused on developing novel enabling 
                 techniques for network GWAS. One network GWAS method recently developed in the lab is called BlocBuster (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/25233071/" target="_blank">Climer, Templeton and Zhang, PLOS Comp. Biol., 10(9):e1003766, 2014</a>), which exploits 
                 the fact that there exist genetic architectures of markers underlying a complex trait. Such architectures are best represented as a network where correlated markers can be regarded as forming 
                 network modules or communities. We also used a new similarity measure to accommodate genetic heterogeneity in the population in order to make the network GWAS analysis allele-specific, robust, 
                 and rigorous. One application of the network GWAS method to the HapMap population SNPs data revealed a giant 284-SNPs divergent yin-yang haplotype pattern encompassing gephyrin, a gene with remarkably 
                 diverse functions related to translation initiation, regulation of synaptic protein synthesis, and mTOR signaling, to name a few (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/25813846/" target="_blank">Climer, Templeton and Zhang, Nature Comm., 6:6534, 2015; see the first figure below</a>), 
                 suggest a strong positive selection on the region over gephyrin, rapid evolution of world populations, and possible distinct molecular mechanisms involving gephyrin. The discovery of this large yin-yang pattern, 
                 which was missed by all existing methods, demonstrates the power of the network GWAS approach. The second application of the network method to GWAS data of psoriasis, an autoimmune skin disorder, helped reveal 
                 a module of 17 tightly correlated SNPs within the Major Histocompatibility Complex (MHC) on human chromosome 6 (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/25233071/" target="_blank">Climer, Templeton and Zhang, PLOS Comp. Biol., 10(9):e1003766, 2014; see also the second figure below</a>). 
                 While some of the 17 SNPs have been indicated in previous studies, our result showed that their specific alleles as a whole provide a stronger discriminative power to distinguish psoriasis subjects from normal controls. 
                 In short, the Zhang lab is the first to systematically pursue the notion of network GWAS to push the envelopment of conventional GWAS to a new dimension and to develop an effective enabling technique to approach complex disease.
            </li>
            <li>
                <img class="research_img" src="images/research_picture1.png" >
            </li>
            <li>
                <img class="research_img" src="images/research_picture2.png">
            </li>

            <li class="research_title">Network-based transcriptome analysis: </li>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;Manifestation of complex diseases or traits is often the result of aberrant gene expression variations in disease states. Analysis of genome-wide gene expression variations, or transcriptome analysis, can thus provide insights into disease mechanisms. 
                In the same vein as network GWAS, the Zhang lab has taken a co-expression network approach to transcriptome analysis of complex diseases by exploiting the rationale of “guilty by association”. One realization of this idea is the HQCut method for constructing and analyzing co-expression 
                networks using gene expression data (<a class="research_link" href="https://bmcsystbiol.biomedcentral.com/counter/pdf/10.1186/1752-0509-4-8.pdf" target="_blank">Ruan, Dean and Zhang, BMC Syst. Biol., 4:136, 2010; Ruan and Zhang, Physics Review E, 77:016104, 2008 </a>). The central piece of the method is a heuristic that combines a spectral clustering technique that maps gene expression data to a latent, lower 
                dimensional space, by which the noise of low information content in the data can be effectively removed. As a result, clustering can be more accurately and efficiently performed. This network transcriptome method has been used in our own research and by many other labs. In particular, 
                using this method, we were able to unravel intricate relationships among co-expressed genes in AD, diabetes, and cardiovascular diseases (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/18842138/" target="_blank">Ray, Ruan and Zhang, Genome Biol., 9(10):R148, 2008</a>), showing that many genes that are known to be involved in these metabolic diseases were also 
                aberrantly expressed in the AD brain and more interestingly, appeared in one module of co-expressed genes (see the module and genes in yellow in the figure below). This result support the notion that AD is a "diabetes" of the brain. In addition, using this method we identified brain-region 
                specific patterns of gene expression variation in the AD brain (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/18842138/" target="_blank">Ray and Zhang, BMC Syst. Biol., 4:136, 2010</a>) and revealed the genetics of gene expression (or eQTL) in AD (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/19361613/">Webster, et al., Am. J. Human Genetics, 84(4):445-58, 2009</a>). In short, our work on network biology has clearly demonstrated 
                the power and rigor that computational biology can bring to complex biology problems.
                <a href="https://sci-hub.se/10.1186/1752-0509-4-8" target="_blank">
                    <img class="icon" src="data:image/png;base64,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"/>
                </a>
            <li>
                <img class="research_img" src="images/research_picture3.png">
            </li>
            </li>

            <li class="research_title">Biogenesis of small noncoding RNAs:</li>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;Gene expression variations across disease states and the normal condition are often due to aberrant gene regulation where small noncoding RNAs (sncRNAs), particularly microRNAs (miRNAs) and small interfering RNAs (siRNAs), play essential roles. 
                Identification of sncRNAs and analysis of their biogenesis and regulatory functions are key steps toward elucidation of aberrant gene regulation. In my lab, we have developed effective methods for identification of miRNAs and siRNAs as well as methods for analyzing 
                their biogenesis and potential functions in gene regulation and diseases. In particular, we developed an innovative method to show that most miRNAs in animals (e.g., human and mouse) and plants (e.g., rice and Arabidopsis) are transcribed by RNA polymerase II (<a class="research_link" href="https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.0030037" target="_blank">Zhou, Ruan, 
                Wang and Zhang, PLOS Comp. Biol., 3(3):e37, 2007</a>). The analysis was done by first finding cis-regulatory elements (motifs) in the promoter regions of miRNAs using our WordSpy genome-wide motif finding method (<a class="research_link" href="https://genomebiology.biomedcentral.com/articles/10.1186/gb-2006-7-6-r49" target="_blank">Wang and Zhang, Genome Biol., 7(6):R49, 2006</a>), constructing a model
                 of miRNA transcription using the motifs, and then applying the model to distinguish miRNAs from protein-coding genes. By combining large quantities of sequencing data with bench experiments, we also showed that a miRNA precursor might generate multiple miRNAs (<a class="research_link" href="https://genomebiology.biomedcentral.com/articles/10.1186/gb-2010-11-8-r81" target="_blank">Zhang, et al., 
                 Genome Biol., 11(8):R81, 2010</a>; see an example of miR822 in Arabidopsis in the first figure below) or a miRNA plus a siRNA that regulates DNA methylation, suggesting a model of dual biogenesis of miRNA and siRNA (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/20621980/">Chellappan, et al., Nucleic Acids Res., 38(20):6883-94, 2010</a>; see the second figure below)
                 <a href="https://sci-hub.se/10.1371/journal.pcbi.0030037" target="_blank">
                    <img class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAHdklEQVRYw+1WW2xcVxVd59zn3JnxPDwzHo89fsexYzvO02nSPBQgRMGqVEgFtEiABCriK0L8RHwgJFQJfpCgX6SFQgskqAlRcKAlhJa2zosSJ07i2LXj58Rjz4zHd9535r4OH3YSkiYQARI/WdLRlY7u2Xvdu89aewNP8AT/Z5DHeakmXMs3d25usKRApGBwzrJuc5ZtW7D0Cge9RCtqMp+YXEzGZ8v/UwKR+gaxofdTT6VQ/4mK4NsQqvaFo0GXFPTIkEUOFd20UpmSFkuk04uLySlWTAw5iuPnZ6+9P2Waxn9HYNOuAy2qa+PzXFV0394trU3PbG/x9TT7eb9bgihQEAIwBhimDTVfNkdm0tpbF6dTf7o4OppPTJ11ZYdOT1wdjP9HBNbv/lxvQtn4ze2be/YeOrgx3NdZI4s8BRjAAICxleedIISAEMAwLPP61FL55RNX4mfOD58LGRPHbg8NvJ/JqPajCHAPbnQ//Wx3yr31Wy/079j30te213Y2Vou5oo5c0UDZsHBpLImiZoIQAqfMgxDAshksm4HjKI0EXeKeDfWetMY3XIrRtWs61rmaq7nY3OxM8d8SaO3aUq36dx36woGnP/Pdr/QF/W4HDwDzSyUIPEWVIuDCaBK1fgVhv4KF5RKyRQNT8Rxup4sIemRwlECRBdoR9Urnx3OhyTTX1tvT3bB3Q21mbOyj+YpuPJqAs/PZg90bt77wgxd3NgQ8Dt5mDIQQpLJlKBIPr0uGIvHIlXQ011YhldVwYTQFReZBQOB3S5BFDowBHqdEP4oVxOuxoi9dFqLPP7O789Nbwk41OTc3u5Ap3cnJ3/369Tsjmrtx/9f7u2sjASdv2ytVZmCwbQaeoyiVDUwv5hDyOhBL5mFZDC6Zh5qvwCFx4DmKO5eDEgKRpyCE8gWDBGMFx1NfPfiNSMRV7Gg9dvTnr52J37iPgOnr3LZuTUPnng1RN2P3rphtAy4HD5eDR7FsQhQ4ZIo6qhQB7fUetEaq7v1OSsAAUEqQUDUMTS+DEsBmhLcYdQUCgfbN+1/0Sbd/5w14ml4fuMaP8wDQtrbbkxfD27Z1RcPVbpm3VwlQQgAKREMuMAZ4XRz29tZiVQgAAIEjYFgp1R0kMxp+fHIUN2czIIRAESk2rfGDUso73b5gS9S3u784JIQa+sd4n9frbO/pW3e57O9oi/rdIABhwFKujLFYFoQSVLsleJ0iFImHwFNwlNz1AdNmqOgWskUdC6qG69Mq3rocx7UpFZbNIPAUX9zdhF1dNSvVSQ/zkjblCzqxZi1JKHwo4AnvaDFad9c7wl31Th4gYITA65IQ8Mh4d3gRl8eXkcqvuKzMc5BEHhwlsC0bmm4hV9ahFnRkCwZKFROEAG6HgLa6Kjy3swGf3dEIhyzATA5Bu/Qd09IyhmYiu2RIizwjIoMcMvfXXEPr4t9RMXvBhbaDVjWjM+pFR4MPamFFajfnMpiM5zG/VIRa1KHpFizbBqUE9QEnuqMiwn4HWiJudDX6sDbqhc9JYOdmUBk7gcrIK6aZmSmn8hgbTvr/eGqaDROPx6N8sv/z6yvBvsOH9sl7tyuDspm8DMJJoP51oNXrwXnawbnrQCQ/GOeAyQToFoFhMdgMIATgKSByNgQYoFYOdiEOM30D5sIgrIVBWLlZs1yx1UQeIxfjwWOvXao6OXRjKkMAoKOzy11pee7whk19X/rZt3cFFSPGm/PvwLp9Flb6OlBZBqgIIvlAZD+I5AcRqwDeAUJ4MGYBpgam58DKS7C1FFBOgVXygM3AALNgcAu38sF3/zxd98aRgYlBNZOz7+sFG/d9eafq2fa9Vw/3b93TWyfbAGDqsEtx2Ooo7PQV2Ms3YWcnwbQEoGfBTA2wjRXts9VoBADlQTgHiOSF5YiYKdasjmQip0/8ZeInR48P3Pxn87vrA7NX3r4o9gT/cOT3wzW9rdUtHqfIM8qDuptAq5qAhgOAbYKZRbBKBqioYBUVTM8BZgnMNgFCQDgJENygsh+m4McrZxbLA+cmh0OlK7868UDy+6xYKxXtgGJPj2ccIU5y1fd1hJ08RykYWxU9W00gg0heECUM6mkG9XWAVveAC/SCC6wH9XeB87aBuurw5oV04YdHhyaU4q03Lpx+dUDX9X/djDKp+WK1S5z5cA5BTlRqetuCTlHgKGMPHlslxD6+CADTtMzj701kX/rFBzfF3MTruZFTv0kmFh86oXysHecSU8tehU6cu1VxxjOWp7XO6/C5ZcpxlILhkaCEgIGZiXRBf/nk1cSPfv3eIEtd/eny8PE347dj+qPOcQ/bzCWmln1C8eq1mFY4O5zi1bxB3Q6ROh08EXgOhMAG7i2tbOhTcTV//K/jqe//8oMbb79z8ZSy/OGRyfO/PaeVio8cRu5TwcMgiBJq1u5sLbvatlcF6je1N0Ua2xuD1SGfwimyIFQqppHKlqxbsXRmfHZxPp2I35BL0+cLc38bUZcSJh4DjzUVA4AvVC+J3mjQEjx+RiWFEULAGCN2pcQZOdXMxZeWF2e0x433BE9wB/8Aa3ZiVq1gDAMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMTItMDFUMTQ6NDQ6MDIrMDE6MDBW0C0AAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTEyLTAxVDE0OjQ0OjAyKzAxOjAwJ42VvAAAAABJRU5ErkJggg=="/>
                </a>
            </li>
            <li>
                <img class="research_img" src="images/research_picture4.png">
            </li>
            <li>
                <img class="research_img" src="images/research_picture5.png">
            </li>

            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;Moreover, microRNAs may also arise from the same gemomic loci as other noncoding RNAs, e.g., tRNAs and snoRNAs. Combining computational and bench molecular biology work, 
                we identified and confirmed that miRNAs can originate from the loci where tRNAs were encoded in mouse and murine herpesvirus (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/20660200/" target="_blank">Reese, et al., J. Virology, 84(19):1034-53, 2010</a>; see the first 
                figure below for some examples in mouse). In addition, our extensive computational analysis of large quantities of profiling data revealed that there exist a huge number of isoforms of microRNAs 
                in many eukaryotic organisms, including human (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/24178030/" target="_blank">Xia and Zhang, Nucleic Acids Res., 42(3):1427-41, 2014</a>; also see the second figure below for an example), some of which may also be functional in complex 
                diseases such as psoriasis (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/23175445/" target="_blank">Xia, Joyce, Bowcock and Zhang, Human Mol. Genetics, 22(4):737-48, 2013</a>). In summary, our work has broadened our view on the biogenesis, diversity and function of small noncoding RNAs.
                <li>
                <img class="research_img" src="images/research_picture6.png">
                </li>
                <li>
                <img class="research_img" src="images/research_picture7.png">
                </li>
            </li>

            <li class="research_title">Regulatory functions of small noncoding RNAs: </li>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;We expanded our work to examine the potential roles of sncRNAs in complex disease and plant stress response. For example, using the miRNA transcriptome modeling as a tool,
                 we were able to identify cold- and UV-B-light responsive miRNAs in model plant Arabidopsis thaliana, most of which were also experimentally validated (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/17437028/" target="_blank">Zhou, Wang and Zhang, Mol. Syst. Biol., 
                 3:13, 2007; Zhou, et al., Biochim. Biophys. Acta, 1779(11):780-8, 2008 </a>). This is the first computational miRNA gene function annotation method by modeling the possible transcriptional regulators 
                 of microRNAs and their potential targets (see the first figure below for an example of putative Auxin signaling pathways mediated by microRNAs in response to UV-B light stress). Furthermore, combining
                  deep-sequencing profiling, computational analysis, and experimental validation, we characterized the functions of microRNAs in psoriatic and normal human skin (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/21807764/" target="_blank">Joyce and et al., Human Mol. Genetics, 20(20):4025-40, 
                  2011</a>; see some microRNA aberrant expression patterns in the second figure below and microR-135b expressed in psoriatic skin in the third figure below), in viral infection (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/20660200/" target="_blank">Reese, et al., J. Virology, 84(19):1034-53, 2010</a>), 
                  and plant stress responses, for example, in Aribidopsis (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/21153682/" target="_blank">Zhang, et al., Human Mol. Genet., 20:4025-40, 2011</a>) and cassava (<a class="research_link" href="https://pubmed.ncbi.nlm.nih.gov/19942686/" target="_blank">Zeng, et al., Nucleic Acids Res., 38(3):981-95, 2010</a>. Our work has broadened our view of the biogenesis, 
                  diversity and functions of sncRNAs in diseases and plants. In summary, we have done some pioneering work in developing and using computational methods to study basic biological problems related to small noncoding RNA gene regulation 
                  that were traditionally approached through bench work.
                <li>
                <img class="research_img" src="images/research_picture8.png">
                </li>
                <li>
                <img class="research_img" src="images/research_picture9.png">
                </li>
                <li>
                <img class="research_img" src="images/research_picture10.png">
                </li>
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