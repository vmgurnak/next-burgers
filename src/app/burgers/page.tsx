import { Metadata } from 'next';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

import { getBurgers } from '../services/getBurgers';
import { getBurgersApi } from '../services/getBurgers';

import styles from './Burgers.module.css';

export const metadata: Metadata = {
  title: 'Burgers | Our Burgers',
  description: 'About Page',
};

export type Props = {
  burgers: [
    {
      name: string;
      image: string;
      desc: string;
      price: number;
      id: string;
    }
  ];
};

interface Burger {
  name: string;
  image: string;
  desc: string;
  price: number;
  id: string;
}

const page: FC = async () => {
  // // for json-server
  // const data = await getBurgers();

  // for api
  const data = await getBurgersApi();

  return (
    <div>
      <h1>Наши Бургеры</h1>
      {data.map((burger: Burger) => (
        <Link
          className={styles.burgerCard}
          href={`/burgers/${burger.id}`}
          key={burger.id}
        >
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={`${burger.image}`}
              alt={`${burger.name}`}
              width={400}
              height={300}
            />
          </div>
          <div>
            <h3>{burger.name}</h3>
            <p>{burger.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
