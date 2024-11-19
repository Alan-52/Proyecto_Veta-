import { Navbar } from "../Components/Navbar";
import styles from '../assets/Styles/AboutUs.module.css'

export function AboutUs() {
  return (
    <>
      <Navbar />
      <div className = {styles.mainText}>
        <h1 className = {styles.title}>¿Quienes Somos?</h1>
        <div className = {styles.paragraph}>
            <p>
            En Veta + , somos un equipo apasionado por el cine que
            cree en el poder de las historias para inspirar, emocionar y conectar
            a las personas. Desde los dramas que nos hacen reflexionar hasta las
            comedias que nos arrancan una sonrisa, el cine nos transporta a otros
            mundos y nos permite ver la vida desde diferentes perspectivas. Por
            eso, hemos creado este espacio para que puedas sumergirte en un
            catálogo diverso de películas y series que hemos seleccionado
            especialmente para ti.
            <br /><br />
            Nuestra misión es ofrecer una plataforma
            accesible y de calidad para los amantes del cine, donde puedan
            explorar una colección de películas de distintos géneros, países y
            épocas. No importa si eres fan de los thrillers, las aventuras épicas,
            los documentales reveladores o las historias románticas; aquí
            encontrarás algo que se ajusta a tus gustos. Cada película viene
            acompañada de información detallada, reseñas de expertos y
            recomendaciones, para que puedas tomar decisiones informadas y
            disfrutar al máximo de cada experiencia cinematográfica.
            <br /><br />
            Además, en
            Veta +, nos preocupamos por mantenerte al día con los
            últimos estrenos y los favoritos del público. Estamos comprometidos a
            actualizar constantemente nuestro catálogo y a mejorar nuestra
            plataforma para hacer de tu visita algo intuitivo y agradable.
            Queremos que disfrutes de una experiencia de usuario completa, donde
            la búsqueda de una buena película se convierta en un momento
            placentero y emocionante.
            <br /><br />
            Agradecemos que seas parte de esta
            comunidad. Te invitamos a que te dejes llevar por la magia del cine,
            descubras nuevas historias y te conectes con otros amantes del cine
            que comparten tu misma pasión. Aquí, en Veta +, creemos
            que cada película es una aventura única, y estamos aquí para ayudarte
            a encontrar la próxima.
            <br /><br />
            ¡Gracias por visitarnos y ser parte de esta
            experiencia! Esperamos que disfrutes de cada minuto en Veta +.
            </p>

        </div>
        
      </div>
    </>
  );
}
