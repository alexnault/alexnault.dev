import React from "react";
import Link from "next/link";
import { Section, H } from "react-headings";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Container from "components/Container";

export default function NotFoundPage() {
  return (
    <Layout>
      <Container className="mt-24 mb-8 md:max-w-screen-md">
        <SEO title="404 Not found" />
        <Section
          component={
            <H className="mb-6 text-5xl font-bold">Oops! Page not found</H>
          }
        >
          <p className="mb-6 text-xl text-gray-500">
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
