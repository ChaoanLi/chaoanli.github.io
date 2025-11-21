import { ResourceCategory } from '../types';

export const resources: ResourceCategory[] = [
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
      { title: "V2EX", url: "https://www.v2ex.com/", description: "V2EX is a forum for discussing and sharing content." },
      { title: "Bay Area News", url: "https://www.wanqu.co/", description: "Bay Area News is a forum for discussing and sharing content." }
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
      { title: "Rui Tuo", url: "https://sites.google.com/site/ruituo2017/", description: "Website of Rui Tuo." },
      { title:"cbvivi", url: "https://cbvivi.today/", description: "Website of cbvivi." }
    ]
  },
  {
    id: "r9",
    name: { en: "Trade Tools", zh: "交易工具" },
    links: [
      { title: "TradingView", url: "https://www.tradingview.com/", description: "TradingView is a website for data analysis." },
      { title: "Xiaoyinsi", url: "https://xiaoyinsi.com/", description: "Xiaoyinsi is a website for course." },
      { title: "CoinGlass", url: "https://www.coinglass.com/", description: "CoinGlass is a website for cryptocurrency data." },
      { title: "Ji10", url: "https://rili.jin10.com/day/", description: "Ji10 is a website for news." },
      { title:"Robinhood", url: "https://www.robinhood.com/", description: "Robinhood is a website for trading." },

    ]
  },
  {
    id: "r10",
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
];

