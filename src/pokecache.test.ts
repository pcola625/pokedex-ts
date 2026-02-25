import { Cache } from "./pokecache.js";
import { test, expect } from "vitest";

test.concurrent.each([
  { key: "https:/exampple.you.suck.com",
    val: "to each their won",
    interval: 750, // because 500 ms was failing
  },
  {
    key: "https://example.com",
    val: "testdata",
    interval: 1000, // 1 seconds
  },
  {
    key: "https://example.com/path",
    val: "moretestdata",
    interval: 1998, // 2 second
  },
])("Test Caching $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, val);
  const cached = cache.get(key);
  expect(cached).toBe(val);

  await new Promise((resolve) => setTimeout(resolve, interval * 2.5));
  const reaped = cache.get(key);
  expect(reaped).toBe(undefined);

  cache.stopReapLoop();
});
