import { useContext, useState, useEffect } from 'react';
import { UtilisateurContext } from '../context/UtilisateurContext';

function Profil() {
    const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);
    const [isAnimating, setIsAnimating] = useState(false);
    const [sessionTime, setSessionTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSessionTime(prev => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const deconnexion = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setUtilisateur({
                nom: '',
                connecte: false,
                role: '',
                avatar: '',
                theme: 'light'
            });
            setIsAnimating(false);
            setSessionTime(0);
        }, 600);
    };

    const connexionUtilisateur = (nom, role, avatar) => {
        setIsAnimating(true);
        setTimeout(() => {
            setUtilisateur({
                nom,
                connecte: true,
                role,
                avatar,
                theme: utilisateur.theme
            });
            setIsAnimating(false);
        }, 600);
    };

    const toggleTheme = () => {
        setUtilisateur(prev => ({
            ...prev,
            theme: prev.theme === 'light' ? 'dark' : 'light'
        }));
    };

    // Fonction pour obtenir la couleur du rôle
    const getRoleColor = (role) => {
        switch (role) {
            case 'admin': return '#ff6b35';
            case 'moderateur': return '#00d4aa';
            case 'utilisateur': return '#0066ff';
            case 'visiteur': return '#ffab00';
            default: return '#64748b';
        }
    };

    // Fonction pour obtenir la couleur du statut
    const getStatusColor = (connecte) => {
        return connecte ? '#00c853' : '#ff3d00';
    };

    if (utilisateur.connecte) {
        const roleColor = getRoleColor(utilisateur.role);
        const statusColor = getStatusColor(true);

        return (
            <div className={`profile-connected ${isAnimating ? 'animating' : ''}`}>
                <div className="profile-header">
                    <div className="avatar-section">
                        <div
                            className="user-avatar"
                            style={{
                                background: `linear-gradient(135deg, ${roleColor} 0%, ${roleColor}80 100%)`
                            }}
                        >
                            {utilisateur.avatar}
                        </div>
                        <div className="status-indicator" style={{ backgroundColor: statusColor }}></div>
                    </div>

                    <div className="user-info">
                        <h3 className="user-name">{utilisateur.nom}</h3>
                        <div className="user-role" style={{ color: roleColor }}>
                            {utilisateur.role.charAt(0).toUpperCase() + utilisateur.role.slice(1)}
                        </div>
                        <div className="session-time">
                            ⏱️ Session: {formatTime(sessionTime)}
                        </div>
                    </div>
                </div>

                <div className="profile-stats">
                    <div className="stat-card">
                        <div className="stat-icon">📊</div>
                        <div className="stat-info">
                            <div className="stat-value">24</div>
                            <div className="stat-label">Actions</div>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">⭐</div>
                        <div className="stat-info">
                            <div className="stat-value">98%</div>
                            <div className="stat-label">Score</div>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">🕒</div>
                        <div className="stat-info">
                            <div className="stat-value">{formatTime(sessionTime)}</div>
                            <div className="stat-label">En ligne</div>
                        </div>
                    </div>
                </div>

                <div className="profile-actions">
                    <button
                        className="profile-button secondary"
                        onClick={toggleTheme}
                    >
                        {utilisateur.theme === 'light' ? '🌙 Mode Sombre' : '☀️ Mode Clair'}
                    </button>

                    <button
                        className="profile-button danger"
                        onClick={deconnexion}
                    >
                        🚪 Se Déconnecter
                    </button>
                </div>

                <div className="profile-status">
                    <div className="status-badge" style={{ backgroundColor: statusColor }}>
                        <div className="pulse-dot"></div>
                        Connecté
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`profile-disconnected ${isAnimating ? 'animating' : ''}`}>
            <div className="disconnected-header">
                <div className="disconnected-avatar">🔒</div>
                <h3 className="disconnected-title">Session Non Connectée</h3>
                <p className="disconnected-subtitle">
                    Connectez-vous pour accéder à toutes les fonctionnalités
                </p>
            </div>

            <div className="login-options">
                <h4>👥 Choisissez un profil :</h4>

                <div className="user-cards">
                    <div
                        className="user-card user-card-1"
                        onClick={() => connexionUtilisateur('Alice', 'utilisateur', '👩‍💻')}
                    >
                        <div className="user-card-avatar">
                            👩‍💻
                        </div>
                        <div className="user-card-info">
                            <div className="user-card-name">Alice</div>
                            <div className="user-card-role">Utilisatrice</div>
                        </div>
                        <div className="user-card-badge">
                            Basic
                        </div>
                    </div>

                    <div
                        className="user-card user-card-2"
                        onClick={() => connexionUtilisateur('Bob', 'moderateur', '👨‍💼')}
                    >
                        <div className="user-card-avatar">
                            👨‍💼
                        </div>
                        <div className="user-card-info">
                            <div className="user-card-name">Bob</div>
                            <div className="user-card-role">Modérateur</div>
                        </div>
                        <div className="user-card-badge">
                            Pro
                        </div>
                    </div>

                    <div
                        className="user-card user-card-3"
                        onClick={() => connexionUtilisateur('Admin', 'admin', '👑')}
                    >
                        <div className="user-card-avatar">
                            👑
                        </div>
                        <div className="user-card-info">
                            <div className="user-card-name">Admin</div>
                            <div className="user-card-role">Administrateur</div>
                        </div>
                        <div className="user-card-badge">
                            Admin
                        </div>
                    </div>
                </div>
            </div>

            <div className="guest-options">
                <button
                    className="profile-button secondary"
                    onClick={() => connexionUtilisateur('Visiteur', 'visiteur', '👀')}
                >
                    👀 Continuer en tant que visiteur
                </button>
            </div>

            <div className="disconnected-footer">
                <div className="feature-list">
                    <div className="feature-item">✅ Accès complet aux formulaires</div>
                    <div className="feature-item">✅ Convertisseur de température</div>
                    <div className="feature-item">✅ Personnalisation du thème</div>
                    <div className="feature-item">✅ Historique de session</div>
                </div>
            </div>
        </div>
    );
}

export default Profil;