import { Profile } from '../types';

export const profile: Profile = {
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
};

