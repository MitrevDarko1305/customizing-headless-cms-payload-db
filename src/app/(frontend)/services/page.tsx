import {
  Stethoscope,
  Sparkles,
  AlignCenter,
  Shield,
  HeartPulse,
  Smile,
} from "lucide-react"

const ICONS: Record<string, any> = {
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  alignCenter: AlignCenter,
  shield: Shield,
  heartPulse: HeartPulse,
  smile: Smile,
}




export default async function ServicesPage() {
  const res = await fetch('http://localhost:3000/api/services', {
    cache: 'no-store',
  })

  const data = await res.json()
  const services = data.docs ?? []

  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: 32, marginBottom: 24 }}>
        Dental Services
      </h1>

      {services.length === 0 ? (
        <p>No services found.</p>
      ) : (
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
         {services.map((service: any) => {
        const Icon = service.iconKey ? ICONS[service.iconKey] : null

        return (
        <div
         key={service.id}
        style={{
        border: '1px solid #2a2a2a',
        padding: 24,
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        minHeight: 260,
        background:  `
       #0e0d10d5
      `,
    }}
       
     >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {Icon && <Icon size={20} />}
        <h2 style={{ margin: 0 }}>{service.title}</h2>
      </div>

      {service.excerpt && (
        <p style={{ opacity: 0.5 }}>
          {service.excerpt}
        </p>
      )}

      <a href={`/services/${service.slug}`} style={{ opacity: 1, textDecoration: "none", marginTop: "auto" }}>
        View Service →
      </a>
    </div>
  )
})}

         
         
        </div>
      )}
    </main>
  )
}


{/* 
    {services.map((service: any) => (

            <div
              key={service.id}
              style={{
                border: '1px solid #444',
                padding: 20,
                borderRadius: 12,
              }}
            >
              <h2>{service.title}</h2>

              {service.excerpt && (
                <p style={{ opacity: 0.5 }}>
                  {service.excerpt}
                </p>
              )}

              <a href={`/services/${service.slug}`} style={{ opacity: 0.5 }}>
                View Service →
             </a>
            </div>
          ))} */}