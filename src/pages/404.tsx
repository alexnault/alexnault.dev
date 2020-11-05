import React from "react";
import { Link } from "gatsby";
import { Container, Typography, Button } from "@material-ui/core";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Container maxWidth="sm" component="main" className="content">
      <SEO title="404 Not found" />
      <Typography variant="h3" component="h1" gutterBottom>
        Oops! Page not found
      </Typography>
      <Typography color="textSecondary" paragraph>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </Typography>
      <Button variant="contained" component={Link} to="/" color="primary">
        Go back home
      </Button>
    </Container>
  </Layout>
);

export default NotFoundPage;
