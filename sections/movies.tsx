import SkeletonLoader from "../components/skeletonLoader";
import SimpleCard from "../components/simpleCard";
import useFilms from "../hooks/useFilms";
import styles from "../styles/generalModel.module.css";
import Link from "next/link";

export default function Movies() {
  const { selectedFilms, isLoading } = useFilms();

  return isLoading?.selectedFilms ? (
    <div className="row">
      <div className="col-12">
        <SkeletonLoader repeat={1} vRepeat={1} />
        <SkeletonLoader repeat={1} vRepeat={2} />
      </div>
    </div>
  ) : (
    <section className={`row ${styles.peopleSection}`} id="peliculas">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <h3
          className="titles stickyHeader"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          PELICULAS FILMADAS AQUI
        </h3>
      </div>

      <div
        className={`col-sm-12 col-md-6 col-lg-6 ${styles.experiencesCardContainer}`}
      >
        {selectedFilms.map((film) => (
          <Link
            key={film.title}
            className="noLink"
            href={`/peliculas/${
              film.title === "A New Hope" ? "1" : "6" // harcodeado por tiempo, ademas hay datos que no devuelven nada ej: /startships/8 (esta raro eso en la API)
            }`}
          >
            <SimpleCard
              title={film.title}
              director={film.director}
              image={film?.image ? film.image : ""}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
