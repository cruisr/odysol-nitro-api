// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { NitroAPI } from '../client';

export abstract class APIResource {
  protected _client: NitroAPI;

  constructor(client: NitroAPI) {
    this._client = client;
  }
}
