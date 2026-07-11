import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { computeUrgencyLabel } from "../../server/ticket-rules.js";

describe("computeUrgencyLabel", () => {
  it("restituisce 'standard' per priorita' normale e canale email", () => {
    assert.equal(computeUrgencyLabel("normale", "email"), "standard");
  });

  it("restituisce 'intervento rapido' per priorita' alta e canale telefono", () => {
    assert.equal(computeUrgencyLabel("alta", "telefono"), "intervento rapido");
  });


});
