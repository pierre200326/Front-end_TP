import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import teamsData from "../data/teams.json";
import "./Teams.css";

interface Team {
    name: string;
    country: string;
    description: string;
    Titres: number;
    image: string;
    color: string;
}

export default function Teams() {
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        setTeams(teamsData);
    }, []);

    return (
        <div className="teams-page">
            {/* Bouton retour */}
            <div className="back-button-container">
                <Link to="/" className="btn-outline">
                    ← Retour à l'accueil
                </Link>
            </div>

            <h1>🏎️ Écuries de F1</h1>

            <div className="teams-list">
                {teams.map((team, index) => (
                    <div
                        key={index}
                        className="team-card"
                        style={{ "--team-color": team.color } as React.CSSProperties}
                    >
                        <div className="team-card-content">
                            <img
                                src={`/images/${team.image}`}
                                alt={team.name}
                                className="team-image"
                            />
                            <h2>{team.name}</h2>
                            <p>
                                <strong>Pays :</strong> {team.country}
                            </p>
                            <p>Titres mondiaux : {team.Titres}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
