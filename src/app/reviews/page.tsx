import { Metadata } from 'next';
import { getComments } from '../services/getComments';

export const metadata: Metadata = {
  title: 'Burgers | Reviews',
  description: 'Reviews Page',
};

const ReviewsPage = async () => {
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
