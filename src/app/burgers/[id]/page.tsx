import Image from 'next/image';
// import { Metadata } from 'next';

// import { getBurger } from '../../services/getBurgers';
import { getBurgerApi } from '../../services/getBurgers';

import styles from '../Burgers.module.css';
import { FC } from 'react';

type burgerProps = {
  params: Promise<{ id: string }>;
};

// export async function generateMetadata({
//   params: { id },
// }: burgerProps): Promise<Metadata> {
//   const post = await getBurgerApi(id);
//   return {
//     title: `${post.name}`,
//   };
// }

const Burger: FC<burgerProps> = async ({ params }) => {
  // // for json-server
  // const burger = await getBurger(id);

  // for api

  const id = (await params).id;

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
        />
      </div>
      <div>
        <p>{burger.desc}</p>
      </div>
    </div>
  );
};

export default Burger;
