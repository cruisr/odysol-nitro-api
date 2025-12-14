// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ItineraryAPI from './itinerary';
import {
  Itinerary as ItineraryAPIItinerary,
  ItineraryRetrieveParams,
  ItineraryRetrieveResponse,
} from './itinerary';
import * as ShipAPI from './ship/ship';
import { Ship as ShipAPIShip } from './ship/ship';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Cruise extends APIResource {
  itinerary: ItineraryAPI.Itinerary = new ItineraryAPI.Itinerary(this._client);
  ship: ShipAPI.Ship = new ShipAPI.Ship(this._client);

  /**
   * Cruise Search with VoyageId & CruiseType CruiseOnly
   *
   * @example
   * ```ts
   * const cruise = await client.cruise.create({
   *   filters: [
   *     { key: 'voyageId', values: ['16559601'] },
   *     { key: 'cruiseType', values: ['CruiseOnly'] },
   *   ],
   * });
   * ```
   */
  create(
    params: CruiseCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CruiseCreateResponse> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/cruise', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Cruise Search Counters Only
   *
   * @example
   * ```ts
   * const response = await client.cruise.getFacets();
   * ```
   */
  getFacets(
    params: CruiseGetFacetsParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CruiseGetFacetsResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/cruise/Facets', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface CruiseCreateResponse {
  data?: CruiseCreateResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseCreateResponse {
  export interface Data {
    list?: Array<Data.List>;

    pageSize?: number;

    pageStart?: number;

    rules?: Array<unknown>;

    total?: number;
  }

  export namespace Data {
    export interface List {
      id?: number;

      alternateItineraryInfo?: Array<unknown>;

      arrivalDateTime?: string;

      bookingSettings?: List.BookingSettings;

      categoryTypes?: Array<string>;

      code?: string;

      contentInfo?: unknown;

      cruiseDuration?: number;

      cruiseName?: string;

      cruisePackageArrivalDateTime?: string;

      cruisePackageDepartureDateTime?: string;

      cruiseTourName?: string;

      cruiseType?: string;

      departureDateTime?: string;

      destination?: List.Destination;

      destinationIds?: Array<number>;

      destinationImagePath?: string;

      dynamicRule?: List.DynamicRule;

      endDateTime?: string;

      isActive?: boolean;

      itinerary?: List.Itinerary;

      maxOccupancy?: number;

      minGuestAge?: number;

      minOccupancy?: number;

      name?: string;

      packageTourId?: number;

      parentDestinationIds?: Array<number>;

      prices?: Array<List.Price>;

      ship?: List.Ship;

      shipIds?: Array<number>;

      startDateTime?: string;

      status?: string;

      stnExternalId?: string;

      uniqueItineraryId?: string;

      voyageId?: string;
    }

    export namespace List {
      export interface BookingSettings {
        bookingMode?: string;
      }

      export interface Destination {
        id?: number;

        priority?: number;

        type?: string;
      }

      export interface DynamicRule {
        fareDetailsPromoCodes?: Array<string>;

        fareDetailsPromoCodesInfo?: Array<DynamicRule.FareDetailsPromoCodesInfo>;
      }

      export namespace DynamicRule {
        export interface FareDetailsPromoCodesInfo {
          fareDetailsPromoCode?: string;

          subFareDetailsPromoCodes?: Array<string>;
        }
      }

      export interface Itinerary {
        id?: number;

        arrival?: Itinerary.Arrival;

        departure?: Itinerary.Departure;

        duration?: number;

        fallbackMapPath?: string;

        mapPath?: string;

        normalizedPortsOfCall?: string;

        portsOfCalls?: string;
      }

      export namespace Itinerary {
        export interface Arrival {
          code?: string;

          type?: string;
        }

        export interface Departure {
          code?: string;

          type?: string;
        }
      }

      export interface Price {
        currencyCode?: string;

        items?: Array<Price.Item>;

        modifiedOn?: string;
      }

      export namespace Price {
        export interface Item {
          name?: string;

          value?: number;
        }
      }

      export interface Ship {
        id?: number;

        cruiseline?: Ship.Cruiseline;

        images?: Array<Ship.Image>;

        priority?: number;
      }

      export namespace Ship {
        export interface Cruiseline {
          id?: number;

          logoPath?: string;

          priority?: number;
        }

        export interface Image {
          imageType?: string;

          path?: string;

          type?: string;
        }
      }
    }
  }
}

export interface CruiseGetFacetsResponse {
  data?: CruiseGetFacetsResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseGetFacetsResponse {
  export interface Data {
    facets?: Array<Data.Facet>;

    list?: Array<unknown>;

    pageSize?: number;

    pageStart?: number;

    total?: number;
  }

  export namespace Data {
    export interface Facet {
      isRangeFilter?: boolean;

      key?: string;

      values?: Array<Facet.Value>;
    }

    export namespace Facet {
      export interface Value {
        count?: number;

        from?: number;

        to?: number;
      }
    }
  }
}

export interface CruiseCreateParams {
  /**
   * Body param:
   */
  filters?: Array<CruiseCreateParams.Filter>;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export namespace CruiseCreateParams {
  export interface Filter {
    key?: string;

    values?: Array<string>;
  }
}

export interface CruiseGetFacetsParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

Cruise.Itinerary = ItineraryAPIItinerary;
Cruise.Ship = ShipAPIShip;

export declare namespace Cruise {
  export {
    type CruiseCreateResponse as CruiseCreateResponse,
    type CruiseGetFacetsResponse as CruiseGetFacetsResponse,
    type CruiseCreateParams as CruiseCreateParams,
    type CruiseGetFacetsParams as CruiseGetFacetsParams,
  };

  export {
    ItineraryAPIItinerary as Itinerary,
    type ItineraryRetrieveResponse as ItineraryRetrieveResponse,
    type ItineraryRetrieveParams as ItineraryRetrieveParams,
  };

  export { ShipAPIShip as Ship };
}
