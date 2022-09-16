# Udgivelse proces

## Før en udgivelse

### En uge før udgivelse
- [ ] Annoncer den kommende udgivelse ved at oprette et nyt problem en uge før udgivelsen.
- [ ] Bed oversættere om at oversætte nye strenge.
- [ ] I udstedelsen , forberede udgivelsesnoter :
  - [ ] Den første del ville være en sammenfatning af store ændringer.
  - [ ] Den anden sektion bør liste nye afhængigheder, herunder python afhængigheder, og grunden til, at de blev tilføjet.
  - [ ] Det tredje afsnit vil være listen over bidrag.

### 3 dage før frigivelse
- [ ] Signér på udgivelsesbemærkningerne (eller i det mindste det første afsnit).
- [ ] Opdater meson versionsnummeret.
- [ ] Tilføj udgivelsesnoternes første sektions indhold til AppData.
- [ ] Opret en ny gren til udgivelsen, hvor navnet er udgivelsesnummeret og fryse ny funktion, kun flette i fejlrettelser og oversættelsesopdateringer.
- [ ] Opret en flathub test build (ved at oprette en pull request i flathub repo, bumping release tag i det, og beder Flathub buildbot til at bygge det).
- [ ] Bed bidragydere om at teste bygningen. Any identified bug should halt the update until fixed.

## Doing the release
- [ ] Tag den sidste commit i udgivelsesgrenen med versionsnummeret.
- [ ] Opret en ny GitHub udgivelse ved hjælp af de godkendte udgivelsesnoter.

## Efter frigivelse
- [ ] Opgrader flathub-pakken ved at bumpe udgivelsestagget.
- [ ] Notify packagers.
- [ ] Write a TWIG announcement.
