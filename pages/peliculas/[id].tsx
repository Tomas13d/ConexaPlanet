import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import { getSingleOne } from "../../services/getDataServices";
import { Film } from "../../types/global";
import styles from "../../styles/singleMovie.module.css";
import SkeletonLoader from "../../components/skeletonLoader";

export default function SingelMovie() {
  const router = useRouter();
  const { id } = router.query;
  const [singleMovie, setSingleMovie] = useState<Film>();
  const [isLoading, setIsLoading] = useState(true);

  const namesToFind = ["A New Hope", "Revenge of the Sith"];
  const getSinglePerson = async () => {
    try {
      if (id && typeof id === "string") {
        const singleFilm = await getSingleOne("films", id);
        singleFilm.image =
        singleFilm && namesToFind.includes(singleFilm.title)
            ? `/static/img/${singleFilm.title
                .toLowerCase()
                .split(" ")
                .join("_")}.jpg`
            : "/static/img/genericBackground.jpg";
            setSingleMovie(singleFilm);
        setIsLoading(false);
      }
    } catch (err) {
      console.log("Error bringing single film:", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSinglePerson();
  }, [id]);

  return (
    <div className={styles.mainContainer}>
      <Navbar />
      {isLoading ? (
        <div className={`row ${styles.skeletonCotainer}`}>
          <div className="col-12">
            <SkeletonLoader repeat={1} vRepeat={1} />
          </div>
          <div className="col-12">
            <SkeletonLoader repeat={1} vRepeat={1} />
          </div>
        </div>
      ) : (
        <>
        <div className={styles.backgroungImage}>
            <img className={styles.imgBackground} src={singleMovie?.image}/>
          </div>
        <div className={`row ${styles.contentContainer}`}>
          
          <div className={`col-sm-12 col-md-6 ${styles.informationCont}`}>
            <div className={styles.detailsContainer}>
                <h5>{singleMovie?.title}</h5>
                <p>{`Director: ${singleMovie?.director}`}</p>
                <p>{`Productor: ${singleMovie?.producer}`}</p>
                <p>{`Fecha de estreno: ${singleMovie?.release_date}`}</p>
                <p>{`Descripción: ${singleMovie?.opening_crawl}`}</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6"></div>
        </div>
        </>
      )}
    </div>
  );
}
