import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";

// const InlineCode = ({ children }) => {
//   const { palette } = useTheme();
//   return (
//     <code
//       className="language-text"
//       style={{
//         backgroundColor:
//           palette.type === "dark" ? palette.grey[700] : palette.grey[300],
//       }}
//       children={children}
//     />
//   );
// };
const CodeBlock = ({ language, value }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className={`language-${language}`}>
      <code>{value}</code>
    </pre>
  );
};

const renderers = {
  // inlineCode: InlineCode,
  code: CodeBlock,
};

type Props = {
  children?: string;
};

export default function MarkdownRenderer({ children }: Props) {
  return (
    <div className="prose sm:prose-lg">
      {/*
      // @ts-ignore */}
      <ReactMarkdown renderers={renderers} children={children} />
    </div>
  );
}
