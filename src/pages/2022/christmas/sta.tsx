/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Card from '@components/Card';
import { CardBack } from '@components/CardBack';
import { CardFront } from '@components/CardFront';

const Home: NextPage = () => {
  return (
    <Card>
      <CardFront to="Lloyds" />
      <CardBack>
        <CardBack.Image>
          <img
            src={'/images/2022/christmas/STA.svg'}
            alt="Christmas postcard with cartoon images of the STA team. From left to right: Dapo wearing reindeer antlers, Fi, Murray weating an elf hat, Alysson holding a white baloon with the STA logo on it and Alysson's dog wearing a Santa hat."
          />
        </CardBack.Image>
        <CardBack.Message>
          <p>
            We wish you and your family a very warm and happy holiday season.
          </p>
          <p>
            We hope you will have a wonderful celebration and peaceful time to
            reflect on what we have achieved together AND opportunities for the
            coming year.
          </p>
        </CardBack.Message>
      </CardBack>
    </Card>
  );
};

export default Home;
