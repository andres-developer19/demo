
import img from '../public/img/diseño.png'
import Hero from '../components/hero/Hero'

export default function page() {
    return (
      <>
        <Hero 
          label="Entrega"
          title="Entrega"
          description="
          Accesos al panel de control del sitio web
          Desarrollo completo del sitio web
          Recomendaciones de uso
          Capacitación
          Cuenta de correo electrónico profesional"
          buttonText="Ver Más"
          imageSrc={img}
          reverse={true}
        />
      </>
    )
  }