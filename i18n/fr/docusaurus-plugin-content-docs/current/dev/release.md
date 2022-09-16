# Processus de publication

## Avant une parution

### Une semaine avant la sortie
- [ ] Annoncez la prochaine version en créant un nouveau numéro une semaine avant la publication.
- [ ] Demandez aux traducteurs de traduire de nouvelles chaînes.
- [ ] Dans le numéro, préparer les notes de publication :
  - [ ] La première section serait un résumé des grands changements.
  - [ ] La deuxième section devrait lister les nouvelles dépendances, y compris les dépendances python, et la raison pour laquelle elles ont été ajoutées.
  - [ ] La troisième section serait la liste des contributions.

### 3 jours avant la publication
- [ ] Signez sur les notes de publication (ou au moins la première section).
- [ ] Mettre à jour le numéro de version du mailon.
- [ ] Ajouter le contenu de la première section des notes de publication à l'AppData.
- [ ] Créer une nouvelle branche pour la version dont le nom est le numéro de version et geler la nouvelle fonctionnalité, fusionner uniquement les corrections de bugs et les mises à jour de traduction.
- [ ] Crée une construction de test flathub (en créant une pull request dans le dépôt flathub, bumping the release tag in it, and asking Flathub buildbot to build it).
- [ ] Demandez aux contributeurs de tester la compilation. Any identified bug should halt the update until fixed.

## Doing the release
- [ ] Étiquetez le dernier commit de la branche release avec le numéro de version.
- [ ] Créer une nouvelle version GitHub en utilisant les notes de version approuvées.

## Après la publication
- [ ] Améliorez le paquet flathub en bumpant la balise release.
- [ ] Notify packagers.
- [ ] Write a TWIG announcement.
