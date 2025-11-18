
#  TP React - Maîtrise des Concepts Fondamentaux
  

</div>
**Une application React éducative explorant 3 angles fondamentaux**

[ Description](#-description) •
[ Fonctionnalités](#-fonctionnalités) •
[ Installation](#️-installation) •
[ Structure](#-structure) •
[ Concepts Appris](#-concepts-appris)

</div>

## Description

Ce TP React est une application éducative conçue pour maîtriser les concepts fondamentaux de React à travers trois angles d'apprentissage distincts. Chaque section explore des patterns essentiels avec des implémentations pratiques et visuellement attrayantes.


##  lien Drive :

https://drive.google.com/file/d/1KJ6zbCcdop6eIvTBS4VNvNmECoV8TmtQ/view?usp=sharing


##  Fonctionnalités

###  Angle 1 : Formulaires React
- **Formulaire Contrôlé** : Gestion d'état avec `useState`
- **Formulaire Non Contrôlé** : Accès DOM avec `useRef`
- **Validation en temps réel** avec messages d'erreur
- **Prévisualisation** des données saisies
- **Design responsive** avec animations

###  Angle 2 : Convertisseur de Température
- **Lifting State Up** : Partage d'état entre composants
- **Conversion automatique** Celsius/Fahrenheit/Kelvin
- **Interface interactive** avec résultats en temps réel
- **Historique** des conversions
- **Design moderne** avec indicateurs visuels

###  Angle 3 : Gestion de Session
- **Context API** pour l'état global
- **Système d'authentification** multi-utilisateurs
- **Profil utilisateur** avec statistiques
- **Gestion de thème** (light/dark)
- **Timer de session** en temps réel

##  Installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner le projet**
   ```bash
   git clone <votre-repo>
   cd tp-react
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer l'application**
   ```bash
   npm start
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

### Scripts disponibles
```bash
npm start      # Démarre le serveur de développement
npm run build  # Crée une version de production
npm test       # Lance les tests
```

##  Structure du Projet

```
src/
├── components/
│   ├── FormulaireControle.js      # Formulaire avec useState
│   ├── FormulaireNonControle.js   # Formulaire avec useRef
│   ├── TemperatureConvertor.js    # Convertisseur principal
│   ├── TemperatureInput.js        # Input température
│   └── Profil.js                  # Gestion de profil
├── context/
│   └── UtilisateurContext.js      # Context API
├── App.js                         # Composant principal
├── App.css                        # Styles globaux
└── index.js                       Point d'entrée
```

##  Concepts Appris

###  Concepts React Maîtrisés

| Concept | Implémentation | Fichier |
|---------|----------------|---------|
| **useState** | Gestion état formulaires | `FormulaireControle.js` |
| **useRef** | Accès direct DOM | `FormulaireNonControle.js` |
| **Lifting State Up** | Partage état parent-enfant | `TemperatureConvertor.js` |
| **Context API** | État global utilisateur | `UtilisateurContext.js` |
| **Composants Contrôlés** | Synchronisation état/UI | `TemperatureInput.js` |
| **Gestion Événements** | onSubmit, onChange | Tous les formulaires |
| **Props & Rendering** | Communication composants | Multiple |

###  Concepts CSS Modernes

- **CSS Variables** pour un design system cohérent
- **Flexbox & Grid** pour des layouts responsives
- **Animations & Transitions** pour l'UX
- **Gradients & Shadows** pour le design moderne
- **Media Queries** pour le responsive design

##  Composants Détaillés

### FormulaireControle.js
```javascript
// Gestion d'état avec useState
const [formData, setFormData] = useState({
  nom: '', email: '', telephone: '', ...
});

// Validation en temps réel
const validateForm = () => { ... };

// Soumission contrôlée
const handleSubmit = (e) => { ... };
```

###  FormulaireNonControle.js
```javascript
// Références DOM avec useRef
const nomRef = useRef();
const emailRef = useRef();

// Accès direct aux valeurs
const formData = {
  nom: nomRef.current.value,
  email: emailRef.current.value
};
```

###  TemperatureConvertor.js
```javascript
// Lifting state up
const [celsius, setCelsius] = useState('');
const [fahrenheit, setFahrenheit] = useState('');

// Partage avec enfants
<TemperatureInput
  temperature={celsius}
  onTemperatureChange={setCelsius}
/>
```

###  Profil.js avec Context
```javascript
// Utilisation du contexte
const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);

// Gestion session
const deconnexion = () => {
  setUtilisateur({ nom: '', connecte: false });
};
```

##  Design System

### Couleurs
```css
:root {
  --primary: #0066ff;
  --secondary: #ff6b35;
  --accent: #00d4aa;
  --success: #00c853;
  --error: #ff3d00;
}
```

### Typographie
- Police principale: Inter
- Poids: 400, 500, 600, 700, 800
- Hiérarchie claire avec contrastes

### Composants UI
- Cartes avec ombres et bordures
- Boutons avec états hover/active
- Formulaires avec validation visuelle
- Indicateurs de statut animés

##  Responsive Design

L'application s'adapte parfaitement à tous les écrans :

- **Desktop** : Layout multi-colonnes
- **Tablette** : Adaptation progressive
- **Mobile** : Design stack vertical

##  Déploiement

### Build de production
```bash
npm run build
```

### Déploiement sur Netlify
1. Construire le projet : `npm run build`
2. Drag & drop du dossier `build` sur Netlify
3. Configuration automatique

### Déploiement sur Vercel
```bash
npm install -g vercel
vercel
```

##  Points Techniques Importants

### Performance
- **Memoisation** des composants quand nécessaire
- **Optimisation** des re-rendus
- **Chargement lazy** possible pour les gros composants

### Accessibilité
- Labels appropriés pour les inputs
- Contrastes de couleurs suffisants
- Navigation au clavier supportée

### Maintenance
- Code modulaire et réutilisable
- Styles centralisés avec variables CSS
- Structure de projet claire

### Vidéo de Démonstration

https://github.com/user-attachments/assets/ead6bdb9-be0c-46de-90fb-9f0780789f38



https://github.com/user-attachments/assets/cf9df0fe-8b16-4321-bc55-9412082d8525



https://github.com/user-attachments/assets/ed88b612-f746-4660-9a3f-70663eceaf5b




https://github.com/user-attachments/assets/81dc31cc-c705-4221-9646-7e9771c9a6b9





https://github.com/user-attachments/assets/4fd716e9-41f2-43a7-a7da-557e7112bc13




https://github.com/user-attachments/assets/626bbedd-cbf9-49a2-8a59-837d3d6ba612



##  Auteur

**Aicha Barahou**  






