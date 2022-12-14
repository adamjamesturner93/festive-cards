export function CardFront({ to }: { to: string }) {
  return (
    <div className="card__front">
      <div className="address">
        <h1>To {to}</h1>
        <p>From Club Grace</p>
      </div>
    </div>
  );
}
