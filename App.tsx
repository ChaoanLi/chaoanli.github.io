import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Language } from "./types";
import { SITE_DATA } from "./constants";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
const ResearchPage = lazy(() => import("./pages/ResearchPage"));

function Site() {
  const [lang, setLang] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    if (!location.hash) return;
    let cancelled = false;
    const images = Array.from(
      document.querySelectorAll<HTMLImageElement>("#main-content img"),
    );
    Promise.all(
      images.map((image) => image.decode().catch(() => undefined)),
    ).then(() => {
      if (!cancelled)
        document.getElementById(location.hash.slice(1))?.scrollIntoView();
    });
    return () => {
      cancelled = true;
    };
  }, [location.pathname, location.hash]);
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);
  const nav = [
    { path: "/research", en: "Research", zh: "研究" },
    { path: "/projects", en: "Software", zh: "软件" },
  ];
  return (
    <div className="editorial-site">
      <a className="skip-link" href="#main-content">
        {lang === "en" ? "Skip to content" : "跳到正文"}
      </a>
      <header className="site-header">
        <div className="site-wrap header-inner">
          <Link to="/" className="wordmark" aria-label="Chaoan Li home">
            chaoan li<span className="brand-dot">.</span>
            <span className="wordmark-cn">李朝安</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={
                  location.pathname.startsWith(item.path) ? "page" : undefined
                }
              >
                {item[lang]}
              </Link>
            ))}
            <a href="https://podcast.chaoanli.com/">{lang === "en" ? "Podcast" : "播客"} ↗</a>
            <a href="/Chaoan_Li_Resume.pdf" target="_blank" rel="noreferrer">
              {lang === "en" ? "Résumé (PDF)" : "简历（PDF）"}
            </a>
          </nav>
          <div className="header-actions">
            <button
              className="language-switch"
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              aria-label={lang === "en" ? "切换到中文" : "Switch to English"}
            >
              {lang === "en" ? "中文" : "EN"}
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={lang === "en" ? "Toggle navigation" : "切换导航"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {nav.map((item) => (
              <Link to={item.path} key={item.path}>
                {item[lang]} <ArrowUpRight size={16} />
              </Link>
            ))}
            <a href="https://podcast.chaoanli.com/">{lang === "en" ? "Podcast" : "播客"} ↗</a>
            <a href="/Chaoan_Li_Resume.pdf" target="_blank" rel="noreferrer">
              {lang === "en" ? "Résumé (PDF)" : "简历（PDF）"} ↗
            </a>
          </nav>
        )}
      </header>
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/research" element={<Suspense fallback={<p className="site-wrap">{lang === "en" ? "Loading research…" : "正在加载研究…"}</p>}><ResearchPage lang={lang} /></Suspense>} />
          <Route path="/projects" element={<ProjectsPage lang={lang} />} />
          <Route
            path="*"
            element={
              <section className="site-wrap page-intro">
                <p className="eyebrow">404</p>
                <h1>{lang === "en" ? "Page not found" : "页面不存在"}</h1>
                <Link className="text-link" to="/">
                  {lang === "en" ? "Back to home" : "返回首页"} →
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="site-footer academic-footer">
        <div className="site-wrap footer-bottom">
          <span>© {new Date().getFullYear()} Chaoan Li</span>
          <a href={`mailto:${SITE_DATA.profile.email}`}>
            {SITE_DATA.profile.email}
          </a>
        </div>
      </footer>
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}
