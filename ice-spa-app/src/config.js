// config.js
export default {
  oidc: {
    clientId: "0oaslgejheNuRTK1d697", // 👈 update with your Client ID
    issuer: "https://trial-4444583.okta.com/oauth2/ausslh7gef0rwNnkg697", // 👈 update
    redirectUri: window.location.origin + "/login/callback",
    authorizationEndpoint: "https://trial-4444583.okta.com/oauth2/ausslh7gef0rwNnkg697/v1/authorize",
    scopes: ["openid", "profile", "email", "promos:read"],
    tokenManager: {
      storage: "localStorage",
    },
  },
};
