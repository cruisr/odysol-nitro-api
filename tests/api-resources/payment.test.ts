// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NitroAPI from '@cruisr/nitro-ts';

const client = new NitroAPI({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payment', () => {
  // Prism tests are disabled
  test.skip('tokenizeCard', async () => {
    const responsePromise = client.payment.tokenizeCard();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('tokenizeCard: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payment.tokenizeCard(
        {
          amount: 1424.5,
          BillingDetails: {
            Address: {
              Addressline1: 'NE 4th Avenue',
              Addressline2: '123',
              City: { name: 'MIAMI' },
              Country: { id: 'US' },
              PostalCode: '33141',
              State: { id: 'FL' },
            },
            BankName: 'HSBC',
            ContactInfo: {
              Phone1: { CountryCode: '1', Number: '123-456-7890', Type: 'Billing' },
              Phone2: { CountryCode: '1', Number: '123-456-7890', Type: 'Bank' },
            },
          },
          cardHolderName: 'John Doe',
          currency: 'USD',
          expiration: '12/26',
          Number: '4387751111111111',
          type: 'VI',
          SiteItemId: '{{Nitro.Sandbox.SiteItemId}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NitroAPI.NotFoundError);
  });
});
