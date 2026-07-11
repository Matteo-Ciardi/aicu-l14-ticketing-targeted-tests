import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { buildTicket, postTicket, startTestApplication } from "../helpers/ticket-api.js";

describe("POST /api/tickets - validazione sourceChannel", () => {
  it("restituisce 400 VALIDATION_ERROR con fieldErrors.sourceChannel se sourceChannel e' 'whatsapp'", async (t) => {
    const baseUrl = await startTestApplication(t);
    const ticket = buildTicket({ sourceChannel: "whatsapp" });
    const response = await postTicket(baseUrl, ticket);

    assert.equal(response.status, 400);

    const body = await response.json();
    assert.equal(body.code, "VALIDATION_ERROR");
    assert.equal(typeof body.fieldErrors.sourceChannel, "string");
  });
});
