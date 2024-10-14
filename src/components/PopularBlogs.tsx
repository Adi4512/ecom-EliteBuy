import { MessageCircle, ThumbsUp } from "lucide-react";

const PopularBlogs = () => {
  const blogs = [
    {
      title: "My First Buy on EliteBuy",
      author: "Adam Toure",
      likes: 4489,
      comments: 431,
    },
    {
      title: "How to use Apple C-type for data transfer",
      author: "MrWhoseTheBoss",
      likes: 1625,
      comments: 231,
    },
    {
      title: "How to add your password to your account",
      author: "Jason Bourne",
      likes: 2512,
      comments: 121,
    },
    {
      title: "Basic Utilities for Home",
      author: "Alice Santo",
      likes: 49,
      comments: 12,
    },
    {
      title: "Affiliate With EliteBuy",
      author: "Ali Solanki",
      likes: 9,
      comments: 0,
    },
  ];

  return (
    <div className="bg-white p-5 w-[23rem] mt-4 border ml-5 rounded">
      <h2 className="text-xl font-bold mb-5">PopularBlogs</h2>

      <ul className="space-y-2">
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <span className="font-bold mb-2 cursor-pointer">
                {blog.title}
              </span>
            </div>
            <span className="text-gray-600">
              Publish by{" "}
              <span className="text-cyan-500 underline cursor-pointer">
                {blog.author}
              </span>
            </span>
            <div className="flex items-center mt-2">
              <MessageCircle size={16} />
              <span className="text-gray-500 mr-5 ml-1">{blog.comments}</span>

              <ThumbsUp size={16} />
              <span className="ml-2 mr-2 text-gray-500">{blog.likes}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
