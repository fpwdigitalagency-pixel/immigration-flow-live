# CLAUDE.md — Immigration Flow Live | Généré via DESIGN_ONBOARDING.md

---

## Vue d'ensemble du projet

Landing page one-page pour un événement Zoom live prévu le **vendredi 4 avril 2026 à 18h00 (heure Kinshasa / UTC+1)**. L'objectif unique de cette page est de convertir les visiteurs en inscrits qualifiés via un formulaire court. La cible est le propriétaire d'une agence de voyage ou d'immigration en Afrique francophone (DRC, Côte d'Ivoire, Sénégal, Cameroun) qui tourne depuis 1 à 3 ans et cherche à rendre son acquisition client prévisible. La page démontre la preuve avant de demander quoi que ce soit : 15 rendez-vous qualifiés générés en 7 jours pour une agence réelle, avec 10% moins de trafic qu'avant et 100% des rendez-vous honorés.

---

## Direction esthétique — "Sovereign Horizon"

Référence complète : `@DESIGN.md`
Référence visuelle : https://research.trycook.ai/

### Principes actifs
- **Typographie comme architecture** : Instrument Serif italic en display massif (clamp 3.5rem → 8.5rem), Inter pour le corps. Le titre H1 est l'élément dominant de chaque section.
- **Asymétrie calculée** : marges inégales, décalages intentionnels. Jamais centré-générique.
- **Atmosphère de profondeur** : fond `#0f141a`, surface `#1c2027`, cards `#31353c`. Les couches se lisent comme des plans physiques.
- **Glassmorphisme signature** : nav flottante avec `backdrop-filter: blur(24px)` + `rgba(28,32,39,0.55)`.
- **Accents sky blue uniquement** : `#a6daff` (primary-container), `#e3f2ff` (primary), `#99cdf1` (primary-fixed-dim). Pas de vert, pas d'orange.

### Palette complète
| Token | Hex |
|---|---|
| `--surface-dim` | `#0f141a` |
| `--surface-container-low` | `#181c23` |
| `--surface-container` | `#1c2027` |
| `--surface-container-high` | `#272b32` |
| `--surface-container-highest` | `#31353c` |
| `--primary` | `#e3f2ff` |
| `--primary-container` | `#a6daff` |
| `--primary-fixed-dim` | `#99cdf1` |
| `--on-primary-fixed` | `#001e2e` |
| `--on-surface` | `#dde4ec` |
| `--on-surface-variant` | `#8e97a3` |
| `--outline-variant` | `#41484d` |

### Typographie
- **Display / H1** : `Instrument Serif`, italic, `line-height: 0.88`, `letter-spacing: -0.03em`
- **Titres de section** : `Instrument Serif`, italic, `clamp(2rem, 5vw, 3.4rem)`, `letter-spacing: -0.025em`
- **Corps** : `Inter`, 400/500, `line-height: 1.7`, `color: var(--on-surface-variant)`
- **Overlines** : `Inter`, 600, `0.68rem`, `letter-spacing: 0.16em`, UPPERCASE, `color: var(--primary-fixed-dim)`
- **Chiffres de preuve** : `Instrument Serif`, `clamp(2.8rem, 6vw, 4.5rem)`, `color: var(--primary-container)`

---

## ICP — Profil de l'utilisateur cible

**Qui il est** : Propriétaire d'agence de voyage ou d'immigration en Afrique francophone (DRC, CI, SN, CM). En activité depuis 1 à 3 ans. 3 à 8 clients/mois. Revenu $3K–$10K/mois. Souvent seul ou avec 1-2 personnes. Connecté (WhatsApp Business, Facebook). Pas technophobe mais sans compétences système.

**Ce qui le fait réagir** :
- OPPORTUNITÉ (CPL $2.04) > MÉCANISME (CPL $2.83) >>> PROBLÈME (CPL $28 — à éviter absolument)
- Il ne se perçoit pas comme quelqu'un qui souffre. Parler de "problème" déclenche sa résistance identitaire.
- Ce qui le mobilise : la peur de rater une fenêtre pendant qu'un concurrent agit. FOMO ancré dans du concret.

**Ce qu'il veut (dans l'ordre)** :
1. **Prévisibilité** — savoir combien de prospects arrivent le mois prochain, pas espérer
2. **Récupérer son temps** — 2 à 3 heures/jour à ne plus qualifier des gens qui ne signeront jamais
3. **Légitimité de croissance** — être l'agence sérieuse, organisée, différente des autres

**La phrase dans sa tête** : *"Si je ne fais pas ça maintenant, dans 12 mois je vais regarder un concurrent qui l'a fait et me demander pourquoi je n'ai pas bougé quand j'en avais la chance."*

---

## INTERDITS ABSOLUS

- **Jamais de borders 1px solides** pour séparer des sections — utiliser les décalages de surface (`surface-container-low` → `surface-container`)
- **Jamais de vert, d'orange, ou de bleu standard** (`#0000FF`) — uniquement les tokens sky blue du design system
- **Jamais l'angle "problème"** dans le copywriting — pas de "votre business est cassé", "vous souffrez de...", "le problème c'est que..." — toujours l'angle opportunité ou mécanisme
- **Jamais de jargon technique** visible dans la UI — pas de "n8n", "webhook", "API", "agent IA" dans le texte utilisateur
- **Jamais de drop shadows sur le texte**
- **Jamais de layouts boxés génériques** — pas de cartes avec bordure opaque, pas de dividers HR
- **Jamais de promesses vagues** — chaque claim doit être ancré dans un chiffre réel (15 RDV, 7 jours, 10% moins de trafic, 100% honorés)

---

## PATTERNS À RÉPLIQUER (depuis research.trycook.ai)

- H1 en 3 lignes max, serif italic massif, chaque ligne peut avoir une opacité différente pour créer de la hiérarchie sans couleur
- Live dot pulsant dans le badge d'overline (point animé `#a6daff` avec `box-shadow` glow)
- Grid de preuve avec séparateurs en dégradé vertical (pas des lignes pleines)
- Cards de contenu avec hover `translateY(-5px)` + `box-shadow` diffus
- Citations centrées avec guillemet décoratif en arrière-plan à très faible opacité
- Countdown timer avec typographie serif pour les chiffres

---

## Stack technique

- **Langage** : HTML5 + CSS3 + JavaScript vanilla (ES6+)
- **Fonts** : Google Fonts — Instrument Serif + Inter (chargées via `<link>`)
- **Animations** : CSS transitions + IntersectionObserver pour les fade-up au scroll
- **Pas de framework** : pas de React, pas de Tailwind, pas de dépendances npm pour la page
- **Screenshots** : Puppeteer via `screenshot.js` — `npm install puppeteer` puis `node screenshot.js`
- **Serveur local** : `python -m http.server 8080`

---

## Architecture des fichiers

```
zoom/
├── index.html              ← Page principale (tout-en-un)
├── CLAUDE.md               ← Ce fichier
├── DESIGN.md               ← Design system complet (source of truth)
├── DESIGN_ONBOARDING.md    ← Template d'onboarding (peut être supprimé)
├── screenshot.js           ← Script Puppeteer pour review visuelle
└── screenshots/            ← Généré par screenshot.js
```

---

## Données de l'événement

| Champ | Valeur |
|---|---|
| Nom | Immigration Flow Live |
| Date | Vendredi 4 avril 2026 |
| Heure | 18h00 heure Kinshasa (UTC+1) |
| Format | Zoom (lien à ajouter) |
| Durée | ~75 minutes + 15 min Q&A |
| Prix | Gratuit |
| Qualification | Agence active uniquement |

---

## Points TODO dans index.html

1. **Lien Zoom** — remplacer le texte placeholder dans le bloc `form-success` par le vrai lien
2. **Webhook formulaire** — ligne `fetch('YOUR_WEBHOOK_URL', ...)` dans le JS — connecter à n8n, Make, ou Tally
3. **Nom du présentateur** — ajouter une section "À propos" si jugé utile
4. **Analytics** — ajouter pixel Meta ou Google Tag si besoin de tracking pour les ads

---

## Commandes utiles

```bash
# Serveur local
python -m http.server 8080

# Screenshots Puppeteer (review visuelle)
npm install puppeteer
node screenshot.js

# Vérifier que le serveur tourne
curl http://localhost:8080
```

---

## Règles de code

- CSS en variables CSS custom (`var(--token)`) — jamais de valeurs hex en dur dans les règles
- Tailles de texte en `clamp()` — jamais de valeurs fixes cassantes sur mobile
- Toutes les transitions : `ease` ou `cubic-bezier` — jamais `linear` pour les éléments UI
- Espacements entre sections majeurs : `clamp(4rem, 9vw, 8rem)`
- Rayon de bordure : `9999px` pour les pills/badges, `14-24px` pour les cards
- Z-index : nav à `1000`, overlays à `500`, contenu normal à `1`

---

## Question de signature avant de livrer un composant

> *"Est-ce qu'un propriétaire d'agence à Kinshasa, en lisant ça sur son téléphone, comprend immédiatement ce qu'il gagne en s'inscrivant — et a envie de le faire ?"*
