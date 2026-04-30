
export const Card = ({nom,source,legend}) => {
  return (
    <div className='card flex flex-col flex-wrap gap-2' >
        <img className={`img-mode ${nom}`} src={source} alt={`mode ${nom}`} />
        <p className={nom} >{legend}</p>
    </div>
  )
}
