import SkeletonLoader from "../components/skeletonLoader";
import SimpleCard from "../components/simpleCard";
import styles from "../styles/generalModel.module.css";
import usePlanets from "../hooks/usePlanets";
import StarWarsButton from "../components/starwarsButton";

export default function Planets() {
  const { selectedPlanets, isLoading } = usePlanets();
 
  return isLoading?.selectedPlanets ? (
    <div className="row">
      <div className="col-12">
        <SkeletonLoader repeat={1} vRepeat={1} />
        <SkeletonLoader repeat={1} vRepeat={2} />
      </div>
    </div>
  ) : (
    <section className={`row ${styles.peopleSection}`} id="planetas">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <h3
          className="titles stickyHeader"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          PLANETAS CERCANOS
        </h3>
        <StarWarsButton text="VER MAS" linkTo="/planetas"/>
      </div>

      <div
        className={`col-sm-12 col-md-6 col-lg-6 ${styles.experiencesCardContainer}`}
      >
        {selectedPlanets.map((planet) => (
          <SimpleCard
            name={planet.name}
            diameter={planet.diameter}
            image={planet?.image ? planet.image : ""}
          />
        ))}
      </div>
    </section>
  );
}
