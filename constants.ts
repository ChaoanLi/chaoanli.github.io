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
    avatarUrl: "/ChaoanLi.png",
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
        en: "Personal academic website for research and publications.",
        zh: "个人学术网站，展示研究和发表成果。"
      },
      content: {
        en: "This site hosts my research publications, academic timeline, and occasional thoughts on data science and statistics.",
        zh: "本站展示我的研究论文、学术历程以及对数据科学和统计学的一些思考。"
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
        { title: "EasyPod Podcast", url: "https://www.easypod.fun/", description: "Mandarin podcast on tech and academia." },
        { title: "GitHub Profile", url: "https://github.com/ChaoanLi", description: "Code repositories and projects." }
      ]
    },
    {
      id: "r2",
      name: { en: "Research Tools", zh: "科研工具" },
      links: [
        { title: "Zotero", url: "https://www.zotero.org", description: "Reference management." },
        { title: "Overleaf", url: "https://www.overleaf.com", description: "Collaborative LaTeX editor." },
        { title: "arXiv", url: "https://arxiv.org", description: "Open-access preprint archive." }
      ]
    },
    {
      id: "r3",
      name: { en: "Learning Resources", zh: "学习资源" },
      links: [
        { title: "Coursera", url: "https://www.coursera.org", description: "Online courses." },
        { title: "Google Scholar", url: "https://scholar.google.com", description: "Academic search engine." },
        { title: "Math StackExchange", url: "https://math.stackexchange.com", description: "Mathematics Q&A community." }
      ]
    },
    {
      id: "r4",
      name: { en: "Academic Communities", zh: "学术社区" },
      links: [
        { title: "ResearchGate", url: "https://www.researchgate.net", description: "Academic networking platform." },
        { title: "ORCID", url: "https://orcid.org", description: "Researcher identifier registry." }
      ]
    }
  ],
  projects: [
    {
      id: "p1",
      title: { en: "EasyPod", zh: "轻松愉快播客" },
      description: { 
        en: "A Mandarin chat podcast exploring tech, academia, and life experiences.",
        zh: "一档讨论技术、学术和生活的中文播客节目。"
      },
      category: "Media",
      tech: ["Podcasting", "Content Creation"],
      liveUrl: "https://www.easypod.fun/",
      status: "active"
    }
    // Add your projects here
  ],
  lists: {
    books: [
      { title: "Deep Learning", author: "Ian Goodfellow", completed: false },
      { title: "The Master Algorithm", author: "Pedro Domingos", completed: false }
      // Add more books in constants.ts
    ],
    movies: [
      { title: "The Social Network", year: "2010", completed: false },
      { title: "Her", year: "2013", completed: false }
      // Add more movies in constants.ts
    ],
    skills: [
      { name: "Advanced PyTorch", progress: 60, completed: false },
      { name: "Rust Programming", progress: 30, completed: false }
      // Add more skills in constants.ts
    ],
    goals: [
      { title: "Publish 2 papers in 2025", deadline: "2025-12-31", completed: false },
      { title: "Complete PhD qualifying exam", deadline: "2025-06-30", completed: true }
      // Add more goals in constants.ts
    ]
  }
};