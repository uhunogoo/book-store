function DecoratedBooks({ style }) {
  return (
    <div
      style={{
        height: '3.5rem',
        background: 'url(/books-pattern.jpg) repeat-x',
        backgroundSize: 'auto 100%',
        backgroundPositionX: '-211px',
        ...style
      }}
    ></div>
  );
}

export default DecoratedBooks;