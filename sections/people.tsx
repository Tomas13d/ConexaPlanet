import usePeople from "../hooks/usePeople";
import SkeletonLoader from "../components/skeletonLoader";
import SimpleCard from "../components/simpleCard";
import styles from "../styles/generalModel.module.css";
import StarWarsButton from "../components/starwarsButton";

export default function People() {
  const { selectedPeople, isLoading } = usePeople();
 
  return isLoading?.selectedPeople ? (
    <div className="row">
     <div className="col-12">
        <SkeletonLoader repeat={1} vRepeat={1} />
        <SkeletonLoader repeat={1} vRepeat={2} />
      </div>
    </div>
  ) : (
    <section className={`row ${styles.peopleSection}`} id="ciudadanos">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <h3
          className="titles stickyHeader"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          CIUDADANOS ILUSTRES
        </h3>
        <StarWarsButton text="VER MAS" linkTo="/ver-mas/ciudadanos"/>
      </div>

      <div
        className={`col-sm-12 col-md-6 col-lg-6 ${styles.experiencesCardContainer}`}
      >
        {selectedPeople.map((person) => (
          <SimpleCard
            name={person.name}
            birth={person.birth_year}
            image={person?.image ? person.image : ""}
          />
        ))}
      </div>
    </section>
  );
}
