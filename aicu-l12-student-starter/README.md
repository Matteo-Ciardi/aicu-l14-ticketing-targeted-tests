# AICU L14 - Student starter

Repo di partenza per scrivere i primi test con `node:test`.

L'applicazione e' gia' funzionante. Il server valida, calcola e salva:

```txt
priority + sourceChannel -> urgencyLabel
```

Le cartelle `tests/unit` e `tests/api` non contengono test: verranno completate durante la consegna L14.

## Requisiti

- Node.js 26 o superiore;
- pnpm.

## Setup

```bash
pnpm install
pnpm dev
```

Apri `http://127.0.0.1:4173`.

## Comandi test

Dopo aver creato almeno un file `.test.js` nella cartella corrispondente:

```bash
pnpm test:unit
pnpm test:api
pnpm test
```

## File utili

```txt
server/ticket-rules.js
server/validation.js
server/app.js
tests/unit/
tests/api/
tests/helpers/ticket-api.js
```

Segui `consegna.md`. Non installare altri framework di testing.
