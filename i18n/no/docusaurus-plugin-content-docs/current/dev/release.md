# Utgivelsesprosess

## Før utgivelse

### En uke før utgivelse
- [ ] Annoce den kommende utgivelsen ved å lage et nytt problem én uke før utgivelsen.
- [ ] Spør oversettere om å oversette nye strenger.
- [ ] Forberede utgivelsesmerknader i saken:
  - [ ] Det første avsnittet vil være et sammendrag av store endringer.
  - [ ] Andre del bør liste opp nye avhengigheter, inkludert python-avhengigheter, og grunnen til at de ble tilføyd.
  - [ ] Den tredje delen vil være listen over bidrag.

### 3 dager før utgivelse
- [ ] Logg av på utgivelsessedlene (eller i det minste første avsnittet).
- [ ] Oppdater versjonsnummeret for meson.
- [ ] Legg til utgivelsesnotatenes første seksjons innhold til AppData.
- [ ] En ny gren for utgivelsen med navnet som utgivelsesnummer og fryse ny funksjon; bare slå sammen i feilrettinger og oppdatering av oversettelser.
- [ ] Lag et testbygg for flathub (ved å lage en trekkforespørsel i flathub-repo, «Kumping av utgivelse»-taggen i den og be Flathubs buildbot om å bygge den).
- [ ] Spør bidragsytere om å teste bygningen. Any identified bug should halt the update until fixed.

## Doing the release
- [ ] Merk den siste forpliktelsen i frigivelsesgrenen med versjonsnummeret.
- [ ] Lag en ny GitHub versjon med godkjente utgivelser.

## Etter utgivelsen
- [ ] Oppgrader flathub-pakken ved å støpe utgivelsesmerken.
- [ ] Notify packagers.
- [ ] Write a TWIG announcement.
