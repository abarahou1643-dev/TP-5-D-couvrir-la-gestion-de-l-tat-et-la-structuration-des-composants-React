import { useRef, useState } from 'react';

function FormulaireNonControle() {
    const nomRef = useRef();
    const emailRef = useRef();
    const telephoneRef = useRef();
    const categorieRef = useRef();
    const messageRef = useRef();
    const newsletterRef = useRef();
    const prioriteRef = useRef();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = {
            nom: nomRef.current.value,
            email: emailRef.current.value,
            telephone: telephoneRef.current.value,
            categorie: categorieRef.current.value,
            message: messageRef.current.value,
            newsletter: newsletterRef.current.checked,
            priorite: prioriteRef.current.value
        };

        await new Promise(resolve => setTimeout(resolve, 1500));

        alert(`📋 Formulaire Non Contrôlé Envoyé !\n\n📧 Email: ${formData.email}\n👤 Nom: ${formData.nom}\n📞 Téléphone: ${formData.telephone || 'Non renseigné'}\n📝 Catégorie: ${formData.categorie}`);

        nomRef.current.value = '';
        emailRef.current.value = '';
        telephoneRef.current.value = '';
        categorieRef.current.value = 'general';
        messageRef.current.value = '';
        newsletterRef.current.checked = false;
        prioriteRef.current.value = 'normal';

        setIsSubmitting(false);
        setShowPreview(false);
    };

    const handlePreview = () => {
        setShowPreview(!showPreview);
    };

    return (
        <form onSubmit={handleSubmit} className="form-uncontrolled">
            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Nom Complet</label>
                    <input
                        type="text"
                        ref={nomRef}
                        placeholder="Votre nom complet"
                        className="form-input"
                        disabled={isSubmitting}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        ref={emailRef}
                        placeholder="votre@email.com"
                        className="form-input"
                        disabled={isSubmitting}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Téléphone</label>
                    <input
                        type="tel"
                        ref={telephoneRef}
                        placeholder="+33 1 23 45 67 89"
                        className="form-input"
                        disabled={isSubmitting}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Catégorie</label>
                    <select
                        ref={categorieRef}
                        className="form-input"
                        disabled={isSubmitting}
                        defaultValue="general"
                    >
                        <option value="general">Général</option>
                        <option value="technique">Support Technique</option>
                        <option value="commercial">Question Commerciale</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Niveau de Priorité</label>
                <select
                    ref={prioriteRef}
                    className="form-input"
                    disabled={isSubmitting}
                    defaultValue="normal"
                >
                    <option value="basse">Basse</option>
                    <option value="normal">Normal</option>
                    <option value="haute">Haute</option>
                </select>
            </div>

            <div className="form-group">
                <label className="form-label">Votre Message</label>
                <textarea
                    ref={messageRef}
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
                            ref={newsletterRef}
                            disabled={isSubmitting}
                        />
                        <span className="checkmark"></span>
                        S'abonner à la newsletter
                    </label>
                </div>
            </div>

            <div className="form-actions">
                <button
                    type="button"
                    className="preview-button"
                    onClick={handlePreview}
                    disabled={isSubmitting}
                >
                    {showPreview ? '👁️ Masquer l\'aperçu' : '👁️ Aperçu des données'}
                </button>

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
                        '📤 Envoyer (Non Contrôlé)'
                    )}
                </button>
            </div>

            {showPreview && (
                <div className="preview-panel">
                    <h4>👁️ Aperçu des Données useRef</h4>
                    <div className="preview-content">
                        <p><strong>Nom:</strong> {nomRef.current?.value || 'Non renseigné'}</p>
                        <p><strong>Email:</strong> {emailRef.current?.value || 'Non renseigné'}</p>
                        <p><strong>Téléphone:</strong> {telephoneRef.current?.value || 'Non renseigné'}</p>
                        <p><strong>Catégorie:</strong> {categorieRef.current?.value || 'general'}</p>
                    </div>
                </div>
            )}

            <div className="form-info">
                <p>🎯 <strong>useRef</strong> : Accès direct aux valeurs DOM au moment de la soumission</p>
            </div>
        </form>
    );
}

export default FormulaireNonControle;