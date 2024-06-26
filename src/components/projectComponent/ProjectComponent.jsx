import React from 'react';
import styles from './ProjectComponent.module.scss';

export const ProjectComponent = ({ title, about, tech, sourceCode, image }) => (
  <div className={styles.container}>
    <div>
      <a href={sourceCode} target="_blank" rel="noopener noreferrer">
        <img src={image} alt="project" className={styles.image}></img>
      </a>
    </div>
    <div>
      <a href={sourceCode} target="_blank" rel="noopener noreferrer">
        <h2 className={styles.title}>{title}</h2>
      </a>
    </div>

    <div className={styles.details}>
      <p className={styles.about}>{about}</p>
      <p>{tech}</p>
    </div>
  </div>
);
