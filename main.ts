// Writes the entry line to /output/entry.txt for the make.fun gate.
import { writeFileSync, mkdirSync } from 'node:fs';

const line = "I'm out of the office until Monday. My inbox is being watched by a junior model with no sense of urgency and full access to the 'reply all' button.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + '/entry.txt', line);
