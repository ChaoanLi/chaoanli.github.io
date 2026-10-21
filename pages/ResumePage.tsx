import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../types";

export default function ResumePage({ lang }: { lang: Language }) {
  const en = lang === "en";
  const pdf = en ? "/Chaoan_Li_CV.pdf" : "/Chaoan_Li_Resume_ZH.pdf";
  return (
    <section className="site-wrap resume-page">
      <Link className="text-link" to="/">← {en ? "Back to home" : "返回主页"}</Link>
      <div className="resume-heading">
        <h1>{en ? "Résumé" : "个人简历"}</h1>
        <a className="text-link" href={pdf} download={en ? "Chaoan_Li_CV.pdf" : "李朝安_个人简历.pdf"}>
          {en ? "Download PDF" : "下载 PDF"} ↓
        </a>
      </div>
      <p className="resume-help">
        {en ? "For selectable text and clickable links, " : "如需选取文字或点击简历中的链接，"}
        <a className="text-link" href={pdf} target="_blank" rel="noreferrer">
          {en ? "open the PDF in a new tab" : "在新标签页打开 PDF"} ↗
        </a>
      </p>
      <img key={pdf} className="resume-preview" src={en ? "/resume-en.png" : "/resume-zh.png"} alt={en ? "Chaoan Li — English CV preview. Open or download the PDF above to read the document as text." : "李朝安的中文简历预览。可通过上方链接打开或下载 PDF 阅读文字。"} width={en ? 1391 : 1273} height={1800} />
    </section>
  );
}
