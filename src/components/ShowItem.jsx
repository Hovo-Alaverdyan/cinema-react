import { Link } from "react-router-dom";

export function ShowItem({ item }) {
  return (
    <Link to={'/shows/' + item.id} className=' flex justify-center items-center flex-col border-2 p-2 hover:scale-110 duration-700 cursor-pointer'>
      <img src={item.image.medium} alt={item.name} />
      <div className=' text-white text-center font-bold'>{item.name}</div>
    </Link>
  )
}
