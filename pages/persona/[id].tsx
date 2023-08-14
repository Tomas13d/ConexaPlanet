import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import { getSingleOne } from "../../services/getDataServices";
import { Character } from "../../types/global";
import styles from "../../styles/singlePerson.module.css";
import Image from "next/image";
import SkeletonLoader from "../../components/skeletonLoader";

export default function VerMas() {
  const router = useRouter();
  const { id } = router.query;
  const [singlePerson, setSinglePerson] = useState<Character>();
  const [isLoading, setIsLoading] = useState(true);

  const namesToFind = ["Luke Skywalker", "Darth Vader", "Leia Organa"];
  const getSinglePerson = async () => {
    try {
      if (id && typeof id === "string") {
        const singlePerson = await getSingleOne("people", id);
        singlePerson.image =
          singlePerson && namesToFind.includes(singlePerson.name)
            ? `/static/img/${singlePerson.name
                .toLowerCase()
                .split(" ")
                .join("_")}.jpg`
            : "/static/img/notUser.png";
        setSinglePerson(singlePerson);
        setIsLoading(false);
      }
    } catch (err) {
      console.log("Error bringing single person:", err);
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
        <div className={`row ${styles.contentContainer}`}>
          <div className={`col-sm-12 col-md-6 ${styles.informationCont}`}>
            <div className={styles.messageAndClientCont}>
              <div className={`${styles.bubble} ${styles.bubbleLeft}`}>
                <h5>{singlePerson?.name}</h5>
                <p>{`Nacido el: ${singlePerson?.birth_year}`}</p>
                <p>{`Masa: ${singlePerson?.mass}`}</p>
                <p>{`Genero: ${singlePerson?.gender}`}</p>
              </div>
              <div
                className={`${styles.clientImgAndNameCont} ${styles.clientRight}`}
              >
                <Image
                  width="240"
                  height={"240"}
                  alt="Cliente"
                  className={styles.clientImage}
                  src="/static/img/babyYoda.png"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <img
              className={styles.personImage}
              src={singlePerson?.image}
            />
          </div>
        </div>
      )}
    </div>
  );
}
