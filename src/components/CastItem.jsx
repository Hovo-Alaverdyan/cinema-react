import { Link } from "react-router-dom";

export function CastItem({ item }) {
  return (

    <Link to={'https://en.wikipedia.org/wiki/' + item.person.name} target='_blank' className=' flex justify-center items-center flex-col cursor-pointer'>
      <img src={item.person?.image?.medium} alt={item.person.name} />
      <div className=' text-white text-center font-bold'>{item.person.name}</div>
    </Link>
  )
}
