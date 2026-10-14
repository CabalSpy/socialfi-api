# socialfi-api — the SocialFi API for any app (Python)

[![PyPI](https://img.shields.io/pypi/v/socialfi-api.svg)](https://pypi.org/project/socialfi-api/) [![ci](https://github.com/CabalSpy/socialfi-api/actions/workflows/ci.yml/badge.svg)](https://github.com/CabalSpy/socialfi-api/actions/workflows/ci.yml) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**socialfi-api** adds a social layer to any crypto app: login with X, wallets verified by a tiny on-chain payment, reviewed KOL badges, live trades and PnL of your users, leaderboards and copy trading — on Solana, BNB Chain, Base, Ethereum and Robinhood Chain. Sync and async.

Part of **[CabalSpy ID](https://id.cabalspy.xyz)** — the SocialFi layer for crypto apps. [Website](https://www.cabalspy.xyz/cabalspy-id/) · [Docs](https://docs.cabalspy.xyz/cabalspy-id) · [API dashboard](https://apidashboard.cabalspy.xyz) · [Full SDK: cabalspy-id](https://github.com/CabalSpy/cabalspy-id-js)

```bash
pip install socialfi-api            # live trade stream: pip install "socialfi-api[stream]"
```

```python
from socialfi_api import CabalSpyID, CabalSpyIDAuth, verify_webhook

auth = CabalSpyIDAuth("csid_...", client_secret=os.environ["CSID_CLIENT_SECRET"], redirect_uri="https://your.app/callback")
req = auth.create_authorization_url(scope=["openid", "profile", "wallets"])

csid = CabalSpyID()  # reads CABALSPY_ID_API_KEY / CABALSPY_API_KEY
board = csid.leaderboard(blockchain="solana", period="7d", sort="pnl_usd")
```

Contents: `CabalSpyID` / `AsyncCabalSpyID` (Data API), `CabalSpyIDStream`, `CabalSpyIDAuth` (OIDC), `verify_webhook`, errors and response types — the `cabalspy_id.api` module. Full reference: [cabalspy-id README](https://github.com/CabalSpy/cabalspy-id-python#readme).

Versions follow `cabalspy-id`: 0.5.0 depends on `cabalspy-id` 0.5.0. This package contains no code of its own — it re-exports part of `cabalspy-id`, so behaviour, fixes and types are always the same.

## License

MIT
