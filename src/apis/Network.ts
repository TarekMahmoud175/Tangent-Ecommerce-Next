import { ApiDomain } from "./Domain";


type RequestInit = {
  method: string,
  headers?: Headers,
  body?: string | FormData
}

export class Network {
  private static bearer: string = "";


  static async fetch(url: string, init: RequestInit, addAuth: boolean): Promise<any> {
    const requestedUrl = url.includes("http")
      ? url
      : ApiDomain + url;

    const response = await fetch(requestedUrl, {
      mode: "cors",
      ...init,
      headers: Network.getHeaders(init.headers, addAuth),
    });

    if (![204, 201, 200].includes(response.status)) {
      const data = await response.json();
      return Promise.reject(data);
    } else if (response.status === 204) {
      return Promise.resolve({});
    } else {
      return response.json();
    }
  }

  private static getHeaders(originalHeaders: Headers | undefined, auth: boolean): Headers {
    let headers = new Headers();

    if (auth) {
      this.bearer = localStorage.getItem("bearer") || "";
      headers.append("Authorization", `Token ${this.bearer}`);
    }

    if (!originalHeaders || originalHeaders.get("content-type") !== "form-data") {
      headers.append("content-type", "application/json");
    }

    return headers;
  }
}
