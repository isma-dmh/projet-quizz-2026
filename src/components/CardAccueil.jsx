
export const CardAccueil = ({nom,source,legend}) => {
  return (
    <div className='card-accueil flex flex-col flex-wrap gap-2' >
        <img className={`img-mode ${nom}`} src={source} alt={`mode ${nom}`} />
        <p>{legend}</p>
    </div>
  )
}
