import PresentationPokedex from "../components/presentationPokedex";
import StatisticsPokedex from "../components/statisticsPokedex";
export default function PokeDex() {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-column bd-highlight mb-3">
        <div className="p-2 bd-highlight">
          {/* aqui abajo */}
          <div className="d-flex bd-highlight">
            <div className="p-2 flex-fill bd-highlight d-flex align-items-center justify-content-center">
              Imagen
            </div>
            <div className="p-2 flex-fill bd-highlight">
              <div className="d-flex flex-column bd-highlight mb-3">
                <div className="p-2 bd-highlight">
                  <PresentationPokedex />
                </div>
                <div className="p-2 bd-highlight">
                  <StatisticsPokedex />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 bd-highlight">
          <p>Descripcion</p>
        </div>
      </div>
    </div>
  );
}
