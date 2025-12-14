// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class All extends APIResource {
  /**
   * Get Airport Country and City List for Cruise Lines Request
   *
   * @example
   * ```ts
   * const response =
   *   await client.master.all.retrieveCruiseLineList();
   * ```
   */
  retrieveCruiseLineList(
    params: AllRetrieveCruiseLineListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AllRetrieveCruiseLineListResponse> {
    const { SiteItemId } = params ?? {};
    return this._client.get('/v2/master/All/CruiseLine', {
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface AllRetrieveCruiseLineListResponse {
  data?: Array<AllRetrieveCruiseLineListResponse.Data>;

  isSucceed?: boolean;
}

export namespace AllRetrieveCruiseLineListResponse {
  export interface Data {
    id?: number;

    active?: boolean;

    bookingMode?: string;

    internalStatus?: number;

    name?: string;

    priority?: number;

    settings?: Data.Settings;
  }

  export namespace Data {
    export interface Settings {
      adultMinAge?: string;

      airportCityCodesCsv?: string;

      airportCountryCodesCsv?: string;

      childMaxAge?: string;

      cityCodesCsv?: string;

      countryCodesCsv?: string;

      seniorAge?: string;

      showPrices?: string;

      transportationTypesJson?: string;
    }
  }
}

export interface AllRetrieveCruiseLineListParams {
  SiteItemId?: string;
}

export declare namespace All {
  export {
    type AllRetrieveCruiseLineListResponse as AllRetrieveCruiseLineListResponse,
    type AllRetrieveCruiseLineListParams as AllRetrieveCruiseLineListParams,
  };
}
