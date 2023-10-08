type QueryParams = {
  [key: string]: string | number | null;
}


export function useHandleQueryParams(QueryPAramObject: QueryParams): string {
  let queryStr: string = "?";
  Object.keys(QueryPAramObject).forEach((key: string) => {
    let value: string = String(QueryPAramObject[key])
    queryStr += key + "=" + value + "&";
  });
  return queryStr;
}
