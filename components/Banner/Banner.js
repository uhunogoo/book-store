import { rochester400 } from "@/fonts";

function Banner() {
  const accent = {
    color: 'var(--danger)',
    fontWeight: '700',
    fontFamily: 'var(--rochester)'
  };
  return (
    <div style={{
      fontSize: 'var(--text-size)',
      backgroundColor: '#B0C58933',
      padding: '1.9rem 1.2rem',
      marginTop: 'var(--size-30)'
    }}>
      <p className={ rochester400.variable }>
        Встигніть отримати картку до <span style={accent}>1.07</span> та отримайте <span style={ accent }>-5%</span> знижки на всю Вашу покупку!
      </p>
    </div>
  );
}

export default Banner;