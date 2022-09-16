# Proces vrijgeven

## Voor een release

### Een week voor release
- [ ] kondig de aanstaande release aan door een nieuwe issue te maken één week voor de release.
- [ ] Vraag vertalers nieuwe tekenreeksen te vertalen.
- [ ] In de kwestie, bereidt release-notities voor:
  - [ ] De eerste sectie zou een samenvatting van grote wijzigingen zijn.
  - [ ] Het tweede deel moet nieuwe afhankelijkheden vermelden, waaronder python-afhankelijkheden en de reden waarom ze zijn toegevoegd.
  - [ ] Het derde deel zou de lijst van bijdragen zijn.

### 3 dagen voor release
- [ ] Meld u aan op de release-notities (of ten minste het eerste deel).
- [ ] Update de mesonversienummer
- [ ] De inhoud van de release notities eerste sectie toevoegen aan de AppData.
- [ ] Maak een nieuwe branch aan voor de release met de naam het vrijgavenummer en bevriezing van nieuwe functie, alleen bugfixes en vertaalupdates samenvoegen.
- [ ] Maak een flathub test build (door een pull request te maken in de flathub repo, de release tag erin weergeven, en de Flathub's buildbot vragen om het te bouwen).
- [ ] Vraag bijdragers om de build te testen. Een geïdentificeerde bug moet de update stoppen tot deze is opgelost.

## Uitvoeren van de release
- [ ] Tag de laatste commit in de release-branch met het versienummer
- [ ] Maak een nieuwe GitHub release met behulp van de goedgekeurde release notities.

## Na de release
- [ ] Upgrade het flathub pakket door de release tag te weergeven.
- [ ] Informeer pakketten.
- [ ] Schrijf een TWIG mededeling.
