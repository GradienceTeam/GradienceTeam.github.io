# Proces vydání

## Před vydáním

### Týden před vydáním
- [ ] Oznamte nadcházející vydání tím, že vytvoříte nový problém týden před vydáním.
- [ ] Požádejte překladatele o překlad nových řetězců.
- [ ] Při vydání připravte poznámky k vydání:
  - [ ] První část bude obsahovat shrnutí velkých změn.
  - [ ] Ve druhé části by měly být uvedeny nové závislosti, včetně závislosti v Pythonu a důvod, proč byly přidány.
  - [ ] Třetí část bude obsahovat seznam příspěvků.

### 3 dny před vydáním
- [ ] Přihlaste se na poznámky k vydání (nebo alespoň na první sekci).
- [ ] Aktualizujte číslo verze meson.
- [ ] Přidejte do AppData obsah první sekce poznámky k verzi.
- [ ] Vytvořte novou větev pro vydání s názvem číslo vydání a zmrazte novou funkci, sloučit pouze do oprav chyb a aktualizací překladu.
- [ ] Vytvořte kompilaci flathub test (vytvořením požadavku na natažení v repozitáři flathub, vyhodil do něj uvolňovací značku a zeptal se Flathubova buildbot na jeho stavbu).
- [ ] Požádejte přispěvatele, aby vyzkoušeli sestavení. Jakákoli zjištěná chyba by měla aktualizaci zastavit, dokud nebude opravena.

## Probíhá vydání
- [ ] Označte poslední commit v release větvi s číslem verze.
- [ ] Vytvořte nové vydání GitHub pomocí schválených poznámek k vydání.

## Po vydání
- [ ] Vylepšete balík flathub vytažením nové značky.
- [ ] Upozornit na balíky.
- [ ] Napište TWIG oznámení.
