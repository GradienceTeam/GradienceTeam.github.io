# Proces wydania

## Przed wydaniem

### Tydzień przed wydaniem
- [ ] Ogłoś nadchodzące wydanie tworząc nowy problem tydzień przed wydaniem.
- [ ] Poproś tłumaczy o tłumaczenie nowych ciągów.
- [ ] W sprawie należy przygotować notatki o wydaniu:
  - [ ] Pierwsza sekcja będzie podsumowaniem dużych zmian.
  - [ ] Druga sekcja powinna zawierać listę nowych zależności, w tym zależności Pythona, oraz powód ich dodania.
  - [ ] Trzecią sekcją będzie lista uwag.

### 3 dni przed wydaniem
- [ ] Podpisz się na notatce o wydaniu (lub przynajmniej na pierwszej sekcji).
- [ ] Zaktualizuj numer wersji meson.
- [ ] Dodaj zawartość pierwszej sekcji notatek o wydaniu do AppData.
- [ ] Utwórz nową gałąź dla wydania z nazwą numeru wydania i zamrozić nową funkcję, tylko scalanie w poprawkach błędów i aktualizacjach tłumaczeń.
- [ ] Utwórz kompilację testową flthub (tworząc pull request w repo, zrzucam w nim znacznik wydania i poproś buildbota Flathuba o jego budowę).
- [ ] Poproś współtwórców o przetestowanie budowli. Każdy zidentyfikowany błąd powinien zatrzymać aktualizację do czasu naprawienia.

## Wykonywanie wydania
- [ ] Oznacz ostatnie zatwierdzenie w gałęzi wydania numeru wersji.
- [ ] Utwórz nową wersję GitHub używając zatwierdzonych notatek o wydaniu.

## Po wydaniu
- [ ] Ulepsz pakiet flathub poprzez zrzucenie znacznika wydania.
- [ ] Powiadom pakujących.
- [ ] Napisz ogłoszenie TWIG.
