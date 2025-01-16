import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} font-effect-fire-animation`}>
        Самый Жирный Бургер!
      </h1>
      <div className={styles.mainImage}>
        <Image
          src="/images/fatburger.png"
          alt="fat burgerr"
          width={400}
          height={300}
        />
      </div>
      <p className={styles.text}>
        Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное
        мясо. О других составляющих начинки можно поспорить, ведь это дело вкуса
      </p>
      <p className={styles.text}>
        Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество
        обслуживания, правильная атмосфера заведения.
      </p>
      <Link className={styles.btn} href="/burgers">
        Все бургеры
      </Link>
    </div>
  );
}
