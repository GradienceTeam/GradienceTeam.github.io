# Freigabeprozess

## Vor einer Veröffentlichung

### Eine Woche vor der Veröffentlichung
- [ ] Melden Sie die bevorstehende Veröffentlichung an, indem Sie eine Woche vor der Veröffentlichung ein neues Problem erstellen.
- [ ] Bittet Übersetzer, neue Zeichenketten zu übersetzen.
- [ ] Vorbereiten der Versionshinweise :
  - [ ] Der erste Abschnitt wäre eine Zusammenfassung großer Änderungen.
  - [ ] Der zweite Abschnitt sollte neue Abhängigkeiten auflisten, einschließlich Python-Abhängigkeiten und den Grund, warum sie hinzugefügt wurden.
  - [ ] Der dritte Abschnitt wäre die Liste der Beiträge.

### 3 Tage vor der Veröffentlichung
- [ ] Melden Sie sich auf den Release Notes (oder zumindest den ersten Abschnitt).
- [ ] Aktualisieren Sie die Meson-Versionsnummer.
- [ ] Fügen Sie den Inhalt des ersten Abschnitts der Release-Notizen zu den AppData hinzu.
- [ ] Erstelle einen neuen Zweig für die Veröffentlichung mit der Release-Nummer und friere neue Funktion ein, nur in Fehlerbehebungen und Übersetzungsaktualisierungen zusammenführen.
- [ ] Erstellen Sie einen flathub test build (indem Sie einen Pull-Request im flathub repo erstellen Den Release-Tag darin bumpen und Flathubs Buildbot auffordern, ihn zu erstellen).
- [ ] Bittet Mitwirkende, die Build zu testen. Jeder erkannte Fehler sollte das Update bis zum Beheben stoppen.

## Das Release wird durchgeführt
- [ ] Markiere den letzten Commit im Release-Zweig mit der Versionsnummer.
- [ ] Erstellen Sie ein neues GitHub Release mit den genehmigten Release-Notizen.

## Nach der Freigabe
- [ ] Aktualisieren Sie das flathub-Paket, indem Sie den Release-Tag anstoßen.
- [ ] Pakete benachrichtigen.
- [ ] Schreiben Sie eine TWIG Ankündigung.
