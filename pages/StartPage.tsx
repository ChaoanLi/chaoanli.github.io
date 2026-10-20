import React from "react";
import type { Language } from "../types";

const collectionUrl = "https://chaoan-private-start.chaoan.workers.dev";

export default function StartPage({ lang }: { lang: Language }) {
  const en = lang === "en";
  return (
    <section className="start-page" aria-label={en ? "Bookmark search" : "收藏导航"}>
      <iframe
        src={`${collectionUrl}/embed?lang=${lang}`}
        title={en ? "Chaoan’s bookmarks and search" : "Chaoan 的收藏与搜索"}
        referrerPolicy="no-referrer"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation allow-downloads"
      />
    </section>
  );
}
