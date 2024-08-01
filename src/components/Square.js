function Square({ value, highlight, onClick }) {
  const className = highlight ? 'square highlight' : 'square';

  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
