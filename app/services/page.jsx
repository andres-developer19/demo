import img from '../public/img/services.jpg'
import Hero from '../components/hero/Hero'
import { LikeButton } from '../LikeButton'
import { ListToDo } from '../todo/ListToDo'


export default function page() {
    return (
      <>
        <Hero 
          label="Servicios"
          title="¿Qué incluye el servicio?"
          description="
          Hosting y Dominio .com.ar
          Asesoría durante 30 días
          Maquetación y prototipado del sitio web
          Correo electrónico profesional (con
          dominio)
          Diseño responsive (adaptado a cualquier
          dispositivo)
          WhatsApp integrado
          Formulario de contacto
          Certificado SSL (sitio web seguro)
          Plataforma WordPress"
          buttonText="Ver Más"
          buttonColor="#dd32ff"
          imageSrc={img}
          reverse={false}
        />
        <ListToDo />
      </>
    )
  }
  
  