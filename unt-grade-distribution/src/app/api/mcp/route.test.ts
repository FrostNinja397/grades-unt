import assert from "node:assert/strict";
import test from "node:test";
import { POST } from "./route";

async function call(method: string, id: number, params: object) {
  const response = await POST(new Request("http://localhost/api/mcp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
      "MCP-Protocol-Version": "2025-11-25",
    },
    body: JSON.stringify({ jsonrpc: "2.0", id, method, params }),
  }));
  assert.equal(response.status, 200);
  const body = await response.text();
  const data = body.split("\n").find((line) => line.startsWith("data: "));
  assert.ok(data);
  return JSON.parse(data.slice(6));
}

test("MCP endpoint initializes and exposes read-only grade tools", async () => {
  const initialized = await call("initialize", 1, {
    protocolVersion: "2025-11-25",
    capabilities: {},
    clientInfo: { name: "test", version: "1.0" },
  });
  assert.equal(initialized.result.serverInfo.name, "unt-grades");

  const listed = await call("tools/list", 2, {});
  assert.deepEqual(listed.result.tools.map((tool: { name: string }) => tool.name), [
    "search_grades",
    "get_course_grades",
    "get_instructor_courses",
  ]);
  assert.ok(listed.result.tools.every((tool: { annotations: { readOnlyHint?: boolean } }) =>
    tool.annotations.readOnlyHint === true
  ));
});
