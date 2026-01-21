// import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";

// const NewsCard = ({ news }) => {
//   const {
//     title,
//     author,
//     thumbnail_url,
//     details,
//     rating,
//     total_view,
//   } = news;

//   const publishDate = new Date(author.published_date).toLocaleDateString(
//     "en-US",
//     { year: "numeric", month: "long", day: "numeric" }
//   );

//   return (
//     <div className="card bg-base-100 shadow-md">
//       {/* Author Section */}
//       <div className="flex items-center justify-between p-4 bg-base-200">
//         <div className="flex items-center gap-3">
//           <img
//             src={author.img}
//             alt={author.name}
//             className="w-10 h-10 rounded-full"
//           />
//           <div>
//             <h4 className="font-semibold">{author.name}</h4>
//             <p className="text-sm text-gray-500">{publishDate}</p>
//           </div>
//         </div>

//         <div className="flex gap-3 text-gray-500">
//           <FaBookmark className="cursor-pointer hover:text-primary" />
//           <FaShareAlt className="cursor-pointer hover:text-primary" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-4 space-y-3">
//         <h2 className="text-lg font-bold leading-snug">{title}</h2>

//         <img
//           src={thumbnail_url}
//           alt={title}
//           className="w-full rounded-md"
//         />
//         <p>{details}</p>
//       </div>

//       {/* Footer */}
//       <div className="flex items-center justify-between p-4 border-t">
//         {/* Rating */}
//         <div className="flex items-center gap-1 text-orange-500">
//           {[...Array(rating.number)].map((_, i) => (
//             <FaStar key={i} />
//           ))}
//           <span className="ml-2 text-sm text-gray-600">
//             {rating.number}
//           </span>
//         </div>

//         {/* Views */}
//         <div className="flex items-center gap-2 text-gray-600">
//           <FaEye />
//           <span>{total_view}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;










import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    rating,
    total_view,
    details,
  } = news;

  const publishDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="card bg-base-100 shadow-md border">
      {/* Author */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold">{author.name}</h4>
            <p className="text-sm text-gray-500">{publishDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h2 className="text-lg font-bold leading-snug">{title}</h2>

        <img
          src={thumbnail_url}
          alt={title}
          className="w-full rounded-md"
        />

        {/* Short details */}
        <p className="text-gray-600 text-sm">
          {details.slice(0, 200)}...
        </p>

        {/* Read More (Route based) */}
        <Link
          to={`/news-details/${id}`}
          className="text-secondary font-semibold text-sm inline-block"
        >
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-sm text-gray-600">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
