import assert from "node:assert/strict";
import test from "node:test";
import { JSDOM } from "jsdom";
import { act, createElement } from "react";
import HomeWelcome from "./HomeWelcome";

test("welcome rotation can be paused and stays still for reduced motion", async () => {
  const dom = new JSDOM("<div id='root'></div>", { url: "http://localhost" });
  Object.defineProperties(globalThis, {
    window: { configurable: true, value: dom.window },
    document: { configurable: true, value: dom.window.document },
    navigator: { configurable: true, value: dom.window.navigator },
    IS_REACT_ACT_ENVIRONMENT: { configurable: true, value: true },
  });
  let reducedMotion = false;
  let tick: (() => void) | null = null;
  Object.defineProperties(dom.window, {
    matchMedia: { value: () => ({ get matches() { return reducedMotion; } }) },
    setInterval: { value: (callback: () => void) => { tick = callback; return 1; } },
    clearInterval: { value: () => { tick = null; } },
  });
  const { createRoot } = await import("react-dom/client");
  const root = createRoot(document.getElementById("root")!);
  try {
    await act(async () => root.render(createElement(HomeWelcome)));
    assert.match(document.body.textContent!, /A little homework/);
    await act(async () => tick?.());
    assert.match(document.body.textContent!, /New semester/);
    await act(async () => (document.querySelector("button") as HTMLButtonElement).click());
    assert.equal(tick, null);
    assert.equal(document.querySelector("button")!.getAttribute("aria-label"), "Resume welcome messages");
    await act(async () => (document.querySelector("button") as HTMLButtonElement).click());
    reducedMotion = true;
    await act(async () => tick?.());
    assert.match(document.body.textContent!, /New semester/);
    reducedMotion = false;
    await act(async () => tick?.());
    assert.match(document.body.textContent!, /Got a class in mind/);
  } finally {
    await act(async () => root.unmount());
    assert.equal(tick, null);
    dom.window.close();
  }
});
