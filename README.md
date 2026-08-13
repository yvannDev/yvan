# Portfolio React

Portfolio professionnel moderne créé avec React.js et CSS.

## 📋 Fonctionnalités

- **5 Pages principales** :
  - Accueil : Présentation avec héro section et projets en vedette
  - À propos : Présentation personnelle, compétences et expérience
  - Services : Description des services offerts avec processus de travail
  - Portfolio : Galerie de projets avec filtres (Web Design / Web Development)
  - Contact : Formulaire de contact et informations

- **Design moderne et élégant** :
  - Palette de couleurs or et noir sophistiquée
  - Animations fluides et micro-interactions
  - Design responsive pour tous les appareils
  - Typographie premium (Playfair Display + DM Sans)

- **Fonctionnalités techniques** :
  - Navigation avec React Router
  - Filtres interactifs dans le portfolio
  - Formulaire de contact avec validation
  - Liens externes vers les projets
  - Header fixe avec effet scroll
  - Footer avec liens sociaux

## 🚀 Installation

1. Extraire le fichier ZIP
2. Ouvrir le terminal dans le dossier du projet
3. Installer les dépendances :
```bash
npm install
```

## 💻 Lancement

Pour démarrer le serveur de développement :
```bash
npm start
```

Le site sera accessible sur : `http://localhost:3000`

## 📦 Build pour production

Pour créer une version optimisée pour la production :
```bash
npm run build
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `src/App.css` :
- Or principal : `#d4af37`
- Or secondaire : `#f4d03f`
- Fond sombre : `#0a0a0f`

### Polices
Les polices utilisées (Google Fonts) :
- **Playfair Display** : Titres et éléments serif
- **DM Sans** : Textes et éléments sans-serif

### Projets du Portfolio
Les projets sont définis dans `src/pages/Portfolio.jsx` :
- Modifier les tableaux `webDesignProjects` et `webDevProjects`
- Personnaliser les titres, descriptions, liens et tags

### Informations de Contact
Les informations sont dans `src/pages/Contact.jsx` et `src/components/Footer.jsx`

## 📁 Structure du projet

```
portfolio-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Apropos.jsx
│   │   ├── Apropos.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Portfolio.jsx
│   │   ├── Portfolio.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🌟 Fonctionnalités clés

- ✅ Design moderne et professionnel
- ✅ 100% responsive (mobile, tablette, desktop)
- ✅ Navigation fluide entre les pages
- ✅ Filtres de portfolio fonctionnels
- ✅ Animations et transitions élégantes
- ✅ Liens externes vers projets
- ✅ Formulaire de contact
- ✅ Code propre et organisé

## 📱 Compatibilité

- Chrome, Firefox, Safari, Edge (dernières versions)
- Mobile & Tablette (iOS, Android)
- Desktop (Windows, macOS, Linux)

## 🎯 À faire après installation

1. Remplacer les liens des projets par vos vrais liens
2. Personnaliser les informations de contact
3. Ajouter vos vraies images de projets
4. Mettre à jour les textes avec votre contenu
5. Configurer les liens des réseaux sociaux

---

Créé avec ❤️ en React.js
