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
      title: { en: "M.S. in Pure Mathematics", zh: "基础数学硕士学位" },
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
    },
    {
      id: "t8",
      year: "2014",
      title: { en: "High School Diploma", zh: "高中毕业" },
      description: {
        en: "Graduated from The No.1 High School Affiliated to Central China Normal University.",
        zh: "毕业于华中师范大学第一附属中学。"
      },
      type: "education"
    },
    {
      id: "t9",
      year: "2011",
      title: { en: "Entered the No.1 High School Affiliated to Central China Normal University as a county student", zh: "以专县生的身份进入华中师范大学第一附属中学" },
      description: {
        en: "Entered the No.1 High School Affiliated to Central China Normal University as a county student.",
        zh: "以专县生的身份进入华中师范大学第一附属中学。"
      },
      type: "education"
    },
    {
      id: "t10",
      year: "2000",
      title: { en: "Hello World!", zh: "Start of the lifejourney" },
      description: {
        en: "Born in Yichang, Hubei, China.",
        zh: "出生于湖北宜昌。"
      },
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
      name: { en: "Social Media", zh: "社交媒体" },
      links: [
        { title: "X(Twitter)", url: "https://x.com/", description: "X(Twitter) is a social media platform." },
        { title: "LinkedIn", url: "https://www.linkedin.com/", description: "LinkedIn is a professional networking platform." },
        { title: "YouTube", url: "https://www.youtube.com/", description: "YouTube is a video sharing platform." },
        { title: "Bilibili", url: "https://www.bilibili.com/", description: "Bilibili is a video sharing platform." }
      ]
    },

    {
      id: "r2",
      name: { en: "Research Tools", zh: "科研工具" },
      links: [
        { title: "Notion", url: "https://www.notion.so/", description: "Notion is a note-taking and project management tool." },
        { title: "Zotero", url: "https://www.zotero.org", description: "Reference management." },
        { title: "Overleaf", url: "https://www.overleaf.com", description: "Collaborative LaTeX editor." },
        { title: "arXiv", url: "https://arxiv.org", description: "Open-access preprint archive." },
        { title: "HackMD", url: "https://hackmd.io/", description: "HackMD is a platform for writing and sharing markdown documents." }
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
        { title: "arXiv", url: "https://arxiv.org", description: "Open-access preprint archive." },
        { title: "MathOverflow", url: "https://mathoverflow.net", description: "Mathematics Q&A community." },
        { title: "mastodon", url: "https://mastodon.social", description: "Social media platform." },
        { title: "Learning C++", url: "https://www.learncpp.com/", description: "Learning C++ is a website for learning C++." },
        { title: "Open Quant", url: "https://www.openquant.net/", description: "Open Quant is a website for learning quantitative finance." }
      ]
    },
    {
      id: "r5",
      name: { en: "Code Platforms", zh: "代码平台" },
      links: [
        { title: "GitHub", url: "https://github.com/ChaoanLi", description: "Code repositories and projects." },
        { title: "Hugging Face", url: "https://huggingface.co/", description: "Model repositories and projects." },
        { title: "Kaggle", url: "https://kaggle.com/", description: "Data science and machine learning platform." },
        { title: "Colab", url: "https://colab.research.google.com/", description: "Google's cloud platform for machine learning and data science." },
        { title: "LeetCode", url: "https://leetcode.com/", description: "LeetCode is a platform for practicing coding problems." }

      ]
    },
    {
      id: "r6",
      name: { en: "Forum Platforms", zh: "论坛平台" },
      links: [
        { title: "Reddit", url: "https://www.reddit.com/", description: "Reddit is a platform for discussing and sharing content." },
        { title: "1point3acres", url: "https://www.1point3acres.com/", description: "1point3acres is a forum for discussing and sharing content." },
        { title: "uscard", url: "https://www.uscardforum.com/", description: "uscard is a forum for discussing and sharing content." },
        { title: "teamblind", url: "https://www.teamblind.com/", description: "teamblind is a forum for discussing and sharing content." },
        { title: "V2EX", url: "https://www.v2ex.com/", description: "V2EX is a forum for discussing and sharing content." }
      ]
    },
    {
      id: "r7",
      name: { en: "PT Platforms", zh: "PT平台" },
      links: [
        { title: "mteam", url: "https://www.mteam.cc/", description: "mteam is a platform for discussing and sharing content." },
        { title: "BYRPT", url: "https://www.byr.pt/", description: "BYRPT is a platform for discussing and sharing content." },
        { title: "TJUPT", url: "https://www.tjupt.org/", description: "TJUPT is a platform for discussing and sharing content." }
      ]
    },
    {
      id: "r8",
      name: { en: "Recommended Personal Websites", zh: "推荐个人网站" },
      links: [
        { title: "Terence Tao", url: "https://terrytao.wordpress.com/", description: "Research blog of Terence Tao." },
        { title: "Scott Anderson", url: "https://scottaaronson.blog/", description: "Research blog of Scott Anderson." },
        { title: "3Blue1Brown", url: "https://www.3blue1brown.com/", description: "3Blue1Brown is a website for mathematics." },
        { title: "Xiany Zhang", url: "https://zhangxiany-tamu.github.io/", description: "Website of Xianyang Zhang." },
        { title: "Rui Tuo", url: "https://sites.google.com/site/ruituo2017/", description: "Website of Rui Tuo." }
      ]
    },
    {
      id: "r9",
      name: { en: "Other Resources", zh: "其他资源" },
      links: [
        { title: "Zlib", url: "https://z-library.ec/", description: "Zlib is a library for free books." },
        { title: "VPN Price List", url: "https://www.duangks.com/", description: "price of different vpns" },
        { title: "kmoe", url: "https://kzo.moe/", description: "kmoe is a website for comic." },
        { title: "Axutongxue", url: "http://axutongxue.com/", description: "Axutongxue is a website for everything." },
        { title: "Windows Activation", url: "https://jihuowin.com/index.php", description: "Windows Activation is a website for activating Windows." },
        { title: "Love PDF", url: "https://www.ilovepdf.com/", description: "i Love PDF is a website for free PDF editor." },
        { title: "LDtoolkit", url: "https://tool.pc.wiki/", description: "LDtoolkit is a website for PC tools." },
        { title: "OldmanTvg", url: "https://www.oldmantvg.net/", description: "OldmanTvg is a website for oldman tvg." },
        { title: "maigoo", url: "https://www.maigoo.com/", description: "maigoo is a website for ranking brands ." }
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
    },
    {
      id: "p2",
      title: { en: "EasyGrader", zh: "智能评分助手" },
      description: {
        en: "AI-powered grading assistant using Google Gemini API for automated assessment",
        zh: "基于 Google Gemini API 的 AI 智能评分助手，用于自动化评估"
      },
      category: "AI Tool",
      tech: ["React", "TypeScript", "Vite", "Gemini API"],
      liveUrl: "https://chaoanli.github.io/EasyGrader/",
      githubUrl: "https://github.com/ChaoanLi/EasyGrader",
      status: "active"
    },
    {
      id: "p3",
      title: { en: "LakeAEcurve-INLA", zh: "湖泊面积-海拔曲线重建" },
      description: {
        en: "Bayesian reconstruction of lake area–elevation (AE) curves using INLA and SPDE-based spatial modeling.",
        zh: "使用 INLA 和基于 SPDE 的空间建模进行湖泊面积-海拔曲线的贝叶斯重建。"
      },
      category: "Research",
      tech: ["R", "INLA", "Bayesian Statistics", "Spatial Modeling"],
      githubUrl: "https://github.com/ChaoanLi/LakeAEcurve-INLA",
      status: "active"
    },
    {
      id: "p4",
      title: { en: "ModelValidator", zh: "模型验证框架" },
      description: {
        en: "Statistical framework for validating computer models via global and subdomain hypothesis testing.",
        zh: "通过全局和子域假设检验验证计算机模型的统计框架。"
      },
      category: "Research",
      tech: ["R", "Statistical Testing", "Model Validation"],
      githubUrl: "https://github.com/ChaoanLi/ModelValidator",
      status: "active"
    },
    {
      id: "p5",
      title: { en: "E-value", zh: "多重检验校正评估" },
      description: {
        en: "Implementation and comparison of multiple-testing correction methods with performance evaluation framework and visualization tools for FDR control assessment.",
        zh: "多重假设检验校正方法的实现与比较，包含性能评估框架和 FDR 控制可视化工具。"
      },
      category: "Research",
      tech: ["R", "Multiple Testing", "FDR Control", "Visualization"],
      githubUrl: "https://github.com/ChaoanLi/E-value",
      status: "active"
    },
    {
      id: "p6",
      title: { en: "BIBD4ML", zh: "机器学习方法评估" },
      description: {
        en: "Evaluate and compare the performance of multiple machine learning methods using a Balanced Incomplete Block Design (BIBD).",
        zh: "使用平衡不完全区组设计 (BIBD) 评估和比较多个机器学习方法的性能。"
      },
      category: "Research",
      tech: ["R", "Machine Learning", "Experimental Design", "BIBD"],
      githubUrl: "https://github.com/ChaoanLi/BIBD4ML",
      status: "active"
    }
  ],
  lists: {
    books: [
      { title: "Machine Learning", author: "Zhi-Hua Zhou", completed: false },
      { title: "Dream of the Red Chamber", author: "Xueqing Cao", completed: false }
      // Add more books in constants.ts
    ],
    movies: [
      { title: "Our Little Sister", year: "2015", completed: false },
      { title: "Her", year: "2013", completed: false },
      { title: "One battle after another", year: "2025", completed: false }
      // Add more movies in constants.ts
    ],
    series: [
      { title: "Breaking Bad", year: "2008", completed: false },
      { title: "Seinfeld", year: "1989", completed: false }
      // Add more Series in constants.ts
    ],
    skills: [
      { name: "C++", progress: 10, completed: false },
      { name: "SQL", progress: 50, completed: false },
      { name: "Ethereum", progress: 10, completed: false }
      // Add more skills in constants.ts
    ],
    goals: [
      { title: "find an internship before 2027", deadline: "2027-06-30", completed: false },
      { title: "Accomplish 2 papers in 2025", deadline: "2025-12-31", completed: false },
      { title: "Complete PhD qualifying exam", deadline: "2025-06-30", completed: true }
      // Add more goals in constants.ts
    ]
  }
};