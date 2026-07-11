# Test notes - L14

## Unit Test

```txt
nome test: computeUrgencyLabel
file: tests/unit/ticket-rules.test.js
livello: unit
```

## Comando eseguito

```bash
pnpm test:unit
```

## Output essenziale

```txt
▶ computeUrgencyLabel
  ✔ restituisce 'standard' per priorita' normale e canale email
  ✔ restituisce 'intervento rapido' per priorita' alta e canale telefono
✔ computeUrgencyLabel
ℹ tests 2
ℹ pass 2
ℹ fail 0
```

## Rischio protetto

```txt
Modifiche accidentali alla tabella urgencyLabels o alla logica
computeUrgencyLabel: se "normale + email" non restituisce piu' "standard"
o "alta + telefono" non restituisce piu' "intervento rapido", il test fallisce.
```

## Assertion centrale

```txt
assert.equal(computeUrgencyLabel("normale", "email"), "standard");
assert.equal(computeUrgencyLabel("alta", "telefono"), "intervento rapido");
```

## Perche' questo livello

```txt
computeUrgencyLabel e' una funzione pura: nessuna dipendenza da HTTP,
database o DOM. Un test unitario con node:test copre l'intero rischio
logico senza overhead di server o browser.
```

## Cosa ho corretto dopo review

```txt
Rimosso il test "whatsapp -> null": non e' un comportamento di business
(deriva dall'operatore ??), e' fuori scope e fragile (fallirebbe se
whatsapp venisse aggiunto legittimamente alla tabella).
```

---

## API Test

```txt
nome test: POST /api/tickets - validazione sourceChannel
file: tests/api/ticket-validation.test.js
livello: api
```

## Comando eseguito

```bash
pnpm test:api
```

## Output essenziale

```txt
▶ POST /api/tickets - validazione sourceChannel
  ✔ restituisce 400 VALIDATION_ERROR con fieldErrors.sourceChannel se sourceChannel e' 'whatsapp'
✔ POST /api/tickets - validazione sourceChannel
ℹ tests 1
ℹ pass 1
ℹ fail 0
```

## Rischio protetto

```txt
Modifiche accidentali all'array validSourceChannels in validation.js:
se "whatsapp" venisse aggiunto come canale valido, il server non
restituirebbe piu' 400 VALIDATION_ERROR e il test fallisce.
Protegge anche da rimozione accidentale della validazione sourceChannel.
```

## Assertion centrale

```txt
assert.equal(response.status, 400);
assert.equal(body.code, "VALIDATION_ERROR");
assert.equal(typeof body.fieldErrors.sourceChannel, "string");
```

## Perche' questo livello

```txt
La validazione di sourceChannel avviene nel percorso HTTP (POST /api/tickets).
Un test unitario su validateTicketInput da solo non verificherebbe che il
server restituisce effettivamente 400 con il body corretto.
Il test API con startTestApplication copre l'intero flusso:
richiesta HTTP -> normalizzazione -> validazione -> risposta.
```
