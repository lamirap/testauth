import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

const adalConfig = {
    // tenant: 'parimaldotcitylabs.onmicrosoft.com',
    // clientId: 'a6228fdf-b4da-410c-a6b8-40f9626526a9',
    tenant: 'temasek.com.sg',
    clientId: "245e9392-c666-4d51-8f8a-bfd9e55b2456",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: 'https://condescending-carson-2366ef.netlify.com/',
    // redirectUri: 'http://localhost:3000/',
    endpoints: {
        api: 'https://graph.microsoft.com'
    },
    cacheLocation: 'sessionStorage',
    consentScopes: ["User.Read", "User.Read.all", "Group.Read.all", "Sites.Read.all", "Sites.ReadWrite.all"]
};

export const authContext = new AuthenticationContext(adalConfig);

export const getToken = () => authContext.getCachedToken(adalConfig.clientId);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
