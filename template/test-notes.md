# Test notes - L14

## Test scritto o completato

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
