import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div className="home">
            { }
            <header className="home-header">
                <h1 className="home-title">🏁 F1 Race Hub</h1>
                <p className="home-subtitle">
                    Suivez les pilotes, les écuries et testez vos réflexes avec notre jeu F1 !
                </p>

                <div className="home-actions">
                    <Link to="/drivers" className="btn-primary">
                        Liste des pilotes
                    </Link>
                    <Link to="/teams" className="btn-outline">
                        Liste des écuries
                    </Link>
                    <Link to="/reaction-game" className="btn-primary">
                        Jeu de réflexes
                    </Link>
                </div>
            </header>

            {/* Features / Info */}
            <section className="home-features">
                <div className="feature-card">
                    <h3 className="feature-title">🏎️ Pilotes</h3>
                    <p className="feature-desc">
                        Découvrez tous les pilotes du championnat de Formule 1.
                    </p>
                </div>

                <div className="feature-card">
                    <h3 className="feature-title">🏁 Écuries</h3>
                    <p className="feature-desc">
                        Explorez les équipes, leurs voitures et leurs performances.
                    </p>
                </div>

                <div className="feature-card">
                    <h3 className="feature-title">⏱️ Jeu de réflexes</h3>
                    <p className="feature-desc">
                        Testez vos temps de réaction et devenez le pilote le plus rapide !
                    </p>
                </div>
            </section>
        </div>
    );
}
