import assert from "node:assert/strict";
import test from "node:test";
import { NextRequest } from "next/server";

test("instructor route rejects non-integer ids before querying the database", async () => {
  process.env.DATABASE_URL ??= "postgresql://ci:ci@localhost:5432/ci";
  process.env.DIRECT_URL ??= process.env.DATABASE_URL;
  // Any id that slipped through would hit the (unreachable) CI database and throw.
  const { GET } = await import("./route");

  for (const id of ["", "1.5", "1e3", "Infinity", "-1", "0", "0x10", "9007199254740993"]) {
    const response = await GET(
      new NextRequest(`https://example.test/api/instructor/${encodeURIComponent(id)}`),
      { params: Promise.resolve({ id }) }
    );
    assert.equal(response.status, 400, `id ${JSON.stringify(id)}`);
  }
});
