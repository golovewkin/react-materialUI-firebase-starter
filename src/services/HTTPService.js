import firebase from './firebase';
import {LogService} from "./LogService";

export class HttpService {
  static _server_url = process.env.REACT_APP_SERVER_URL;
  static controllers = {};

  static async get(url, options) {
    const fetchOptions = { ...HttpService._getBaseOptions('GET'), ...options };
    return await HttpService._fetch(url, fetchOptions);
  }

  static abort(url) {
    try {
      if (!HttpService.controllers[url]) return; //request is not exist
      HttpService.controllers[url].abort();
    } catch (e) {
      LogService.logError(`trying abort request to url: ${url} error`, e);
    }
  }

  static async post(url, options) {
    const fetchOptions = { ...HttpService._getBaseOptions('POST'), ...options };
    return await HttpService._fetch(url, fetchOptions);
  }

  static async put(url, options) {
    const fetchOptions = { ...HttpService._getBaseOptions('PUT'), ...options };
    return await HttpService._fetch(url, fetchOptions);
  }

  static _buildRequestOptions = async ({
    isFile,
    body,
    method,
    formData
  }) => {
    const requestObject = {
      method: '',
      headers: {}
    };

    requestObject.method = method;
    requestObject.headers.Accept = 'application/json';

    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const token = await currentUser.getIdToken(false);
      requestObject.headers['Authorization'] = `Bearer ${token}`;
    }

    if (formData) {
      requestObject.body = formData;
    } else if (body) {
      requestObject.body = JSON.stringify(body);
    }

    if (!isFile) {
      requestObject.headers['Content-Type'] = 'application/json';
    }
    return requestObject;
  };

  static async getBlobResponse(response) {
    const blob = await response.blob();
    //need this because failed response has ok:true
    if (blob.type.includes('json')) {
      throw new Error('file download error');
    } else return { ok: true, data: blob };
  }

  static async _fetch(url, options) {
    try {
      const requestObject = await HttpService._buildRequestOptions(options);

      const controller = new AbortController();
      requestObject.signal = controller.signal;
      HttpService.controllers[url] = controller;

      const res = await fetch(`${HttpService._server_url}${url}`, requestObject);

      HttpService.controllers[url] = null; //remove controller

      if (res.ok) {
        return res;
      }

      throw new Error(res.statusText);
    } catch (e) {
      throw e;
    }
  }

  static _getBaseOptions(method) {
    return {
      method,
      isFile: false,
      body: null,
      user: null,
      formData: null,
    };
  }
}

export default HttpService;
