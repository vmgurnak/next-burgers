import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Burgers | About',
  description: 'About Page',
};

const AboutPage: FC = () => {
  return (
    <div>
      <h1>О нас</h1>
      <p>
        Жирные бургеры - это старые добрые бургеры по классической рецептуре,
        нужных размеров и за приемлемую цену.
      </p>
      <p>
        Готовят их на американский, мексиканский и итальянский манер, не жалея
        ни соуса, ни начинки.
      </p>
      <p>
        Для тех, кто изрядно проголодался, есть необъятный «Самый жирный бургер»
        с пятью говяжьими котлетами, кукурузными чипсами и сыром.
      </p>
    </div>
  );
};

export default AboutPage;
