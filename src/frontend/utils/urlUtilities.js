export function searchToJson(search) {
  const searchParams = search.replace(/\?/, "").split("&");
  let resultParamsObj = {};
  searchParams.forEach((param) => {
    const paramArray = param.split("=");
    resultParamsObj = {
      ...resultParamsObj,
      [paramArray[0]]: decodeURI(paramArray[1]),
    };
  });
  return resultParamsObj;
}

export function jsonToSearch(json) {
  let resultSearch = "";
  for (const key in json) {
    resultSearch += `${key}=${encodeURI(json[key])}&`;
  }
  if (resultSearch) {
    resultSearch = resultSearch.replace(/&$/, "");
    resultSearch = `?${resultSearch}`;
  }
  return resultSearch;
}
