# Vapautus prosessi

## Ennen vapauttamista

### Viikko ennen vapauttamista
- [ ] Ilmoittaudu tulevasta julkaisusta luomalla uusi kysymys viikkoa ennen julkaisua.
- [ ] Pyydä kääntäjiä kääntämään uusia merkkijonoja.
- [ ] In the issue prepare release notes :
  - [ ] Ensimmäinen osa olisi yhteenveto suurista muutoksista.
  - [ ] Toisessa osiossa on lueteltava uudet riippuvuudet, mukaan lukien python riippuvuudet, ja syy niihin on lisätty.
  - [ ] Kolmas osa on rahoitusosuuksien luettelo.

### 3 päivää ennen vapauttamista
- [ ] Kirjaudu pois julkaisutiedoissa (tai ainakin ensimmäisessä osiossa).
- [ ] Päivitä mesonin versionumero.
- [ ] Lisää julkaisun muistiinpanojen ensimmäisen osan sisältö AppDataan.
- [ ] Luo julkaisulle uusi haara, jonka nimi on julkaisunumero ja jäädytä uusi ominaisuus, vain yhdistää virhekorjauksia ja käännöspäivityksiä.
- [ ] Luo flathub testi rakentaa (luomalla pull-pyyntö flathub repo, bumping the release tag in it, ja pyydä Flathubin buildbot rakentamaan sen).
- [ ] Pyydä osallistujia testaamaan rakennusta. Mikä tahansa tunnistettu vika pitäisi pysäyttää kunnes vahvistettu.

## Vapautuksen tekeminen
- [ ] Tag the last test commit in the release branch with the versionumero.
- [ ] Luo uusi GitHub-julkaisu käyttäen hyväksyttyjä julkaisumerkintöjä.

## Vapauttamisen jälkeen
- [ ] Päivitä flathub paketti napauttamalla julkaisutagi.
- [ ] Ilmoita pakkaajille.
- [ ] Kirjoita TWIG:n ilmoitus.
