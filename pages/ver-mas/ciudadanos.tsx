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
              <p>
                Han surgido a lo largo de los años ciudadanos cuyas hazañas y
                logros han iluminado las páginas de la historia:
              </p>
              {people.map((person) => (
                <p key={person.name}>{person.name}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
