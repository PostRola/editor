
export function trimQuery(query: string) {
  return query.replace('@media', '').trim();
}
