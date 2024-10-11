import { Link } from "react-router-dom";

interface BookCardProps {
  price: number;
  title: string;
  image: string;
  id: string;
}

const BookCard: React.FC<BookCardProps> = ({ price, title, image, id }) => {
  return (
    <div className="border p-4 rounded">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w=full h-32 object-cover mb-2"
        />
        <h2 className="font-bold ">{title}</h2>
        <p>${price}</p>
      </Link>
    </div>
  );
};

export default BookCard;
