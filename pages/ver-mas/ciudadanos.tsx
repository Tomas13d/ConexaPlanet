import Navbar from "../../components/navbar";
import usePeople from "../../hooks/usePeople";
import styles from "../../styles/seeMore.module.css";

export default function VerMas() {
  const { people, isLoading } = usePeople();
  
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.swEffectCotainer}>
          <h3 className={styles.title}>{"CIUDADANOS ILUSTRES"}</h3>
          {isLoading.people ? (
            <div className="spinner-border text-warning" role="status"></div>
          ) : (
            <div className={styles.swEffect}>
              {people.map((person) => (
                <p>{person.name}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
