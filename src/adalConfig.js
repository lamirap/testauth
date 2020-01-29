import { AuthenticationContext, AdalConfig } from 'react-adal';

const adalConfig = {
    tenant: 'parimaldotcitylabs.onmicrosoft.com',
    clientId: 'a6228fdf-b4da-410c-a6b8-40f9626526a9',
    redirectUri: 'https://condescending-carson-2366ef.netlify.com/',
    endpoints: {
        api: 'https://parimaldotcitylabs.onmicrosoft.com/a6228fdf-b4da-410c-a6b8-40f9626526a9'
    },
    cacheLocation: 'sessionStorage'
};

export const authContext = new AuthenticationContext(adalConfig);

export const getToken = () => authContext.getCachedToken(adalConfig.clientId);

