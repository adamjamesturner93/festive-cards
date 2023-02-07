import { ReactNode } from 'react';

function Message({ children }: { children: ReactNode }) {
  return <div className="letter__back">{children}</div>;
}
function CardImage({ children }: { children: ReactNode }) {
  return <div className="letter__front">{children}</div>;
}

export function CardBack({ children }: { children: ReactNode }) {
  return (
    <div className="card__back">
      <div className="cover" />
      <div className="seal">
        <img
          src={'/images/2022/christmas/seal.svg'}
          alt="AND Digital logo in a wax seal"
        />
      </div>
      <div className="letter">{children}</div>
    </div>
  );
}

CardBack.Message = Message;
CardBack.Image = CardImage;
