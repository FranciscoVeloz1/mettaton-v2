import { regularExpresions } from './regex'
import { ILexicon } from '../interfaces/ILexicon'

export const lexicon = (data: string[]) => {
  const result: ILexicon[] = data
    .map((token, i) => {
      const trimmedToken = token.trim()
      const matchedRegex = regularExpresions.find((r) => r.regex.test(trimmedToken))

      if (matchedRegex) {
        return {
          num: i,
          token: trimmedToken,
          description: matchedRegex.title,
          line: i
        }
      }

      return {
        num: i,
        token: trimmedToken,
        description: 'unknown',
        line: i
      }
    })
    .filter((result) => result !== null)

  return result
}
