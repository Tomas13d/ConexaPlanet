import styles from "../styles/starWarsButton.module.css";

export default function StarWarsButton(props: { [key: string]: string }) {
  return (
    <button className={styles.swButton} data-aos="fade-up"
    data-aos-offset="200"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out">
      <a href={props.linkTo} className={styles.linkTo}>{props.text}</a>
    </button>
  );
}
