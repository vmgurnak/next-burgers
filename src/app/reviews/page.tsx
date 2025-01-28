import { Metadata } from 'next';
import { getComments } from '../services/getComments';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Burgers | Reviews',
  description: 'Reviews Page',
};

const ReviewsPage: FC = async () => {
  const comments = await getComments();

  return (
    <div>
      <h1>Отзывы клиентов</h1>
      <ul className="reviews">
        {comments.map((comment: { id: number; body: string }) => (
          <li key={comment.id}>{`${comment.body.slice(0, 90)}...`}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsPage;
