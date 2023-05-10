function Banner() {
  const accent = {
    color: 'var(--danger)',
    fontWeight: '700'
  };
  return (
    <div style={{
      fontSize: 'var(--text-size)',
      backgroundColor: '#B0C58933',
      padding: '1.9rem 1.2rem',
      marginTop: 'var(--size-30)'
    }}>
      <p>
        Встигніть отримати картку до <span style={accent}>1.07</span> та отримайте <span style={ accent }>-5%</span> знижки на всю Вашу покупку!
      </p>
    </div>
  );
}

export default Banner;