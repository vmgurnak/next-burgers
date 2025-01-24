import Image from 'next/image';
import { Metadata } from 'next';

import { getBurger } from '../../services/getBurgers';
import { getBurgerApi } from '../../services/getBurgers';

import styles from '../Burgers.module.css';

type burgerProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: burgerProps): Promise<Metadata> {
  const post = await getBurgerApi(id);
  return {
    title: `${post.name}`,
  };
}

const Burger = async ({ params: { id } }: burgerProps) => {
  // const burger = await getBurger(id);
  const burger = await getBurgerApi(id);

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
