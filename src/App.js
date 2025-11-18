import { useState } from 'react';
import { UtilisateurContext } from './context/UtilisateurContext';
import FormulaireControle from './components/FormulaireControle';
import FormulaireNonControle from './components/FormulaireNonControle';
import TemperatureConvertor from './components/TemperatureConvertor';
import Profil from './components/Profil';
import './App.css';

function App() {
    const [utilisateur, setUtilisateur] = useState({
        nom: 'Aicha Barahou',
        connecte: true,
        role: 'utilisateur',
        avatar: '👩‍💻'
    });

    const [angleActif, setAngleActif] = useState('formulaires');

    const angles = {
        formulaires: {
            titre: "📝 Formulaires React",
            description: "Comprenez la différence entre contrôlé et non contrôlé",
            icon: "📝"
        },
        temperature: {
            titre: "🌡️ Convertisseur Intelligent",
            description: "Lifting state up en action",
            icon: "🌡️"
        },
        profil: {
            titre: "👤 Gestion de Session",
            description: "Contexte global avec Context API",
            icon: "👤"
        }
    };

    return (
        <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
            <div className="app">
                {/* Header avec Navigation */}
                <header className="app-header">
                    <div className="header-content">
                        <div className="header-brand">
                            <span className="logo">⚛️</span>
                            <h1>TP React - 3 Angles</h1>
                        </div>
                        <p className="header-subtitle">
                            Maîtrisez les concepts fondamentaux de React
                        </p>
                    </div>

                    <nav className="navigation">
                        <button
                            className={`nav-btn ${angleActif === 'formulaires' ? 'active' : ''}`}
                            onClick={() => setAngleActif('formulaires')}
                        >
                            <span className="nav-icon">📝</span>
                            <span className="nav-text">Formulaires</span>
                        </button>

                        <button
                            className={`nav-btn ${angleActif === 'temperature' ? 'active' : ''}`}
                            onClick={() => setAngleActif('temperature')}
                        >
                            <span className="nav-icon">🌡️</span>
                            <span className="nav-text">Température</span>
                        </button>

                        <button
                            className={`nav-btn ${angleActif === 'profil' ? 'active' : ''}`}
                            onClick={() => setAngleActif('profil')}
                        >
                            <span className="nav-icon">👤</span>
                            <span className="nav-text">Profil</span>
                        </button>
                    </nav>
                </header>

                <main className="app-main">
                    {/* Angle 1: Formulaires */}
                    {angleActif === 'formulaires' && (
                        <div className="angle-content">
                            <div className="angle-header">
                                <h2>{angles.formulaires.titre}</h2>
                                <p>{angles.formulaires.description}</p>
                            </div>

                            <div className="components-grid">
                                <div className="component-card">
                                    <div className="card-header">
                                        <div className="card-badge primary">Contrôlé</div>
                                        <div className="card-icon">🎮</div>
                                    </div>
                                    <div className="card-content">
                                        <h3>State Driven</h3>
                                        <p>Chaque frappe synchronisée avec useState</p>
                                        <FormulaireControle />
                                    </div>
                                </div>

                                <div className="component-card">
                                    <div className="card-header">
                                        <div className="card-badge secondary">Non Contrôlé</div>
                                        <div className="card-icon">🎯</div>
                                    </div>
                                    <div className="card-content">
                                        <h3>DOM Focused</h3>
                                        <p>Accès direct aux valeurs via useRef</p>
                                        <FormulaireNonControle />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Angle 2: Température */}
                    {angleActif === 'temperature' && (
                        <div className="angle-content">
                            <div className="angle-header">
                                <h2>{angles.temperature.titre}</h2>
                                <p>{angles.temperature.description}</p>
                            </div>

                            <div className="component-single">
                                <TemperatureConvertor />
                            </div>
                        </div>
                    )}

                    {/* Angle 3: Profil */}
                    {angleActif === 'profil' && (
                        <div className="angle-content">
                            <div className="angle-header">
                                <h2>{angles.profil.titre}</h2>
                                <p>{angles.profil.description}</p>
                            </div>

                            <div className="component-single">
                                <Profil />
                            </div>
                        </div>
                    )}
                </main>

                <footer className="app-footer">
                    <p>🚀 TP React Débutant - 3 Angles d'Apprentissage</p>
                </footer>
            </div>
        </UtilisateurContext.Provider>
    );
}

export default App;