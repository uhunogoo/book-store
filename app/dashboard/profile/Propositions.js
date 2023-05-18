function Propositions() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginTop: '4rem'
      }}
    >
      <span>
        Спецпропозиції, що діють:
      </span>
      <Proposition 
        type="default"
        title="На все змовленння"
        sale="-50%"
        date="05.08.2020"
      />
      <Proposition 
        title="На змовленння"
        sale="-5%"
        date="05.08.2020"
      />
    </div>
  );
}

function Proposition({ type = 'danger', title, sale, date }) {
  const style = {
    '--color': type === 'danger' ? '14, 83%, 63%' : '174, 55%, 41%',
  }

  return (
    <div style={{
      ...style,
      background: 'hsla(var(--color), 0.5)',
      border: '2px solid hsl(var(--color))',
      textAlign: 'center',
      display: 'grid',
      padding: '0.5rem 1rem',
      minWidth: '130px'
    }}>
      <span 
        style={{
          fontSize: 'var(--text-small)'
        }}
      >
        { title }
      </span>
      <span
        style={{
          fontSize: '2rem',
          color: 'hsl(7, 87%, 41%)'
        }}
      >
        { sale }
      </span>
      <span
        style={{
          fontSize: '0.7rem'
        }}
      >
        до { date }
      </span>
    </div>
  );
}

export default Propositions;