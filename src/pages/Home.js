import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isError) {
    return <h1 className="text-center">Sorry, there was an error</h1>;
  }

  if (isLoading) {
    return (
      <h1 className="text-center font-semibold text-2xl mt-4">Loading...</h1>
    );
  }

  return (
    <h1 className="text-center font-bold text-1xl mt-6">
      This is Home Page
      <p>{data?.fact}</p>
      <button
        className="bg-slate-300 border-2 border-black rounded-xl p-1 mt-10"
        onClick={refetch}
      >
        update Data
      </button>
    </h1>
  );
};
