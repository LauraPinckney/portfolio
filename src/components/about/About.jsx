import styles from './About.module.scss';
import LauraPinckneyCV from '../../assets/LauraPinckneyCV.pdf';

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spacing}>
        <h1>Laura Pinckney</h1>
        <h2>Software Engineer</h2>
      </div>
      <div>
        <h3>
          Whilst on maternity leave I decided to try some online coding courses
          to keep my brain working in an educational way. I really enjoyed the
          methodical nature of executing code and ultimately making it work.{' '}
        </h3>
        <h3 className={styles.blurb}>
          I completed an intensive 12 week bootcamp in Software Engineering and
          am looking forward to starting my new career.
        </h3>
        <a
          className={styles.resumeButton}
          rel="noreferrer"
          target="_blank"
          href={LauraPinckneyCV}
        >
          View Resume
        </a>
      </div>
    </div>
  );
};
