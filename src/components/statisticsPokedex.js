export default function StatisticsPokedex(props) {
  const { objPokemon } = props;

  const typesPokemon = objPokemon.types;

  return (
    <div className="d-flex flex-column bd-highlight mb-3">
      {objPokemon ? (
        <>
          <div className="p-2 bd-highlight">
            <div className="d-flex justify-content-evenly">
              {objPokemon.types.map((ct, index) => (

                <p key={index}>{objPokemon.types[index].type.name}</p>

              ))}
            </div>
          </div>
          <div className="p-2 bd-highlight">
            <div className="d-flex justify-content-evenly">
              <p>HT</p>
              <p>{objPokemon.height}</p>
            </div>
            <div className="d-flex justify-content-evenly">
              <p>WT</p>
              <p>{objPokemon.weight}</p>
            </div>
          </div>
        </>
      ) : (
        false
      )}
    </div>
  );
}
