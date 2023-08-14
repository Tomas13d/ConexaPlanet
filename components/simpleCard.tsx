import styles from "../styles/simpleCard.module.css";

export default function SimpleCard(props: { [key: string]: string }) {
    
  return (
    <div
      className={styles.simpleCardContainer}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay={props.delay}
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <img src={props.image} className={styles.swImage}></img>
      <div className={styles.infoContainer}>
        <a href={props.link} className={styles.swLink}>
          {props.name && <h4 className={styles.infoTitle}>{props.name}</h4>}
          {props.title && <h4 className={styles.infoTitle}>{props.title}</h4>}
        </a>
        {props.birth && <p className={styles.description}>{`Nacido el: ${props.birth}`}</p>}
        {props.model && <p className={styles.description}>{`Modelo: ${props.model}`}</p>}
        {props.diameter && <p className={styles.description}>{`Diametro: ${props.diameter}`}</p>}
        {props.director && <p className={styles.description}>{`Diametro: ${props.director}`}</p>}
       
      </div>
    </div>
  );
}
