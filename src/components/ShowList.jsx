import { ShowItem } from "./ShowItem";

export function ShowList({ shows }) {
  return (
    <div className=" grid md:grid-cols-6 sm:grid-cols-3 gap-4">
      {
        shows.map(el => <ShowItem key={el.id} item={el} />)
      }
    </div>
  )
}

