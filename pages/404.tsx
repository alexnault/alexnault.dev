import React from "react";
import Link from "next/link";
import { Section, H } from "react-headings";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Container from "components/Container";

export default function NotFoundPage() {
  return (
    <Layout>
      <Container className="md:max-w-screen-md mt-24 mb-8">
        <SEO title="404 Not found" />
        <Section
          component={
            <H className="text-5xl font-bold mb-6">Oops! Page not found</H>
          }
        >
          <p className="text-gray-500 text-xl mb-6">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          <Link href="/" passHref>
            <a className="btn-primary">Go back home</a>
          </Link>
        </Section>
      </Container>
    </Layout>
  );
}
