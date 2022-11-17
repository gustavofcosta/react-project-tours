import { ReactNode } from "react";
import { PropsTour } from "../App";
import Tour from "./Tour";

interface PropsTorus {
  tours: PropsTour[];
  removeTour: (id: string) => void;
}

const Tours = ({ tours, removeTour }: PropsTorus) => {
  return (
    <section className="w-11/12 mx-auto max-w-2xl">
      <div className="font-semibold capitalize text-center  my-14">
        <h2>nossas viagens</h2>
        <div className="w-24 h-1 bg-blue-500 m-auto" />
      </div>
      <div>
        {tours.map((tour: PropsTour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
