"""socialfi-api — the SocialFi API by CabalSpy ID.

Re-exports ``cabalspy_id.api``: Data API clients, the trade stream, Login with
CabalSpy ID (OpenID Connect) and webhook verification.

    from socialfi_api import CabalSpyID, CabalSpyIDAuth, verify_webhook
"""

from typing import Any

import cabalspy_id.api as _source
from cabalspy_id.api import *  # noqa: F403
from cabalspy_id.api import __all__ as _source_all

__version__ = "0.5.0"
#: The version of the cabalspy-id package doing the work.
cabalspy_id_version: str = _source.__version__

__all__ = [*(n for n in _source_all if n != "__version__"), "__version__", "cabalspy_id_version"]  # noqa: PLE0604


def __getattr__(name: str) -> Any:
    # Names cabalspy_id.api loads lazily (the stream clients) are forwarded too.
    return getattr(_source, name)
