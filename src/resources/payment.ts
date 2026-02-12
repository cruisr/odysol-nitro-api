// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Payment extends APIResource {
  /**
   * This API will generate a token which will be used to make payment for a booking.
   * Here while generating the token we are not using the CVV code.
   *
   * @example
   * ```ts
   * const response = await client.payment.tokenizeCard({
   *   amount: 1424.5,
   *   BillingDetails: {
   *     Address: { ... },
   *     BankName: 'HSBC',
   *     ContactInfo: { ... },
   *   },
   *   cardHolderName: 'John Doe',
   *   currency: 'USD',
   *   expiration: '12/26',
   *   Number: '4387751111111111',
   *   type: 'VI',
   * });
   * ```
   */
  tokenizeCard(
    params: PaymentTokenizeCardParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentTokenizeCardResponse> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/payment/TokenizeCard', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface PaymentTokenizeCardResponse {
  data?: PaymentTokenizeCardResponse.Data;

  isSucceed?: boolean;
}

export namespace PaymentTokenizeCardResponse {
  export interface Data {
    token?: string;
  }
}

export interface PaymentTokenizeCardParams {
  /**
   * Body param
   */
  amount?: number;

  /**
   * Body param
   */
  BillingDetails?: PaymentTokenizeCardParams.BillingDetails;

  /**
   * Body param
   */
  cardHolderName?: string;

  /**
   * Body param
   */
  currency?: string;

  /**
   * Body param
   */
  expiration?: string;

  /**
   * Body param
   */
  Number?: string;

  /**
   * Body param
   */
  type?: string;

  /**
   * Header param
   */
  SiteItemId?: string;
}

export namespace PaymentTokenizeCardParams {
  export interface BillingDetails {
    Address?: BillingDetails.Address;

    BankName?: string;

    ContactInfo?: BillingDetails.ContactInfo;
  }

  export namespace BillingDetails {
    export interface Address {
      Addressline1?: string;

      Addressline2?: string;

      City?: Address.City;

      Country?: Address.Country;

      PostalCode?: string;

      State?: Address.State;
    }

    export namespace Address {
      export interface City {
        name?: string;
      }

      export interface Country {
        id?: string;
      }

      export interface State {
        id?: string;
      }
    }

    export interface ContactInfo {
      Phone1?: ContactInfo.Phone1;

      Phone2?: ContactInfo.Phone2;
    }

    export namespace ContactInfo {
      export interface Phone1 {
        CountryCode?: string;

        Number?: string;

        Type?: string;
      }

      export interface Phone2 {
        CountryCode?: string;

        Number?: string;

        Type?: string;
      }
    }
  }
}

export declare namespace Payment {
  export {
    type PaymentTokenizeCardResponse as PaymentTokenizeCardResponse,
    type PaymentTokenizeCardParams as PaymentTokenizeCardParams,
  };
}
