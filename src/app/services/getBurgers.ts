// function for json-server

export const getBurgers = async () => {
  const response = await fetch('http://localhost:5000/burgers');

  if (!response.ok) {
    throw new Error('Failed to fetch burgers');
  }

  const data = await response.json();

  return data;
};

export const getBurger = async (id: string) => {
  const response = await fetch(`http://localhost:5000/burgers/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch burger');
  }
  const data = await response.json();
  return data;
};

// function for API

export const getBurgersApi = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/api/burgers`);

    if (!response.ok) {
      throw new Error('Failed to fetch burgers');
    }

    const data = await response.json();

    return data.burgers;
  } catch (error) {
    console.log(error);
  }
};

export const getBurgerApi = async (id: string) => {
  try {
    const response = await fetch(`${process.env.API_HOST}/api/burgers/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch burgers');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
