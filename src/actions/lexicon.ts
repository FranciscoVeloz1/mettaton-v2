import { regularExpresions } from "./regex";
import { ILexicon } from "../interfaces/ILexicon";

export const lexicon = (data: string[]) => {
  const result: ILexicon[] = [];

  for (let i = 0; i < data.length; i++) {
    const token = data[i];

    for (let j = 0; j < regularExpresions.length; j++) {
      const r = regularExpresions[j];

      const comparison = r.regex.test(token.trim());
      if (comparison) {
        result.push({
          num: i,
          token: token.trim(),
          description: r.title,
          line: i,
        });

        j = regularExpresions.length + 1;
      }
    }
  }

  console.table(result);
};
