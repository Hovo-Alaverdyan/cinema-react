import { useState, useEffect } from "react";
import { getShowById } from "../api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

export function ShowPage() {

  const [show, setShow] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getShowById(id).then(data => {
      setShow(data);
    });
  }, [id]);

  return (
    <div className=" p-8 pt-[9rem]">
      <BsFillArrowLeftSquareFill className=" text-red-600 text-[2rem] cursor-pointer"
        onClick={() => navigate(-1)} />
      <div className="flex justify-center items-center gap-10">
        <img src={show.image?.medium} alt={show.name} />
        <div>
          <div className=" p-2 bg-slate-900 text-white flex justify-between"><span className=" font-bold">Show Name:</span> <span>{show.name}</span></div>
          <div className=" p-2 text-white flex justify-between"><span className=" font-bold">Show Language:</span> <span>{show.language}</span></div>
          <div className=" p-2 bg-slate-900 text-white flex justify-between"><span className=" font-bold">Country:</span> <span>{show.network?.country?.name}</span></div>
          <div className=" p-2 text-white flex justify-between"><span className=" font-bold">Time:</span> <span>{show.schedule?.time}</span></div>
          <div className=" p-2 bg-slate-900 text-white"><span className=" font-bold">Genres:</span> <span>{show.genres?.join(', ')}</span></div>
        </div>
      </div>

      {
        <div className=" text-center p-8">
          <h2 className=" text-[2rem] text-white">About <span className=" text-red-600">Show</span></h2>
          <div className=" text-white pt-4">{show.summary?.slice(3, -4)}</div>
          <Link to={'/shows/' + show.id + '/cast/'} className=" bg-red-600 p-2 absolute mt-10 text-white rounded">See Cast</Link>
        </div>
      }

    </div>

  )
}
