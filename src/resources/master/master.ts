// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AllAPI from './all';
import { All, AllRetrieveCruiseLineListParams, AllRetrieveCruiseLineListResponse } from './all';

export class Master extends APIResource {
  all: AllAPI.All = new AllAPI.All(this._client);
}

Master.All = All;

export declare namespace Master {
  export {
    All as All,
    type AllRetrieveCruiseLineListResponse as AllRetrieveCruiseLineListResponse,
    type AllRetrieveCruiseLineListParams as AllRetrieveCruiseLineListParams,
  };
}
