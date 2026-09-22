import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("15種類の診断タイプと画像がそろっている", async () => {
  const quizData = await readFile(new URL("app/quiz-data.ts", root), "utf8");
  assert.equal([...quizData.matchAll(/\bid:"[^"]+"/g)].length, 15);
  const images = await readdir(new URL("public/images/sea-types/", root));
  assert.equal(images.filter((name) => /\.(png|jpe?g)$/i.test(name)).length, 15);
});

test("12問の質問と15件の正式結果文がそろっている", async () => {
  const quizData = await readFile(new URL("app/quiz-data.ts", root), "utf8");
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  assert.equal([...quizData.matchAll(/\{ text: "/g)].length, 12);
  assert.equal([...page.matchAll(/const formal[A-Z][A-Za-z]+ = \{\r?\n  catchcopy:/g)].length, 15);
});

test("個人情報・回答を永続化または外部送信しない", async () => {
  const source = (await Promise.all([
    "app/page.tsx", "app/quiz-data.ts", "app/result-details.ts",
  ].map((path) => readFile(new URL(path, root), "utf8")))).join("\n");
  assert.doesNotMatch(source, /localStorage|sessionStorage|indexedDB|document\.cookie|sendBeacon|XMLHttpRequest|\bfetch\s*\(/);
  assert.doesNotMatch(source, /authenticated-user-email|authenticated-user-full-name/);
});
