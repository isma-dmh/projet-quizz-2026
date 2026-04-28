
export const CardAccueil = ({source,legend}) => {
  return (
    <div className='card-accueil flex flex-col flex-wrap gap-2' >
        <img className={`img-mode ${source}`} src={`./src/assets/images/${source}.png`} alt={`mode ${source}`} />
        <p>{legend}</p>
    </div>
  )
}
