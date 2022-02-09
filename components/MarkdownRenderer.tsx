import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";

function CodeBlock({ language, value }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className={`language-${language}`}>
      <code>{value}</code>
    </pre>
  );
}

const renderers = {
  code: CodeBlock,
};

type Props = {
  children?: string;
};

export default function MarkdownRenderer({ children }: Props) {
  return (
    <div className="prose max-w-none dark:prose-dark sm:prose-lg">
      {/*
      // @ts-ignore */}
      <ReactMarkdown renderers={renderers}>{children}</ReactMarkdown>
    </div>
  );
}
