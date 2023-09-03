import styles from './Home.module.css'
import saving from '../../img/savings.svg'
import { FaGoogle } from 'react-icons/fa'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>RPD Online</span>
      </h1>
      <p>Comece a gerenciar seus pensamentos </p>
      <p>Faça Login </p>
      <div className={styles.social_list}>
        <FaGoogle />
      </div>

      <img src={saving} alt='Costs'></img>
    </section>
  );
}

export default Home;
