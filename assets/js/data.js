const PLAYBOOKS = [
  {
    slug: 'ai-literacy-kickoff',
    title: 'AI Literacy Kickoff',
    summary: '30-day orientation that introduces prompt craft, privacy-first norms, and reflective journaling for new AI classrooms.',
    region: 'Global',
    level: 'Foundation',
    duration: '4 weeks',
    focus: 'Community Onboarding',
    cohortSize: '25 learners',
    creator: 'Camila Idris',
    tags: ['orientation', 'prompting', 'ethics'],
    highlight: 'Guided practice prompts and micro challenges each day.',
    outcomes: [
      'Learners publish a personal AI usage manifesto.',
      'Facilitators collect weekly formative reflections.',
      'Cohorts establish shared vocabulary for responsible AI work.'
    ],
    resources: [
      'Prompt Library of 50 classroom scenarios',
      'Digital safety agreements template',
      'Reflection journal inside Notion'
    ]
  },
  {
    slug: 'community-care-protocols',
    title: 'Community Care Protocols',
    summary: 'Playbook for trauma-informed check-ins, escalation plans, and wellness signals for hybrid learning pods.',
    region: 'US & Canada',
    level: 'Intermediate',
    duration: '6 weeks',
    focus: 'Wellbeing Systems',
    cohortSize: '18 facilitators',
    creator: 'Mahira Vega',
    tags: ['wellness', 'support', 'policies'],
    highlight: 'Care circles powered by asynchronous voice notes.',
    outcomes: [
      'Establishes shared language for asking and offering help.',
      'Clarifies escalation ladders for staff and guardians.',
      'Launches weekly wellness retro rituals.'
    ],
    resources: [
      'Care signal dashboard template',
      'Guardian communication kit',
      'Circle facilitator scripts'
    ]
  },
  {
    slug: 'student-agency-sprint',
    title: 'Student Agency Sprint',
    summary: 'Learner-led projects focused on community problems with AI copilots and mentor feedback loops.',
    region: 'Global South',
    level: 'Advanced',
    duration: '8 weeks',
    focus: 'Project-Based Learning',
    cohortSize: '40 students',
    creator: 'Alaine Osei',
    tags: ['agency', 'projects', 'mentorship'],
    highlight: 'Mentor office hours embedded into weekly cadence.',
    outcomes: [
      'Learners draft project charters and pitch decks.',
      'Peer critiques scheduled at milestones.',
      'Mentor badges unlocked for timely feedback.'
    ],
    resources: [
      'Project charter canvas',
      'Mentor recruitment toolkit',
      'Pitch sprint schedule'
    ]
  },
  {
    slug: 'global-collab-lab',
    title: 'Global Collaboration Lab',
    summary: 'Connects classrooms across three regions with translation bots, cultural exchanges, and shared maker prompts.',
    region: 'Global',
    level: 'Intermediate',
    duration: '5 weeks',
    focus: 'Cultural Exchange',
    cohortSize: '3 partner schools',
    creator: 'Riku Yamamoto',
    tags: ['global', 'language', 'community'],
    highlight: 'Weekly remix challenges with dual-language prompts.',
    outcomes: [
      'Learners co-design artifacts inside shared canvases.',
      'Facilitators host biweekly culture salons.',
      'Classrooms publish remix galleries.'
    ],
    resources: [
      'Time-zone negotiation kit',
      'Dual language prompt bank',
      'Salon facilitation guide'
    ]
  },
  {
    slug: 'creative-labs',
    title: 'Creative Labs Residency',
    summary: 'Studio-style residency bringing artists and coders together for generative media explorations.',
    region: 'Europe',
    level: 'Advanced',
    duration: '10 weeks',
    focus: 'Creative Technology',
    cohortSize: '16 fellows',
    creator: 'Elsa Richter',
    tags: ['art', 'media', 'labs'],
    highlight: 'Critique panels with visiting creatives and AI tutors.',
    outcomes: [
      'Participants publish process zines every two weeks.',
      'Critique prompts scaffold actionable feedback.',
      'Residency culminates in open studio night.'
    ],
    resources: [
      'Critique prompt cards',
      'Studio operations manual',
      'Open studio run-of-show'
    ]
  },
  {
    slug: 'assessment-studio',
    title: 'Assessment Studio',
    summary: 'Prototype authentic assessments that blend AI assistive grading, peer reviews, and narrative portfolios.',
    region: 'Global',
    level: 'Intermediate',
    duration: '6 weeks',
    focus: 'Assessment Innovation',
    cohortSize: '12 facilitators',
    creator: 'Jonah Patel',
    tags: ['assessment', 'portfolios', 'feedback'],
    highlight: 'Portfolio APIs sync to student showcases automatically.',
    outcomes: [
      'Assessment criteria co-authored with students.',
      'Peer review squad rotations every sprint.',
      'AI rubric tuning workshops each week.'
    ],
    resources: [
      'Rubric tuning worksheet',
      'Portfolio showcase template',
      'Feedback sprint calendar'
    ]
  },
  {
    slug: 'mentor-network',
    title: 'Mentor Network Launchpad',
    summary: 'Recruit, onboard, and retain industry mentors with lightweight CRM flows and automated reminders.',
    region: 'North America',
    level: 'Foundation',
    duration: '3 weeks',
    focus: 'Community Partnerships',
    cohortSize: '50 mentors',
    creator: 'Priya Hernandez',
    tags: ['mentors', 'community', 'operations'],
    highlight: 'Mentors receive AI-generated debriefs after sessions.',
    outcomes: [
      'Mentor agreements signed within 72 hours.',
      'Shadow sessions captured for training.',
      'Feedback loops built into CRM.'
    ],
    resources: [
      'Mentor outreach scripts',
      'Automated reminder templates',
      'Session debrief form'
    ]
  },
  {
    slug: 'family-dialogues',
    title: 'Family Dialogues Toolkit',
    summary: 'Co-design nights and asynchronous storytelling prompts that bring caregivers into the learning loop.',
    region: 'Latin America',
    level: 'Foundation',
    duration: '4 weeks',
    focus: 'Family Partnerships',
    cohortSize: '30 families',
    creator: 'Lucia Rangel',
    tags: ['families', 'storytelling', 'events'],
    highlight: 'Story booth recordings automatically translated for families.',
    outcomes: [
      'Caregivers submit weekly audio reflections.',
      'Students curate bilingual newsletters.',
      'Community agreements refreshed monthly.'
    ],
    resources: [
      'Family night agenda kit',
      'Story booth prompt list',
      'Bilingual newsletter template'
    ]
  },
  {
    slug: 'future-skills-accelerator',
    title: 'Future Skills Accelerator',
    summary: 'Micro-credential sprints blending AI copilots, industry panels, and challenge-based learning.',
    region: 'Asia-Pacific',
    level: 'Advanced',
    duration: '9 weeks',
    focus: 'Career Pathways',
    cohortSize: '60 learners',
    creator: 'Sora Nguyen',
    tags: ['careers', 'credentials', 'industry'],
    highlight: 'Digital badges minted after competency reviews.',
    outcomes: [
      'Learners submit work samples to hiring partners.',
      'Panels host live critique streams.',
      'AI copilots generate personalized practice sets.'
    ],
    resources: [
      'Badge design toolkit',
      'Industry panel outreach kit',
      'Challenge sprint backlog'
    ]
  },
  {
    slug: 'wellness-labs',
    title: 'Wellness Labs Residency',
    summary: 'Mindfulness, breathwork, and somatic design labs infused with biofeedback sensors and AI reflections.',
    region: 'Global',
    level: 'Intermediate',
    duration: '7 weeks',
    focus: 'Holistic Wellness',
    cohortSize: '22 practitioners',
    creator: 'Mara Siu',
    tags: ['wellness', 'sensors', 'rituals'],
    highlight: 'Breath pacers synced to cohort dashboards.',
    outcomes: [
      'Participants build personal rituals library.',
      'AI journaling prompts delivered daily.',
      'Collective debrief circles twice a week.'
    ],
    resources: [
      'Breathwork playlist',
      'Somatic practices cards',
      'Debrief circle script'
    ]
  },
  {
    slug: 'embedded-media-guide',
    title: 'Embedded Media Pathway Demo',
    summary: 'Step-by-step template showing embedded videos, images, articles, and audio with AI recaps under each asset.',
    region: 'Global',
    level: 'Foundation',
    duration: '2 weeks',
    focus: 'Playbook Design',
    cohortSize: 'Any size',
    creator: 'EduLylas Studio',
    tags: ['demo', 'multimedia', 'guides'],
    highlight: 'Embed-first scaffolding with AI summaries that keep cohorts aligned.',
    outcomes: [
      'Facilitators learn how to chain different embed types into one flow.',
      'Learners receive AI-generated takeaways under every media block.',
      'Teams can remix the scaffold to add their own assets quickly.'
    ],
    resources: [
      'Embed-ready facilitator outline',
      'AI summary prompt bank',
      'Reflection capture template'
    ]
  }
];

const RECOMMENDED_NOTES = [
  {
    title: 'Tuesday Office Hours',
    detail: 'Facilitator hotline opens at 09:00 PT with async drop-offs.'
  },
  {
    title: 'Mentor Summit',
    detail: 'Quarterly gathering for mentor captains featuring live demos.'
  },
  {
    title: 'Measurement Guild',
    detail: 'Monthly meetups on storytelling with data across regions.'
  }
];

