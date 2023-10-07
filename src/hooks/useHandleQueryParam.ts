type QueryParams = {
  [key: string]: string;
}


export function useHandleQueryParams(QueryPAramObject: QueryParams): string {
  let queryStr: string = "?";
  Object.keys(QueryPAramObject).forEach((key: string) => {
    let value: string = QueryPAramObject[key]
    queryStr += key + "=" + value + "&";
  });
  return queryStr;
}
