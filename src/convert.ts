import init, { b64encode, b64decode } from "./b64";

export const encodeB64 = (text: string) => b64encode(text);
export const decodeB64 = (text: string) => b64decode(text);

export const Mode = {
  PtoB64: "PtoB64",
  B64toP: "B64toP",
} as const;
export type Mode = typeof Mode[keyof typeof Mode];
