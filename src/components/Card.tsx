/* eslint-disable @next/next/no-img-element */
import { ReactNode, useEffect, useState } from 'react';

const CardState = {
  ENVELOPE_FRONT: 'ENVELOPE_FRONT',
  ENVELOPE_REAR: 'ENVELOPE_FRONT ENVELOPE_REAR',
  ENVELOPE_SEAL: 'ENVELOPE_FRONT ENVELOPE_REAR ENVELOPE_SEAL',
  ENVELOPE_OPEN: 'ENVELOPE_FRONT ENVELOPE_REAR ENVELOPE_SEAL ENVELOPE_OPEN',
  ENVOLOPE_HIDDEN:
    'ENVELOPE_FRONT ENVELOPE_REAR ENVELOPE_SEAL ENVELOPE_OPEN ENVELOPE_HIDDEN',
  CARD_FRONT:
    'ENVELOPE_FRONT ENVELOPE_REAR ENVELOPE_SEAL ENVELOPE_OPEN ENVELOPE_HIDDEN CARD_FRONT',
  CARD_REAR:
    'ENVELOPE_FRONT ENVELOPE_REAR ENVELOPE_SEAL ENVELOPE_OPEN ENVELOPE_HIDDEN CARD_FRONT CARD_REAR',
};

const Card = ({ children }: { children: ReactNode }) => {
  const [cardState, setCardState] = useState(CardState.ENVELOPE_FRONT);
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    switch (secondsPassed) {
      case 0:
        setCardState(CardState.ENVELOPE_FRONT);
        break;
      case 0.5:
        setCardState(CardState.ENVELOPE_REAR);
        break;
      case 4:
        setCardState(CardState.ENVELOPE_SEAL);
        break;
      case 5:
        setCardState(CardState.ENVELOPE_OPEN);
        break;
      case 6:
        setCardState(CardState.ENVOLOPE_HIDDEN);
        break;
      case 7:
        setCardState(CardState.CARD_FRONT);
        break;
    }
  }, [secondsPassed]);

  function openEnvelope() {
    const interval = setInterval(() => {
      setSecondsPassed((prev) => prev + 0.5);
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
    }, 13000);
  }

  function toggleCard() {
    if (cardState === CardState.CARD_FRONT) {
      return setCardState(CardState.CARD_REAR);
    }
    return setCardState(CardState.CARD_FRONT);
  }

  return (
    <div className={`card ${cardState}`}>
      <div className="card__content">{children}</div>

      {secondsPassed === 0 ? (
        <button onClick={openEnvelope}>Open</button>
      ) : secondsPassed > 8 ? (
        <button onClick={toggleCard}>
          {cardState === CardState.CARD_FRONT ? 'See back' : 'See front'}
        </button>
      ) : null}
    </div>
  );
};

export default Card;
