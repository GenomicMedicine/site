<template>
    <div class="research-content">
        <ul>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;The Zhang has a long history of research on heuristic search, planning and optimization. The work has made significant contributions to the understanding of the nature and complexity of many search techniques, such as best-first search and depth-first branch-and-bound, and combinatorial optimization problems, such as the Traveling Salesman Problem and Constraint Satisfaction.
            </li>
            <li class="research_title_1">Asymptotic optimality of linear-space search algorithms: </li>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;THeuristic search is one of the cornerstone of AI. The best-first search (BFS) algorithm, with the well-known A* algorithm as a special case, is time optimal. However, it requires space that is exponential in the search depth of the underlying search tree, which is impractical for large combinatorial optimization problems, such as the Traveling Salesman Problem (TSP).
                In contrast, a linear-space search (LSS) algorithm, with depth-first search and depth-first branch-and-bound (DFBnB) as special cases, runs linearly in search depth with a penalty of exploring more nodes in the search space. Due to their limited space requirement, LSS algorithms, including DFBnB, iterative deepening A* (IDA*), and recursive best-first search (RBFS), are the most popular techniques 
                for large and difficult search problems in practice. Understanding the expected complexity of LSS algorithms was an important and challenging problem.Based on a random search tree model proposed by Judea Pearl and Richard Karp,<b>our research established the <u>asymptotic optimality</u> of LSS methods</b>, showing that their expected complexity is a constant factor of that of BFS (<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">Zhand and Korf, Artificial Intelligence, 
                79(2):241-92, 1995</a>; <a class="research_link" href="https://link.springer.com/book/10.1007/978-1-4612-1538-7" target="_blank">Zhang, State-Space Search, Springer, 1999</a>). Moreover, LSS algorithms may run faster than BFS on large problems, making them the algorithms for real applications.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;A directly and early application of our complexity results is the explanation to anomaly of the fixed horizon search, which was observed initially by Richard Korf on sliding-tile puzzles using DFBnB, as illustrated below. The anomaly states that for a fixed search depth, DFBnB can search the trees with larger branching factors faster. In fact, the anomaly persists regardless which search method, e.g., ID (or IDA*) or RBFS, shown below.
                <li>
                <img class="research_img_3" src="images/research_picture11.png">
                <img class="research_img_1" src="images/research_picture12.png">
                </li>
            </li>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;The insight gained by the complexity analysis on this search anomaly helped predict the existence of a phase transition in heuristic search problems, discussed below.
            </li>


            <li class="research_title_1">Phase transitions and structures of combinatorial search: </li>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;Our study also revealed that the expected complexity of BFS and LLS algorithms exhibits a sharp and abrupt transition from polynomial to exponential time as some critical problem features 
                (e.g., the precision of heuristic function) shift (<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">Zhand and Korf, Artificial Intelligence, 79(2):241-92, 1995</a>;<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">Zhang and Korf, Artificial Intelligence, 81(1-2):223-39, 1996</a> ; 
                <a class="research_link" href="https://link.springer.com/book/10.1007/978-1-4612-1538-7" target="_blank">Zhang, State-Space Search, Springer, 1999</a>). This is similar to phase transitions of spin glasses studied in physics. A simple example of a phase transition is water changing from liquid to solid ice 
                when the temperature drops below the freezing point. We identified that the accuracy of heuristic information is the controlling parameter of phase transitions. On the Judea&Karp incremental random 
                search tree model, the phase transition can be summarized by the following figure.
                <li>
                <img class="research_img_3" src="images/research_picture13.png">
                </li>
            </li>

            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;The control parameter of this phase transition is the product of the mean branching factor of the search tree and the probability if an edge cost has cost 0.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;This analysis was extended to reveal phase transitions in combinatorial optimization problems, such as the asymmetric TSP (ATSP) (<a class="research_link" href="https://www.sciencedirect.com/science/article/pii/0004370295000542" target="_blank">Zhang and Korf, Artificial Intelligence, 81(1-2):223-39, 1996</a>) and Boolean Satisfiability 
                (<a class="research_link" href="https://www.sciencedirect.com/science/article/pii/S0004370204000542" target="_blank">Zhang, Artificial Intelligence, 158:1-26, 2004</a>). For the ATSP, the control parameter is the precision of the distances between cities, which is equivalent to the number of digits used to represent distances. Intuitively, when the number of digits 
                used is small, many distances may have a high chance to have the same value, and consequently many complete tours (visiting each and every city exactly once) may have a high chance to have the same cost as well. This also means that a large number of optimal TSP tours exist;
                 and finding one optimal TSP tour should be relatively easy. In contrast, when no two distances between cites are the same, the number of optimal TSP tour is small, so that finding an optimal solution is difficult. This phase transition is illustrated in the figure below, 
                 where the Assignment Problem (AP) is the main computation step (heuristic) for solving the ATSP.
                 <li>
                <img class="research_img_3" src="images/research_picture14.png">
                </li>
            </li>

            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;Interestingly, there also exist phase transitions in maximum Boolean satisfiability (max SAT), which is the optimization version of the SAT where the objective is to find a variable assignment that minimize the number of violated clauses (<a class="research_link" href="https://www.sciencedirect.com/science/article/pii/S0004370204000542" target="_blank">Zhang, Artificial Intelligence, 158:1-26, 2004</a>).
                <br/>
                <b>&nbsp;&nbsp;&nbsp;&nbsp;Note that the phase transitions that we studied in optimization problems, such as finding the minimal TSP tour and the variable assignment to minimize the number of unsatisfied constraints, are fundamentally different from the phase transitions for decision problems, such as the decision version of the TSP and the SAT. For optimization problems, the phase transitions appear as an easy-to-difficult transition, whereas for decision problems, the phase transitions exhibit an easy-to-difficult-then-to-easy pattern.</b>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;The computational complexity and phase transition are also related to the backbone of a problem, which is a set of variables that have the same values among all solutions 
                (<a class="research_link" href="https://dl.acm.org/doi/10.5555/647488.726965" target="_blank">Zhang, Proc. Intern. Conf. on Principles and Practice of Constraint programming, CP-2001</a>; 
                 <a class="research_link" href="https://arxiv.org/pdf/1107.0055.pdf" target="_blank">Zhang, JAIR, 20:471-97, 2004</a>; 
                 <a class="research_link" href="https://www.sciencedirect.com/science/article/pii/S0004370204000542" target="_blank">Zhang, Artificial Intelligence, 158:1-26, 2004</a>).
            </li>

            <li class="research_title_1">Problem solving by exploiting phase transitions and backbones: </li>
            <li class="research_sentence">
                The study of phase transitions and problem structures such as backbones has changed the way we characterize the complexity of combinatorial problems, 
                beyond the notion of worst-case complexity, and the way we solve difficult problems.  In particular, phase transitions can not only be used to 
                characterize problems, but also be exploited in problem solving. We have done a <b>pioneering work </b>on developing new efficient algorithms for finding
                optimal and approximate solutions by exploiting phase transitions (<a class="research_link" href="https://dl.acm.org/doi/10.5555/647488.726965" target="_blank">Pemberton and Zhang, Artificial Intelligence, 81:297-325, 1996</a>; 
                <a class="research_link" href="https://www.sciencedirect.com/science/article/pii/S0004370204000542" target="_blank">Zhang, Artificial Intelligence, 158:1-26, 2004</a>). 
                One of the ideas is to transform a state space that is difficult to search into one that is easy to explore. Another idea is to estimate and utilize backbone structures to guide a search. 
                These techniques are characterized as <b>backbone guided search</b> (<a class="research_link" href="https://www.sciencedirect.com/science/article/pii/S0004370204000542" target="_blank">Zhang, Artificial Intelligence, 158:1-26, 2004</a>; 
                <a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">Zhang and Looks, Proc. IJCAI-2005</a>).
            </li>

            <li class="research_title_1">The Zhang Algorithm for the ATSP: </li>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;The asymmetric TSP (ATSP) is an important NP-hard problem with many real applications in the areas such as scheduling. 
                The research largely focuses on efficient approximation algorithms. The first approximation method is the Kanallakis-Papadimitiou local search algorithm, 
                named after its inventors, two eminent scientists in computer science and operations research. The second approach is represented by my truncated DFBnB algorithm 
                (<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">Zhang, Proc. AAAI 1993 Spring Symp. on AI and NP-Hard Problems</a>;<a class="research_link" href="https://link.springer.com/book/10.1007/978-1-4612-1538-7" target="_blank">Zhang, State-Space Search, Springer, 1999</a> ), 
                which has been referred to as <b> the Zhang algorithm</b> (<a class="research_link" href="http://dimacs.rutgers.edu/archive/Challenges/TSP/papers/stspchap.pdf" target="_blank">Johnson, et al.in The Traveling Salesman Problem and its Variations, pp.445-88, 2002</a>).
            </li>

            <li class="research_title_1">Long distance mutual exclusion and propositional planning:</li>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;A dominating technique in planning is GraphPlan with mutual exclusions (mutex) to represent constraints among actions
                and events at the same planning horizon (depth). In our work, we introduced long distance mutual exclusion (londex) to capture constraints across 
                multiple horizons, developed an efficient algorithm to efficiently compute londex, and designed and implemented our new MaxPlan planner using londex 
                (<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">Xing, Chen and Zhang, Proc. ICAPS-06</a>; <a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">Chen, Huang, Xing and Zhang, Artificial Intelligence, 173:365-91, 2009</a>). The overall work provided a new paradigm 
                for planning. Our MaxPlan system won <b>the First Place Award of the Fifth International Planning Competition in 2006</b> (<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">Xing, Chen and Zhang, Proc. ICAPS-06</a>).
            </li>

            <li class="research_title_1">Transition based encoding for planning: </li>
            <li class="research_sentence">
                &nbsp;&nbsp;&nbsp;&nbsp;The technique of planning as Boolean satisfiability usually uses encodings in logic statements. We introduced a novel SAT encoding scheme (SASE) based on the SAS+ formalism 
                (<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">Huang, Chen and Zhang, Proc. AAAI-10</a>; <a class="research_link" href="https://jair.org/index.php/jair/article/view/10751" target="_blank">Huang, Chen and Zhang, JAIR, 43:293-328, 2012</a>). 
                The new scheme exploits the structural information so that the encoding is both compact and efficient for planning. We proved the correctness of the new encoding and analyzed the rationale behind 
                its improvement in planning performance. Our extensive experimental results demonstrated significant improvements of SASE over the state-of-the-art methods in time and space. 
                This work received <b>the Outstanding Paper Award </b> of the 24-th AAAI Conference on Artificial Intelligence Conference in 2010 (AAA-10) (<a class="research_link" href="https://www.cse.wustl.edu/~weixiongzhang/" target="_blank">Huang, Chen and Zhang, Proc. AAAI-10</a>), 
                chosen from a double blind review process of 894 submissions. Note that AAAI is one of the two leading international AI conferences.
            </li>
        </ul>    
    </div>
 </template>

 <script>
    export default {

    }
</script>

<style lang="less" scoped>

.research_img_1{
   margin-left: 10%;
   width: 800px;
   padding-bottom: 20px;
}

.research_img_3{
   margin-left: 10%;
   width: 400px;
   padding-bottom: 20px;
}

.research_title_1{
   font-size: 24px;
   font-weight: bold;
   padding-bottom: 20px;
   padding-left: 10px;
   font-style: italic;
   overflow-y: auto;
   width: 120%;
}

</style>