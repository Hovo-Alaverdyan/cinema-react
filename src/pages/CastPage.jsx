import { useState, useEffect } from "react";
import { getShowCast } from "../api";
import { useParams } from "react-router-dom";
import { CastList } from "../components/CastList";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export function CastPage() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getShowCast(id).then(data => {
      setCast(data);
    });
  }, [id]);

  return (
    <div className=" p-8 pt-[9rem]">
      <BsFillArrowLeftSquareFill className=" text-red-600 text-[2rem] cursor-pointer mb-10" onClick={() => navigate(-1)} />
      <h2 className=" flex justify-center items-center  text-red-600 font-bold text-3xl mb-5  bg-black/40 p-3 sm:px-24 z-10">Cast</h2>
      <CastList cast={cast} />
    </div>
  )
}
