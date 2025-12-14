// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class PackageDetails extends APIResource {
  /**
   * Custom Package Details
   *
   * @example
   * ```ts
   * const response =
   *   await client.packageDetails.retrieve36228();
   * ```
   */
  retrieve36228(
    params: PackageDetailRetrieve36228Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PackageDetailRetrieve36228Response> {
    const { SiteItemId } = params ?? {};
    return this._client.get('/v2/packageDetails/36228', {
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface PackageDetailRetrieve36228Response {
  data?: PackageDetailRetrieve36228Response.Data;

  isSucceed?: boolean;
}

export namespace PackageDetailRetrieve36228Response {
  export interface Data {
    contentInfo?: Data.ContentInfo;

    entityId?: string;

    inclusion?: string;

    isActive?: boolean;

    itineraryDetails?: Array<Data.ItineraryDetail>;

    languageId?: number;

    media?: Data.Media;

    packageTourId?: number;

    pdfPath?: string;

    policies?: Data.Policies;

    siteItemId?: number;

    status?: string;

    templateName?: string;

    travelNotes?: string;

    validFrom?: string;

    validTill?: string;
  }

  export namespace Data {
    export interface ContentInfo {
      longDescription?: string;

      name?: string;

      shortDescription?: string;
    }

    export interface ItineraryDetail {
      id?: number;

      description?: string;

      isDefault?: boolean;

      longDescription?: string;

      optionalNodes?: Array<unknown>;

      position?: string;

      priority?: number;

      type?: string;
    }

    export interface Media {
      files?: Array<Media.File>;
    }

    export namespace Media {
      export interface File {
        imageType?: string;

        name?: string;

        path?: string;

        type?: string;
      }
    }

    export interface Policies {
      generic?: string;
    }
  }
}

export interface PackageDetailRetrieve36228Params {
  SiteItemId?: string;
}

export declare namespace PackageDetails {
  export {
    type PackageDetailRetrieve36228Response as PackageDetailRetrieve36228Response,
    type PackageDetailRetrieve36228Params as PackageDetailRetrieve36228Params,
  };
}
