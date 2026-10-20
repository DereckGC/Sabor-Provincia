import { ElGucheData } from "./contribuidores.data";

export default function CardElGuche() {
    return (
        <div className="contri-card card-guche">
            <div className="card-top-line line-green"></div>
            <h3 className="card-title-elguche">{ElGucheData.title}</h3>
            <span className="card-label-elguche">{ElGucheData.label}</span>
            <p className="card-desc">{ElGucheData.descripcion}</p>
            <a href={ElGucheData.urlRedSocial} className="card-link" target="blank">
                {ElGucheData.redSocial}
            </a>
        </div>
    );
}