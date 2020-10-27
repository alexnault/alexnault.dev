import React from "react";
import {
  Typography,
  Link,
  useTheme,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";

const useHeadingStyles = makeStyles((theme) => ({
  heading: {
    marginTop: theme.spacing(6),
  },
}));

const H1 = (props) => {
  const classes = useHeadingStyles();
  return (
    <Typography
      component="h1"
      variant="h3"
      gutterBottom
      className={classes.heading}
      {...props}
    />
  );
};
const H2 = (props) => {
  const classes = useHeadingStyles();
  return (
    <Typography
      component="h2"
      variant="h4"
      gutterBottom
      className={classes.heading}
      style={{ marginTop: "2em" }}
      {...props}
    />
  );
};
const H3 = (props) => {
  const classes = useHeadingStyles();
  return (
    <Typography
      component="h3"
      variant="h5"
      gutterBottom
      className={classes.heading}
      {...props}
    />
  );
};
const H4 = (props) => {
  const classes = useHeadingStyles();
  return (
    <Typography
      component="h4"
      variant="h6"
      gutterBottom
      className={classes.heading}
      {...props}
    />
  );
};
const P = (props) => <Typography variant="body1" paragraph {...props} />;
const A = (props) => <Link {...props} />;
const Li = (props) => <Typography component="li" {...props} gutterBottom />;
const InlineCode = (props) => {
  const { palette } = useTheme();
  return (
    <code
      className="language-text"
      style={{
        backgroundColor:
          palette.type === "dark" ? palette.grey[700] : palette.grey[300],
      }}
      {...props}
    />
  );
};
const Hr = (props) => <Divider {...props} />;

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  a: A,
  p: P,
  li: Li,
  inlineCode: InlineCode,
  hr: Hr,
};

type Props = {
  children: React.ReactNode;
};

export default function CustomMDXProvider({ children }: Props) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
