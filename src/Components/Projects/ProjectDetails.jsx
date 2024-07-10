import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Skill } from "../AboutMe/Skill";
import styles from "./projectDetails.module.css";

const ProjectDetails = ({ data }) => {
  return (
    <div className={styles.projectDetails}>
      {/* <img id="projectImg" src={data.url} alt="" /> */}
      <Carousel>
        <div>
          <img
            id="projectImg"
            src={data.url[0]}
            alt=""
            className={styles.imageCss}
          />
        </div>
        <div>
          <img
            id="projectImg"
            src={data.url[1]}
            alt=""
            className={styles.imageCss}
          />
        </div>
        <div>
          <img
            id="projectImg"
            src={data.url[2]}
            alt=""
            className={styles.imageCss}
          />
        </div>
      </Carousel>
      <div className={styles.details}>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
        <div className={styles.textDetails}>
          <div>
            <h2>Features</h2>
            {data.features.map((el) => (
              <p>{el}</p>
            ))}
          </div>
          <div>
            <h2>Areas Of Responsibility</h2>
            {data.responsibility.map((el) => (
              <p>{el}</p>
            ))}
          </div>
        </div>

        <div>
          <h2>Tech Stack</h2>
          <div className={styles.teckstack}>
            {data.skills.map((el) => (
              <Skill title={el.title} url={el.url}></Skill>
            ))}
          </div>

          {data.demo ? (
            <div>
              <a target="_blank" rel="noreferrer" href={data.code}>
                <button className={styles.demoButton}>CODE</button>
              </a>
              <a target="_blank" rel="noreferrer" href={data.demo}>
                <button className={styles.demoButton}>DEMO</button>
              </a>
            </div>
          ) : (
            <div>
              <a target="_blank" rel="noreferrer" href={data.code}>
                <button className={styles.demoButton}>CODE</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
