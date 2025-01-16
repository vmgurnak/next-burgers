import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Burgers | Our Burgers',
  description: 'About Page',
};

const page = () => {
  return <h1>Наши Бургеры</h1>;
};

export default page;
