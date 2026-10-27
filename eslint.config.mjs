import next from "eslint-config-next/core-web-vitals";
import ts from "eslint-config-next/typescript";

const config = [
  { ignores: [".next/**", "node_modules/**", "design/**", "public/**"] },
  ...next,
  ...ts,
];

export default config;
