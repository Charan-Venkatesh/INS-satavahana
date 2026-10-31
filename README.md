# Corrected 3D Battery Agitation — online and offline

## Separate local development
This folder is the independent battery-circuit display subproject, with its own Git repository. Keep display changes here; the original `../circuit-atlas` project is separate. Native Blender work stays in `../battery-pit-blender/assembled-circuit`.

From this folder, run `python3 -m http.server 4182 --bind 127.0.0.1 --directory dist`, then open http://127.0.0.1:4182. Edit `dist/app.js`, `dist/style.css` and the assets here. Rebuild the portable bundle after changes using the Build instructions below. Local development does not publish changes to the online site.

The main view loads the actual assembled Blender model, not a separately drawn replacement. The yellow cap stays on each battery lid. The circuit safety positions use the user-supplied perforated circular part. The lid follows photo 31844, with two rows of six terminals, red/yellow/clear fittings and an existing air opening. Main pipes have been thickened to a 50 mm estimated display diameter; gauge lines and battery hoses remain smaller.

## Online
Open https://battery-agitation-touchscreen-charan.elatedrose129.chatgpt.site with no login. The page is public, as requested. After the Controls panel says **Ready for offline use on this device**, the browser has cached the app, native 3D asset, images and code. You can install/add it to your home screen using the browser menu. Clearing browser/site storage removes that cached copy.

## Downloaded offline copy
Download dist/offline/Battery-Agitation-Offline.zip, extract it and open Battery-Agitation-Offline.html in a modern browser. The single HTML file embeds the complete model, air data, images, styles and bundled JavaScript. No server, network connection, Blender installation or sign-in is needed for this copy. Some file-preview apps do not execute HTML; use a browser or the installed online version.

## Devices and controls
Desktop, tablet and phone layouts retain the fixed orthographic top view. On smaller screens, Controls opens an overlay without resizing or moving the circuit. Choose a part provides an alternative to small targets. All models and buttons use local assets with no CDN or external font dependency. If WebGL is unavailable, an embedded top-view render provides a static fallback; live 3D animation then remains unavailable.

## Native project
The corrected Blender assembly, reusable component sources, render views and parameter file are in ../battery-pit-blender/assembled-circuit. Its .glb is exported to dist/assets/assembled-battery-agitation.glb. The side handles and air positions come from that native model. Camera movement is disabled in the display. Airflow and gauge behavior are illustrative, not CFD or measured plant operation. Actual pipe sizes, bank count and physical hose routing remain unverified.

## Build
Run scripts/build-portable.py with --esbuild pointing to an official esbuild executable. It bundles the app, embeds every runtime asset into the offline file, packages the ZIP and generates a versioned service worker. The downloadable HTML is self-contained; users do not need build tools.

## Pipe and safety visualization repair — 27 October 2026
The transparent piping is a real boolean-merged hollow network with shared bores at tees. Header runs meet the actual valve inlet locations; battery takeoff sleeves are drilled into the manifolds and the existing hoses reach those sleeves. Validation reports zero boundary/non-manifold edges, nine expected pipe-wall components separated only by inline components, and 784 clear bore-center samples.

The perforated safety faces retain their supplied geometry. An open mounting plenum connects each inlet beneath the face; no spring or pressure mechanism was invented. There are 21 tracer origins per face. Show air release toggles the tracer effect, which is visible only for an open supplied branch. Closing the branch stops its release effect. Pipe, jet and material changes are included in online and offline assets.

## Battery bubbles — local development
Controls → Battery front view opens a separate locked front cutaway with 110 rising bubbles, a translucent liquid volume and six illustrative internal lanes. Choose PORT/STBD and pause/resume locally. Closed branches hide bubbles; the global airflow pause freezes animation. The original top camera stays fixed, with moving cyan markers over each battery footprint and the existing pipe airflow. Internal geometry and animation are visual estimates based on the supplied reference, not a measured cell section. Source: dist/battery-bubbles.js; all changes remain in this subproject.

## Integrated front view — 31 October 2026
Top and Front select the existing locked cameras. In Front View, both existing battery cases become transparent and show liquid, six internal columns and rising bubbles within their original world-space bounds. Terminals, caps, hose, circuit components and camera positions are preserved. There is no separate battery scene, dialog, tab or view. Pause visible air pauses all bubbles; a closed branch hides its bubbles. Top restores the original opaque case and exterior plate edges. Internal construction is illustrative, not measured. The offline bundle includes these local changes.

## Bubble physics calibration
The supplied inlet range is 0.13–0.16 kg/cm², with pressure basis unconfirmed. `bubble-calibration.json` records missing physical inputs as null. Pressure alone is not mapped to bubble quantity, diameter or speed. Smaller staggered particles and mild lateral drift are provisional appearance choices, not engineering predictions. Closing a branch stops replacement bubbles while those already in the liquid finish rising; Pause freezes them. Bubble expansion is not calculated without confirmed liquid head and density.

## Start and shut-off interaction
Start opens the Port shut-off inspector. ON/Open and OFF/Close control each branch independently. Visible branch air and battery bubbles require both master Start and an open branch valve. Closing stops its display immediately; reopening restores it. The shared upstream supply may remain visible while a downstream valve is closed. Master Pause stops all air; Reset returns to ready.

Initial state and Reset: both branch shut-off valves are OFF/closed. Start enables incoming air only; each branch must be opened explicitly using ON/Open.
