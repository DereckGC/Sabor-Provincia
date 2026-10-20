import { DonPepeData } from "./contribuidores.data";

export default function CardDonPepe() {
    return (
        <div className="contri-card card-pepe">
            <div className="card-top-line line-gold"></div>
            <h3 className="card-title-donpepe">{DonPepeData.title}</h3>
            <span className="card-label-donpepe">{DonPepeData.label}</span>
            <p className="card-desc">{DonPepeData.descripcion}</p>
            <a href={DonPepeData.urlRedSocial} className="card-link" target="blank">
                {DonPepeData.redSocial}
            </a>
        </div>
    );
}