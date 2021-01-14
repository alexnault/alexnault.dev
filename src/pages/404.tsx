import React from "react";
import { Link } from "gatsby";
import { Container, Typography, Button } from "@material-ui/core";
import { Section } from "react-headings";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Heading from "../components/heading";

const NotFoundPage = () => (
  <Layout>
    <Container maxWidth="sm" component="main" className="content">
      <SEO title="404 Not found" />
      <Section
        component={
          <Heading variant="h3" gutterBottom>
            Oops! Page not found
          </Heading>
        }
      >
        <Typography color="textSecondary" paragraph>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </Typography>
        <Button variant="contained" component={Link} to="/" color="primary">
          Go back home
        </Button>
      </Section>
    </Container>
  </Layout>
);

export default NotFoundPage;
