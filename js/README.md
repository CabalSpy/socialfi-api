# socialfi-api — the SocialFi API for any app

[![npm](https://img.shields.io/npm/v/socialfi-api.svg)](https://www.npmjs.com/package/socialfi-api) [![ci](https://github.com/CabalSpy/socialfi-api/actions/workflows/ci.yml/badge.svg)](https://github.com/CabalSpy/socialfi-api/actions/workflows/ci.yml) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**socialfi-api** adds a social layer to any crypto app: login with X, wallets verified by a tiny on-chain payment, reviewed KOL badges, live trades and PnL of your users, leaderboards and copy trading — on Solana, BNB Chain, Base, Ethereum and Robinhood Chain.

Part of **[CabalSpy ID](https://id.cabalspy.xyz)** — the SocialFi layer for crypto apps. [Website](https://www.cabalspy.xyz/cabalspy-id/) · [Docs](https://docs.cabalspy.xyz/cabalspy-id) · [API dashboard](https://apidashboard.cabalspy.xyz) · [Full SDK: cabalspy-id](https://github.com/CabalSpy/cabalspy-id-js)

```bash
npm install socialfi-api
```

```ts
import { CabalSpyID, CabalSpyIDAuth, verifyWebhook } from 'socialfi-api';

// Login with CabalSpy ID (OpenID Connect, PKCE) on your server
const auth = new CabalSpyIDAuth({ clientId: 'csid_...', clientSecret: process.env.CSID_CLIENT_SECRET, redirectUri: 'https://your.app/callback' });
const login = await auth.createAuthorizationUrl({ scope: ['openid', 'profile', 'wallets'] });

// The Data API: your users, their verified wallets and trading stats
const csid = new CabalSpyID({ apiKey: process.env.CABALSPY_API_KEY });
const board = await csid.leaderboard({ blockchain: 'solana', period: '7d', sort: 'pnl_usd' });
const t = await csid.tracker({ blockchain: 'solana', address, period: '30d' });

// Every trade of your users, live
const stream = csid.stream({ blockchain: 'solana' });
stream.on('trade', (trade) => console.log(trade.trader?.username, trade.value_usd));
await stream.connect();
```

Contents: `CabalSpyID` (Data API), `CabalSpyIDStream`, `CabalSpyIDAuth` (OIDC), `verifyWebhook`, typed errors and response types — the `cabalspy-id/api` entry point. Full reference: [cabalspy-id README](https://github.com/CabalSpy/cabalspy-id-js#readme).

Token theses: [socialfi-thesis](https://github.com/CabalSpy/socialfi-thesis) · Browser widgets: [socialfi-widget](https://github.com/CabalSpy/socialfi-widget)

Versions follow `cabalspy-id`: 0.5.0 depends on `cabalspy-id` 0.5.0. This package contains no code of its own — it re-exports part of `cabalspy-id`, so behaviour, fixes and types are always the same.

## License

MIT
