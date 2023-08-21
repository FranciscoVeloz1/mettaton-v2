import { IRegex } from "../interfaces/IRegex";

export const regularExpresions: IRegex[] = [
  {
    title: "main",
    regex: /^void main+[(\w*\s*)]+$/i,
  },
  {
    title: "start key",
    regex: /^\s*{+$/i,
  },
  {
    title: "end key",
    regex: /^\s*}+$/i,
  },
  {
    title: "comment",
    regex: /^\s*[//]\w*/i,
  },
  {
    title: "if",
    regex: /^\s*if[(\w*)]+$/,
  },
  {
    title: "else",
    regex: /^\s*else+$/,
  },
  {
    title: "time",
    regex: /^\s*wait[(\w*)]+$/,
  },
  {
    title: "comparison",
    regex: /^[(]\w*\s*c|<|>|==|!=|<=\s*\w*[)]+$/i,
  },
  {
    title: "unknown",
    regex: /./g,
  },
];
