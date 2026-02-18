export default function Home() {
  return (
    <div className="page-container">
      <h1>Сравнение React UI библиотек (2026)</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted, #666)' }}>
        Выберите библиотеку в навигации, чтобы увидеть типичные компоненты в действии.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
        }}
      >
        {[
          { path: '/mui', name: 'Material UI', desc: 'Google Material Design, богатая экосистема' },
          { path: '/antd', name: 'Ant Design', desc: 'Enterprise, формы и таблицы' },
          { path: '/chakra', name: 'Chakra UI', desc: 'DX, доступность, тёмная тема' },
          { path: '/mantine', name: 'Mantine', desc: '100+ компонентов, хуки, формы' },
          { path: '/radix', name: 'Radix UI', desc: 'Headless примитивы, полный контроль' },
        ].map(({ path, name, desc }) => (
          <a
            key={path}
            href={path}
            style={{
              padding: '1.5rem',
              border: '1px solid rgba(128,128,128,0.25)',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#646cff'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(100,108,255,0.15)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(128,128,128,0.25)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <strong style={{ fontSize: '1.1rem' }}>{name}</strong>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', opacity: 0.85 }}>{desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
