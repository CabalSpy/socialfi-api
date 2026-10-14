from __future__ import annotations

import cabalspy_id.api as source

import socialfi_api


def test_reexports_the_same_objects() -> None:
    for name in source.__all__:
        if name == "__version__":
            continue
        assert getattr(socialfi_api, name) is getattr(source, name), name


def test_entry_points() -> None:
    for name in [
        "CabalSpyID",
        "AsyncCabalSpyID",
        "CabalSpyIDAuth",
        "CabalSpyIDStream",
        "verify_webhook",
        "NotFoundError",
    ]:
        assert getattr(socialfi_api, name) is getattr(source, name), name
    assert socialfi_api.__version__ == "0.5.0"
    assert socialfi_api.cabalspy_id_version == source.__version__


def test_star_import() -> None:
    ns: dict[str, object] = {}
    exec("from socialfi_api import *", ns)
    for name in [
        "CabalSpyID",
        "AsyncCabalSpyID",
        "CabalSpyIDAuth",
        "CabalSpyIDStream",
        "verify_webhook",
        "NotFoundError",
    ]:
        assert ns[name] is getattr(source, name), name
