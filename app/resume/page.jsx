"use client";

import { useState } from "react";

import PerfectScrollbar from "react-perfect-scrollbar";

import clsx from "clsx";

import Typography from "@components/ui/Typography";

import Main from "@components/layouts/Main";
import Container from "@components/layouts/Container";
import Section from "@components/layouts/Section";

import Aside from "@components/layouts/Aside";
import {
  Grid,
  GridItem
} from "@components/layouts/Grid";

import Navbar from "@components/navigations/Navbar";
import Footer from "@components/navigations/Footer";

import "react-perfect-scrollbar/dist/css/styles.css";

function Resume() {
  const [scrollYSuppressed, setScrollYSuppressed] = useState(false);

  const [key, setKey] = useState(0);

  const sampleContainer = {
    height: "calc(100vh - 4rem)",
    overflow: "hidden",
    paddingBottom: "4rem"
  };

  return (
    <PerfectScrollbar
      style={sampleContainer}
      options={{ suppressScrollY: scrollYSuppressed }}
      onScrollY={(container) =>
        console.log(`scrolled to: ${container.scrollTop}.`)
      }
      key={key}
    >
      <Main>
        <Container>
          <Grid
            className={clsx(
              "grid-cols-1 xl:grid-cols-[300px,1fr]",
              "gap-4 sm:gap-8"
            )}
          >
            <GridItem>
              <Aside />
            </GridItem>

            <GridItem className="relative">
              <Navbar />

              <article>
                <Section
                  className={clsx(
                    "h-[1000px]",
                    "p-4 sm:p-8",
                    "bg-surface-light dark:bg-surface-dark",
                    "border border-[var(--jet)]",
                    "rounded-3xl"
                  )}
                >
                  <Typography
                    type="h4"
                    className={clsx(
                      "mt-2 sm:-mt-[7px]",
                      "mb-4 sm:mb-8",
                      "font-sans font-medium uppercase",
                    )}
                  >
                    About ME
                  </Typography>

                  <Typography className="mb-4">
                    I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
                    I enjoy
                    turning complex problems into simple, beautiful and intuitive designs.
                  </Typography>

                  <Typography>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive.
                    Moreover, I
                    add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
                    across your
                    message and identity in the most creative way. I created web design for many famous brand companies.
                  </Typography>
                </Section>
              </article>

              <Footer />
            </GridItem>
          </Grid>
        </Container>
      </Main>
    </PerfectScrollbar>
  );
}

export default Resume;
