import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchRandomFacts = async () => {
  try {
    // const res = await fetch("https://uselessfacts.jsph.pl/random.json", {
    //   headers: { Accept: "application/json" },
    // });
    const res = await axios.get("https://uselessfacts.jsph.pl/random.json", {
      headers: { Accept: "application/json" },
    });
    // const data = await res.json();
    return res.data.text;
  } catch (err) {
    return err;
  }
};

export default function CatFacts() {
  const { data, isLoading, isError, error, status, refetch, isFetching } =
    useQuery({
      queryKey: ["randomFacts"],
      queryFn: fetchRandomFacts,
      enabled: false, // do not fetch on mount
    });

  if (isLoading) {
    return <h2>Random fact Loading...</h2>;
  }

  if (isError) {
    return <h2>Error : {error.message}</h2>;
  }

  return (
    <>
      <h2>Random Facts</h2>
      <p>{status}</p>
      {data && <h3>{data}</h3>}
      <button
        style={{ cursor: "pointer" }}
        onClick={() => refetch()}
        disabled={isFetching}
      >
        {isFetching ? "Fetching the fact..." : "Get a fact"}
      </button>
    </>
  );
}
