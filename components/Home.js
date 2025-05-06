import styles from '../styles/Home.module.css';
import Header from './Header';
import Project from './Project';
import Background from './Background';
import Login from './Login';
import Footer from './Footer';


function Home() {
  const text = "Every winner is just a loser who tried one more time";
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1"];

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <h1 className={styles.textcontainer}>
          {text.split('').map((letter, index) => (
            <span
              key={index}
              style={{
                '--color': colors[index % colors.length],
                '--delay': `${index * 0.1}s`
              }}
              className={styles.letter}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
       
        <Background />
        <div id="project">
          <Project />
        </div>
        {/* <Login /> */}
       
      </div>
      <Footer/>
    </div>
  );
}

export default Home;

