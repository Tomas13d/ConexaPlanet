import Navbar from "../../components/navbar";
import useShips from "../../hooks/useShips";
import styles from "../../styles/seeMore.module.css";

export default function VerMas() {
  const { starships, isLoading } = useShips();

  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.swEffectCotainer}>
          <h3 className={styles.title}>{"NUESTRAS NAVES"}</h3>
          {isLoading.starships ? (
            <div className="spinner-border text-warning" role="status"></div>
          ) : (
            <div className={styles.swEffect}>
              <p>
                Ingenieros y diseñadores han forjado naves
                espaciales que reflejan la amalgama única de tecnología:
              </p>
              {starships.map((starship) => (
                <p key={starship.name}>{starship.name}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
