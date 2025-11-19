import { AppData } from './types';

export const SITE_DATA: AppData = {
  profile: {
    name: { en: "Chaoan Li", zh: "李朝安" },
    title: { en: "PhD Student", zh: "博士研究生" },
    affiliation: { en: "Texas A&M University", zh: "德州农工大学" },
    email: "chaoan@tamu.edu",
    location: { en: "College Station, TX", zh: "美国 得克萨斯州" },
    bio: {
      en: "I am a Ph.D. student majoring in Data Science at Texas A&M University. Currently, I work as a research assistant in the Wm Michael Barnes '64 Department of Industrial & Systems Engineering. I also host a Mandarin chat podcast EasyPod (https://www.easypod.fun/).",
      zh: "我是德州农工大学数据科学专业的博士生，目前在工业与系统工程系担任研究助理，由Dr. Rui Tuo指导。同时，我还主持了一个中文聊天播客轻松愉快。"
    },
    researchInterests: [
      { en: "Large Language Model", zh: "大语言模型" },
      { en: "Quantitative Finance", zh: "量化金融" },
      { en: "Non-parametric Statistics", zh: "非参数统计" },
      { en: "Web 3", zh: "Web 3" }
    ],
    avatarUrl: "https://chaoanli.github.io/ChaoanLi.jpg",
    linkedin: "https://www.linkedin.com/in/chaoan-li",
    researchgate: "https://www.researchgate.net/profile/Chaoan-Li-2",
    googleScholar: "https://scholar.google.com/citations?user=AVFau-sAAAAJ",
    github: "https://github.com/ChaoanLi"
  },
  publications: [
    {
      id: "p1",
      title: "Fourier transform of anisotropic Hardy spaces associated with ball quasi-Banach function spaces and its applications to Hardy–Littlewood inequalities",
      authors: ["Chaoan Li", "Xianjie Yan", "Dachun Yang"],
      venue: "Acta Math. Appl. Sin. Engl. Ser.",
      year: 2024,
      abstract: {
        en: "This paper investigates the Fourier transform properties of anisotropic Hardy spaces and their applications to Hardy-Littlewood inequalities in the context of ball quasi-Banach function spaces.",
        zh: "本文研究了各向异性Hardy空间的Fourier变换性质及其在球拟Banach函数空间背景下对Hardy-Littlewood不等式的应用。"
      },
      link: "https://link.springer.com/article/10.1007/s10255-024-1124-5",
      tags: ["Harmonic Analysis", "Function Spaces"]
    },
    {
      id: "p2",
      title: "Anisotropic ball Campanato-type function spaces and their applications",
      authors: ["Chaoan Li", "Xianjie Yan", "Dachun Yang"],
      venue: "Anal. Math. Phys. 13",
      year: 2023,
      abstract: {
        en: "We establish the theory of anisotropic ball Campanato-type function spaces and explore their applications in harmonic analysis. This comprehensive study spans 71 pages.",
        zh: "我们建立了各向异性球Campanato型函数空间的理论，并探讨了它们在调和分析中的应用。这项综合研究共71页。"
      },
      link: "https://link.springer.com/article/10.1007/s13324-023-00814-w",
      tags: ["Harmonic Analysis", "Function Spaces"]
    }
  ],
  timeline: [
    {
      id: "t1",
      year: "2025",
      title: { en: "Ph.D. Qualifying Exam", zh: "博士资格考试" },
      description: { en: "Passed Ph.D. qualifying exam on LLM watermarking. Committee: Dr. Rui Tuo, Dr. Jaesung Lee, Dr. David Eckman.", zh: "通过大语言模型水印方向的博士资格考试。委员会成员：Dr. Rui Tuo, Dr. Jaesung Lee, Dr. David Eckman。" },
      type: "award"
    },
    {
      id: "t2",
      year: "2024",
      title: { en: "Started Ph.D. at Texas A&M", zh: "开始德州农工大学博士学习" },
      description: { en: "Started Ph.D. program in Data Science at Texas A&M University.", zh: "开始在德州农工大学攻读数据科学博士学位。" },
      type: "career"
    },
    {
      id: "t3",
      year: "2024",
      title: { en: "M.S. in Pure Mathematics", zh: "纯粹数学硕士学位" },
      description: { en: "Graduated from Beijing Normal University. Thesis: Real-Variable Characterizations and Applications of Anisotropic Ball Campanato and Hardy Spaces.", zh: "毕业于北京师范大学。论文：各向异性球Campanato和Hardy空间的实变量刻画及其应用。" },
      type: "education"
    },
    {
      id: "t4",
      year: "2023",
      title: { en: "Academic Innovation Award", zh: "学术创新奖" },
      description: { en: "Awarded Academic Innovation Award at BNU, School of Mathematical Sciences.", zh: "获得北京师范大学数学科学学院学术创新奖。" },
      type: "award"
    },
    {
      id: "t5",
      year: "2023",
      title: { en: "1st Prize Academic Scholarship", zh: "一等学业奖学金" },
      description: { en: "Received 1st Prize Academic Scholarship at Beijing Normal University.", zh: "获得北京师范大学一等学业奖学金。" },
      type: "award"
    },
    {
      id: "t6",
      year: "2022",
      title: { en: "Outstanding Teaching Assistant", zh: "优秀助教" },
      description: { en: "Awarded Outstanding Teaching Assistant in 2022.", zh: "获得2022年度优秀助教奖。" },
      type: "award"
    },
    {
      id: "t7",
      year: "2021",
      title: { en: "B.S. in Mathematics", zh: "数学学士学位" },
      description: { en: "Graduated from University of Science and Technology Beijing. Double degree in Financial Engineering.", zh: "毕业于北京科技大学数学与应用数学专业，辅修金融工程双学位。" },
      type: "education"
    }
  ],
  blog: [
    {
      id: "b1",
      title: { en: "Welcome to My Website", zh: "欢迎来到我的个人网站" },
      date: "2025-01-15",
      summary: {
        en: "Hello! This is my personal academic website. More blog posts coming soon...",
        zh: "你好！这是我的个人学术网站。更多博客文章即将推出..."
      },
      content: {
        en: "Welcome to my academic homepage. I will share my research insights, learning experiences, and thoughts on data science and machine learning here. Stay tuned!",
        zh: "欢迎来到我的学术主页。我将在这里分享我的研究见解、学习经历以及对数据科学和机器学习的思考。敬请期待！"
      },
      tags: ["Introduction", "Updates"],
      likes: 0,
      comments: []
    }
  ],
  resources: [
    {
      id: "r1",
      name: { en: "My Projects", zh: "我的项目" },
      links: [
        { title: "EasyPod Podcast", url: "https://www.easypod.fun/", description: "My Mandarin chat podcast about tech, life, and everything in between." },
        { title: "GitHub Profile", url: "https://github.com/ChaoanLi", description: "Check out my code repositories and projects." }
      ]
    },
    {
      id: "r2",
      name: { en: "Research Tools", zh: "科研工具" },
      links: [
        { title: "Zotero", url: "https://www.zotero.org", description: "Reference management software for researchers." },
        { title: "Overleaf", url: "https://www.overleaf.com", description: "Collaborative LaTeX editor for academic writing." },
        { title: "arXiv", url: "https://arxiv.org", description: "Open-access archive for scholarly articles." }
      ]
    },
    {
      id: "r3",
      name: { en: "Learning Resources", zh: "学习资源" },
      links: [
        { title: "Coursera", url: "https://www.coursera.org", description: "Online courses from top universities." },
        { title: "Google Scholar", url: "https://scholar.google.com", description: "Search engine for scholarly literature." },
        { title: "Math StackExchange", url: "https://math.stackexchange.com", description: "Q&A for mathematics at all levels." }
      ]
    },
    {
      id: "r4",
      name: { en: "Academic Communities", zh: "学术社区" },
      links: [
        { title: "ResearchGate", url: "https://www.researchgate.net", description: "Social networking site for scientists and researchers." },
        { title: "ORCID", url: "https://orcid.org", description: "Unique identifier for researchers and contributors." }
      ]
    }
  ],
  stats: {
    totalVisitors: 45231,
    daily: [
      { date: 'Mon', visitors: 120 },
      { date: 'Tue', visitors: 150 },
      { date: 'Wed', visitors: 200 },
      { date: 'Thu', visitors: 180 },
      { date: 'Fri', visitors: 250 },
      { date: 'Sat', visitors: 300 },
      { date: 'Sun', visitors: 280 },
    ],
    geo: [
      { country: 'China', visitors: 40 },
      { country: 'USA', visitors: 35 },
      { country: 'Europe', visitors: 15 },
      { country: 'Others', visitors: 10 },
    ]
  }
};