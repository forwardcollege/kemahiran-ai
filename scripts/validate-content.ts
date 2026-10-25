import { loadResources } from "../src/lib/content/repository";

const resources = loadResources();
const counts = resources.reduce<Record<string, number>>((result, resource) => {
  result[resource.data.type] = (result[resource.data.type] ?? 0) + 1;
  return result;
}, {});

console.log(
  `Validated ${resources.length} resources: ${JSON.stringify(counts)}`,
);
