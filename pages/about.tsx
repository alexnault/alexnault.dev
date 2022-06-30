import React from "react";
import Image from "next/image";
import { Section, H } from "react-headings";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Container from "components/Container";

import hikeWebp from "public/hike.webp";

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <Container className="mt-24 mb-8 md:max-w-screen-md">
        <Section
          component={
            <H className="mb-4 text-3xl font-bold sm:text-4xl md:mb-8 md:text-5xl">
              About Me
            </H>
          }
        >
          <div className="prose dark:prose-dark dark:prose-invert sm:prose-lg">
            <p className="font-bold text-gray-600">
              {`Hey! I'm Alex, a developer from Canada 🍁.
              I work at Apprentx as a Software Architect and I write articles for my fellow developers from time to time.`}
            </p>
            <p>
              {`My first experience with programming stems from high school when I taught myself some basic Delphi and created a few video games.
              Which I was very proud of by the way! A passion was born.`}
            </p>
            <p>
              {`
              I graduated in Computer Science from the University of Sherbrooke a few years later.
              Since then, I have worked at many technology-first companies.
              Turning my passion for building stuff into a full-time job.
              Young me would be proud.
              `}
            </p>
            <p>
              {`Anyway, you can find me either playing board games with friends, working out at the gym, or tasting beers at a micro-brewery.`}
            </p>
            <p>{`Enjoy your stay!`}</p>
            <div className="-mx-6 overflow-hidden bg-gray-100 shadow-xl sm:mx-0 sm:rounded-md">
              <Image
                src={hikeWebp}
                alt="Alex Nault"
                layout="responsive"
                placeholder="blur"
              />
            </div>
          </div>
        </Section>
      </Container>
    </Layout>
  );
}
