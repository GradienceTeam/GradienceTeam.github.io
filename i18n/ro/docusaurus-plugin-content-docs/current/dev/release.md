# Procesul de lansare

## Înainte de o versiune

### O săptămână înainte de lansare
- [] Anunțați viitoarea versiune prin crearea unei noi probleme cu o săptămână înainte de lansare.
- [] Solicită traducătorilor să traducă noi șiruri.
- [ ] În legătură cu acest subiect, se pregătesc note de lansare:
  - [ ] Prima secţiune ar fi un rezumat al marilor schimbări.
  - [] A doua secțiune ar trebui să enumere noile dependențe, inclusiv dependențele python și motivul pentru care acestea au fost adăugate.
  - [ ] A treia secțiune va fi lista contribuțiilor.

### 3 zile înainte de lansare
- [ ] Deconectaţi notele de lansare (sau cel puţin prima secţiune).
- [ ] Actualizaţi numărul versiunii meson.
- [] Adaugă conținutul primei secțiuni a notelor de lansare în AppData.
- [] Creați o sucursală nouă pentru lansare cu numele fiind numărul de lansare și înghețați noua caracteristică, îmbinați numai în bug fix și traduceri actualizări.
- [] Creați un test flathub (creând o cerere pull în repo-ul flathub, lovește eticheta de lansare și cere buildbotului lui Flathub, să-l construiască).
- [] Cereți contribuitorilor să testeze construcția. Any identified bug should halt the update until fixed.

## Doing the release
- [] Eticheta este ultima comitere în sucursala de lansare cu numărul versiunii.
- [] Creați o nouă versiune GitHub utilizând notele de lansare aprobate.

## După lansare
- [ ] Modernizaţi pachetul flatub prin lovirea etichetei de eliberare.
- [ ] Notify packagers.
- [ ] Write a TWIG announcement.
