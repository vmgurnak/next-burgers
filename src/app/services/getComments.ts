export const getComments = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/comments',
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch comments');
  }

  const data = await response.json();

  return data.slice(0, 10);
};
