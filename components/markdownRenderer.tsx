import React from "react";
import {
  Typography,
  Link,
  useTheme,
  Divider,
  makeStyles,
} from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { dracula as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";

const useHeadingStyles = makeStyles((theme) => ({
  heading: {
    marginTop: theme.spacing(6),
  },
}));

const Heading = ({ level, children }) => {
  const classes = useHeadingStyles();

  return (
    <Typography
      component={`h${level}`}
      // @ts-ignore
      variant={`h${Math.min(6, level + 2)}`}
      gutterBottom
      className={classes.heading}
      children={children}
    />
  );
};
const P = ({ children }) => (
  <Typography variant="body1" paragraph children={children} />
);
const A = ({ href, children }) => <Link href={href} children={children} />;
const Li = ({ children }) => (
  <Typography component="li" gutterBottom children={children} />
);
const Hr = () => <Divider />;
const InlineCode = ({ children }) => {
  const { palette } = useTheme();
  return (
    <code
      className="language-text"
      style={{
        backgroundColor:
          palette.type === "dark" ? palette.grey[700] : palette.grey[300],
      }}
      children={children}
    />
  );
};
const CodeBlock = ({ language, value }) => {
  return (
    <Prism
      style={theme}
      language={language}
      children={value}
      // showLineNumbers={true}
    />
  );
};

const renderers = {
  heading: Heading,
  link: A,
  paragraph: P,
  listItem: Li,
  thematicBreak: Hr,
  inlineCode: InlineCode,
  code: CodeBlock,
};

type Props = {
  children?: string;
};

export default function MarkdownRenderer({ children }: Props) {
  // @ts-ignore
  return <ReactMarkdown renderers={renderers} children={children} />;
}
