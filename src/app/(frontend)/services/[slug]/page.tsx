type Props = {
  params: { slug: string }
}

export default async function ServicePage({ params }: Props) {
  const res = await fetch(
    `http://localhost:3000/api/services?where[slug][equals]=${params.slug}`,
    { cache: 'no-store' }
  )

  const data = await res.json()
  const service = data.docs?.[0]

  if (!service) {
    return (
      <main style={{ padding: 20 }}>
        <h1>Service not found</h1>
        <a href="/services">← Back to services</a>
      </main>
    )
  }

  return (
    <main style={{ padding: 30 }}>
      <a href="/services">← Back to services</a>

     {service.featuredImage?.url && (
    <div
      style={{
      maxWidth: 800,
      marginBottom: 20,
      marginTop: 20,
     }}
   >
    <img
      src={service.featuredImage.url}
      alt={service.title}
      style={{
        width: '100%',
        height: 400,
        objectFit: 'cover',
        borderRadius: 16,
      }}
    />
   </div>
  )}

      <h1 style={{ fontSize: 35, marginTop: 0, marginBottom: 0, }}>{service.title}</h1>

      {service.excerpt && (
        <p style={{ opacity: 0.5, maxWidth: 800 }}>{service.excerpt}</p>
      )}

      {service.features?.length ? (
        <>
          <h3 style={{ marginTop: 30 }}>Features</h3>
          <ul style={{ opacity: 0.5, maxWidth: 800 }}>
            {service.features.map((f: any, i: number) => (
              <li key={i}>{f.feature}</li>
            ))}
          </ul>
        </>
      ) : null}

      {service.cta?.label && service.cta?.link ? (
        <p style={{ marginTop: 30 }}>
          <a href={service.cta.link}>{service.cta.label} →</a>
        </p>
      ) : null}
    </main>
  )
}
