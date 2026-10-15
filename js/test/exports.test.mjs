import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { test } from 'node:test';

import * as core from 'cabalspy-id/api';
import * as root from 'cabalspy-id';

import * as pkg from '../index.js';

const require = createRequire(import.meta.url);

test('re-exports cabalspy-id/api as the same objects', () => {
  assert.deepEqual(Object.keys(pkg).sort(), Object.keys(core).sort());
  for (const name of Object.keys(core)) assert.equal(pkg[name], core[name], name);
  for (const name of ['CabalSpyID', 'CabalSpyIDAuth', 'CabalSpyIDStream', 'verifyWebhook', 'NotFoundError']) {
    assert.equal(pkg[name], root[name], name);
  }
  assert.equal('ThesisClient' in pkg, false);
});

test('CommonJS', () => {
  const cjs = require('../index.cjs');
  assert.equal(cjs.CabalSpyID, require('cabalspy-id').CabalSpyID);
  assert.ok(new cjs.NotFoundError('x') instanceof require('cabalspy-id').CabalSpyIDError);
});

test('the client works through the package', async () => {
  const body = { success: true, data: { status: 'ok', trade_sync_age_seconds: 1 }, meta: {} };
  const client = new pkg.CabalSpyID({ apiKey: '', fetch: async () => new Response(JSON.stringify(body)) });
  assert.deepEqual(await client.health(), { status: 'ok', trade_sync_age_seconds: 1 });
});

// Trade Feed (cabalspy-id 0.6.0+): checked when the installed cabalspy-id has it.
test('Trade Feed', { skip: !('TradeFeedStream' in core) && 'cabalspy-id < 0.6.0' }, async () => {
  for (const name of ['TradeFeedStream', 'isTradeFeedEvent', 'isTradeFeedTradeEvent', 'isTradeFeedThesisEvent']) {
    assert.equal(pkg[name], root[name], name);
  }
  assert.equal(pkg.isTradeFeedTradeEvent({ type: 'trade_feed.trade' }), true);
  const calls = [];
  const body = { success: true, data: { in_trade_feed: true, created: true }, meta: {} };
  const client = new pkg.CabalSpyID({
    apiKey: 'k',
    fetch: async (url, init) => {
      calls.push([String(url), init.method, JSON.parse(init.body)]);
      return new Response(JSON.stringify(body), { status: 201 });
    },
  });
  assert.equal((await client.addToTradeFeed('user', 'alice')).created, true);
  assert.deepEqual(calls[0], ['https://api-id.cabalspy.xyz/v1/trade-feed/traders', 'POST', { csid_id: 'user', trader: 'alice' }]);
});
