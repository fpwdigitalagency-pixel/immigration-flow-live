# DESIGN_ONBOARDING.md
# Version 1.0 — Reusable across all projects

---

## 🔴 INSTRUCTIONS POUR CLAUDE CODE — LIS CE BLOC EN ENTIER AVANT TOUT

Tu viens de lire ce fichier. Cela signifie que le projet n'a pas encore de
`CLAUDE.md` finalisé. Ton rôle immédiat n'est PAS de coder. Ton rôle est de
conduire une interview structurée avec moi pour extraire tout le contexte
nécessaire, puis de générer automatiquement :

1. Un `CLAUDE.md` complet et projet-spécifique
2. Un `.stitch/DESIGN.md` (design system initial)
3. Un `research/inspirations.md` (références visuelles)
4. Un `.claude/skills/[project-name]-design/SKILL.md` (expertise design custom)

**Ne commence PAS à coder avant d'avoir complété les 5 phases de l'interview.**
**Ne génère PAS les fichiers avant la Phase 5.**
**Pose les questions UNE PHASE À LA FOIS. Attends ma réponse avant de continuer.**

---

## PHASE 1 — Identité du projet

Pose ces questions exactement, sous forme de liste numérotée :

1. Quel est le nom du projet et de quoi s'agit-il en une phrase ?
2. Qui est l'utilisateur final ? Décris-le en termes humains, pas marketing.
3. Quand quelqu'un quitte le site, quel est LE sentiment qu'il doit avoir eu ?
4. Cite 3 mots qui décrivent l'identité visuelle que tu veux. Pas "moderne" ou
   "professionnel" — des mots vrais : brutal, chaleureux, froid, luxueux,
   artisanal, technique, organique, clinique, rebelle, etc.

---

## PHASE 2 — Références visuelles

Pose ces questions :

5. Cite 2 à 5 sites web (pas forcément dans ton industrie) dont le design
   t'inspire. Pour chacun, dis CE QUI te plaît spécifiquement : la typo ?
   Les couleurs ? L'animation ? La densité d'information ? Le ton ?
6. Cite 1 à 3 sites que tu trouves laids ou génériques. Qu'est-ce qui
   t'énerve dans leur design ?
7. Y a-t-il une marque physique (mode, architecture, automobile, luxe)
   dont l'esthétique te parle ? Laquelle et pourquoi ?

---

## PHASE 3 — Contraintes techniques et fonctionnelles

Pose ces questions :

8. Quel est le stack technique ? (React, Next.js, HTML vanilla, etc.)
9. Y a-t-il des librairies d'animation ou 3D prévues ? (Three.js, Framer
   Motion, GSAP, etc.)
10. Est-ce qu'on part de zéro ou il y a déjà du code existant ?
11. Y a-t-il des contraintes de performance ou d'accessibilité importantes ?
12. Quel est le deadline ou le niveau d'urgence ?

---

## PHASE 4 — Direction créative (la plus importante)

Dis ceci à l'utilisateur :

"Maintenant je veux que tu me laisses faire quelque chose. Je vais te
proposer 3 directions esthétiques différentes pour ce projet — pas des
descriptions génériques, des directions tranchées et assumées. Tu en
choisis une, ou tu me dis ce qui te plaît dans chacune. Cette étape
est critique parce qu'elle va tout changer dans ma façon de coder."

Ensuite, sur la base des réponses des Phases 1 à 3, génère toi-même
3 propositions de direction esthétique, chacune avec :
- Un nom court (ex: "Editorial Noir", "Brutalisme Chaud", "Futurisme Calme")
- Une palette de 3 couleurs hex
- 1 font display + 1 font body (avec des choix non-génériques)
- 2 principes visuels qui guident tout (ex: "asymétrie calculée" ou
  "typographie comme architecture")
- 1 site de référence qui s'en approche le plus
- Ce que ce choix dit sur la marque

---

## PHASE 5 — Synthèse et génération des fichiers

Après que l'utilisateur ait choisi une direction, dis :

"Parfait. J'ai tout ce qu'il me faut. Je vais maintenant générer les 4
fichiers de configuration du projet. Ne touche à rien pendant que je
construis la fondation."

Puis génère dans cet ordre, sans t'arrêter :

### Fichier 1 : CLAUDE.md

Génère un CLAUDE.md complet qui contient :
- Vue d'ensemble du projet (1 paragraphe dense)
- La direction esthétique choisie avec ses principes
- Les INTERDITS ABSOLUS basés sur les sites que l'utilisateur déteste
- Les PATTERNS À RÉPLIQUER basés sur les sites qu'il aime
- Le stack technique complet
- L'architecture des dossiers recommandée
- Les règles de code spécifiques au projet
- Les commandes utiles
- Références : `@.stitch/DESIGN.md`, `@research/inspirations.md`

Commence le fichier avec cette ligne :
`# CLAUDE.md — [Nom du projet] | Généré via DESIGN_ONBOARDING.md`

### Fichier 2 : .stitch/DESIGN.md

Génère un design system complet basé sur la direction choisie :
- Color tokens (avec noms sémantiques, pas juste primary/secondary)
- Typography scale (fonts, tailles, weights, line-heights)
- Spacing system (en multiples de 4px)
- Component rules (cards, buttons, inputs, sections)
- Motion principles (durées, easings, patterns d'animation)
- DO / DON'T en 5 points chacun

Commence avec :
`# DESIGN.md — [Nom du projet] | Source of truth pour tous les composants`

### Fichier 3 : research/inspirations.md

Génère un fichier structuré avec :
- Les sites de référence cités, avec CE qu'on en retient précisément
- Les anti-références avec CE qu'on évite précisément
- La "phrase de test" : une courte question à se poser devant chaque
  composant pour vérifier qu'il est dans le bon esprit
  (ex: "Est-ce qu'on verrait ça sur linear.app ?")

### Fichier 4 : .claude/skills/[project-name]-design/SKILL.md

Génère un skill Claude Code custom avec :
- Checklist obligatoire avant chaque nouveau composant
- Les anti-patterns SPÉCIFIQUES à ce projet (pas génériques)
- Les patterns qui fonctionnent pour ce projet
- Le template de pensée à suivre pour chaque nouvelle section
- La "question de signature" finale avant de livrer un composant

---

## APRÈS LA GÉNÉRATION

Une fois les 4 fichiers générés, dis à l'utilisateur :

"Les 4 fichiers sont prêts. Voici ce que tu dois faire maintenant :

1. Sauvegarde ces fichiers dans ton projet aux chemins indiqués
2. Supprime ce fichier DESIGN_ONBOARDING.md (il a fait son travail)
3. Lance Claude Code sur le projet — il lira CLAUDE.md automatiquement
4. Donne ta première vraie tâche de design

Optionnel mais recommandé : ouvre Stitch, décris ton projet avec les mots
exacts de la Phase 1, génère 3-5 screens, exporte le DESIGN.md depuis
Stitch et remplace le fichier que je viens de créer. Le DESIGN.md de
Stitch sera plus précis visuellement que le mien.

À partir de maintenant, chaque composant sera cohérent avec la direction
définie. Tu n'as plus besoin de réexpliquer l'esthétique à chaque session."

---

## NOTE TECHNIQUE POUR CLAUDE CODE

Ce fichier est conçu pour être utilisé UNE SEULE FOIS par projet.
Il doit être supprimé après génération du CLAUDE.md final.
Il peut être copié intact dans n'importe quel nouveau projet.
Il est compatible avec Claude Code, Cursor, et Gemini CLI.

Version : 1.0
Auteur du système : Aaron Tshilumba Kazadi / FPW Digital Agency
Standard : Compatible SKILL.md open standard
