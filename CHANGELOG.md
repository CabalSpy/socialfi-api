# Changelog

All notable changes to socialfi-api (npm and PyPI) are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versions follow `cabalspy-id`.

## [js 0.6.0] - 2026-10-15

### Added

- npm: the Trade Feed parts of `cabalspy-id/api` 0.6.0 — Data API methods `tradeFeed`,
  `tradeFeedTraders`, `addToTradeFeed`, `removeFromTradeFeed`, `tradeFeedNotifications`
  (+ Raw / iter), `TradeFeedStream`, `isTradeFeedEvent` / `isTradeFeedTradeEvent` /
  `isTradeFeedThesisEvent` and the Trade Feed types (re-exported automatically).

### Changed

- npm: depends on `cabalspy-id` ^0.6.0. The PyPI package stays 0.5.0 (`cabalspy-id>=0.5.0,<0.6`)
  until `cabalspy-id` 0.6.0 is on PyPI.

## [0.5.0] - 2026-10-14

### Added

- First release: `socialfi-api` on npm (re-exports `cabalspy-id/api`) and PyPI (re-exports `cabalspy_id.api`).
