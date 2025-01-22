import Image from 'next/image';

import styles from '../Burgers.module.css';

async function gerBurger(id: string) {
  const response = await fetch(`http://localhost:5000/burgers/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch burger');
  }
  const data = await response.json();
  return data;
}

type burgerProps = {
  params: {
    id: string;
  };
};

const Burger = async ({ params: { id } }: burgerProps) => {
  const burger = await gerBurger(id);

  return (
    <div className={styles.singleBurger}>
      <h1>{burger.name}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={`${burger.image}`}
          alt={`${burger.name}`}
          width={400}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div>
        <p>{burger.desc}</p>
      </div>
    </div>
  );
};

export default Burger;
