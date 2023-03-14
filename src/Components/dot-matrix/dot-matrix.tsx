import "./dot-matrix.css";

export const DotMatrix = () => {
  const numOfDots = 42;
  const totalDotElements: Array<number> = [];

  for (let num = 0; num < numOfDots; num += 1) {
    totalDotElements.push(num + 1);
  }

  return (
    <div className="dot-grid">
      {totalDotElements.map((num) => (
        <div key={num} className="dot-container">
          <div className="dot"></div>
        </div>
      ))}
    </div>
  );
};
