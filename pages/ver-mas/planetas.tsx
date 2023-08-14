import Navbar from "../../components/navbar";
import usePlanets from "../../hooks/usePlanets";
import styles from "../../styles/seeMore.module.css";

export default function VerMas() {
  const { planets, isLoading } = usePlanets();

  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.swEffectCotainer}>
          <h3 className={styles.title}>{"PLANETAS CERCANOS"}</h3>
          {isLoading.planets ? (
            <div className="spinner-border text-warning" role="status"></div>
          ) : (
            <div className={styles.swEffect}>
              <p>
                En el vecindario celeste de Conexa, varios planetas cercanos
                orbitan en la órbita de la curiosidad y la maravilla:
              </p>
              {planets.map((planet) => (
                <p>{planet.name}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
