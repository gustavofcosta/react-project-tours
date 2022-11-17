import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

export interface PropsTour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState<PropsTour[]>([]);

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();

      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main className="w-11/12 max-w-2xl mx-auto">
        <div>
          <h2 className="text-center my-14 font-semibold">
            Não possui mais viagens
          </h2>
          <button
            className="capitalize bg-blue-500 text-white text-base cursor-pointer pl-1 font-semibold block w-52 mt-4 mx-auto rounded-sm"
            onClick={() => fetchTours()}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
