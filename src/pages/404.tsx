import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" />
    <h1>Oops! Page not found</h1>
    <p>
      The page you are looking for might have been removed, had its name changed
      or is temporarily unavailable.
    </p>
    <Link to="/" tabIndex={-1}>
      <Button>Go to homepage</Button>
    </Link>
  </Layout>
);

export default NotFoundPage;
