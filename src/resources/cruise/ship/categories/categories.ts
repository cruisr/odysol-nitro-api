// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RichmediaAPI from './richmedia';
import { Richmedia, RichmediaRetrieveParams, RichmediaRetrieveResponse } from './richmedia';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Categories extends APIResource {
  richmedia: RichmediaAPI.Richmedia = new RichmediaAPI.Richmedia(this._client);

  /**
   * Ship Categories (Basic Info)
   *
   * @example
   * ```ts
   * const category =
   *   await client.cruise.ship.categories.retrieve();
   * ```
   */
  retrieve(
    params: CategoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryRetrieveResponse> {
    const { SiteItemId } = params ?? {};
    return this._client.get('/v2/cruise/ship/categories/14393', {
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface CategoryRetrieveResponse {
  data?: CategoryRetrieveResponse.Data;

  isSucceed?: boolean;
}

export namespace CategoryRetrieveResponse {
  export interface Data {
    id?: number;

    categories?: Array<Data.Category>;

    cruiselineId?: number;
  }

  export namespace Data {
    export interface Category {
      id?: number;

      code?: string;

      contentInfo?: Category.ContentInfo;

      type?: string;
    }

    export namespace Category {
      export interface ContentInfo {
        shortDescription?: string;
      }
    }
  }
}

export interface CategoryRetrieveParams {
  SiteItemId?: string;
}

Categories.Richmedia = Richmedia;

export declare namespace Categories {
  export {
    type CategoryRetrieveResponse as CategoryRetrieveResponse,
    type CategoryRetrieveParams as CategoryRetrieveParams,
  };

  export {
    Richmedia as Richmedia,
    type RichmediaRetrieveResponse as RichmediaRetrieveResponse,
    type RichmediaRetrieveParams as RichmediaRetrieveParams,
  };
}
