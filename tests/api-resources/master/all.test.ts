// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NitroAPI from 'nitro-api';

const client = new NitroAPI({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource all', () => {
  // Prism tests are disabled
  test.skip('retrieveCruiseLineList', async () => {
    const responsePromise = client.master.all.retrieveCruiseLineList();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveCruiseLineList: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.master.all.retrieveCruiseLineList(
        { SiteItemId: '{{Nitro.Sandbox.SiteItemId}}' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });
});
