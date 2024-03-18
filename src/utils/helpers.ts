export function parseQueryParams(
  query: Record<string, string | number | boolean>,
): string {
  const params = new URLSearchParams();

  for (const key in query) {
    if (Object.prototype.hasOwnProperty.call(query, key)) {
      params.append(key, query[key].toString());
    }
  }

  return params.toString() ? `${params}` : '';
}

export function parseSearchParams(
  searchParams: URLSearchParams,
): Record<string, string | string[]> {
  const queryParams: Record<string, string | string[]> = {};

  searchParams.forEach((value, key) => {
    if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
      if (!Array.isArray(queryParams[key])) {
        queryParams[key] = [queryParams[key] as string];
      }
      (queryParams[key] as string[]).push(value);
    } else {
      queryParams[key] = value;
    }
  });

  return queryParams;
}
