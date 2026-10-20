import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Language } from "./types";
import { SITE_DATA } from "./constants";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import StartPage from "./pages/StartPage";
import NowPage, { NowArchive } from "./pages/NowPage";
const ResearchPage = lazy(() => import("./pages/ResearchPage"));

function Site() {
  const [lang, setLang] = useState<Language>(() => {
    const query = new URLSearchParams(window.location.search).get("lang");
    if (query === "zh" || query === "en") return query;
    try { return localStorage.getItem("chaoan-site-language") === "zh" ? "zh" : "en"; } catch { return "en"; }
  });
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
      document.querySelectorAll<HTMLImageElement>('#main-content img:not([loading="lazy"])'),
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
    try { localStorage.setItem("chaoan-site-language", lang); } catch {}
    const pageTitle = location.pathname.startsWith("/now")
      ? (location.pathname === "/now/archive" ? `${lang === "en" ? "Archive" : "归档"} · nownownow` : "nownownow")
      : location.pathname.startsWith("/research") ? (lang === "en" ? "Research" : "研究")
      : location.pathname.startsWith("/projects") ? "Software"
      : location.pathname.startsWith("/start") ? (lang === "en" ? "Start" : "导航") : "";
    document.title = pageTitle ? `${pageTitle} · Chaoan Li` : "Chaoan Li";
  }, [lang, location.pathname]);
  const nav = [
    { path: "/now", en: "nownownow", zh: "nownownow" },
    { path: "/research", en: "Research", zh: "研究" },
    { path: "/projects", en: "Software", zh: "软件" },
    { path: "/start", en: "Start", zh: "导航" },
  ];
  return (
    <div className="editorial-site">
      <a className="skip-link" href="#main-content">
        {lang === "en" ? "Skip to content" : "跳到正文"}
      </a>
      <header className="site-header">
        <div className="site-wrap header-inner">
          <Link to="/" className="wordmark" aria-label="Chaoan Li home">
            Chaoan Li
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
              <Link to={item.path} key={item.path} aria-current={location.pathname.startsWith(item.path) ? "page" : undefined}>
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
          <Route path="/start" element={<StartPage lang={lang} />} />
          <Route path="/news" element={<Navigate to="/now" replace />} />
          <Route path="/now" element={<NowPage lang={lang} />} />
          <Route path="/now/archive" element={<NowArchive lang={lang} />} />
          <Route path="/now/2026-10-19" element={<Navigate to="/now" replace />} />
          <Route path="/now/:date" element={<NowPage lang={lang} />} />
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
      {location.pathname.replace(/\/+$/, "") !== "/start" && <footer className="site-footer academic-footer">
        <div className="site-wrap footer-bottom">
          <span>© {new Date().getFullYear()} Chaoan Li</span>
          <a href={`mailto:${SITE_DATA.profile.email}`}>
            {SITE_DATA.profile.email}
          </a>
        </div>
      </footer>}
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
