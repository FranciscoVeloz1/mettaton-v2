import { IRegex } from '../interfaces/IRegex'

export const regularExpresions: IRegex[] = [
  {
    title: 'main',
    regex: /^void main+[(\w*\s*)]+$/i
  },
  {
    title: 'start key',
    regex: /^\s*{+$/i
  },
  {
    title: 'end key',
    regex: /^\s*}+$/i
  },
  {
    title: 'comment',
    regex: /^\s*[//]\w*/i
  },
  {
    title: 'instance',
    regex: /(\w+)\s+(\w+)\s*=\s*new\s+\w+\(([^)]+)\)/
  },
  {
    title: 'variable',
    regex: /(\w+)\s+(\w+)\s*=\s*(.*)/
  },
  {
    title: 'else if',
    regex: /\belse if\s*\([^)]+\)/
  },
  {
    title: 'if',
    regex: /\bif\s*\([^)]+\)/
  },
  {
    title: 'else',
    regex: /^\s*else+$/
  },
  {
    title: 'while',
    regex: /^\s*while\s*[(\w*)]+$/
  },
  {
    title: 'active function',
    regex: /(\w+)\.(\w+)\(([^)]*)\)/
  },
  {
    title: 'time',
    regex: /^\s*wait[(\w*)]+$/
  },
  {
    title: 'comparison',
    regex: /^[(]\w*\s*c|<|>|==|!=|<=\s*\w*[)]+$/i
  },
  {
    title: 'empty',
    regex: /^\s*$/
  },
  {
    title: 'unknown',
    regex: /./g
  }
]
