# Processo di rilascio

## Prima di un rilascio

### Una settimana prima del rilascio
- [ ] Annuncia la prossima release creando un nuovo problema una settimana prima del rilascio.
- [ ] Chiedi ai traduttori di tradurre nuove stringhe.
- [ ] In emissione, preparare le note di rilascio :
  - [ ] La prima sezione sarebbe un riassunto dei grandi cambiamenti.
  - [ ] La seconda sezione dovrebbe elencare le nuove dipendenze, incluse le dipendenze python, e il motivo per cui sono state aggiunte.
  - [ ] La terza sezione sarebbe la lista dei contributi.

### 3 giorni prima del rilascio
- [ ] Disconnetti le note di rilascio (o almeno la prima sezione).
- [ ] Aggiorna il numero della versione del meson.
- [ ] Aggiungere il contenuto della prima sezione delle note di rilascio all'AppData.
- [ ] Crea un nuovo ramo per la release con il nome è il numero di rilascio e blocca la nuova funzionalità, merge solo in correzioni di bug e aggiornamenti di traduzione.
- [ ] Crea una build di test flathub (creando una pull request nel repo flathub, urtando il tag di rilascio in esso, e chiedendo buildbot di Flathub per costruirlo).
- [ ] Chiedi ai collaboratori di testare la generazione. Any identified bug should halt the update until fixed.

## Doing the release
- [ ] Etichetta l'ultimo commit nel ramo di rilascio con il numero di versione.
- [ ] Crea una nuova release GitHub utilizzando le note di rilascio approvate.

## Dopo il rilascio
- [ ] Aggiorna il pacchetto flathub saltando il tag di rilascio.
- [ ] Notify packagers.
- [ ] Write a TWIG announcement.
