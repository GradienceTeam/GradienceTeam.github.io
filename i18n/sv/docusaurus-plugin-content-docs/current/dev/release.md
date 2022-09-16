# Släpp processen

## Före en utgåva

### En vecka före release
- [ ] Meddela den kommande utgåvan genom att skapa ett nytt nummer en vecka före utgivningen.
- [ ] Be översättare att översätta nya strängar.
- [ ] I problemet, förbered versionsfakta :
  - [ ] Det första avsnittet skulle vara en sammanfattning av stora förändringar.
  - [ ] Det andra avsnittet bör lista nya beroenden, inklusive pythonberoenden, och anledningen till att de lades till.
  - [ ] Det tredje avsnittet skulle vara en förteckning över bidrag.

### 3 dagar före release
- [ ] Logga ut på versionsfakta (eller åtminstone det första avsnittet).
- [ ] Uppdatera versionsnummer för meson.
- [ ] Lägg till versionsfakta första avsnittets innehåll i AppData.
- [ ] Skapa en ny gren för releasen med namnet som utgåvans nummer och frysa den nya funktionen, bara slå samman i buggfixar och översättningsuppdateringar.
- [ ] Skapa en flathub test bygga (genom att skapa en pull-förfrågan i flathub repo, stöter utgivningstaggen i den, och ber Flathub's buildbot att bygga den).
- [ ] Be bidragsgivare att testa bygget. Any identified bug should halt the update until fixed.

## Doing the release
- [ ] Tagga den sista commit:en i release-grenen med versionsnumret.
- [ ] Skapa en ny GitHub-utgåva med hjälp av godkända versionsfakta.

## Efter releasen
- [ ] Uppgradera flathub-paketet genom att stöta på utgivningstaggen.
- [ ] Notify packagers.
- [ ] Write a TWIG announcement.
