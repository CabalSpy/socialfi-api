# socialfi-api — the SocialFi API for any app

[![npm](https://img.shields.io/npm/v/socialfi-api.svg)](https://www.npmjs.com/package/socialfi-api) [![PyPI](https://img.shields.io/pypi/v/socialfi-api.svg)](https://pypi.org/project/socialfi-api/) [![ci](https://github.com/CabalSpy/socialfi-api/actions/workflows/ci.yml/badge.svg)](https://github.com/CabalSpy/socialfi-api/actions/workflows/ci.yml) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**socialfi-api** is the SocialFi API for crypto apps: one SocialFi integration gives your platform login with X, wallets verified by a tiny on-chain payment (no wallet connect, no signatures), reviewed KOL badges, live trades and PnL of your users, leaderboards and copy trading — on Solana, BNB Chain, Base, Ethereum and Robinhood Chain.

Part of **[CabalSpy ID](https://id.cabalspy.xyz)** — the SocialFi layer for crypto apps. [Website](https://www.cabalspy.xyz/cabalspy-id/) · [Docs](https://docs.cabalspy.xyz/cabalspy-id) · [API dashboard](https://apidashboard.cabalspy.xyz) · [Full SDK: cabalspy-id](https://github.com/CabalSpy/cabalspy-id-js)

| Language | Install | Folder |
|---|---|---|
| TypeScript / JavaScript | `npm install socialfi-api` | [`js/`](js) |
| Python | `pip install socialfi-api` | [`python/`](python) |

```ts
import { CabalSpyID } from 'socialfi-api';
const csid = new CabalSpyID({ apiKey: process.env.CABALSPY_API_KEY });
const board = await csid.leaderboard({ blockchain: 'solana', period: '7d', sort: 'pnl_usd' });
```

```python
from socialfi_api import CabalSpyID
board = CabalSpyID().leaderboard(blockchain="solana", period="7d", sort="pnl_usd")
```

## What can you build

- **Social trading feed** — every trade of your users live, with their X profile and PnL
- **Leaderboards** — rank your users by PnL, volume, win rate or trades
- **Copy trading** — follow verified wallets of real, identified traders
- **Trader profiles** — X profile, verified wallets, holdings, PnL calendar
- **KOL badges** — reviewed badges for influential traders

## Packages

| Package | npm | PyPI |
|---|---|---|
| [cabalspy-id](https://github.com/CabalSpy/cabalspy-id-js) (everything) | `cabalspy-id` | `cabalspy-id` |
| [socialfi-api](https://github.com/CabalSpy/socialfi-api) | `socialfi-api` | `socialfi-api` |
| [socialfi-thesis](https://github.com/CabalSpy/socialfi-thesis) | `socialfi-thesis` | `socialfi-thesis` |
| [socialfi-widget](https://github.com/CabalSpy/socialfi-widget) | `socialfi-widget` | – |

Versions follow `cabalspy-id`: 0.5.0 depends on `cabalspy-id` 0.5.0. This package contains no code of its own — it re-exports part of `cabalspy-id`, so behaviour, fixes and types are always the same.

## Releasing

The two packages are released independently from this repository with GitHub releases (trusted publishing, no tokens):

- tag `js-vX.Y.Z` → npm (`js/`)
- tag `py-vX.Y.Z` → PyPI (`python/`)

Release `cabalspy-id` first; CI tests against the current `cabalspy-id` from GitHub.

## License

MIT
