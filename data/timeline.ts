import { TimelineEvent } from '../types';

export const timeline: TimelineEvent[] = [
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
    title: { en: "Entered the High School", zh: "高中入学" },
    description: {
      en: "Entered the No.1 High School Affiliated to Central China Normal University as a county student.",
      zh: "进入华中师范大学第一附属中学。"
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
    type: "career"
  }
];

