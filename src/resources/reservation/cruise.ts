// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Cruise extends APIResource {
  /**
   * This API will create a cruise booking with air.
   *
   * @example
   * ```ts
   * const response = await client.reservation.cruise.createReservation({
   *   cruiseReservation: {
   *     CruiselineAir: { ... },
   *     pos: { ... },
   *     customerReferences: [
   *       { ... },
   *       { ... },
   *     ],
   *     supplierCommunicationInfo: { ... },
   *     cruise: { ... },
   *     categories: [
   *       { ... },
   *     ],
   *   },
   *   customers: [
   *     {
   *       rph: 1,
   *       title: 'MR',
   *       firstName: 'John',
   *       lastName: 'Doe',
   *       dateOfBirth: '02-Jan-1988',
   *       gender: 'Male',
   *       age: 35,
   *       address: { ... },
   *     },
   *     {
   *       rph: 2,
   *       title: 'MR',
   *       firstName: 'Jack',
   *       lastName: 'Doe',
   *       dateOfBirth: '01-Jan-1988',
   *       gender: 'Male',
   *       age: 35,
   *       address: { ... },
   *     },
   *   ],
   *   trackingInfo: { token: 'EQTEMPKEN' },
   * });
   * ```
   */
  createReservation(
    params: CruiseCreateReservationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CruiseCreateReservationResponse> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/reservation/cruise/create', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Extend Reservation Hold
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.extendHold();
   * ```
   */
  extendHold(
    params: CruiseExtendHoldParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/ExtendHold', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This API will get the list of cabins on the basis of packageID , category info.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.getCabinDetails();
   * ```
   */
  getCabinDetails(
    params: CruiseGetCabinDetailsParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/getcabindetails', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * StartFragment
   *
   * This API will get the details of farecode along with packageID
   *
   * EndFragmen
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.getFareCodeDetails();
   * ```
   */
  getFareCodeDetails(
    params: CruiseGetFareCodeDetailsParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CruiseGetFareCodeDetailsResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/GetFareCodeDetails', {
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
   * const response = await client.reservation.cruise.getHistory(
   *   {
   *     id: 69332,
   *     cruiseReservation: { id: 117312 },
   *     trackingInfo: { token: 'EQTEMPKEN' },
   *   },
   * );
   * ```
   */
  getHistory(
    params: CruiseGetHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CruiseGetHistoryResponse> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/reservation/cruise/History', {
      body,
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
   * const response =
   *   await client.reservation.cruise.getHistoryFromSupplier({
   *     id: 69332,
   *     cruiseReservation: { id: 117312 },
   *     trackingInfo: { token: 'EQTEMPKEN' },
   *   });
   * ```
   */
  getHistoryFromSupplier(
    params: CruiseGetHistoryFromSupplierParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CruiseGetHistoryFromSupplierResponse> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/reservation/cruise/HistoryFromSupplier', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Get Cruise Itinerary from Supplier
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.getItineraryFromSupplier({
   *     cruiseReservation: { cruise: { packageId: 1330761 } },
   *     trackingInfo: { token: 'EQTEMPKEN' },
   *   });
   * ```
   */
  getItineraryFromSupplier(
    params: CruiseGetItineraryFromSupplierParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CruiseGetItineraryFromSupplierResponse> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/reservation/cruise/getitineraryfromsupplier', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This API will get the details of past passangers based on packageID and
   * passanger Info
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.getPastPassengerDetails();
   * ```
   */
  getPastPassengerDetails(
    params: CruiseGetPastPassengerDetailsParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CruiseGetPastPassengerDetailsResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/GetPastPaxDetails', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * StartFragment
   *
   * This API will hold the respective cabin on the basis of packageID , category
   * info. & cabin info
   *
   * EndFragment
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.holdCabin();
   * ```
   */
  holdCabin(
    params: CruiseHoldCabinParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CruiseHoldCabinResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/holdcabin', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This API will make a payment for a respective booking done previously.
   *
   * @example
   * ```ts
   * const response = await client.reservation.cruise.listAddons({
   *   cruiseReservation: {
   *     pos: { ... },
   *     customerReferences: [
   *       { ... },
   *       { ... },
   *     ],
   *     cruise: { ... },
   *     categories: [
   *       { ... },
   *     ],
   *   },
   *   customers: [
   *     {
   *       rph: 1,
   *       firstName: 'John',
   *       lastName: 'Doe',
   *       dateOfBirth: '02-Jan-1970',
   *       age: 52,
   *       address: { ... },
   *     },
   *     {
   *       rph: 2,
   *       firstName: 'Maria',
   *       lastName: 'Doe',
   *       dateOfBirth: '01-Jan-1965',
   *       age: 57,
   *       address: { ... },
   *     },
   *   ],
   * });
   * ```
   */
  listAddons(
    params: CruiseListAddonsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CruiseListAddonsResponse> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/reservation/cruise/listaddons', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Norwegian Cruiseline
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.listAirGateways();
   * ```
   */
  listAirGateways(
    params: CruiseListAirGatewaysParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CruiseListAirGatewaysResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/ListAirGateways', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This API will get the list of cabins on the basis of packageID , category info.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.listCabins();
   * ```
   */
  listCabins(
    params: CruiseListCabinsParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/listcabins', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * StartFragment
   *
   * This API will get the list of farecodes based on pacakgeID
   *
   * EndFragment
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.listCategories();
   * ```
   */
  listCategories(
    params: CruiseListCategoriesParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CruiseListCategoriesResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/listcategories', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * StartFragment
   *
   * This API will get the list of dinings on the basis of packageID , category
   * info. & cabin info
   *
   * EndFragment
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.listDinings();
   * ```
   */
  listDinings(
    params: CruiseListDiningsParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CruiseListDiningsResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/ListDinings', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This API will get the list of available farecodes which supports cruise booking
   * with air.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.listFareCodes();
   * ```
   */
  listFareCodes(
    params: CruiseListFareCodesParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CruiseListFareCodesResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/listfarecodes', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This API will make a payment for a respective booking done previously.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.listPackages({
   *     cruiseReservation: {
   *       pos: { id: '0', currency: 'USD' },
   *       cruise: { packageId: 1277420, packageTourId: -1 },
   *       categories: [
   *         { code: 'MM', fare: { fareCode: { code: 'NH1' } } },
   *       ],
   *       customerReferences: [
   *         { RPH: '1', isPrimaryContact: true },
   *         { RPH: '2' },
   *       ],
   *     },
   *     customers: [
   *       {
   *         rph: 1,
   *         age: 52,
   *         firstName: 'John',
   *         lastName: 'Doe',
   *       },
   *       {
   *         rph: 2,
   *         age: 57,
   *         firstName: 'Maria',
   *         lastName: 'Doe',
   *       },
   *     ],
   *   });
   * ```
   */
  listPackages(
    params: CruiseListPackagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CruiseListPackagesResponse> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/reservation/cruise/listPackages', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * StartFragment
   *
   * This API will give the details of office based on packageID
   *
   * EndFragm
   *
   * @example
   * ```ts
   * const response = await client.reservation.cruise.listPos();
   * ```
   */
  listPos(
    params: CruiseListPosParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CruiseListPosResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/listpos', {
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
   *   await client.reservation.cruise.listPrices();
   * ```
   */
  listPrices(
    params: CruiseListPricesParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CruiseListPricesResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/listprices', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * StartFragment
   *
   * This API will get the list of special services on the basis of packageID ,
   * category info. & cabin info
   *
   * EndFragme
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.listSpecialServices();
   * ```
   */
  listSpecialServices(
    params: CruiseListSpecialServicesParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CruiseListSpecialServicesResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/listSpecialservices', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This API will make a payment for a respective booking done previously.
   *
   * @example
   * ```ts
   * const response = await client.reservation.cruise.listTransfers({
   *   cruiseReservation: {
   *     pos: { ... },
   *     cruise: { ... },
   *     categories: [
   *       { ... },
   *     ],
   *     customerReferences: [
   *       { ... },
   *       { ... },
   *     ],
   *   },
   *   customers: [
   *     { rph: 1, age: 52, firstName: 'John', lastName: 'Doe', dateOfBirth: '02-Jan-1970' },
   *     { rph: 2, age: 57, firstName: 'Maria', lastName: 'Doe', dateOfBirth: '01-Jan-1965' },
   *   ],
   * });
   * ```
   */
  listTransfers(
    params: CruiseListTransfersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/reservation/cruise/listTransfers', {
      body,
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
   *   await client.reservation.cruise.modifyReservation();
   * ```
   */
  modifyReservation(
    params: CruiseModifyReservationParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CruiseModifyReservationResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/modify', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Read Reservation from Supplier(Modify Mode)
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.readFromSupplier({
   *     id: 72353,
   *     cruiseReservation: {
   *       id: 120330,
   *       readPreferences: {
   *         mode: 'modify',
   *         autoSyncOption: 'NOLOCK',
   *       },
   *     },
   *     trackingInfo: { token: 'EQTEMPKEN' },
   *   });
   * ```
   */
  readFromSupplier(
    params: CruiseReadFromSupplierParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/reservation/cruise/readfromsupplier', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Record Payment (Odysseus Only)
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.recordPayment();
   * ```
   */
  recordPayment(
    params: CruiseRecordPaymentParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/recordpayment', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * StartFragment
   *
   * This API will release the respective cabin on the basis of packageID , category
   * info. & cabin info
   *
   * EndFragment
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.releaseCabin();
   * ```
   */
  releaseCabin(
    params: CruiseReleaseCabinParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CruiseReleaseCabinResponse> {
    const { body, SiteItemId } = params ?? {};
    return this._client.post('/v2/reservation/cruise/releasecabin', {
      body: body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Cruise Sailing Availability (Live)
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.searchPackageWithSupplier(
   *     {
   *       filters: [
   *         {
   *           key: 'departureDateTime',
   *           ranges: [
   *             { from: '01-Dec-2024', to: '30-Dec-2024' },
   *           ],
   *         },
   *         {
   *           key: 'duration',
   *           ranges: [{ from: '7', to: '9' }],
   *         },
   *         { key: 'destinationId' },
   *         { key: 'cruiselineId' },
   *         { key: 'shipId' },
   *         { key: 'departurePortCode' },
   *       ],
   *     },
   *   );
   * ```
   */
  searchPackageWithSupplier(
    params: CruiseSearchPackageWithSupplierParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CruiseSearchPackageWithSupplierResponse> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/reservation/cruise/SearchPackageWithSupplier', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This API will make a payment for a respective booking done previously.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.searchReservation({
   *     agencyConfirmationNumbers: '1FOO7J7',
   *     bookingStatusIds: '7',
   *     confirmationNumbers: '345652',
   *     CreatedOn: { from: '01-Dec-2022', to: '30-Dec-2022' },
   *     cruiselineIds: '6,8',
   *     firstName: 'John',
   *     lastName: 'Doe',
   *     ModifiedOn: { from: '01-Dec-2022', to: '30-Dec-2022' },
   *     packageId: 1269600,
   *     Pagination: { pageSize: 20, pageIndex: 1 },
   *     TravelDate: { from: '30-Jan-2023', to: '25-Feb-2023' },
   *   });
   * ```
   */
  searchReservation(
    params: CruiseSearchReservationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CruiseSearchReservationResponse> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/reservation/cruise/Search', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This API will make a payment for a respective booking done previously.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reservation.cruise.searchWithSupplier({
   *     pos: { currency: 'USD' },
   *     SearchPreferences: {
   *       ConfirmationNumber: '345652',
   *       CustomerFirstName: 'John',
   *       CustomerLastName: 'Doe',
   *     },
   *     supplierId: 8,
   *   });
   * ```
   */
  searchWithSupplier(
    params: CruiseSearchWithSupplierParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CruiseSearchWithSupplierResponse> {
    const { SiteItemId, ...body } = params ?? {};
    return this._client.post('/v2/reservation/cruise/SearchWithSupplier', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(SiteItemId != null ? { SiteItemId: SiteItemId } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface CruiseCreateReservationResponse {
  advisories?: Array<unknown>;

  data?: CruiseCreateReservationResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseCreateReservationResponse {
  export interface Data {
    id?: number;

    agencyConfirmation?: string;

    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      id?: number;

      cruise?: CruiseReservation.Cruise;

      customerReferences?: Array<CruiseReservation.CustomerReference>;

      pos?: CruiseReservation.Pos;

      reservationReferences?: CruiseReservation.ReservationReferences;

      status?: number;
    }

    export namespace CruiseReservation {
      export interface Cruise {
        packageId?: number;

        packageTourId?: number;
      }

      export interface CustomerReference {
        isPrimaryContact?: boolean;

        rph?: number;
      }

      export interface Pos {
        id?: number;

        apiId?: string;

        currency?: string;

        officeId?: string;

        system?: string;

        type?: string;
      }

      export interface ReservationReferences {
        confirmationNumber?: string;
      }
    }

    export interface Customer {
      address?: Customer.Address;

      age?: number;

      dateOfBirth?: string;

      firstName?: string;

      lastName?: string;

      rph?: number;

      title?: string;
    }

    export namespace Customer {
      export interface Address {
        city?: Address.City;

        country?: Address.Country;

        state?: Address.State;
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
    }

    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export type CruiseExtendHoldResponse = unknown;

export type CruiseGetCabinDetailsResponse = unknown;

export interface CruiseGetFareCodeDetailsResponse {
  data?: CruiseGetFareCodeDetailsResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseGetFareCodeDetailsResponse {
  export interface Data {
    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      cruise?: CruiseReservation.Cruise;

      customerReferences?: Array<CruiseReservation.CustomerReference>;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      fareCodes?: Array<CruiseReservation.FareCode>;

      pos?: CruiseReservation.Pos;
    }

    export namespace CruiseReservation {
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

      export interface CustomerReference {
        isPrimaryContact?: boolean;

        rph?: number;
      }

      export interface DepartureArrivalInfo {
        arrivalCityId?: string;

        arrivalDateTime?: string;

        departureCityId?: string;

        departureDateTime?: string;

        duration?: number;
      }

      export interface FareCode {
        code?: string;

        details?: unknown;

        groups?: Array<unknown>;

        name?: string;

        refundableType?: number;

        status?: number;

        type?: number;
      }

      export interface Pos {
        currency?: string;

        type?: string;
      }
    }

    export interface Customer {
      address?: Customer.Address;

      age?: number;

      rph?: number;
    }

    export namespace Customer {
      export interface Address {
        country?: Address.Country;

        state?: Address.State;
      }

      export namespace Address {
        export interface Country {
          id?: string;
        }

        export interface State {
          id?: string;
        }
      }
    }

    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface CruiseGetHistoryResponse {
  data?: CruiseGetHistoryResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseGetHistoryResponse {
  export interface Data {
    id?: number;

    cruiseReservationId?: number;

    historyInfo?: Array<Data.HistoryInfo>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface HistoryInfo {
      description?: string;

      timeStamp?: HistoryInfo.TimeStamp;

      type?: string;

      user?: HistoryInfo.User;
    }

    export namespace HistoryInfo {
      export interface TimeStamp {
        system?: TimeStamp.System;
      }

      export namespace TimeStamp {
        export interface System {
          createdOn?: string;
        }
      }

      export interface User {
        name?: string;
      }
    }

    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface CruiseGetHistoryFromSupplierResponse {
  data?: CruiseGetHistoryFromSupplierResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseGetHistoryFromSupplierResponse {
  export interface Data {
    historyInfo?: Array<Data.HistoryInfo>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface HistoryInfo {
      description?: string;

      timeStamp?: HistoryInfo.TimeStamp;

      user?: HistoryInfo.User;
    }

    export namespace HistoryInfo {
      export interface TimeStamp {
        system?: TimeStamp.System;
      }

      export namespace TimeStamp {
        export interface System {
          createdOn?: string;
        }
      }

      export interface User {
        name?: string;
      }
    }

    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface CruiseGetItineraryFromSupplierResponse {
  data?: CruiseGetItineraryFromSupplierResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseGetItineraryFromSupplierResponse {
  export interface Data {
    id?: number;

    nodes?: Array<Data.Node>;

    normalizedPortsOfCall?: string;

    portsOfCalls?: string;
  }

  export namespace Data {
    export interface Node {
      departureTime?: string;

      description?: string;
    }
  }
}

export interface CruiseGetPastPassengerDetailsResponse {
  data?: CruiseGetPastPassengerDetailsResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseGetPastPassengerDetailsResponse {
  export interface Data {
    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      cruise?: CruiseReservation.Cruise;

      customerReferences?: Array<CruiseReservation.CustomerReference>;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      pos?: CruiseReservation.Pos;
    }

    export namespace CruiseReservation {
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

      export interface CustomerReference {
        isPrimaryContact?: boolean;

        rph?: number;
      }

      export interface DepartureArrivalInfo {
        arrivalCityId?: string;

        arrivalDateTime?: string;

        departureCityId?: string;

        departureDateTime?: string;

        duration?: number;
      }

      export interface Pos {
        id?: number;

        apiId?: string;

        currency?: string;

        officeId?: string;

        system?: string;

        type?: string;
      }
    }

    export interface Customer {
      contactInfo?: Customer.ContactInfo;

      dateOfBirth?: string;

      firstName?: string;

      lastName?: string;

      pastPaxNumber?: string;

      rph?: number;
    }

    export namespace Customer {
      export interface ContactInfo {
        email?: string;
      }
    }

    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface CruiseHoldCabinResponse {
  data?: CruiseHoldCabinResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseHoldCabinResponse {
  export interface Data {
    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      cruise?: CruiseReservation.Cruise;

      customerReferences?: Array<CruiseReservation.CustomerReference>;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      insurances?: Array<CruiseReservation.Insurance>;

      pos?: CruiseReservation.Pos;
    }

    export namespace CruiseReservation {
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

      export interface CustomerReference {
        isPrimaryContact?: boolean;

        rph?: number;
      }

      export interface DepartureArrivalInfo {
        arrivalCityId?: string;

        arrivalDateTime?: string;

        departureCityId?: string;

        departureDateTime?: string;

        duration?: number;
      }

      export interface Insurance {
        code?: string;
      }

      export interface Pos {
        id?: number;

        apiId?: string;

        currency?: string;

        officeId?: string;

        system?: string;

        type?: string;
      }
    }

    export interface Customer {
      address?: Customer.Address;

      age?: number;

      rph?: number;
    }

    export namespace Customer {
      export interface Address {
        country?: Address.Country;
      }

      export namespace Address {
        export interface Country {
          id?: string;
        }
      }
    }

    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface CruiseListAddonsResponse {
  data?: CruiseListAddonsResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseListAddonsResponse {
  export interface Data {
    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      addOns?: Array<CruiseReservation.AddOn>;

      cruise?: CruiseReservation.Cruise;

      customerReferences?: Array<CruiseReservation.CustomerReference>;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      pos?: CruiseReservation.Pos;
    }

    export namespace CruiseReservation {
      export interface AddOn {
        code?: string;

        combinableCodes?: Array<unknown>;

        customerReferences?: Array<AddOn.CustomerReference>;

        name?: string;

        prices?: Array<AddOn.Price>;

        startDate?: string;

        type?: number;
      }

      export namespace AddOn {
        export interface CustomerReference {
          rph?: number;
        }

        export interface Price {
          amount?: number;

          type?: string;
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

      export interface CustomerReference {
        ageGroup?: string;

        isPrimaryContact?: boolean;

        rph?: number;
      }

      export interface DepartureArrivalInfo {
        arrivalCityId?: string;

        arrivalDateTime?: string;

        departureCityId?: string;

        departureDateTime?: string;

        duration?: number;
      }

      export interface Pos {
        id?: number;

        apiId?: string;

        currency?: string;

        officeId?: string;

        system?: string;

        type?: string;
      }
    }

    export interface Customer {
      address?: Customer.Address;

      age?: number;

      dateOfBirth?: string;

      firstName?: string;

      lastName?: string;

      rph?: number;
    }

    export namespace Customer {
      export interface Address {
        city?: Address.City;

        country?: Address.Country;

        state?: Address.State;
      }

      export namespace Address {
        export interface City {
          id?: string;
        }

        export interface Country {
          id?: string;
        }

        export interface State {
          id?: string;
        }
      }
    }

    export interface TrackingInfo {
      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface CruiseListAirGatewaysResponse {
  data?: CruiseListAirGatewaysResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseListAirGatewaysResponse {
  export interface Data {
    airGateways?: Array<Data.AirGateway>;
  }

  export namespace Data {
    export interface AirGateway {
      outboundFlightInfo?: AirGateway.OutboundFlightInfo;
    }

    export namespace AirGateway {
      export interface OutboundFlightInfo {
        departureArrivalInfo?: OutboundFlightInfo.DepartureArrivalInfo;
      }

      export namespace OutboundFlightInfo {
        export interface DepartureArrivalInfo {
          departureCityId?: string;
        }
      }
    }
  }
}

export type CruiseListCabinsResponse = unknown;

export interface CruiseListCategoriesResponse {
  advisories?: Array<unknown>;

  data?: CruiseListCategoriesResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseListCategoriesResponse {
  export interface Data {
    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      categories?: Array<CruiseReservation.Category>;

      cruise?: CruiseReservation.Cruise;

      customerReferences?: Array<CruiseReservation.CustomerReference>;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      fareCodes?: Array<CruiseReservation.FareCode>;

      pos?: CruiseReservation.Pos;
    }

    export namespace CruiseReservation {
      export interface Category {
        code?: string;

        fares?: Array<Category.Fare>;

        type?: number;
      }

      export namespace Category {
        export interface Fare {
          displayOnly?: boolean;

          fareCode?: Fare.FareCode;

          prices?: Array<Fare.Price>;

          status?: number;

          upgradeFrom?: string;
        }

        export namespace Fare {
          export interface FareCode {
            bookOnline?: boolean;

            code?: string;

            description?: string;

            details?: FareCode.Details;

            name?: string;

            refundableType?: number;

            specialFare?: number;

            status?: number;

            type?: number;
          }

          export namespace FareCode {
            export interface Details {
              agencyDescription?: string;

              fareTypeDescription?: string;

              qualifierCodes?: string;

              remarks?: string;
            }
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

      export interface CustomerReference {
        ageGroup?: string;

        isPrimaryContact?: boolean;

        rph?: number;
      }

      export interface DepartureArrivalInfo {
        arrivalCityId?: string;

        arrivalDateTime?: string;

        departureCityId?: string;

        departureDateTime?: string;

        duration?: number;
      }

      export interface FareCode {
        bookOnline?: boolean;

        code?: string;

        description?: string;

        details?: FareCode.Details;

        name?: string;

        refundableType?: number;

        status?: number;

        type?: number;
      }

      export namespace FareCode {
        export interface Details {
          agencyDescription?: string;

          fareTypeDescription?: string;

          qualifierCodes?: string;

          remarks?: string;
        }
      }

      export interface Pos {
        id?: number;

        apiId?: string;

        currency?: string;

        officeId?: string;

        system?: string;

        type?: string;
      }
    }

    export interface Customer {
      address?: Customer.Address;

      age?: number;

      rph?: number;
    }

    export namespace Customer {
      export interface Address {
        country?: Address.Country;
      }

      export namespace Address {
        export interface Country {
          id?: string;
        }
      }
    }

    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface CruiseListDiningsResponse {
  data?: CruiseListDiningsResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseListDiningsResponse {
  export interface Data {
    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      cruise?: CruiseReservation.Cruise;

      customerReferences?: Array<CruiseReservation.CustomerReference>;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      dinings?: Array<CruiseReservation.Dining>;

      pos?: CruiseReservation.Pos;
    }

    export namespace CruiseReservation {
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

      export interface CustomerReference {
        isPrimaryContact?: boolean;

        rph?: number;
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

        tableSizeOptions?: Array<unknown>;
      }

      export interface Pos {
        id?: number;

        apiId?: string;

        currency?: string;

        officeId?: string;

        system?: string;

        type?: string;
      }
    }

    export interface Customer {
      age?: number;

      rph?: number;
    }

    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface CruiseListFareCodesResponse {
  advisories?: Array<unknown>;

  data?: CruiseListFareCodesResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseListFareCodesResponse {
  export interface Data {
    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      cruise?: CruiseReservation.Cruise;

      currencyInfo?: CruiseReservation.CurrencyInfo;

      customerReferences?: Array<CruiseReservation.CustomerReference>;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      dinings?: Array<CruiseReservation.Dining>;

      fareCodes?: Array<CruiseReservation.FareCode>;

      pos?: CruiseReservation.Pos;
    }

    export namespace CruiseReservation {
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

      export interface CurrencyInfo {
        countryId?: string;

        currencyId?: string;
      }

      export interface CustomerReference {
        ageGroup?: string;

        isPrimaryContact?: boolean;

        rph?: number;
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

        gratuityRequired?: boolean;

        name?: string;

        tableSizeOptions?: Array<unknown>;
      }

      export interface FareCode {
        bookOnline?: boolean;

        code?: string;

        description?: string;

        details?: FareCode.Details;

        name?: string;

        refundableType?: number;

        status?: number;

        type?: number;
      }

      export namespace FareCode {
        export interface Details {
          agencyDescription?: string;

          fareTypeDescription?: string;

          qualifierCodes?: string;

          remarks?: string;
        }
      }

      export interface Pos {
        id?: number;

        apiId?: string;

        currency?: string;

        officeId?: string;

        system?: string;

        type?: string;
      }
    }

    export interface Customer {
      address?: Customer.Address;

      age?: number;

      gender?: string;

      rph?: number;
    }

    export namespace Customer {
      export interface Address {
        country?: Address.Country;
      }

      export namespace Address {
        export interface Country {
          id?: string;
        }
      }
    }

    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface CruiseListPackagesResponse {
  data?: CruiseListPackagesResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseListPackagesResponse {
  export interface Data {
    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      cruise?: CruiseReservation.Cruise;

      customerReferences?: Array<CruiseReservation.CustomerReference>;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      packages?: Array<CruiseReservation.Package>;

      pos?: CruiseReservation.Pos;
    }

    export namespace CruiseReservation {
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

      export interface CustomerReference {
        ageGroup?: string;

        isPrimaryContact?: boolean;

        rph?: number;
      }

      export interface DepartureArrivalInfo {
        arrivalCityId?: string;

        arrivalDateTime?: string;

        departureCityId?: string;

        departureDateTime?: string;

        duration?: number;
      }

      export interface Package {
        code?: string;

        description?: string;

        packageType?: string;

        prices?: Array<Package.Price>;
      }

      export namespace Package {
        export interface Price {
          id?: number;

          amount?: number;

          type?: string;
        }
      }

      export interface Pos {
        id?: number;

        apiId?: string;

        currency?: string;

        officeId?: string;

        system?: string;

        type?: string;
      }
    }

    export interface Customer {
      age?: number;

      firstName?: string;

      lastName?: string;

      rph?: number;
    }

    export interface TrackingInfo {
      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface CruiseListPosResponse {
  data?: CruiseListPosResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseListPosResponse {
  export interface Data {
    cruiseReservation?: Data.CruiseReservation;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      cruise?: CruiseReservation.Cruise;

      pointOfSales?: Array<CruiseReservation.PointOfSale>;
    }

    export namespace CruiseReservation {
      export interface Cruise {
        cruiseline?: Cruise.Cruiseline;

        packageId?: number;
      }

      export namespace Cruise {
        export interface Cruiseline {
          id?: number;
        }
      }

      export interface PointOfSale {
        id?: number;

        apiId?: string;

        currency?: string;

        name?: string;

        officeId?: string;

        priority?: number;

        system?: string;

        type?: string;
      }
    }

    export interface TrackingInfo {
      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface CruiseListPricesResponse {
  advisories?: Array<CruiseListPricesResponse.Advisory>;

  data?: CruiseListPricesResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseListPricesResponse {
  export interface Advisory {
    code?: string;

    description?: string;

    message?: string;

    type?: string;
  }

  export interface Data {
    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      cancellationPolicies?: Array<CruiseReservation.CancellationPolicy>;

      cruise?: CruiseReservation.Cruise;

      currencyInfo?: CruiseReservation.CurrencyInfo;

      customerReferences?: Array<CruiseReservation.CustomerReference>;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      paymentSchedules?: CruiseReservation.PaymentSchedules;

      pos?: CruiseReservation.Pos;

      prices?: Array<CruiseReservation.Price>;

      rulesInfo?: CruiseReservation.RulesInfo;
    }

    export namespace CruiseReservation {
      export interface CancellationPolicy {
        amount?: number;

        amountType?: string;

        penaltyAmountApplicableOn?: string;

        startDate?: string;
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

      export interface CurrencyInfo {
        countryId?: string;

        currencyId?: string;
      }

      export interface CustomerReference {
        ageGroup?: string;

        isPrimaryContact?: boolean;

        rph?: number;
      }

      export interface DepartureArrivalInfo {
        arrivalCityId?: string;

        arrivalDateTime?: string;

        departureCityId?: string;

        departureDateTime?: string;

        duration?: number;
      }

      export interface PaymentSchedules {
        affiliatePaymentSchedules?: Array<PaymentSchedules.AffiliatePaymentSchedule>;

        customerPaymentSchedules?: Array<PaymentSchedules.CustomerPaymentSchedule>;

        supplierPaymentSchedules?: Array<PaymentSchedules.SupplierPaymentSchedule>;
      }

      export namespace PaymentSchedules {
        export interface AffiliatePaymentSchedule {
          amount?: number;

          dueDate?: string;

          type?: number;
        }

        export interface CustomerPaymentSchedule {
          amount?: number;

          dueDate?: string;

          type?: number;
        }

        export interface SupplierPaymentSchedule {
          amount?: number;

          dueDate?: string;

          type?: number;
        }
      }

      export interface Pos {
        id?: number;

        apiId?: string;

        currency?: string;

        officeId?: string;

        system?: string;

        type?: string;
      }

      export interface Price {
        id?: number;

        amount?: number;

        display?: boolean;

        rph?: number;
      }

      export interface RulesInfo {
        applicableRules?: Array<RulesInfo.ApplicableRule>;

        rules?: Array<RulesInfo.Rule>;
      }

      export namespace RulesInfo {
        export interface ApplicableRule {
          id?: number;

          name?: string;

          type?: number;
        }

        export interface Rule {
          calculatedAmount?: Rule.CalculatedAmount;

          ruleId?: number;
        }

        export namespace Rule {
          export interface CalculatedAmount {
            total?: number;
          }
        }
      }
    }

    export interface Customer {
      address?: Customer.Address;

      age?: number;

      dateOfBirth?: string;

      firstName?: string;

      gender?: string;

      lastName?: string;

      rph?: number;
    }

    export namespace Customer {
      export interface Address {
        country?: Address.Country;
      }

      export namespace Address {
        export interface Country {
          id?: string;
        }
      }
    }

    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface CruiseListSpecialServicesResponse {
  data?: CruiseListSpecialServicesResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseListSpecialServicesResponse {
  export interface Data {
    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      cruise?: CruiseReservation.Cruise;

      customerReferences?: Array<CruiseReservation.CustomerReference>;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      pos?: CruiseReservation.Pos;

      serviceCollection?: CruiseReservation.ServiceCollection;
    }

    export namespace CruiseReservation {
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

      export interface CustomerReference {
        isPrimaryContact?: boolean;

        rph?: number;
      }

      export interface DepartureArrivalInfo {
        arrivalCityId?: string;

        arrivalDateTime?: string;

        departureCityId?: string;

        departureDateTime?: string;

        duration?: number;
      }

      export interface Pos {
        id?: number;

        apiId?: string;

        currency?: string;

        officeId?: string;

        system?: string;

        type?: string;
      }

      export interface ServiceCollection {
        maxSelection?: number;

        services?: Array<ServiceCollection.Service>;
      }

      export namespace ServiceCollection {
        export interface Service {
          associationType?: string;

          code?: string;

          dateRequired?: boolean;

          description?: string;

          name?: string;

          numberOfYearsRequired?: boolean;

          type?: string;
        }
      }
    }

    export interface Customer {
      age?: number;

      rph?: number;
    }

    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export type CruiseListTransfersResponse = unknown;

export interface CruiseModifyReservationResponse {
  data?: CruiseModifyReservationResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseModifyReservationResponse {
  export interface Data {
    id?: number;

    agencyConfirmation?: string;

    cruiseReservation?: Data.CruiseReservation;

    customers?: Array<Data.Customer>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      id?: number;

      categories?: Array<CruiseReservation.Category>;

      cruise?: CruiseReservation.Cruise;

      currencyInfo?: CruiseReservation.CurrencyInfo;

      customerReferences?: Array<CruiseReservation.CustomerReference>;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      dinings?: Array<CruiseReservation.Dining>;

      paymentSchedules?: CruiseReservation.PaymentSchedules;

      prices?: Array<CruiseReservation.Price>;

      reservationReferences?: CruiseReservation.ReservationReferences;

      status?: number;

      syncInfo?: CruiseReservation.SyncInfo;

      usersInfo?: unknown;
    }

    export namespace CruiseReservation {
      export interface Category {
        id?: number;

        cabins?: Array<Category.Cabin>;

        code?: string;
      }

      export namespace Category {
        export interface Cabin {
          number?: string;
        }
      }

      export interface Cruise {
        cruiseline?: Cruise.Cruiseline;

        itinerary?: Cruise.Itinerary;

        packageId?: number;

        packageTourId?: number;

        tourCode?: string;

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

      export interface CurrencyInfo {
        countryId?: string;

        currencyId?: string;
      }

      export interface CustomerReference {
        ageGroup?: string;

        isPrimaryContact?: boolean;

        odyCustomerRef?: number;
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

        gratuityRequired?: boolean;

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
    }

    export interface Customer {
      address?: Customer.Address;

      age?: number;

      contactInfo?: Customer.ContactInfo;

      dateOfBirth?: string;

      firstName?: string;

      gender?: string;

      lastName?: string;

      middleName?: string;

      nationality?: unknown;

      odyCustomerRef?: number;

      passportInfo?: Customer.PassportInfo;

      rph?: number;
    }

    export namespace Customer {
      export interface Address {
        city?: Address.City;

        country?: Address.Country;

        state?: Address.State;
      }

      export namespace Address {
        export interface City {
          id?: string;
        }

        export interface Country {
          id?: string;
        }

        export interface State {
          id?: string;
        }
      }

      export interface ContactInfo {
        email?: string;

        phone1?: ContactInfo.Phone1;

        phone2?: ContactInfo.Phone2;
      }

      export namespace ContactInfo {
        export interface Phone1 {
          countryCode?: string;

          number?: string;
        }

        export interface Phone2 {
          countryCode?: string;

          number?: string;
        }
      }

      export interface PassportInfo {
        expirationDate?: string;

        issueCountry?: PassportInfo.IssueCountry;

        issueDate?: string;

        number?: string;
      }

      export namespace PassportInfo {
        export interface IssueCountry {
          id?: string;
        }
      }
    }

    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export type CruiseReadFromSupplierResponse = unknown;

export type CruiseRecordPaymentResponse = unknown;

export interface CruiseReleaseCabinResponse {
  data?: CruiseReleaseCabinResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseReleaseCabinResponse {
  export interface Data {
    cruiseReservation?: Data.CruiseReservation;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface CruiseReservation {
      cruise?: CruiseReservation.Cruise;

      departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

      pos?: CruiseReservation.Pos;
    }

    export namespace CruiseReservation {
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

      export interface Pos {
        id?: number;

        apiId?: string;

        currency?: string;

        officeId?: string;

        system?: string;

        type?: string;
      }
    }

    export interface TrackingInfo {
      token?: string;

      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface CruiseSearchPackageWithSupplierResponse {
  data?: CruiseSearchPackageWithSupplierResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseSearchPackageWithSupplierResponse {
  export interface Data {
    list?: Array<Data.List>;

    total?: number;
  }

  export namespace Data {
    export interface List {
      id?: number;

      arrivalDateTime?: string;

      bookingSettings?: List.BookingSettings;

      code?: string;

      cruiseDuration?: number;

      cruisePackageArrivalDateTime?: string;

      cruisePackageDepartureDateTime?: string;

      cruiseTourCode?: string;

      cruiseType?: string;

      departureDateTime?: string;

      destination?: List.Destination;

      destinationIds?: Array<number>;

      endDateTime?: string;

      isActive?: boolean;

      itinerary?: List.Itinerary;

      ship?: List.Ship;

      shipIds?: Array<number>;

      startDateTime?: string;

      voyageId?: string;
    }

    export namespace List {
      export interface BookingSettings {
        bookingMode?: string;
      }

      export interface Destination {
        id?: number;

        type?: string;
      }

      export interface Itinerary {
        arrival?: Itinerary.Arrival;

        departure?: Itinerary.Departure;

        duration?: number;
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

      export interface Ship {
        id?: number;

        cruiseline?: Ship.Cruiseline;

        name?: string;
      }

      export namespace Ship {
        export interface Cruiseline {
          id?: number;

          name?: string;
        }
      }
    }
  }
}

export interface CruiseSearchReservationResponse {
  data?: CruiseSearchReservationResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseSearchReservationResponse {
  export interface Data {
    pageIndex?: number;

    pageSize?: number;

    reservations?: Array<Data.Reservation>;

    totalRecords?: number;
  }

  export namespace Data {
    export interface Reservation {
      id?: number;

      agencyConfirmation?: string;

      createdOn?: string;

      cruiseReservation?: Reservation.CruiseReservation;

      modifiedOn?: string;

      primaryCustomer?: Reservation.PrimaryCustomer;

      siteItemId?: number;

      statusId?: number;
    }

    export namespace Reservation {
      export interface CruiseReservation {
        id?: number;

        categories?: Array<CruiseReservation.Category>;

        cruise?: CruiseReservation.Cruise;

        departureArrivalInfo?: CruiseReservation.DepartureArrivalInfo;

        reservationReferences?: CruiseReservation.ReservationReferences;

        status?: number;
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
          }

          export interface Fare {
            fareCode?: Fare.FareCode;

            upgradeFrom?: string;
          }

          export namespace Fare {
            export interface FareCode {
              code?: string;

              type?: number;
            }
          }
        }

        export interface Cruise {
          cruiseline?: Cruise.Cruiseline;

          packageId?: number;
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
        }

        export interface DepartureArrivalInfo {
          arrivalCityId?: string;

          arrivalDateTime?: string;

          departureCityId?: string;

          departureDateTime?: string;
        }

        export interface ReservationReferences {
          confirmationNumber?: string;

          pnrNumber?: string;
        }
      }

      export interface PrimaryCustomer {
        firstName?: string;

        lastName?: string;

        middleName?: string;
      }
    }
  }
}

export interface CruiseSearchWithSupplierResponse {
  data?: CruiseSearchWithSupplierResponse.Data;

  isSucceed?: boolean;
}

export namespace CruiseSearchWithSupplierResponse {
  export interface Data {
    reservations?: Array<Data.Reservation>;

    trackingInfo?: Data.TrackingInfo;
  }

  export namespace Data {
    export interface Reservation {
      id?: number;

      cruiseReservation?: Reservation.CruiseReservation;

      primaryCustomer?: Reservation.PrimaryCustomer;

      statusId?: number;
    }

    export namespace Reservation {
      export interface CruiseReservation {
        id?: number;

        categories?: Array<CruiseReservation.Category>;

        cruise?: CruiseReservation.Cruise;

        reservationReferences?: CruiseReservation.ReservationReferences;

        status?: number;
      }

      export namespace CruiseReservation {
        export interface Category {
          id?: number;

          cabins?: Array<Category.Cabin>;

          code?: string;

          details?: Category.Details;

          type?: number;
        }

        export namespace Category {
          export interface Cabin {
            deck?: Cabin.Deck;

            number?: string;
          }

          export namespace Cabin {
            export interface Deck {
              id?: number;

              description?: string;

              name?: string;
            }
          }

          export interface Details {
            size?: string;

            styleClass?: string;
          }
        }

        export interface Cruise {
          cruiseline?: Cruise.Cruiseline;
        }

        export namespace Cruise {
          export interface Cruiseline {
            id?: number;

            code?: string;

            name?: string;

            ships?: Array<Cruiseline.Ship>;
          }

          export namespace Cruiseline {
            export interface Ship {
              id?: number;

              name?: string;
            }
          }
        }

        export interface ReservationReferences {
          confirmationNumber?: string;
        }
      }

      export interface PrimaryCustomer {
        age?: number;

        dateOfBirth?: string;

        firstName?: string;

        lastName?: string;
      }
    }

    export interface TrackingInfo {
      requestId?: string;

      timeStamp?: string;
    }
  }
}

export interface CruiseCreateReservationParams {
  /**
   * Body param:
   */
  cruiseReservation?: CruiseCreateReservationParams.CruiseReservation;

  /**
   * Body param:
   */
  customers?: Array<CruiseCreateReservationParams.Customer>;

  /**
   * Body param:
   */
  trackingInfo?: CruiseCreateReservationParams.TrackingInfo;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export namespace CruiseCreateReservationParams {
  export interface CruiseReservation {
    categories?: Array<CruiseReservation.Category>;

    cruise?: CruiseReservation.Cruise;

    CruiselineAir?: CruiseReservation.CruiselineAir;

    customerReferences?: Array<CruiseReservation.CustomerReference>;

    pos?: CruiseReservation.Pos;

    supplierCommunicationInfo?: CruiseReservation.SupplierCommunicationInfo;
  }

  export namespace CruiseReservation {
    export interface Category {
      cabins?: Array<Category.Cabin>;

      code?: string;

      fare?: Category.Fare;

      type?: number;
    }

    export namespace Category {
      export interface Cabin {
        number?: string;
      }

      export interface Fare {
        farecode?: Fare.Farecode;
      }

      export namespace Fare {
        export interface Farecode {
          code?: string;
        }
      }
    }

    export interface Cruise {
      packageId?: number;

      packageTourId?: number;
    }

    export interface CruiselineAir {
      GateWayCity?: CruiselineAir.GateWayCity;

      type?: string;
    }

    export namespace CruiselineAir {
      export interface GateWayCity {
        id?: string;
      }
    }

    export interface CustomerReference {
      isPrimaryContact?: boolean;

      rph?: number;
    }

    export interface Pos {
      currency?: string;
    }

    export interface SupplierCommunicationInfo {
      agency?: SupplierCommunicationInfo.Agency;

      agent?: SupplierCommunicationInfo.Agent;
    }

    export namespace SupplierCommunicationInfo {
      export interface Agency {
        email?: string;

        phone1?: Agency.Phone1;
      }

      export namespace Agency {
        export interface Phone1 {
          countryCode?: string;

          number?: string;
        }
      }

      export interface Agent {
        email?: string;

        phone1?: Agent.Phone1;
      }

      export namespace Agent {
        export interface Phone1 {
          countryCode?: string;

          number?: string;
        }
      }
    }
  }

  export interface Customer {
    address?: Customer.Address;

    age?: number;

    dateOfBirth?: string;

    firstName?: string;

    gender?: string;

    lastName?: string;

    rph?: number;

    title?: string;
  }

  export namespace Customer {
    export interface Address {
      city?: Address.City;

      country?: Address.Country;

      state?: Address.State;
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
  }

  export interface TrackingInfo {
    token?: string;
  }
}

export interface CruiseExtendHoldParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseGetCabinDetailsParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseGetFareCodeDetailsParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseGetHistoryParams {
  /**
   * Body param:
   */
  id?: number;

  /**
   * Body param:
   */
  cruiseReservation?: CruiseGetHistoryParams.CruiseReservation;

  /**
   * Body param:
   */
  trackingInfo?: CruiseGetHistoryParams.TrackingInfo;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export namespace CruiseGetHistoryParams {
  export interface CruiseReservation {
    id?: number;
  }

  export interface TrackingInfo {
    token?: string;
  }
}

export interface CruiseGetHistoryFromSupplierParams {
  /**
   * Body param:
   */
  id?: number;

  /**
   * Body param:
   */
  cruiseReservation?: CruiseGetHistoryFromSupplierParams.CruiseReservation;

  /**
   * Body param:
   */
  trackingInfo?: CruiseGetHistoryFromSupplierParams.TrackingInfo;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export namespace CruiseGetHistoryFromSupplierParams {
  export interface CruiseReservation {
    id?: number;
  }

  export interface TrackingInfo {
    token?: string;
  }
}

export interface CruiseGetItineraryFromSupplierParams {
  /**
   * Body param:
   */
  cruiseReservation?: CruiseGetItineraryFromSupplierParams.CruiseReservation;

  /**
   * Body param:
   */
  trackingInfo?: CruiseGetItineraryFromSupplierParams.TrackingInfo;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export namespace CruiseGetItineraryFromSupplierParams {
  export interface CruiseReservation {
    cruise?: CruiseReservation.Cruise;
  }

  export namespace CruiseReservation {
    export interface Cruise {
      packageId?: number;
    }
  }

  export interface TrackingInfo {
    token?: string;
  }
}

export interface CruiseGetPastPassengerDetailsParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseHoldCabinParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseListAddonsParams {
  /**
   * Body param:
   */
  cruiseReservation?: CruiseListAddonsParams.CruiseReservation;

  /**
   * Body param:
   */
  customers?: Array<CruiseListAddonsParams.Customer>;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export namespace CruiseListAddonsParams {
  export interface CruiseReservation {
    categories?: Array<CruiseReservation.Category>;

    cruise?: CruiseReservation.Cruise;

    customerReferences?: Array<CruiseReservation.CustomerReference>;

    pos?: CruiseReservation.Pos;
  }

  export namespace CruiseReservation {
    export interface Category {
      cabins?: Array<Category.Cabin>;

      code?: string;

      fare?: Category.Fare;
    }

    export namespace Category {
      export interface Cabin {
        number?: string;
      }

      export interface Fare {
        fareCode?: Fare.FareCode;
      }

      export namespace Fare {
        export interface FareCode {
          code?: string;
        }
      }
    }

    export interface Cruise {
      packageId?: number;
    }

    export interface CustomerReference {
      isPrimaryContact?: boolean;

      rph?: number;
    }

    export interface Pos {
      id?: number;

      currency?: string;

      type?: string;
    }
  }

  export interface Customer {
    address?: Customer.Address;

    age?: number;

    dateOfBirth?: string;

    firstName?: string;

    lastName?: string;

    rph?: number;
  }

  export namespace Customer {
    export interface Address {
      city?: Address.City;

      country?: Address.Country;

      state?: Address.State;
    }

    export namespace Address {
      export interface City {
        id?: string;
      }

      export interface Country {
        id?: string;
      }

      export interface State {
        id?: string;
      }
    }
  }
}

export interface CruiseListAirGatewaysParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseListCabinsParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseListCategoriesParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseListDiningsParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseListFareCodesParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseListPackagesParams {
  /**
   * Body param:
   */
  cruiseReservation?: CruiseListPackagesParams.CruiseReservation;

  /**
   * Body param:
   */
  customers?: Array<CruiseListPackagesParams.Customer>;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export namespace CruiseListPackagesParams {
  export interface CruiseReservation {
    categories?: Array<CruiseReservation.Category>;

    cruise?: CruiseReservation.Cruise;

    customerReferences?: Array<CruiseReservation.CustomerReference>;

    pos?: CruiseReservation.Pos;
  }

  export namespace CruiseReservation {
    export interface Category {
      code?: string;

      fare?: Category.Fare;
    }

    export namespace Category {
      export interface Fare {
        fareCode?: Fare.FareCode;
      }

      export namespace Fare {
        export interface FareCode {
          code?: string;
        }
      }
    }

    export interface Cruise {
      packageId?: number;

      packageTourId?: number;
    }

    export interface CustomerReference {
      isPrimaryContact?: boolean;

      RPH?: string;
    }

    export interface Pos {
      id?: string;

      currency?: string;
    }
  }

  export interface Customer {
    age?: number;

    firstName?: string;

    lastName?: string;

    rph?: number;
  }
}

export interface CruiseListPosParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseListPricesParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseListSpecialServicesParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseListTransfersParams {
  /**
   * Body param:
   */
  cruiseReservation?: CruiseListTransfersParams.CruiseReservation;

  /**
   * Body param:
   */
  customers?: Array<CruiseListTransfersParams.Customer>;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export namespace CruiseListTransfersParams {
  export interface CruiseReservation {
    categories?: Array<CruiseReservation.Category>;

    cruise?: CruiseReservation.Cruise;

    customerReferences?: Array<CruiseReservation.CustomerReference>;

    pos?: CruiseReservation.Pos;
  }

  export namespace CruiseReservation {
    export interface Category {
      code?: string;

      fare?: Category.Fare;
    }

    export namespace Category {
      export interface Fare {
        fareCode?: Fare.FareCode;
      }

      export namespace Fare {
        export interface FareCode {
          code?: string;
        }
      }
    }

    export interface Cruise {
      packageId?: number;
    }

    export interface CustomerReference {
      isPrimaryContact?: boolean;

      RPH?: string;
    }

    export interface Pos {
      currency?: string;
    }
  }

  export interface Customer {
    age?: number;

    dateOfBirth?: string;

    firstName?: string;

    lastName?: string;

    rph?: number;
  }
}

export interface CruiseModifyReservationParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseReadFromSupplierParams {
  /**
   * Body param:
   */
  id?: number;

  /**
   * Body param:
   */
  cruiseReservation?: CruiseReadFromSupplierParams.CruiseReservation;

  /**
   * Body param:
   */
  trackingInfo?: CruiseReadFromSupplierParams.TrackingInfo;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export namespace CruiseReadFromSupplierParams {
  export interface CruiseReservation {
    id?: number;

    readPreferences?: CruiseReservation.ReadPreferences;
  }

  export namespace CruiseReservation {
    export interface ReadPreferences {
      autoSyncOption?: string;

      mode?: string;
    }
  }

  export interface TrackingInfo {
    token?: string;
  }
}

export interface CruiseRecordPaymentParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseReleaseCabinParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export interface CruiseSearchPackageWithSupplierParams {
  /**
   * Body param:
   */
  filters?: Array<CruiseSearchPackageWithSupplierParams.Filter>;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export namespace CruiseSearchPackageWithSupplierParams {
  export interface Filter {
    key?: string;

    ranges?: Array<Filter.Range>;
  }

  export namespace Filter {
    export interface Range {
      from?: string;

      to?: string;
    }
  }
}

export interface CruiseSearchReservationParams {
  /**
   * Body param:
   */
  agencyConfirmationNumbers?: string;

  /**
   * Body param:
   */
  bookingStatusIds?: string;

  /**
   * Body param:
   */
  confirmationNumbers?: string;

  /**
   * Body param:
   */
  CreatedOn?: CruiseSearchReservationParams.CreatedOn;

  /**
   * Body param:
   */
  cruiselineIds?: string;

  /**
   * Body param:
   */
  firstName?: string;

  /**
   * Body param:
   */
  lastName?: string;

  /**
   * Body param:
   */
  ModifiedOn?: CruiseSearchReservationParams.ModifiedOn;

  /**
   * Body param:
   */
  packageId?: number;

  /**
   * Body param:
   */
  Pagination?: CruiseSearchReservationParams.Pagination;

  /**
   * Body param:
   */
  TravelDate?: CruiseSearchReservationParams.TravelDate;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export namespace CruiseSearchReservationParams {
  export interface CreatedOn {
    from?: string;

    to?: string;
  }

  export interface ModifiedOn {
    from?: string;

    to?: string;
  }

  export interface Pagination {
    pageIndex?: number;

    pageSize?: number;
  }

  export interface TravelDate {
    from?: string;

    to?: string;
  }
}

export interface CruiseSearchWithSupplierParams {
  /**
   * Body param:
   */
  pos?: CruiseSearchWithSupplierParams.Pos;

  /**
   * Body param:
   */
  SearchPreferences?: CruiseSearchWithSupplierParams.SearchPreferences;

  /**
   * Body param:
   */
  supplierId?: number;

  /**
   * Header param:
   */
  SiteItemId?: string;
}

export namespace CruiseSearchWithSupplierParams {
  export interface Pos {
    currency?: string;
  }

  export interface SearchPreferences {
    ConfirmationNumber?: string;

    CustomerFirstName?: string;

    CustomerLastName?: string;
  }
}

export declare namespace Cruise {
  export {
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
