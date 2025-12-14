// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CruiseAPI from './cruise';
import {
  Cruise as CruiseAPICruise,
  CruiseCreateReservationParams,
  CruiseCreateReservationResponse,
  CruiseExtendHoldParams,
  CruiseExtendHoldResponse,
  CruiseGetCabinDetailsParams,
  CruiseGetCabinDetailsResponse,
  CruiseGetFareCodeDetailsParams,
  CruiseGetFareCodeDetailsResponse,
  CruiseGetHistoryFromSupplierParams,
  CruiseGetHistoryFromSupplierResponse,
  CruiseGetHistoryParams,
  CruiseGetHistoryResponse,
  CruiseGetItineraryFromSupplierParams,
  CruiseGetItineraryFromSupplierResponse,
  CruiseGetPastPassengerDetailsParams,
  CruiseGetPastPassengerDetailsResponse,
  CruiseHoldCabinParams,
  CruiseHoldCabinResponse,
  CruiseListAddonsParams,
  CruiseListAddonsResponse,
  CruiseListAirGatewaysParams,
  CruiseListAirGatewaysResponse,
  CruiseListCabinsParams,
  CruiseListCabinsResponse,
  CruiseListCategoriesParams,
  CruiseListCategoriesResponse,
  CruiseListDiningsParams,
  CruiseListDiningsResponse,
  CruiseListFareCodesParams,
  CruiseListFareCodesResponse,
  CruiseListPackagesParams,
  CruiseListPackagesResponse,
  CruiseListPosParams,
  CruiseListPosResponse,
  CruiseListPricesParams,
  CruiseListPricesResponse,
  CruiseListSpecialServicesParams,
  CruiseListSpecialServicesResponse,
  CruiseListTransfersParams,
  CruiseListTransfersResponse,
  CruiseModifyReservationParams,
  CruiseModifyReservationResponse,
  CruiseReadFromSupplierParams,
  CruiseReadFromSupplierResponse,
  CruiseRecordPaymentParams,
  CruiseRecordPaymentResponse,
  CruiseReleaseCabinParams,
  CruiseReleaseCabinResponse,
  CruiseSearchPackageWithSupplierParams,
  CruiseSearchPackageWithSupplierResponse,
  CruiseSearchReservationParams,
  CruiseSearchReservationResponse,
  CruiseSearchWithSupplierParams,
  CruiseSearchWithSupplierResponse,
} from './cruise';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Reservation extends APIResource {
  cruise: CruiseAPI.Cruise = new CruiseAPI.Cruise(this._client);

  /**
   * This API will make a payment for a respective booking done previously.
   *
   * @example
   * ```ts
   * const response = await client.reservation.applyPayment({
   *   id: 66110,
   *   cruiseReservation: {
   *     id: 114090,
   *     syncInfo: {
   *       supplierSyncInfo: {
   *         token: '417983',
   *         lastSyncOn: '20-Feb-2023 05:29:55',
   *         lastModifiedOn: '20-Feb-2023 05:44:54',
   *       },
   *       apiSyncInfo: {
   *         token: 'X7sgay0T20iRYDSnVxpdSYJiRWwAVpMA',
   *         sessionId: 'a7346091-1a57-495d-8262-456c00569300',
   *         lastSyncOn: '20-Feb-2023 05:29:59',
   *       },
   *     },
   *   },
   *   paymentToProcess: {
   *     cardToken: 'f5d94630-61d8-4bf5-811d-1ca43a2882dd',
   *     amount: 1053.46,
   *   },
   * });
   * ```
   */
  applyPayment(
    params: ReservationApplyPaymentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/reservation/pay', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Cancel Reservation
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cancelReservation();
   * ```
   */
  cancelReservation(
    params: ReservationCancelReservationParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<ReservationCancelReservationResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cancel', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This API will change the status of booking from held to confirm. It works only
   * for MSC cruiseline
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.confirmReservation();
   * ```
   */
  confirmReservation(
    params: ReservationConfirmReservationParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<ReservationConfirmReservationResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/confirm', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This API will read the booking details from supplier end. It will generate
   * supplierSync details and will return token on the basis of reservation details.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.readFromSupplier();
   * ```
   */
  readFromSupplier(
    params: ReservationReadFromSupplierParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/readfromsupplier', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This API will read the booking details from database.
   *
   * @example
   * ```ts
   * const response = await client.reservation.readReservation({
   *   id: 65822,
   *   cruiseReservation: { id: 113802 },
   *   trackingInfo: { token: 'EQTEMPKEN' },
   * });
   * ```
   */
  readReservation(
    params: ReservationReadReservationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReservationReadReservationResponse> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/reservation/read', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * It will release the lock applied for a respective booking.This API works for
   * Royal Caribbean cruiseline
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.releaseReservation();
   * ```
   */
  releaseReservation(
    params: ReservationReleaseReservationParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<ReservationReleaseReservationResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/release', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type ReservationApplyPaymentResponse = unknown;

export interface ReservationCancelReservationResponse {
  advisories?: Array<unknown>;

  data?: ReservationCancelReservationResponse.Data;

  isSucceed?: boolean;
}

export namespace ReservationCancelReservationResponse {
  export interface Data {
    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface ReservationConfirmReservationResponse {
  advisories?: Array<ReservationConfirmReservationResponse.Advisory>;

  data?: ReservationConfirmReservationResponse.Data;

  isSucceed?: boolean;
}

export namespace ReservationConfirmReservationResponse {
  export interface Advisory {
    code?: string;

    message?: string;

    type?: string;
  }

  export interface Data {
    agencyConfirmation?: string;

    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      addOns?: Array<CruiseReservation.AddOn>;

      categories?: Array<CruiseReservation.Category>;

      cruise?: CruiseReservation.Cruise;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      dinings?: Array<CruiseReservation.Dining>;

      paymentSchedules?: CruiseReservation.PaymentSchedules;

      prices?: Array<CruiseReservation.Price>;

      reservationReferences?: CruiseReservation.ReservationReferences;

      status?: number;

      syncInfo?: CruiseReservation.SyncInfo;

      usersInfo?: CruiseReservation.UsersInfo;
    }

    export namespace CruiseReservation {
      export interface AddOn {
        code?: string;

        combinableCodes?: Array<unknown>;

        name?: string;

        prices?: Array<AddOn.Price>;
      }

      export namespace AddOn {
        export interface Price {
          amount?: number;

          type?: string;
        }
      }

      export interface Category {
        id?: number;

        cabins?: Array<Category.Cabin>;

        code?: string;

        details?: Category.Details;

        fares?: Array<Category.Fare>;

        name?: string;

        type?: number;
      }

      export namespace Category {
        export interface Cabin {
          deck?: Cabin.Deck;

          location?: string;

          number?: string;

          occupancy?: Cabin.Occupancy;
        }

        export namespace Cabin {
          export interface Deck {
            id?: number;

            description?: string;

            name?: string;
          }

          export interface Occupancy {
            max?: number;

            min?: number;
          }
        }

        export interface Details {
          styleClass?: string;
        }

        export interface Fare {
          addOns?: Array<Fare.AddOn>;

          fareCode?: Fare.FareCode;

          prices?: Array<Fare.Price>;

          status?: number;

          upgradeFrom?: string;
        }

        export namespace Fare {
          export interface AddOn {
            additionalCode?: string;

            code?: string;

            combinableCodes?: Array<unknown>;

            description?: string;

            endDate?: string;

            name?: string;

            prices?: Array<AddOn.Price>;

            startDate?: string;

            type?: number;
          }

          export namespace AddOn {
            export interface Price {
              amount?: number;

              type?: string;
            }
          }

          export interface FareCode {
            code?: string;

            refundableType?: number;

            type?: number;
          }

          export interface Price {
            id?: number;

            amount?: number;

            type?: string;
          }
        }
      }

      export interface Cruise {
        cruiseline?: Cruise.Cruiseline;

        itinerary?: Cruise.Itinerary;

        packageId?: number;

        packageTourId?: number;

        transportationType?: number;

        voyage?: Cruise.Voyage;
      }

      export namespace Cruise {
        export interface Cruiseline {
          id?: number;

          name?: string;

          ships?: Array<Cruiseline.Ship>;
        }

        export namespace Cruiseline {
          export interface Ship {
            id?: number;

            name?: string;
          }
        }

        export interface Itinerary {
          id?: number;

          destination?: Itinerary.Destination;
        }

        export namespace Itinerary {
          export interface Destination {
            id?: number;
          }
        }

        export interface Voyage {
          arrivalCityId?: string;

          arrivalDateTime?: string;

          code?: string;

          departureCityId?: string;

          departureDateTime?: string;
        }
      }

      export interface DepartureArrivalInfo {
        arrivalCityId?: string;

        arrivalDateTime?: string;

        departureCityId?: string;

        departureDateTime?: string;

        duration?: number;
      }

      export interface Dining {
        id?: number;

        code?: string;

        description?: string;

        name?: string;

        status?: number;

        tableSizeOptions?: Array<number>;
      }

      export interface PaymentSchedules {
        affiliatePaymentSchedules?: Array<PaymentSchedules.AffiliatePaymentSchedule>;

        customerPaymentSchedules?: Array<PaymentSchedules.CustomerPaymentSchedule>;

        supplierPaymentSchedules?: Array<PaymentSchedules.SupplierPaymentSchedule>;
      }

      export namespace PaymentSchedules {
        export interface AffiliatePaymentSchedule {
          id?: number;

          amount?: number;

          dueDate?: string;

          type?: number;
        }

        export interface CustomerPaymentSchedule {
          id?: number;

          amount?: number;

          dueDate?: string;

          type?: number;
        }

        export interface SupplierPaymentSchedule {
          id?: number;

          amount?: number;

          dueDate?: string;

          type?: number;
        }
      }

      export interface Price {
        id?: number;

        amount?: number;

        code?: string;

        displayType?: number;

        priority?: number;

        rph?: number;
      }

      export interface ReservationReferences {
        confirmationNumber?: string;
      }

      export interface SyncInfo {
        apiSyncInfo?: SyncInfo.APISyncInfo;
      }

      export namespace SyncInfo {
        export interface APISyncInfo {
          token?: string;

          lastSyncOn?: string;

          sessionId?: string;
        }
      }

      export interface UsersInfo {
        createdBy?: unknown;

        createdFor?: UsersInfo.CreatedFor;
      }

      export namespace UsersInfo {
        export interface CreatedFor {
          email?: string;

          name?: string;
        }
      }
    }

    export interface Customer {
      age?: number;

      dateOfBirth?: string;

      firstName?: string;

      lastName?: string;

      middleName?: string;

      pastPaxNumber?: string;
    }

    export interface TrackingInfo {
      requestId?: string;

      timeStamp?: string;
    }
  }
}

export type ReservationReadFromSupplierResponse = unknown;

export interface ReservationReadReservationResponse {
  data?: ReservationReadReservationResponse.Data;

  isSucceed?: boolean;
}

export namespace ReservationReadReservationResponse {
  export interface Data {
    agencyConfirmation?: string;

    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      categories?: Array<CruiseReservation.Category>;

      cruise?: CruiseReservation.Cruise;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      dinings?: Array<CruiseReservation.Dining>;

      paymentSchedules?: CruiseReservation.PaymentSchedules;

      prices?: Array<CruiseReservation.Price>;

      reservationReferences?: CruiseReservation.ReservationReferences;

      status?: number;

      syncInfo?: CruiseReservation.SyncInfo;

      usersInfo?: CruiseReservation.UsersInfo;
    }

    export namespace CruiseReservation {
      export interface Category {
        cabins?: Array<Category.Cabin>;

        code?: string;

        fares?: Array<Category.Fare>;
      }

      export namespace Category {
        export interface Cabin {
          number?: string;

          occupancy?: Cabin.Occupancy;
        }

        export namespace Cabin {
          export interface Occupancy {
            max?: number;

            min?: number;
          }
        }

        export interface Fare {
          addOns?: Array<unknown>;

          fareCode?: Fare.FareCode;

          prices?: Array<Fare.Price>;

          status?: number;

          upgradeFrom?: string;
        }

        export namespace Fare {
          export interface FareCode {
            code?: string;

            refundableType?: number;

            type?: number;
          }

          export interface Price {
            id?: number;

            amount?: number;

            type?: string;
          }
        }
      }

      export interface Cruise {
        cruiseline?: Cruise.Cruiseline;

        itinerary?: Cruise.Itinerary;

        packageId?: number;

        packageTourId?: number;

        transportationType?: number;

        voyage?: Cruise.Voyage;
      }

      export namespace Cruise {
        export interface Cruiseline {
          id?: number;

          ships?: Array<Cruiseline.Ship>;
        }

        export namespace Cruiseline {
          export interface Ship {
            id?: number;
          }
        }

        export interface Itinerary {
          id?: number;

          destination?: Itinerary.Destination;
        }

        export namespace Itinerary {
          export interface Destination {
            id?: number;
          }
        }

        export interface Voyage {
          arrivalCityId?: string;

          arrivalDateTime?: string;

          code?: string;

          departureCityId?: string;

          departureDateTime?: string;
        }
      }

      export interface DepartureArrivalInfo {
        arrivalCityId?: string;

        arrivalDateTime?: string;

        departureCityId?: string;

        departureDateTime?: string;

        duration?: number;
      }

      export interface Dining {
        id?: number;

        code?: string;

        name?: string;

        status?: number;

        tableSizeOptions?: Array<number>;
      }

      export interface PaymentSchedules {
        affiliatePaymentSchedules?: Array<PaymentSchedules.AffiliatePaymentSchedule>;

        customerPaymentSchedules?: Array<PaymentSchedules.CustomerPaymentSchedule>;

        supplierPaymentSchedules?: Array<PaymentSchedules.SupplierPaymentSchedule>;
      }

      export namespace PaymentSchedules {
        export interface AffiliatePaymentSchedule {
          id?: number;

          amount?: number;

          dueDate?: string;

          type?: number;
        }

        export interface CustomerPaymentSchedule {
          id?: number;

          amount?: number;

          dueDate?: string;

          type?: number;
        }

        export interface SupplierPaymentSchedule {
          id?: number;

          amount?: number;

          dueDate?: string;

          type?: number;
        }
      }

      export interface Price {
        id?: number;

        amount?: number;

        code?: string;

        displayType?: number;

        priority?: number;

        rph?: number;
      }

      export interface ReservationReferences {
        confirmationNumber?: string;
      }

      export interface SyncInfo {
        apiSyncInfo?: SyncInfo.APISyncInfo;
      }

      export namespace SyncInfo {
        export interface APISyncInfo {
          token?: string;

          lastSyncOn?: string;

          sessionId?: string;
        }
      }

      export interface UsersInfo {
        createdBy?: unknown;

        createdFor?: UsersInfo.CreatedFor;
      }

      export namespace UsersInfo {
        export interface CreatedFor {
          name?: string;
        }
      }
    }

    export interface Customer {
      age?: number;

      dateOfBirth?: string;

      firstName?: string;

      lastName?: string;

      middleName?: string;
    }

    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface ReservationReleaseReservationResponse {
  advisories?: Array<unknown>;

  data?: ReservationReleaseReservationResponse.Data;

  isSucceed?: boolean;
}

export namespace ReservationReleaseReservationResponse {
  export interface Data {
    agencyConfirmation?: string;

    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;
  }

  export namespace Data {
    export interface CruiseReservation {
      categories?: Array<CruiseReservation.Category>;

      cruise?: CruiseReservation.Cruise;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      dinings?: Array<CruiseReservation.Dining>;

      paymentSchedules?: CruiseReservation.PaymentSchedules;

      prices?: Array<CruiseReservation.Price>;

      reservationReferences?: CruiseReservation.ReservationReferences;

      status?: number;

      syncInfo?: CruiseReservation.SyncInfo;

      usersInfo?: CruiseReservation.UsersInfo;
    }

    export namespace CruiseReservation {
      export interface Category {
        cabins?: Array<Category.Cabin>;

        code?: string;

        fares?: Array<Category.Fare>;

        type?: number;
      }

      export namespace Category {
        export interface Cabin {
          number?: string;

          occupancy?: Cabin.Occupancy;
        }

        export namespace Cabin {
          export interface Occupancy {
            max?: number;

            min?: number;
          }
        }

        export interface Fare {
          addOns?: Array<unknown>;

          fareCode?: Fare.FareCode;

          prices?: Array<Fare.Price>;

          status?: number;

          upgradeFrom?: string;
        }

        export namespace Fare {
          export interface FareCode {
            code?: string;

            refundableType?: number;

            type?: number;
          }

          export interface Price {
            id?: number;

            amount?: number;

            type?: string;
          }
        }
      }

      export interface Cruise {
        cruiseline?: Cruise.Cruiseline;

        itinerary?: Cruise.Itinerary;

        packageId?: number;

        packageTourId?: number;

        transportationType?: number;

        voyage?: Cruise.Voyage;
      }

      export namespace Cruise {
        export interface Cruiseline {
          id?: number;

          ships?: Array<Cruiseline.Ship>;
        }

        export namespace Cruiseline {
          export interface Ship {
            id?: number;
          }
        }

        export interface Itinerary {
          id?: number;

          destination?: Itinerary.Destination;
        }

        export namespace Itinerary {
          export interface Destination {
            id?: number;
          }
        }

        export interface Voyage {
          arrivalCityId?: string;

          arrivalDateTime?: string;

          code?: string;

          departureCityId?: string;

          departureDateTime?: string;
        }
      }

      export interface DepartureArrivalInfo {
        arrivalCityId?: string;

        arrivalDateTime?: string;

        departureCityId?: string;

        departureDateTime?: string;

        duration?: number;
      }

      export interface Dining {
        id?: number;

        code?: string;

        name?: string;

        status?: number;

        tableSizeOptions?: Array<number>;
      }

      export interface PaymentSchedules {
        affiliatePaymentSchedules?: Array<PaymentSchedules.AffiliatePaymentSchedule>;

        customerPaymentSchedules?: Array<PaymentSchedules.CustomerPaymentSchedule>;

        supplierPaymentSchedules?: Array<PaymentSchedules.SupplierPaymentSchedule>;
      }

      export namespace PaymentSchedules {
        export interface AffiliatePaymentSchedule {
          id?: number;

          amount?: number;

          dueDate?: string;

          type?: number;
        }

        export interface CustomerPaymentSchedule {
          id?: number;

          amount?: number;

          dueDate?: string;

          type?: number;
        }

        export interface SupplierPaymentSchedule {
          id?: number;

          amount?: number;

          dueDate?: string;

          type?: number;
        }
      }

      export interface Price {
        id?: number;

        amount?: number;

        code?: string;

        displayType?: number;

        priority?: number;

        rph?: number;
      }

      export interface ReservationReferences {
        confirmationNumber?: string;
      }

      export interface SyncInfo {
        apiSyncInfo?: SyncInfo.APISyncInfo;

        supplierSyncInfo?: SyncInfo.SupplierSyncInfo;
      }

      export namespace SyncInfo {
        export interface APISyncInfo {
          token?: string;

          lastSyncOn?: string;

          sessionId?: string;
        }

        export interface SupplierSyncInfo {
          token?: string;

          lastModifiedOn?: string;

          lastSyncOn?: string;
        }
      }

      export interface UsersInfo {
        createdBy?: unknown;

        createdFor?: UsersInfo.CreatedFor;
      }

      export namespace UsersInfo {
        export interface CreatedFor {
          name?: string;
        }
      }
    }

    export interface Customer {
      age?: number;

      dateOfBirth?: string;

      firstName?: string;

      lastName?: string;

      middleName?: string;
    }
  }
}

export interface ReservationApplyPaymentParams {
  /**
   * Body param:
   */
  id?: number;

  /**
   * Body param:
   */
  cruiseReservation?: ReservationApplyPaymentParams.CruiseReservation;

  /**
   * Body param:
   */
  paymentToProcess?: ReservationApplyPaymentParams.PaymentToProcess;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export namespace ReservationApplyPaymentParams {
  export interface CruiseReservation {
    id?: number;

    syncInfo?: CruiseReservation.SyncInfo;
  }

  export namespace CruiseReservation {
    export interface SyncInfo {
      apiSyncInfo?: SyncInfo.APISyncInfo;

      supplierSyncInfo?: SyncInfo.SupplierSyncInfo;
    }

    export namespace SyncInfo {
      export interface APISyncInfo {
        token?: string;

        lastSyncOn?: string;

        sessionId?: string;
      }

      export interface SupplierSyncInfo {
        token?: string;

        lastModifiedOn?: string;

        lastSyncOn?: string;
      }
    }
  }

  export interface PaymentToProcess {
    amount?: number;

    cardToken?: string;
  }
}

export interface ReservationCancelReservationParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface ReservationConfirmReservationParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface ReservationReadFromSupplierParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface ReservationReadReservationParams {
  /**
   * Body param:
   */
  id?: number;

  /**
   * Body param:
   */
  cruiseReservation?: ReservationReadReservationParams.CruiseReservation;

  /**
   * Body param:
   */
  trackingInfo?: ReservationReadReservationParams.TrackingInfo;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export namespace ReservationReadReservationParams {
  export interface CruiseReservation {
    id?: number;
  }

  export interface TrackingInfo {
    token?: string;
  }
}

export interface ReservationReleaseReservationParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

Reservation.Cruise = CruiseAPICruise;

export declare namespace Reservation {
  export {
    type ReservationApplyPaymentResponse as ReservationApplyPaymentResponse,
    type ReservationCancelReservationResponse as ReservationCancelReservationResponse,
    type ReservationConfirmReservationResponse as ReservationConfirmReservationResponse,
    type ReservationReadFromSupplierResponse as ReservationReadFromSupplierResponse,
    type ReservationReadReservationResponse as ReservationReadReservationResponse,
    type ReservationReleaseReservationResponse as ReservationReleaseReservationResponse,
    type ReservationApplyPaymentParams as ReservationApplyPaymentParams,
    type ReservationCancelReservationParams as ReservationCancelReservationParams,
    type ReservationConfirmReservationParams as ReservationConfirmReservationParams,
    type ReservationReadFromSupplierParams as ReservationReadFromSupplierParams,
    type ReservationReadReservationParams as ReservationReadReservationParams,
    type ReservationReleaseReservationParams as ReservationReleaseReservationParams,
  };

  export {
    CruiseAPICruise as Cruise,
    type CruiseCreateReservationResponse as CruiseCreateReservationResponse,
    type CruiseExtendHoldResponse as CruiseExtendHoldResponse,
    type CruiseGetCabinDetailsResponse as CruiseGetCabinDetailsResponse,
    type CruiseGetFareCodeDetailsResponse as CruiseGetFareCodeDetailsResponse,
    type CruiseGetHistoryResponse as CruiseGetHistoryResponse,
    type CruiseGetHistoryFromSupplierResponse as CruiseGetHistoryFromSupplierResponse,
    type CruiseGetItineraryFromSupplierResponse as CruiseGetItineraryFromSupplierResponse,
    type CruiseGetPastPassengerDetailsResponse as CruiseGetPastPassengerDetailsResponse,
    type CruiseHoldCabinResponse as CruiseHoldCabinResponse,
    type CruiseListAddonsResponse as CruiseListAddonsResponse,
    type CruiseListAirGatewaysResponse as CruiseListAirGatewaysResponse,
    type CruiseListCabinsResponse as CruiseListCabinsResponse,
    type CruiseListCategoriesResponse as CruiseListCategoriesResponse,
    type CruiseListDiningsResponse as CruiseListDiningsResponse,
    type CruiseListFareCodesResponse as CruiseListFareCodesResponse,
    type CruiseListPackagesResponse as CruiseListPackagesResponse,
    type CruiseListPosResponse as CruiseListPosResponse,
    type CruiseListPricesResponse as CruiseListPricesResponse,
    type CruiseListSpecialServicesResponse as CruiseListSpecialServicesResponse,
    type CruiseListTransfersResponse as CruiseListTransfersResponse,
    type CruiseModifyReservationResponse as CruiseModifyReservationResponse,
    type CruiseReadFromSupplierResponse as CruiseReadFromSupplierResponse,
    type CruiseRecordPaymentResponse as CruiseRecordPaymentResponse,
    type CruiseReleaseCabinResponse as CruiseReleaseCabinResponse,
    type CruiseSearchPackageWithSupplierResponse as CruiseSearchPackageWithSupplierResponse,
    type CruiseSearchReservationResponse as CruiseSearchReservationResponse,
    type CruiseSearchWithSupplierResponse as CruiseSearchWithSupplierResponse,
    type CruiseCreateReservationParams as CruiseCreateReservationParams,
    type CruiseExtendHoldParams as CruiseExtendHoldParams,
    type CruiseGetCabinDetailsParams as CruiseGetCabinDetailsParams,
    type CruiseGetFareCodeDetailsParams as CruiseGetFareCodeDetailsParams,
    type CruiseGetHistoryParams as CruiseGetHistoryParams,
    type CruiseGetHistoryFromSupplierParams as CruiseGetHistoryFromSupplierParams,
    type CruiseGetItineraryFromSupplierParams as CruiseGetItineraryFromSupplierParams,
    type CruiseGetPastPassengerDetailsParams as CruiseGetPastPassengerDetailsParams,
    type CruiseHoldCabinParams as CruiseHoldCabinParams,
    type CruiseListAddonsParams as CruiseListAddonsParams,
    type CruiseListAirGatewaysParams as CruiseListAirGatewaysParams,
    type CruiseListCabinsParams as CruiseListCabinsParams,
    type CruiseListCategoriesParams as CruiseListCategoriesParams,
    type CruiseListDiningsParams as CruiseListDiningsParams,
    type CruiseListFareCodesParams as CruiseListFareCodesParams,
    type CruiseListPackagesParams as CruiseListPackagesParams,
    type CruiseListPosParams as CruiseListPosParams,
    type CruiseListPricesParams as CruiseListPricesParams,
    type CruiseListSpecialServicesParams as CruiseListSpecialServicesParams,
    type CruiseListTransfersParams as CruiseListTransfersParams,
    type CruiseModifyReservationParams as CruiseModifyReservationParams,
    type CruiseReadFromSupplierParams as CruiseReadFromSupplierParams,
    type CruiseRecordPaymentParams as CruiseRecordPaymentParams,
    type CruiseReleaseCabinParams as CruiseReleaseCabinParams,
    type CruiseSearchPackageWithSupplierParams as CruiseSearchPackageWithSupplierParams,
    type CruiseSearchReservationParams as CruiseSearchReservationParams,
    type CruiseSearchWithSupplierParams as CruiseSearchWithSupplierParams,
  };
}
