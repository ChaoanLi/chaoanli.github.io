import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { ArrowUpRight, Github, Mail, Menu, X } from "lucide-react";
import { Language } from "./types";
import { SITE_DATA } from "./constants";
import Home from "./pages/Home";
import ResearchPage from "./pages/ResearchPage";
import HistoryPage from "./pages/HistoryPage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";
import ProjectsPage from "./pages/ProjectsPage";
import ListsPage from "./pages/ListsPage";
import ResourcesPage from "./pages/ResourcesPage";

function Site() {
  const [lang, setLang] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);
  const nav = [
    { path: "/research", en: "Research", zh: "研究" },
    { path: "/projects", en: "Projects", zh: "作品" },
    { path: "/blog", en: "Writing", zh: "随笔" },
  ];
  const more = [
    { path: "/history", en: "Background", zh: "个人经历" },
    { path: "/lists", en: "On my shelf", zh: "阅读与生活" },
    { path: "/resources", en: "Bookmarks", zh: "书签" },
  ];
  const SocialLinks = () => (
    <div className="social-links">
      <a href={`mailto:${SITE_DATA.profile.email}`} aria-label="Email">
        <Mail size={17} />
      </a>
      <a
        href={SITE_DATA.profile.github}
        aria-label="GitHub"
        target="_blank"
        rel="noreferrer"
      >
        <Github size={17} />
      </a>
      <a
        href={SITE_DATA.profile.googleScholar}
        target="_blank"
        rel="noreferrer"
      >
        Scholar <ArrowUpRight size={13} />
      </a>
      <a href={SITE_DATA.profile.linkedin} target="_blank" rel="noreferrer">
        LinkedIn <ArrowUpRight size={13} />
      </a>
    </div>
  );
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
            <details className="more-nav">
              <summary>
                {lang === "en" ? "More" : "更多"} <span>⌄</span>
              </summary>
              <div>
                {more.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={(e) =>
                      e.currentTarget
                        .closest("details")
                        ?.removeAttribute("open")
                    }
                  >
                    {item[lang]}
                  </Link>
                ))}
                <a href="https://podcast.chaoanli.com/">
                  {lang === "en" ? "The podcast" : "轻松愉快"} ↗
                </a>
              </div>
            </details>
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
            {[...nav, ...more].map((item) => (
              <Link to={item.path} key={item.path}>
                {item[lang]} <ArrowUpRight size={16} />
              </Link>
            ))}
            <a href="https://podcast.chaoanli.com/">
              {lang === "en" ? "The podcast" : "轻松愉快"} ↗
            </a>
          </nav>
        )}
      </header>
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/research" element={<ResearchPage lang={lang} />} />
          <Route path="/projects" element={<ProjectsPage lang={lang} />} />
          <Route
            path="/history"
            element={
              <div className="secondary-content">
                <HistoryPage lang={lang} />
              </div>
            }
          />
          <Route
            path="/blog"
            element={
              <div className="secondary-content">
                <BlogPage lang={lang} />
              </div>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <div className="secondary-content">
                <BlogPost lang={lang} />
              </div>
            }
          />
          <Route
            path="/lists"
            element={
              <div className="secondary-content">
                <ListsPage lang={lang} />
              </div>
            }
          />
          <Route
            path="/resources"
            element={
              <div className="secondary-content">
                <ResourcesPage lang={lang} />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <section className="site-wrap page-intro">
                <p className="eyebrow">404</p>
                <h1>
                  {lang === "en" ? "A small detour." : "走到了一条小岔路。"}
                </h1>
                <Link className="text-link" to="/">
                  {lang === "en" ? "Back to home" : "返回首页"} →
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="site-wrap">
          <div className="footer-top">
            <div>
              <p className="eyebrow">
                {lang === "en" ? "KEEP IN TOUCH" : "保持联系"}
              </p>
              <a
                className="footer-email"
                href={`mailto:${SITE_DATA.profile.email}`}
              >
                {SITE_DATA.profile.email} <ArrowUpRight />
              </a>
            </div>
            <SocialLinks />
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Chaoan Li</span>
            <a href="https://podcast.chaoanli.com/">
              {lang === "en"
                ? "Off the page: 轻松愉快 podcast"
                : "文字之外：轻松愉快播客"}{" "}
              ↗
            </a>
            <span>College Station, TX</span>
          </div>
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
