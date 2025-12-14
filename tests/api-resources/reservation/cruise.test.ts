// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NitroAPI from 'odysol-nitro-ts';

const client = new NitroAPI({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cruise', () => {
  // Prism tests are disabled
  test.skip('createReservation', async () => {
    const responsePromise = client.reservation.cruise.createReservation();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createReservation: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.createReservation(
        {
          cruiseReservation: {
            categories: [
              { cabins: [{ number: '18104' }], code: 'H6', fare: { farecode: { code: 'DISC50' } }, type: 4 },
            ],
            cruise: { packageId: 1330418, packageTourId: -1 },
            CruiselineAir: { GateWayCity: { id: 'MIA' }, type: 'RoundTrip' },
            customerReferences: [
              { isPrimaryContact: true, rph: 1 },
              { isPrimaryContact: true, rph: 2 },
            ],
            pos: { currency: 'USD' },
            supplierCommunicationInfo: {
              agency: { email: 'john@domain.com', phone1: { countryCode: '1', number: '1234567890' } },
              agent: { email: 'john@domain.com', phone1: { countryCode: '1', number: '1234567890' } },
            },
          },
          customers: [
            {
              address: { city: { name: 'MIAMI' }, country: { id: 'US' }, state: { id: 'FL' } },
              age: 35,
              dateOfBirth: '02-Jan-1988',
              firstName: 'John',
              gender: 'Male',
              lastName: 'Doe',
              rph: 1,
              title: 'MR',
            },
            {
              address: { city: { name: 'MIAMI' }, country: { id: 'US' }, state: { id: 'FL' } },
              age: 35,
              dateOfBirth: '01-Jan-1988',
              firstName: 'Jack',
              gender: 'Male',
              lastName: 'Doe',
              rph: 2,
              title: 'MR',
            },
          ],
          trackingInfo: { token: 'EQTEMPKEN' },
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('extendHold', async () => {
    const responsePromise = client.reservation.cruise.extendHold();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('extendHold: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.extendHold(
        {
          body: '{\r\n    "id": 72353,\r\n    "cruiseReservation": {\r\n        "id": 120330,\r\n        "syncInfo": { // token information received in the read booking response\r\n            "supplierSyncInfo": {\r\n                "token": "e8c7ae", // supplier token mandatory in case of RCCL API\r\n                "lastSyncOn": "19-Jun-2023 09:17:42",\r\n                "lastModifiedOn": "19-Jun-2023 09:32:40"\r\n            },\r\n            "apiSyncInfo": { // API token is required for all APIs (including RCCL)\r\n                "token": "kQ+uksdw20jvrYTFdVWATrILOrvGTTCC",\r\n                "sessionId": "c584adef-5575-4e80-b20b-3abbc64d3082",\r\n                "lastSyncOn": "19-Jun-2023 09:17:46"\r\n            }\r\n        }\r\n    }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getCabinDetails', async () => {
    const responsePromise = client.reservation.cruise.getCabinDetails();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getCabinDetails: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.getCabinDetails(
        {
          body: '//This request contains only mandatory elements\r\n{\r\n    "cruiseReservation": {\r\n        "cruise": {\r\n            "packageId": 1282255,\r\n            "packageTourId": -1\r\n        },\r\n        "categories": [\r\n            {\r\n                "code": "08",\r\n                "fare": {\r\n                    "fareCode": {\r\n                        "code": "H8212136"\r\n                    }\r\n                },\r\n                "cabins": [\r\n                    {\r\n                        "number": "3119"\r\n                    }\r\n                ]\r\n            }\r\n        ]\r\n    },\r\n    "customers": [\r\n        {\r\n            "rph": 1,\r\n            "age": 52\r\n        },\r\n        {\r\n            "rph": 2,\r\n            "age": 57\r\n        }\r\n    ],\r\n    "trackingInfo": {}\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getFareCodeDetails', async () => {
    const responsePromise = client.reservation.cruise.getFareCodeDetails();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getFareCodeDetails: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.getFareCodeDetails(
        {
          body: '{\r\n    "cruiseReservation": {\r\n        "pos": { //Either id or currency is mandatory\r\n            //"id": 1,\r\n            "currency": "USD"\r\n        },\r\n        "customerReferences": [\r\n            {\r\n                "rph": 1,\r\n                "isPrimaryContact": true\r\n            },\r\n            {\r\n                "rph": 2\r\n            }\r\n        ],\r\n        "cruise": {\r\n            "packageId": 1269434\r\n        },\r\n        "categories": [\r\n            {\r\n                "fare": {\r\n                    "fareCode": {\r\n                        "code": "I7522610" // To Fetch farecode details, code is required \r\n                    }\r\n                }\r\n            }\r\n        ]\r\n    },\r\n    "customers": [\r\n        {\r\n            "rph": 1,\r\n            "age": 52,\r\n            "address": {\r\n                "country": {\r\n                    "id": "US"\r\n                },\r\n                "state": {\r\n                    "id": "FL"\r\n                }\r\n            }\r\n        },\r\n        {\r\n            "age": 57\r\n        }\r\n    ],\r\n    "trackingInfo": {\r\n        "token": "EQTEMPKEN"\r\n    }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getHistory', async () => {
    const responsePromise = client.reservation.cruise.getHistory();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getHistory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.getHistory(
        {
          id: 69332,
          cruiseReservation: { id: 117312 },
          trackingInfo: { token: 'EQTEMPKEN' },
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getHistoryFromSupplier', async () => {
    const responsePromise = client.reservation.cruise.getHistoryFromSupplier();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getHistoryFromSupplier: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.getHistoryFromSupplier(
        {
          id: 69332,
          cruiseReservation: { id: 117312 },
          trackingInfo: { token: 'EQTEMPKEN' },
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getItineraryFromSupplier', async () => {
    const responsePromise = client.reservation.cruise.getItineraryFromSupplier();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getItineraryFromSupplier: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.getItineraryFromSupplier(
        {
          cruiseReservation: { cruise: { packageId: 1330761 } },
          trackingInfo: { token: 'EQTEMPKEN' },
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getPastPassengerDetails', async () => {
    const responsePromise = client.reservation.cruise.getPastPassengerDetails();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPastPassengerDetails: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.getPastPassengerDetails(
        {
          body: '//This request contains only mandatory elements\r\n{\r\n    "cruiseReservation": {\r\n        "pos": {\r\n            "currency": "USD"\r\n        },\r\n        "customerReferences": [\r\n            {\r\n                "rph": 1,\r\n                "isPrimaryContact": true\r\n            }\r\n        ],\r\n        "cruise": {\r\n            "packageId": 1269434,\r\n            "packageTourId": -1\r\n        }\r\n    },\r\n    "customers": [\r\n        {\r\n            "rph": 1,\r\n            "firstName": "Daniel",\r\n            "lastName": "Florence",\r\n            "dateOfBirth": "17-Sep-1981",\r\n            "contactInfo": {\r\n                "email": "dflorence21@hotmail.com"\r\n            }\r\n        }\r\n    ],\r\n    "trackingInfo": {\r\n        "token": "EQTEMPKEN"\r\n    }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('holdCabin', async () => {
    const responsePromise = client.reservation.cruise.holdCabin();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('holdCabin: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.holdCabin(
        {
          body: '//This request contains only mandatory elements\r\n{\r\n    "cruiseReservation": {\r\n        "pos": {\r\n            "currency": "USD"\r\n        },\r\n        "customerReferences": [\r\n            {\r\n                "rph": 1,\r\n                "isPrimaryContact": true\r\n            },\r\n            {\r\n                "rph": 2\r\n            }\r\n        ],\r\n        "cruise": {\r\n            "packageId": 1269434,\r\n            "packageTourId": -1\r\n        },\r\n        "categories": [\r\n            {\r\n                "code": "2B",\r\n                "fare": {\r\n                    "fareCode": {\r\n                        "code": "G0737880"\r\n                    }\r\n                },\r\n                "cabins": [\r\n                    {\r\n                        "number": "9998"\r\n                    }\r\n                ]\r\n            }\r\n        ]\r\n    },\r\n    "customers": [\r\n        {\r\n            "rph": 1,\r\n            "age": 52,\r\n            "address": {\r\n                "country": {\r\n                    "id": "US"\r\n                }\r\n            }\r\n        },\r\n        {\r\n            "rph": 2,\r\n            "age": 57\r\n        }\r\n    ],\r\n    "trackingInfo": {\r\n        "token": "EQTEMPKEN"\r\n    }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listAddons', async () => {
    const responsePromise = client.reservation.cruise.listAddons();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAddons: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.listAddons(
        {
          cruiseReservation: {
            categories: [
              { cabins: [{ number: '9068' }], code: 'IR1', fare: { fareCode: { code: 'EZAT35DZE' } } },
            ],
            cruise: { packageId: 1324816 },
            customerReferences: [
              { isPrimaryContact: true, rph: 1 },
              { isPrimaryContact: true, rph: 2 },
            ],
            pos: { id: 1, currency: 'USD', type: 'B2C' },
          },
          customers: [
            {
              address: { city: { id: 'MIA' }, country: { id: 'US' }, state: { id: 'FL' } },
              age: 52,
              dateOfBirth: '02-Jan-1970',
              firstName: 'John',
              lastName: 'Doe',
              rph: 1,
            },
            {
              address: { city: { id: 'MIA' }, country: { id: 'US' }, state: { id: 'FL' } },
              age: 57,
              dateOfBirth: '01-Jan-1965',
              firstName: 'Maria',
              lastName: 'Doe',
              rph: 2,
            },
          ],
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listAirGateways', async () => {
    const responsePromise = client.reservation.cruise.listAirGateways();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAirGateways: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.listAirGateways(
        {
          body: '// for norwegian we will only receive departure city codes\r\n{\r\n    "cruiseReservation": {\r\n        "cruise": {\r\n            "packageId": 1310202\r\n        }\r\n    },\r\n    "trackingInfo": {\r\n        "token": "EQTEMPKEN"\r\n    }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listCabins', async () => {
    const responsePromise = client.reservation.cruise.listCabins();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listCabins: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.listCabins(
        {
          body: '//This request contains only mandatory elements\r\n{\r\n    "cruiseReservation": {\r\n        "cruise": {\r\n            "packageId": 1346847,\r\n            "packageTourId": -1\r\n        },\r\n        "categories": [\r\n            {\r\n                "code": "2E",\r\n                "fare": {\r\n                    "fareCode": {\r\n                        "code": "I9604829"\r\n                    }\r\n                }\r\n            }\r\n        ]\r\n    },\r\n    "customers": [\r\n        {\r\n            "rph": 1,\r\n            "age": 52,\r\n            "address": {\r\n                "country": {\r\n                    "id": "US"\r\n                }\r\n            }\r\n        },\r\n        {\r\n            "rph": 2,\r\n            "age": 57\r\n        }\r\n    ],\r\n    "trackingInfo": {\r\n        "token": "EQTEMPKEN"\r\n    }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listCategories', async () => {
    const responsePromise = client.reservation.cruise.listCategories();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listCategories: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.listCategories(
        {
          body: '//This request contains only mandatory elements\r\n{\r\n    "cruiseReservation": {\r\n        "pos": {\r\n            "type": "B2B" // Here Type of Office should be passed\r\n        },\r\n        "cruise": {\r\n            "packageId": 1340642\r\n        }\r\n    },\r\n    "customers": [\r\n        {\r\n            "rph": 1,\r\n            "age": 30,\r\n            "address": {\r\n                "country": {\r\n                    "id": "US"\r\n                }\r\n            }\r\n        },\r\n        {\r\n            "rph": 2,\r\n            "age": 30\r\n        }\r\n    ],\r\n    "trackingInfo": {\r\n        "token": "EQTEMPKEN"\r\n    }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listDinings', async () => {
    const responsePromise = client.reservation.cruise.listDinings();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listDinings: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.listDinings(
        {
          body: '//This request contains only mandatory elements\r\n{\r\n  "cruiseReservation": {\r\n    "pos": {\r\n      "currency": "USD"\r\n    },\r\n    "customerReferences": [\r\n      {\r\n        "rph": 1,\r\n        "isPrimaryContact": true\r\n      },\r\n      {\r\n        "rph": 2\r\n      }\r\n    ],\r\n    "cruise": {\r\n      "packageId": 1269434,\r\n      "packageTourId": -1\r\n    },\r\n    "categories": [\r\n      {\r\n        "code": "2B",\r\n        "fare": {\r\n          "fareCode": {\r\n            "code": "G0737880"\r\n          }\r\n        },\r\n        "cabins": [\r\n          {\r\n            "number": "9330"\r\n          }\r\n        ]\r\n      }\r\n    ]\r\n  },\r\n  "customers": [\r\n    {\r\n      "rph": 1,      \r\n      "age": 52\r\n    },\r\n    {\r\n      "rph": 2,      \r\n      "age": 57      \r\n    }\r\n  ],\r\n  "trackingInfo": {\r\n    "token": "EQTEMPKEN"\r\n  }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listFareCodes', async () => {
    const responsePromise = client.reservation.cruise.listFareCodes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listFareCodes: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.listFareCodes(
        {
          body: '{\r\n    "cruiseReservation": {\r\n        "cruise": {\r\n            "packageId": 1250149\r\n        },\r\n        "pos": {\r\n          "id": 2465,\r\n          "type": "B2B" // to get additional farecodes which are not returned in case of B2C, PPSRVCHG is not bookable online, as bookOnline: true is not present, hence its not bookable online\r\n        }\r\n    },\r\n    "customers": [\r\n        {\r\n            "rph": 1,\r\n            "age": 52,\r\n            "address": {\r\n                "country": {\r\n                    "id": "US"\r\n                }\r\n            }\r\n        },\r\n        {\r\n            "rph": 2,\r\n            "age": 57\r\n        }\r\n    ],\r\n    "trackingInfo": {\r\n        "token": "EQTEMPKEN"\r\n    }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listPackages', async () => {
    const responsePromise = client.reservation.cruise.listPackages();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listPackages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.listPackages(
        {
          cruiseReservation: {
            categories: [{ code: 'MM', fare: { fareCode: { code: 'NH1' } } }],
            cruise: { packageId: 1277420, packageTourId: -1 },
            customerReferences: [
              { isPrimaryContact: true, RPH: '1' },
              { isPrimaryContact: true, RPH: '2' },
            ],
            pos: { id: '0', currency: 'USD' },
          },
          customers: [
            { age: 52, firstName: 'John', lastName: 'Doe', rph: 1 },
            { age: 57, firstName: 'Maria', lastName: 'Doe', rph: 2 },
          ],
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listPos', async () => {
    const responsePromise = client.reservation.cruise.listPos();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listPos: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.listPos(
        {
          body: '{\r\n    "cruiseReservation": {\r\n        "cruise": {\r\n            "packageId": 1269434 // Here packageId is mandatory\r\n        }\r\n    }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listPrices', async () => {
    const responsePromise = client.reservation.cruise.listPrices();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listPrices: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.listPrices(
        {
          body: '//Cancellation policies can be found under "cancellationPolicies" element in the response\r\n{\r\n    "cruiseReservation": {\r\n        "cruise": {\r\n            "packageId": 1316422,\r\n            "packageTourId": -1\r\n        },\r\n        "categories": [\r\n            {\r\n                "code": "OS",\r\n                "fare": {\r\n                    "fareCode": {\r\n                        "code": "KCH"\r\n                    }\r\n                },\r\n                "cabins": [\r\n                    {\r\n                        "number": "7231"\r\n                    }\r\n                ]\r\n            }\r\n        ]\r\n    },\r\n    "customers": [\r\n        {\r\n            "rph": 1,\r\n            "firstName": "John",\r\n            "lastName": "Doe",\r\n            "dateOfBirth": "02-Jan-1970",\r\n            "age": 52,\r\n            "address": {\r\n                "country": {\r\n                    "id": "US"\r\n                }\r\n            }\r\n        },\r\n        {\r\n            "rph": 2,\r\n            "firstName": "Maria",\r\n            "lastName": "Doe",\r\n            "dateOfBirth": "01-Jan-1965",\r\n            "age": 57,\r\n            "address": {\r\n                "country": {\r\n                    "id": "US"\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    "trackingInfo": {\r\n        "token": "EQTEMPKEN"\r\n    }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listSpecialServices', async () => {
    const responsePromise = client.reservation.cruise.listSpecialServices();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listSpecialServices: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.listSpecialServices(
        {
          body: '//This request contains only mandatory elements\r\n{\r\n  "cruiseReservation": {\r\n    "pos": {\r\n      "currency": "USD"\r\n    },\r\n    "customerReferences": [\r\n      {\r\n        "rph": 1,\r\n        "isPrimaryContact": true\r\n      },\r\n      {\r\n        "rph": 2\r\n      }\r\n    ],\r\n    "cruise": {\r\n      "packageId": 1269434,\r\n      "packageTourId": -1\r\n    },\r\n    "categories": [\r\n      {\r\n        "code": "2B",\r\n        "fare": {\r\n          "fareCode": {\r\n            "code": "G0737880"\r\n          }\r\n        },\r\n        "cabins": [\r\n          {\r\n            "number": "9330"\r\n          }\r\n        ]\r\n      }\r\n    ]\r\n  },\r\n  "customers": [\r\n    {\r\n      "rph": 1,\r\n      "age": 52\r\n    },\r\n    {\r\n      "rph": 2,     \r\n      "age": 57\r\n    }\r\n  ],\r\n  "trackingInfo": {\r\n    "token": "EQTEMPKEN"\r\n  }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listTransfers', async () => {
    const responsePromise = client.reservation.cruise.listTransfers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listTransfers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.listTransfers(
        {
          cruiseReservation: {
            categories: [{ code: '4V', fare: { fareCode: { code: 'I0452040' } } }],
            cruise: { packageId: 1269292 },
            customerReferences: [
              { isPrimaryContact: true, RPH: '1' },
              { isPrimaryContact: true, RPH: '2' },
            ],
            pos: { currency: 'USD' },
          },
          customers: [
            { age: 52, dateOfBirth: '02-Jan-1970', firstName: 'John', lastName: 'Doe', rph: 1 },
            { age: 57, dateOfBirth: '01-Jan-1965', firstName: 'Maria', lastName: 'Doe', rph: 2 },
          ],
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('modifyReservation', async () => {
    const responsePromise = client.reservation.cruise.modifyReservation();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('modifyReservation: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.modifyReservation(
        {
          body: '{\r\n    "id": 69734,\r\n    "cruiseReservation": {\r\n        "id": 117714,\r\n        "cruise": {\r\n            "packageId": 1336123\r\n        },\r\n        "reservationReferences": {\r\n            "confirmationNumber": "400566"\r\n        },\r\n        "categories": [\r\n            {\r\n                "code": "1N",\r\n                "fare": {\r\n                    "fareCode": {\r\n                        "code": "G0684253"\r\n                    }\r\n                },\r\n                "cabins": [\r\n                    {\r\n                        "number": "2596"\r\n                    }\r\n                ]\r\n            }\r\n        ],\r\n        "syncInfo": { // To modify the booking, we will utilize the token(s) that were generated by the Read From Supplier API.\r\n            "supplierSyncInfo": {\r\n                "token": "234d97",\r\n                "lastSyncOn": "04-May-2023 06:21:37",\r\n                "lastModifiedOn": "04-May-2023 06:36:34"\r\n            },\r\n            "apiSyncInfo": {\r\n                "token": "HzWoWolM20gcP3kp69RxQJUQajckylAN",\r\n                "sessionId": "29793f1c-d4eb-4071-9510-6a3724ca500d",\r\n                "lastSyncOn": "04-May-2023 06:21:41"\r\n            }\r\n        },\r\n        "dinings": [\r\n            {\r\n                "id": 1,\r\n                "code": "M",\r\n                "name": "05:30 PM",\r\n                "status": 1\r\n            }\r\n        ]\r\n    },\r\n    "customers": [\r\n        {\r\n            "rph": 1,\r\n            "firstName": "Johny", // Modified The First Name of Passanger\r\n            "lastName": "Doe",\r\n            "dateOfBirth": "11-Jan-1991", // Modified Date of Birth of Passanger \r\n            "address": {\r\n                "country": {\r\n                    "id": "US"\r\n                },\r\n                "state": {\r\n                    "id": "FL"\r\n                },\r\n                "city": {\r\n                    "id": "MIA"\r\n                }\r\n            },\r\n            "ContactInfo": {\r\n                "Email": "john@domain.com",\r\n                "Phone1": {\r\n                    "CountryCode": "1",\r\n                    "Number": "416-555-4566"\r\n                }\r\n            },\r\n            "passportInfo": { // Added A Passport Information \r\n                "number": "1212121212",\r\n                "expirationDate": "02-Jan-2026",\r\n                "issueDate": "02-Jan-2021",\r\n                "issueCountry": {\r\n                    "id": "US"\r\n                }\r\n            }\r\n        },\r\n        {\r\n            "rph": 2,\r\n            "firstName": "Jack",\r\n            "lastName": "Doe",\r\n            "dateOfBirth": "21-Jan-1991",\r\n            "address": {\r\n                "country": {\r\n                    "id": "US"\r\n                },\r\n                "state": {\r\n                    "id": "FL"\r\n                },\r\n                "city": {\r\n                    "id": "MIA"\r\n                }\r\n            },\r\n            "ContactInfo": {\r\n                "Email": "maria@domain.com",\r\n                "Phone1": {\r\n                    "CountryCode": "1",\r\n                    "Number": "416-555-4566"\r\n                }\r\n            },\r\n            "passportInfo": { // Added A Passport Information \r\n                "number": "2121212121",\r\n                "expirationDate": "02-Jan-2026",\r\n                "issueDate": "02-Jan-2021",\r\n                "issueCountry": {\r\n                    "id": "US"\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    "trackingInfo": {\r\n        "token": "EQTEMPKEN"\r\n    }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('readFromSupplier', async () => {
    const responsePromise = client.reservation.cruise.readFromSupplier();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('readFromSupplier: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.readFromSupplier(
        {
          id: 72353,
          cruiseReservation: { id: 120330, readPreferences: { autoSyncOption: 'NOLOCK', mode: 'modify' } },
          trackingInfo: { token: 'EQTEMPKEN' },
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('recordPayment', async () => {
    const responsePromise = client.reservation.cruise.recordPayment();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('recordPayment: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.recordPayment(
        {
          body: '{\r\n    "trackingInfo": {\r\n        "requestId": "cf87e672-1f98-4ae5-bb17-6b0b936a4a4f",\r\n        "token": "EQTEMPKEN"\r\n    },\r\n    "id": 97269,\r\n    "cruiseReservation": {\r\n        "id": 146131,\r\n        "syncInfo": {\r\n            "supplierSyncInfo": {\r\n                "token": "e0b14b",\r\n                "lastSyncOn": "19-Jan-2024 03:53:02"\r\n            },\r\n            "apiSyncInfo": {\r\n                "token": "fT1fDswY3Eih6YPKyMsDRankF5ttC1Mn",\r\n                "sessionId": "ca83e9a1-cbc8-4503-a9e4-179b6d0b5327",\r\n                "lastSyncOn": "19-Jan-2024 03:53:07"\r\n            }\r\n        }\r\n    },\r\n    "paymentToProcess": {\r\n        "amount": 1136.4,\r\n        "currency": "USD",\r\n        "paymentForm": "Check",\r\n        "paymentPreferences": {\r\n            "confirmReservation": true // pass this flag to mark the existing \'Held\' reservation as \'Confirmed\' in Odysseus system\r\n        },\r\n        "maskedCard": {\r\n            "number": "XXXXXXXXXXXX1111",// masked card information\r\n            "cardHolderName": "John Doe",\r\n            "billingAddress": {\r\n                "city": {\r\n                    "id": "MIA"\r\n                },\r\n                "country": {\r\n                    "id": "US"\r\n                },\r\n                "state": {\r\n                    "id": "FL"\r\n                },\r\n                "addressline1": "NE 4th Avenue",\r\n                "postalCode": "33109"\r\n            }\r\n        }\r\n    }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('releaseCabin', async () => {
    const responsePromise = client.reservation.cruise.releaseCabin();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('releaseCabin: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.releaseCabin(
        {
          body: '//This request contains only mandatory elements\r\n{\r\n    "cruiseReservation": {\r\n        "pos": {\r\n            "currency": "USD"\r\n        },\r\n        "cruise": {\r\n            "packageId": 1269434,\r\n            "packageTourId": -1\r\n        },\r\n        "categories": [\r\n            {\r\n                "code": "2B",\r\n                "fare": {\r\n                    "fareCode": {\r\n                        "code": "G0737880"\r\n                    }\r\n                },\r\n                "cabins": [\r\n                    {\r\n                        "number": "9998"\r\n                    }\r\n                ]\r\n            }\r\n        ]\r\n    },\r\n    "trackingInfo": {\r\n        "token": "EQTEMPKEN"\r\n    }\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('searchPackageWithSupplier', async () => {
    const responsePromise = client.reservation.cruise.searchPackageWithSupplier();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('searchPackageWithSupplier: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.searchPackageWithSupplier(
        {
          filters: [
            { key: 'departureDateTime', ranges: [{ from: '01-Dec-2024', to: '30-Dec-2024' }] },
            { key: 'duration', ranges: [{ from: '7', to: '9' }] },
            { key: 'destinationId', ranges: [{ from: 'from', to: 'to' }] },
            { key: 'cruiselineId', ranges: [{ from: 'from', to: 'to' }] },
            { key: 'shipId', ranges: [{ from: 'from', to: 'to' }] },
            { key: 'departurePortCode', ranges: [{ from: 'from', to: 'to' }] },
          ],
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('searchReservation', async () => {
    const responsePromise = client.reservation.cruise.searchReservation();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('searchReservation: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.searchReservation(
        {
          agencyConfirmationNumbers: '1FOO7J7',
          bookingStatusIds: '7',
          confirmationNumbers: '345652',
          CreatedOn: { from: '01-Dec-2022', to: '30-Dec-2022' },
          cruiselineIds: '6,8',
          firstName: 'John',
          lastName: 'Doe',
          ModifiedOn: { from: '01-Dec-2022', to: '30-Dec-2022' },
          packageId: 1269600,
          Pagination: { pageIndex: 1, pageSize: 20 },
          TravelDate: { from: '30-Jan-2023', to: '25-Feb-2023' },
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('searchWithSupplier', async () => {
    const responsePromise = client.reservation.cruise.searchWithSupplier();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('searchWithSupplier: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reservation.cruise.searchWithSupplier(
        {
          pos: { currency: 'USD' },
          SearchPreferences: {
            ConfirmationNumber: '345652',
            CustomerFirstName: 'John',
            CustomerLastName: 'Doe',
          },
          supplierId: 8,
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });
});
