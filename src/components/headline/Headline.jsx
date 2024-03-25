import styles from './Headline.module.scss';
import hero from '../../assets/heroImage.png';

export const Headline = () => {
  return (
    <div>
      <img
        src={hero}
        alt="Laura Pinckney, Software Engineer"
        className={styles.hero}
      ></img>
    </div>
  );
};
