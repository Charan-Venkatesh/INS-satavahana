# Battery Agitation touchscreen

A fixed orthographic top-view 3D circuit for a 92-inch touch display. Start locally with `python3 -m http.server 4182 --directory dist`, then open http://localhost:4182. Use browser full screen on the display. No external fonts or CDN packages are required.

The main camera has no drag, pan, orbit, pinch or wheel zoom. Selecting a component changes only the fixed-width inspector. Only a shut-off cross, a hand reducer's side handwheel, gauge needle and illustrative air particles can move. Browser resize/fullscreen refits the same top view.

Both branches follow the supplied 1000156124.jpg diagram: shut-off, automatic reducer (square with V), hand reducer (square with X and outboard handwheel), diamond filter, upward-facing PG, cell manifold and safety branch. Setpoints are copied from the drawing. A distinct air fitting connects each representative battery to its manifold; air never attaches to the electrical terminals.

The original project AirflowNetwork is reused unchanged in dist/airflow3d.js. The existing Blender pressure-cover geometry is exported to dist/assets/safety-cover.json and reused for the user's safety-valve display. The main view preserves the requested top symbols, rather than showing generic regulator bodies that obscure the drawing.

Dimensions, battery-bank quantity, physical hose routing, and equivalence of the photographed battery pressure cover to the diagram's line safety valve remain unverified. One representative battery per branch is a visual assembly, not a measured bank. Particle movement, gauge changes and release-path preview illustrate the controls; no real plant or validated pressure solver is connected.

Touch controls: inspect all parts and main header, open/close each shut-off, adjust each hand reducer within 0.130–0.160 in 0.005 steps, show the safety branch, pause air, toggle labels, reset and view the source drawing. All state resets when reloaded.
