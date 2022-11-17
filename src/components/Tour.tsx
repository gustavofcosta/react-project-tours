import { useState } from "react";
import { PropsTour } from "../App";

const Tour = ({
  id,
  image,
  info,
  price,
  name,
  removeTour,
}: PropsTour & { removeTour: (id: string) => void }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="bg-white rounded-md shadow-gray-400 my-6 shadow-md transition-all duration-300 hover:shadow-gray-500">
      <img
        className="w-full h-96 object-cover rounded-t-md"
        src={image}
        alt={name}
      />
      <footer className="py-6 px-8">
        <div className="flex justify-between items-center mb-6 font-semibold tracking-wide">
          <h4>{name}</h4>
          <h4 className="text-sm font-bold text-blue-500 bg-blue-100 px-2 py-1 rounded-sm">
            R${price}
          </h4>
        </div>
        <p className="mb-5 text-gray-700 text-sm">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="capitalize text-blue-500 text-base cursor-pointer pl-1 font-semibold"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "menos" : "ler mais"}
          </button>
        </p>
        <button
          className="capitalize text-red-500 text-lg cursor-pointer pl-1 block w-52 mt-4 mx-auto border border-red-500 rounded-md hover:bg-red-100 transition duration-300 ease-in-out"
          onClick={() => removeTour(id)}
        >
          Não estou interessado
        </button>
      </footer>
    </article>
  );
};

export default Tour;
