import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/components/Home.vue'
import Research from '@/components/Research/Research.vue'
import Publications from '@/components/Publications/Publications.vue'
import Team from '@/components/Team.vue'
import JoinUs from '@/components/JoinUs/JoinUs.vue'
import Contact from '@/components/Contact.vue'
import ResearchBiology from '@/components/Research/ResearchBiology.vue'
import ResearchFund from '@/components/Research/ResearchFund.vue'
import ResearchMachine from '@/components/Research/ResearchMachine.vue'
import ResearchInterests from '@/components/Research/ResearchInterests.vue'
import PublicationsStatement from '@/components/Publications/PublicationsStatement.vue'
import PublicationsResearchMonograph from '@/components/Publications/PublicationsResearchMonograph.vue'
import PublicationsJournal from '@/components/Publications/PublicationsJournal.vue'
import Journal2023 from '@/components/Publications/Journal/Journal2023.vue'
import Journal2022 from '@/components/Publications/Journal/Journal2022.vue'
import Journal2021 from '@/components/Publications/Journal/Journal2021.vue'
import Journal2020 from '@/components/Publications/Journal/Journal2020.vue'
import Journal2019 from '@/components/Publications/Journal/Journal2019.vue'
import Journal2018 from '@/components/Publications/Journal/Journal2018.vue'
import Journal2017 from '@/components/Publications/Journal/Journal2017.vue'
import Journal2016 from '@/components/Publications/Journal/Journal2016.vue'
import Journal2015 from '@/components/Publications/Journal/Journal2015.vue'
import Journal2014 from '@/components/Publications/Journal/Journal2014.vue'
import Journal2013 from '@/components/Publications/Journal/Journal2013.vue'
import Journal2012 from '@/components/Publications/Journal/Journal2012.vue'
import Journal2011 from '@/components/Publications/Journal/Journal2011.vue'
import Journal2010 from '@/components/Publications/Journal/Journal2010.vue'
import Journal2010before from '@/components/Publications/Journal/Journal2010before.vue'

import JournalALL from  '@/components/Publications/Journal/JournalALL.vue'
import PublicationsPeerReviewed  from '@/components/Publications/PublicationsPeerReviewed.vue'

import Conference2023 from '@/components/Publications/Conference/Conference2023.vue'
import Conference2022 from '@/components/Publications/Conference/Conference2022.vue'
import Conference2020 from '@/components/Publications/Conference/Conference2020.vue'
import Conference2019 from '@/components/Publications/Conference/Conference2019.vue'
import Conference2018 from '@/components/Publications/Conference/Conference2018.vue'
import Conference2017 from '@/components/Publications/Conference/Conference2017.vue'
import Conference2016 from '@/components/Publications/Conference/Conference2016.vue'
import Conference2015 from '@/components/Publications/Conference/Conference2015.vue'
import Conference2014 from '@/components/Publications/Conference/Conference2014.vue'
import Conference2013 from '@/components/Publications/Conference/Conference2013.vue'
import Conference2010 from '@/components/Publications/Conference/Conference2010.vue'
import Conference2009 from '@/components/Publications/Conference/Conference2009.vue'
import Conference2008 from '@/components/Publications/Conference/Conference2008.vue'
import Conference2008before from '@/components/Publications/Conference/Conference2008before.vue'

import ConferenceALL from '@/components/Publications/Conference/ConferenceALL.vue'
import JoinUsShow from '@/components/JoinUs/JoinUsShow.vue'
import JoinUsAI from '@/components/JoinUs/JoinUsAI.vue'
import JoinUsBiology from '@/components/JoinUs/JoinUsBiology.vue'


const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
      path: 'research',
      name: 'Research',
      component: Research,
      children:[
        {
          path: 'biology',
          name: 'ResearchBiology',
          component: ResearchBiology
        },
        {
          path: 'fund',
          name: 'ResearchFund',
          component: ResearchFund
        },
        {
          path: 'machineLearning',
          name: 'MachineLearning',
          component: ResearchMachine
        },
        {
          path: 'interests',
          name: 'ResearchInterests',
          component: ResearchInterests
        }
      ]
    },
    {
      path: 'publications',
      name: 'Publications',
      component: Publications,
      children:[
        {
          path: 'statement',
          name: 'PublicationsStatement',
          component: PublicationsStatement
        },
        {
          path: 'researchMonograph',
          name: 'PublicationsResearchMonograph',
          component: PublicationsResearchMonograph
        },
        {
          path: 'journal',
          name: 'PublicationsJournal',
          component: PublicationsJournal,
          children: [
            {
              path: '2023',
              name: 'Journal2023',
              component: Journal2023,
            },
            {
              path: '2022',
              name: 'Journal2022',
              component: Journal2022,
            },
            {
              path: '2021',
              name: 'Journal2021',
              component: Journal2021,
            },
            {
              path: '2020',
              name: 'Journal2020',
              component: Journal2020,
            },
            {
              path: '2019',
              name: 'Journal2019',
              component: Journal2019,
            },
            {
              path: '2018',
              name: 'Journal2018',
              component: Journal2018,
            },
            {
              path: '2017',
              name: 'Journal2017',
              component: Journal2017,
            },
            {
              path: '2016',
              name: 'Journal2016',
              component: Journal2016,
            },
            {
              path: '2015',
              name: 'Journal2015',
              component: Journal2015,
            },
            {
              path: '2014',
              name: 'Journal2014',
              component: Journal2014,
            },
            {
              path: '2013',
              name: 'Journal2013',
              component: Journal2013,
            },
            {
              path: '2012',
              name: 'Journal2012',
              component: Journal2012,
            },
            {
              path: '2011',
              name: 'Journal2011',
              component: Journal2011,
            },
            {
              path: '2010',
              name: 'Journal2010',
              component: Journal2010,
            },
            {
              path: '2010before',
              name: 'Journal2010before',
              component: Journal2010before,
            },
            {
              path: 'all',
              name: 'JournalALL',
              component: JournalALL,
            }
        ]
        },
        {
          path: 'peer-reviewed',
          name: 'PublicationsPeerReviewed',
          component: PublicationsPeerReviewed,
          children: [
            {
              path: '2023',
              name : 'Conference2023',
              component: Conference2023
            },
            {
              path: '2022',
              name : 'Conference2022',
              component: Conference2022
            },
            {
              path: '2020',
              name : 'Conference2020',
              component: Conference2020
            },
            {
              path: '2019',
              name : 'Conference2019',
              component: Conference2019
            },
            {
              path: '2018',
              name : 'Conference2018',
              component: Conference2018
            },
            {
              path: '2017',
              name : 'Conference2017',
              component: Conference2017
            },
            {
              path: '2016',
              name : 'Conference2016',
              component: Conference2016
            },
            {
              path: '2015',
              name : 'Conference2015',
              component: Conference2015
            },
            {
              path: '2014',
              name : 'Conference2014',
              component: Conference2014
            },
            {
              path: '2013',
              name : 'Conference2013',
              component: Conference2013
            },
            {
              path: '2010',
              name : 'Conference2010',
              component: Conference2010
            },
            {
              path: '2009',
              name : 'Conference2009',
              component: Conference2009
            },
            {
              path: '2008',
              name : 'Conference2008',
              component: Conference2008
            },
            {
              path: '2008before',
              name : 'Conference2008before',
              component: Conference2008before
            },
            {
              path: 'all',
              name : 'ConferenceALL',
              component: ConferenceALL
            },
          ]
        },

        
    ]
    },
    {
      path: 'team',
      name: 'Team',
      component: Team
    },
    {
      path: 'joinUs',
      name: 'JoinUs',
      component: JoinUs,
      children: [
        {
          path: 'show',
          name: 'JoinUsShow',
          component: JoinUsShow,
        },
        {
          path: 'ai',
          name: 'JoinUsAI',
          component: JoinUsAI,
        },
        {
          path: 'biology',
          name: 'JoinUsBiology',
          component: JoinUsBiology,
        }
      ]
    },
    {
      path: 'contact',
      name: 'Contact',
      component: Contact
    },
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
