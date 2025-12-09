import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./ReactionGame.css";

type GameState = "idle" | "lights" | "go" | "result";

export default function ReactionLightsGame() {
    const [state, setState] = useState<GameState>("idle");
    const [lightsOn, setLightsOn] = useState(0);
    const [startTime, setStartTime] = useState<number>(0);
    const [reaction, setReaction] = useState<number | null>(null);
    const [tooEarly, setTooEarly] = useState(false);
    const timeouts = useRef<number[]>([]);

    const clearTimers = () => {
        timeouts.current.forEach((t) => clearTimeout(t));
        timeouts.current = [];
    };

    const startGame = () => {
        clearTimers();
        setState("lights");
        setLightsOn(0);
        setReaction(null);
        setTooEarly(false);

        let totalDelay = 0;

        // Allumage SEQUENTIEL avec timing aléatoire
        for (let i = 1; i <= 5; i++) {
            const randomGap = 200 + Math.random() * 1000; // 0.5s → 1.3s
            totalDelay += randomGap;

            const timer = window.setTimeout(() => {
                setLightsOn(i);
            }, totalDelay);

            timeouts.current.push(timer);
        }

        // Extinction après délai aléatoire
        const offDelay = totalDelay + (500 + Math.random() * 2000);

        const goTimer = window.setTimeout(() => {
            setLightsOn(0);
            setState("go");
            setStartTime(Date.now());
        }, offDelay);

        timeouts.current.push(goTimer);
    };

    const handleClickZone = () => {
        if (state === "lights") {
            setTooEarly(true);
            setState("result");
        }

        if (state === "go") {
            const time = Date.now() - startTime;
            setReaction(time);
            setState("result");
        }
    };

    return (
        <div className="lights-page">
            <div className="back-button-container">
                <Link to="/" className="btn-back">
                    ← Retour à l'accueil
                </Link>
            </div>

            <h1>🚥 Départ F1 | HARDCORE Version</h1>

            <div className="lights-container">
                {[1, 2, 3, 4, 5].map((n) => (
                    <div
                        key={n}
                        className={`light ${lightsOn >= n ? "on" : ""}`}
                    ></div>
                ))}
            </div>

            <div
                className={`click-zone ${state}`}
                onClick={handleClickZone}
            >
                {state === "idle" && "Zone de départ"}
                {state === "lights" && "⚠️ Attends le départ..."}
                {state === "go" && "🟢 CLIQUE MAINTENANT"}
                {state === "result" &&
                    (tooEarly
                        ? "❌ Faux départ"
                        : `✅ Réaction : ${reaction} ms`)}
            </div>

            {(state === "idle" || state === "result") && (
                <button className="start-btn" onClick={startGame}>
                    Jouer
                </button>
            )}
        </div>
    );
}
