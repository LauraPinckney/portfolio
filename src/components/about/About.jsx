import styles from './About.module.scss';
import LauraPinckneyCV from '../../assets/LauraPinckneyCV.pdf';
import profile from '../../assets/profile.jpg';

export const About = () => {
  return (
    <div className={styles.container}>
      <div>
        <p>
          Whilst on maternity leave I decided to try some online coding courses
          to keep my brain working in an educational way. I really enjoyed the
          methodical nature of executing code and ultimately making it work.{' '}
        </p>
        <p>
          I completed an intensive 12 week bootcamp in Software Engineering and
          am looking forward to starting my new career.
        </p>
        <img src={profile} alt="profile" className={styles.profile}></img>
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
