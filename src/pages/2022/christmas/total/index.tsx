/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '@components/Card';
import { CardBack } from '@components/CardBack';
import { CardFront } from '@components/CardFront';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Seasons Greetings 2022 | Total Energy</title>
      </Head>
      <Card>
        <CardFront />
        <CardBack>
          <CardBack.Image>
            <img
              src={'/images/2022/christmas/TOTAL.svg'}
              alt="Christmas postcard with the text: We go together like Elf and a Shelf."
            />
          </CardBack.Image>
          <CardBack.Message>
            <p>
              We wish you and your family a very warm and happy holiday season.
            </p>
            <p>
              We are here to reduce worries, reuse values and recycle skills for
              a greener and brighter tomorrow. Thank you for believing in us
            </p>
            <img src="/images/logo.svg" alt="AND logo" />
            <p> may your holiday season be filled with light & joy.</p>
          </CardBack.Message>
        </CardBack>
      </Card>
    </>
  );
};

export default Home;
