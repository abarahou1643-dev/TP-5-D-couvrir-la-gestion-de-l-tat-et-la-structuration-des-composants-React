import { useState } from 'react';

function FormulaireControle() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        telephone: '',
        message: '',
        categorie: 'general',
        newsletter: false,
        priorite: 'normal'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nom.trim()) {
            newErrors.nom = 'Le nom est requis';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Format d\'email invalide';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));

        alert(`🎉 Formulaire Contrôlé Envoyé !\n\n📧 Email: ${formData.email}\n👤 Nom: ${formData.nom}\n📞 Téléphone: ${formData.telephone || 'Non renseigné'}\n📝 Catégorie: ${formData.categorie}\n🚨 Priorité: ${formData.priorite}`);

        setFormData({
            nom: '',
            email: '',
            telephone: '',
            message: '',
            categorie: 'general',
            newsletter: false,
            priorite: 'normal'
        });
        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-controlled">
            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Nom Complet *</label>
                    <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Votre nom complet"
                        className={`form-input ${errors.nom ? 'error' : ''}`}
                        disabled={isSubmitting}
                    />
                    {errors.nom && <span className="error-message">{errors.nom}</span>}
                </div>

                <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        disabled={isSubmitting}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Téléphone</label>
                    <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="+33 1 23 45 67 89"
                        className="form-input"
                        disabled={isSubmitting}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Catégorie</label>
                    <select
                        name="categorie"
                        value={formData.categorie}
                        onChange={handleChange}
                        className="form-input"
                        disabled={isSubmitting}
                    >
                        <option value="general">Général</option>
                        <option value="technique">Support Technique</option>
                        <option value="commercial">Question Commerciale</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Niveau de Priorité</label>
                <div className="priority-buttons">
                    <button
                        type="button"
                        className={`priority-btn ${formData.priorite === 'basse' ? 'active' : ''} priority-basse`}
                        onClick={() => handleChange({ target: { name: 'priorite', value: 'basse' } })}
                        disabled={isSubmitting}
                    >
                        <span className="priority-dot"></span>
                        Basse
                    </button>

                    <button
                        type="button"
                        className={`priority-btn ${formData.priorite === 'normal' ? 'active' : ''} priority-normal`}
                        onClick={() => handleChange({ target: { name: 'priorite', value: 'normal' } })}
                        disabled={isSubmitting}
                    >
                        <span className="priority-dot"></span>
                        Normal
                    </button>

                    <button
                        type="button"
                        className={`priority-btn ${formData.priorite === 'haute' ? 'active' : ''} priority-haute`}
                        onClick={() => handleChange({ target: { name: 'priorite', value: 'haute' } })}
                        disabled={isSubmitting}
                    >
                        <span className="priority-dot"></span>
                        Haute
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Votre Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre demande..."
                    className="form-input"
                    rows="4"
                    disabled={isSubmitting}
                />
            </div>

            <div className="form-options">
                <div className="checkbox-group">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="newsletter"
                            checked={formData.newsletter}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        />
                        <span className="checkmark"></span>
                        S'abonner à la newsletter
                    </label>
                </div>
            </div>

            <button
                type="submit"
                className={`form-button ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <div className="button-spinner"></div>
                        Envoi en cours...
                    </>
                ) : (
                    '🚀 Envoyer le Formulaire Contrôlé'
                )}
            </button>

            <div className="form-info">
                <p>💡 <strong>useState</strong> : Chaque frappe met à jour le state React</p>
            </div>
        </form>
    );
}

export default FormulaireControle;