import styles from "../styles/welcome.module.css";

export default function Welcome() {
  return (
    <section className={styles.welcomeSection}>
   <div className={styles.backgroundContainer}>
        <div className={styles.shape}></div>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
      </div>
      <h1 className={styles.traveler}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="2000"
      data-aos-delay="100"
      data-aos-easing="ease-in-out">
        <span>BIENVENIDO VIAJERO</span>
      </h1>
      <p className={styles.welcome}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="2000"
          data-aos-delay="100"
          data-aos-easing="ease-in-out">Un enigmático mundo en el sistema estelar Lyrioth, presenta cristalinas formaciones que brillan bajo las tres lunas.</p>
    </section>
  );
}
