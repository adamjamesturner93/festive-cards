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
        <title>Seasons Greetings 2022 | Scottish Tech Army</title>
      </Head>
      <Card>
        <CardFront />
        <CardBack>
          <CardBack.Image>
            <img
              src={'/images/2022/christmas/STA.svg'}
              alt="Christmas postcard with the text: We go together like a Partridge and a Pear Tree."
            />
          </CardBack.Image>
          <CardBack.Message>
            <p>
              We wish you and your family a very warm and happy holiday season.
            </p>
            <p>
              Seasons change but our values and commitment remain strong. We
              appreciate this partnership
            </p>
            <img src="/images/logo.svg" alt="AND logo" />
            <p>extend our wishes for a happy & healthy holidays.</p>
          </CardBack.Message>
        </CardBack>
      </Card>
    </>
  );
};

export default Home;
