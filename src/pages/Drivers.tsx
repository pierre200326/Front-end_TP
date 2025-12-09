import { useState, useEffect } from "react";
import driversData from "../data/drivers.json";
import { Link } from "react-router-dom";
import "./Drivers.css";

interface Driver {
    name: string;
    age: number;
    team: string;
    podiums: number;
    wins: number;
    gp: number;
    image: string;
    color: string;
}

export default function Drivers() {
    const [drivers, setDrivers] = useState<Driver[]>([]);

    useEffect(() => {
        setDrivers(driversData);
    }, []);

    return (
        <div className="drivers-page">
            {/* Bouton retour */}
            <div className="back-button-container">
                <Link to="/" className="btn-outline">
                    ← Retour à l'accueil
                </Link>
            </div>
            <h1>🏎️ Pilotes de F1</h1>
            <div className="drivers-list">
                {drivers.map((driver, index) => (
                    <div
                        key={index}
                        className="driver-card"
                        style={{ borderTop: `4px solid ${driver.color}` }}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}images/${driver.image}`}
                            alt={driver.name}
                            className="driver-image"
                        />
                        <h2>{driver.name}</h2>
                        <p>
                            <strong>Âge:</strong> {driver.age} ans
                        </p>
                        <p>
                            <strong>Écurie:</strong> {driver.team}
                        </p>
                        <p>
                            <strong>Podiums:</strong> {driver.podiums} | <strong>Victoires:</strong> {driver.wins}
                        </p>
                        <p> <strong>Nombre de Grands Prix :</strong> {driver.gp}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
