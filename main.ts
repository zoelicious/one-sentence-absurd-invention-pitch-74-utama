import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence = "The Toast Truce Toaster ends burnt-breakfast wars by letting every slice file a browning preference form, then toasting only the slices that pass a three-stamp approval process.";

try {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
