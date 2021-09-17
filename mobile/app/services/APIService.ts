import {BASE_URL} from '@app/config';

export async function get<T> (url: string, params?: object): Promise<T> {
  const fullUrl = BASE_URL + url;
  try {
    const response = await fetch(fullUrl, params);
    const data = response.json();
    return data;

  } catch (e) {
    console.warn(`GET ${fullUrl} failed.`, e);
    throw e;
  }
}

export default {
  get,
};
