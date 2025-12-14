// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class DomainTables extends APIResource {
  /**
   * Domain Tables
   *
   * @example
   * ```ts
   * const domainTables = await client.domainTables.list();
   * ```
   */
  list(
    params: DomainTableListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DomainTableListResponse> {
    const { SiteItemId } = params ?? {};
    return this._client.get('/v2/DomainTables', {
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface DomainTableListResponse {
  data?: Array<DomainTableListResponse.Data>;

  isSucceed?: boolean;
}

export namespace DomainTableListResponse {
  export interface Data {
    data?: Array<Data.Data>;

    entityType?: string;
  }

  export namespace Data {
    export interface Data {
      name?: string;

      value?: number;
    }
  }
}

export interface DomainTableListParams {
  SiteItemId?: string;
}

export declare namespace DomainTables {
  export {
    type DomainTableListResponse as DomainTableListResponse,
    type DomainTableListParams as DomainTableListParams,
  };
}
