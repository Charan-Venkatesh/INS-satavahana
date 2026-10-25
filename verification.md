# Verification

- Corrected native model: 24 photo terminal positions across two batteries; 2 yellow caps only on batteries; 2 separate user-supplied perforated safety parts; main pipe display diameter 50 mm (estimated).
- JavaScript source, bundled JavaScript and service worker syntax checked.
- Binary glTF controls validated for 14 part roots, 2 side handles and 2 gauge needles.
- Browser: small-screen controls open as an overlay; component selection and existing touch controls remain functional. Fixed component positions stay unchanged when the inspector opens or a setting changes.
- Actual offline test: local server was stopped after the service worker reported Ready for offline use. Reloading the app still loaded the corrected native 3D model from its cache.
- Static fallback tested with the app's static display mode.
- Downloadable file: all runtime assets embedded; no external script/style references; embedded model hash checked against the native export; embedded JavaScript syntax checked. Direct file:// opening could not be tested because the in-app browser's URL policy blocks local HTML files. No workaround was attempted.
- Physical 92-inch touch hardware and phone operating-system file launchers were not available for testing.
