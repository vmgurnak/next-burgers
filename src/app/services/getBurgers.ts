// export const getBurgers = async () => {
//   const response = await fetch('http://localhost:5000/burgers', {});

//   if (!response.ok) {
//     throw new Error('Failed to fetch burgers');
//   }

//   const data = await response.json();

//   return { props: { burgers: data } };
// };

export const getBurgers = async () => {
  const response = await fetch('http://localhost:5000/burgers');

  if (!response.ok) {
    throw new Error('Failed to fetch burgers');
  }

  const data = await response.json();

  return data;
};
