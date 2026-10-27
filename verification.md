# Verification

- Corrected native model: 24 photo terminal positions across two batteries; 2 yellow caps only on batteries; 2 separate user-supplied perforated safety parts; main pipe display diameter 50 mm (estimated).
- JavaScript source, bundled JavaScript and service worker syntax checked.
- Binary glTF controls validated for 14 part roots, 2 side handles and 2 gauge needles.
- Browser: small-screen controls open as an overlay; component selection and existing touch controls remain functional. Fixed component positions stay unchanged when the inspector opens or a setting changes.
- Actual offline test: local server was stopped after the service worker reported Ready for offline use. Reloading the app still loaded the corrected native 3D model from its cache.
- Static fallback tested with the app's static display mode.
- Downloadable file: all runtime assets embedded; no external script/style references; embedded model hash checked against the native export; embedded JavaScript syntax checked. Direct file:// opening could not be tested because the in-app browser's URL policy blocks local HTML files. No workaround was attempted.
- Physical 92-inch touch hardware and phone operating-system file launchers were not available for testing.

## 27 October 2026 — merged pipes and safety air
- Rebuilt true hollow pipe unions; 0 boundary edges and 0 non-manifold edges.
- Nine expected pipe-wall components: common header, six inline links, and two lower branch networks. No disconnected battery takeoff.
- 784 bore-centerline samples clear of wall/cap obstruction; minimum sampled clearance 3.76 mm.
- Blender drivers: no release with supply absent or the selected branch closed; open supplied branch enables the effect.
- Browser: Show air release changes status Off → Visible; closing the Port branch changes it back to Off. Component screen coordinates remain identical during those controls.
- Exported asset contains one merged pipe mesh, 42 conditional release streaks and 168 perforation-origin air tracers.
- Full top, isometric, front and safety close-up images rendered in Blender; 18-frame safety air-release preview rendered in Blender.
