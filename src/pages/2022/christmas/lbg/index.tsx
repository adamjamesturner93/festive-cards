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
        <title>Seasons Greetings 2022 | Lloyds Banking Group</title>
      </Head>
      <Card>
        <CardFront />
        <CardBack>
          <CardBack.Image>
            <img
              src={'/images/2022/christmas/LBG.svg'}
              alt="Christmas postcard with the text: We go together like Chestnuts and an Open Fire."
            />
          </CardBack.Image>
          <CardBack.Message>
            <p>
              We wish you and your family a very warm and happy holiday season.
            </p>
            <p>
              We hope you will have a wonderful celebration and peaceful time to
              reflect on what we have achieved together
            </p>
            <img src="/images/logo.svg" alt="AND logo" />
            <p>our partnership in the coming year.</p>
          </CardBack.Message>
        </CardBack>
      </Card>
    </>
  );
};

export default Home;
