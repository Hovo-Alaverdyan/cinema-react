import { CastItem } from './CastItem';

export function CastList({ cast }) {
  return (
    <div className=" grid md:grid-cols-4 sm:grid-cols-2 gap-4">
      {
        cast.map(el => <CastItem key={el.person.id} item={el} />)
      }
    </div>
  )
}
