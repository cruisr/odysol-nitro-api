// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Itinerary extends APIResource {
  /**
   * Cruise Itinerary
   *
   * @example
   * ```ts
   * const itinerary = await client.cruise.itinerary.retrieve();
   * ```
   */
  retrieve(
    params: ItineraryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItineraryRetrieveResponse> {
    const { SiteItemId } = params ?? {};
    return this._client.get('/v2/cruise/Itinerary/336475', {
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface ItineraryRetrieveResponse {
  data?: ItineraryRetrieveResponse.Data;

  isSucceed?: boolean;
}

export namespace ItineraryRetrieveResponse {
  export interface Data {
    id?: number;

    nodes?: Array<Data.Node>;

    normalizedPortsOfCall?: string;

    portsOfCalls?: string;
  }

  export namespace Data {
    export interface Node {
      description?: string;

      port?: Node.Port;
    }

    export namespace Node {
      export interface Port {
        code?: string;

        internalCode?: string;

        type?: string;
      }
    }
  }
}

export interface ItineraryRetrieveParams {
  SiteItemId?: string;
}

export declare namespace Itinerary {
  export {
    type ItineraryRetrieveResponse as ItineraryRetrieveResponse,
    type ItineraryRetrieveParams as ItineraryRetrieveParams,
  };
}
