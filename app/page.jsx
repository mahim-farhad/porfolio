import clsx from "clsx";

import Main from "@components/layouts/Main";
import Container from "@components/layouts/Container";
import Section from "@components/layouts/Section";

import Aside from "@components/layouts/Aside";
import {
  Grid,
  GridItem
} from "@components/layouts/Grid";

function Home() {
  return (
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

          <GridItem className="">
            <Section
              className={clsx(
                "h-[1000px]",
                'p-4 sm:p-8',
                "overflow-hidden",
                "bg-surface-light dark:bg-surface-dark",
                "border border-[#383838]",
                "rounded-3xl"
              )}
            >
            </Section>
          </GridItem>
        </Grid>
      </Container>
    </Main>
  );
}

export default Home;
