import fs from "fs/promises";

import { lexicon } from "./lexicon";

export const readFile = async (file: string) => {
  try {
    const split = file.split(".");
    if (!file.includes(".mtt") || split[split.length - 1] !== "mtt")
      throw new Error("File extension must be .mtt");

    const data = await fs.readFile(file, "utf8");
    const splitted = data.split(/[\n]+/);
    lexicon(splitted);
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
};
