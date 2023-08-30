import { useState, useEffect } from "react";
import { getShows } from "../api";
import { ShowList } from "../components/ShowList";

export function ShowsPage() {

  const [shows, setShows] = useState([]);

  useEffect(() => {
    getShows().then(data => {
      setShows(data);
    });
  }, []);

  return (
    <div className=" p-8 pt-[9rem]">
      <ShowList shows={shows} />
    </div>
  )
}
