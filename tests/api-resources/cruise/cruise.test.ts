// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NitroAPI from 'nitro-api';

const client = new NitroAPI({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cruise', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.cruise.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cruise.create(
        {
          filters: [
            { key: 'voyageId', values: ['16559601'] },
            { key: 'cruiseType', values: ['CruiseOnly'] },
          ],
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getFacets', async () => {
    const responsePromise = client.cruise.getFacets();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getFacets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cruise.getFacets(
        {
          body: '// all search filters that work with /v2/Cruise, will work here as well\r\n{\r\n    "filters": [\r\n        {\r\n            "key": "departureDate",\r\n            "ranges": [\r\n                {\r\n                    "from": "23-May-2023",\r\n                    "to": "23-Nov-2023"\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            "key": "duration",\r\n            "ranges": [\r\n                {\r\n                    "from": "",\r\n                    "to": ""\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            "key": "destinationId",\r\n            "values": []\r\n        },\r\n        {\r\n            "key": "destinationType",\r\n            "value": "All"\r\n        },\r\n        {\r\n            "key": "cruiselineId",\r\n            "values": []\r\n        },\r\n        {\r\n            "key": "shipId",\r\n            "values": []\r\n        },\r\n        {\r\n            "key": "departurePortCode",\r\n            "values": []\r\n        }\r\n    ]\r\n}',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });
});
