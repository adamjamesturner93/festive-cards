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
      <div className="seal" />
      <div className="letter">{children}</div>
    </div>
  );
}

CardBack.Message = Message;
CardBack.Image = CardImage;
