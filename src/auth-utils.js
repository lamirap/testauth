import { UserAgentApplication } from "msal";

export const requiresInteraction = errorMessage => {
    if (!errorMessage || !errorMessage.length) {
        return false;
    }

    return (
        errorMessage.indexOf("consent_required") > -1 ||
        errorMessage.indexOf("interaction_required") > -1 ||
        errorMessage.indexOf("login_required") > -1
    );
};

export const fetchMsGraph = async (url, accessToken) => {
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    return response.json();
};

export const isIE = () => {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf("MSIE ") > -1;
    const msie11 = ua.indexOf("Trident/") > -1;

    // If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
    // const isEdge = ua.indexOf("Edge/") > -1;

    return msie || msie11;
};

export const GRAPH_SCOPES = {
    OPENID: "openid",
    PROFILE: "profile",
    USER_READ: "User.Read",
    MAIL_READ: "Mail.Read",
    SITES_READ_ALL: "Sites.Read.All",
    SITES_READWRITE_ALL: "Sites.ReadWrite.All"
};

export const GRAPH_ENDPOINTS = {
    ME: "https://graph.microsoft.com/v1.0/me",
    SITE: "https://graph.microsoft.com/v1.0/sites/root",
    SITE_LIST: "https://graph.microsoft.com/v1.0/sites/tintl.sharepoint.com,0a18156c-e229-417d-bac0-1601ab933bdd,2972b475-7b48-4340-829b-65734b80d885/lists/770870c4-d8df-452c-9a59-3af04b4d99b3/items",
    SITE_NEWS: "https://graph.microsoft.com/v1.0/sites/tintl.sharepoint.com,0a18156c-e229-417d-bac0-1601ab933bdd,2972b475-7b48-4340-829b-65734b80d885/lists/770870c4-d8df-452c-9a59-3af04b4d99b3/items/64",
    MAIL: "https://graph.microsoft.com/v1.0/me/messages"
};

export const GRAPH_REQUESTS = {
    LOGIN: {
        scopes: [
            GRAPH_SCOPES.OPENID,
            GRAPH_SCOPES.PROFILE,
            GRAPH_SCOPES.USER_READ,
            GRAPH_SCOPES.SITES_READ_ALL
        ]
    },
    EMAIL: {
        scopes: [GRAPH_SCOPES.MAIL_READ]
    }
};

export const msalApp = new UserAgentApplication({
    auth: {
        clientId: "245e9392-c666-4d51-8f8a-bfd9e55b2456",
        authority: "https://login.microsoftonline.com/common",
        validateAuthority: true,
        postLogoutRedirectUri: "http://localhost:3000",
        navigateToLoginRequestUrl: false
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: isIE()
    },
    system: {
        navigateFrameWait: 0,
        logger: {
            error: console.error,
            errorPii: console.error,
            info: console.log,
            infoPii: console.log,
            verbose: console.log,
            verbosePii: console.log,
            warning: console.warn,
            warningPii: console.warn
        }
    }
});
