import SkeletonLoader from "../components/skeletonLoader";
import SimpleCard from "../components/simpleCard";
import styles from "../styles/generalModel.module.css";
import useShips from "../hooks/useShips";
import StarWarsButton from "../components/starwarsButton";

export default function Ships() {
  const { selectedStarships, isLoading } = useShips();
 
  return isLoading?.selectedStarships ? (
    <div className="row">
      <div className="col-12">
        <SkeletonLoader repeat={1} vRepeat={1} />
        <SkeletonLoader repeat={1} vRepeat={2} />
      </div>
    </div>
  ) : (
    <section className={`row ${styles.peopleSection}`} id="naves">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <h3
          className="titles stickyHeader"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          NUESTRAS NAVES
        </h3>
        <StarWarsButton text="VER MAS" linkTo="/ver-mas/naves"/>
      </div>

      <div
        className={`col-sm-12 col-md-6 col-lg-6 ${styles.experiencesCardContainer}`}
      >
        {selectedStarships.map((ship) => (
          <SimpleCard
            name={ship.name}
            model={ship.model}
            image={ship?.image ? ship.image : ""}
          />
        ))}
      </div>
    </section>
  );
}
