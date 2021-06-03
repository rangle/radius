let lastId = 0;

export function uuid() {
  lastId++;
  return `icon-${lastId}`;
}
