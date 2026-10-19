import React from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

/** Only author-written TeX is accepted; fonts and CSS are bundled locally. */
export default function MathFormula({ tex }: { tex: string }) {
  const html = katex.renderToString(tex, {
    displayMode: true,
    output: "htmlAndMathml",
    throwOnError: true,
    trust: false,
    strict: "error",
  });
  return <div className="math-formula" dangerouslySetInnerHTML={{ __html: html }} />;
}
