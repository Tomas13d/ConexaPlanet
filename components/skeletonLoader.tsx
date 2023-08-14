import React, { useEffect, useState } from 'react'
import styles from '../styles/skeletonLoader.module.css'

type SkeletonLoaderPropTYpes = {
  active?: boolean
  repeat?: number
  asCard?: boolean
  vRepeat?: number
}

export default function SkeletonLoader({
  active = true,
  repeat = 1,
  asCard = true,
  vRepeat = 3,
}: SkeletonLoaderPropTYpes) {
  const [isActive, setIsActive] = useState(active)
  useEffect(() => {
    setIsActive(active)
  }, [active])

  const getRandomWidth = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min)) + min

  return isActive ? (
    <ul className="o-vertical-spacing o-vertical-spacing--l">
      {[...Array(repeat)].map((e) => {
        return (
          <li
            className={styles.o_media}
            key={
              (Math.random() + 1).toString(36).substring(2) +
              new Date().getTime()
            }
          >
            {asCard ? (
              <div className={styles.o_media__figure}>
                <span
                  className={styles.skeletonBox}
                  style={{ width: 100, height: 80 }}
                />
              </div>
            ) : (
              <></>
            )}
            <div className={styles.o_media__body}>
              <div className={styles.o_vertical_spacing}>
                <h3 className={styles.blog_post__headline}>
                  <span
                    className={styles.skeletonBox}
                    style={{ width: '55%' }}
                  />
                </h3>
                <p>
                  {[...Array(vRepeat)].map((el) => {
                    return (
                      <span
                        key={
                          (Math.random() + 1).toString(36).substring(2) +
                          new Date().getTime()
                        }
                        className={styles.skeletonBox}
                        style={{ width: `${getRandomWidth(75, 100)}%` }}
                      />
                    )
                  })}
                </p>
                <div className={styles.blog_post__meta}>
                  <span className={styles.skeletonBox} style={{ width: 70 }} />
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  ) : (
    <></>
  )
}
