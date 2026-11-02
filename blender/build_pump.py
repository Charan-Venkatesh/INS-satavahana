# Centrifugal cooling-water pump set for screen 3 (Storage Battery and Panel Cooling System), modelled in Blender.
# Horizontal end-suction pump close-coupled through a lantern / coupling guard to a TEFC electric motor, on a fabricated
# baseplate. Pump axis along +X (motor at -X, pump at +X). Suction enters axially at the +X end; discharge leaves the top
# of the volute (+Z). Named nodes for the app: "Shaft" (spins), "Suction_Port" / "Discharge_Port" (empties at the
# flange faces, pointing out of the port).
# Run: blender -b -P blender/build_pump.py -- <out_dir>  → pump_set.glb (copy to dist/assets/), pump_set.blend, pump_render.png
# Dimensions are a visual estimate (about 1.25 m long), not taken from a manufacturer drawing.
import bpy, bmesh, math, sys, os
from mathutils import Vector, Matrix

out = sys.argv[sys.argv.index('--') + 1] if '--' in sys.argv else os.path.dirname(__file__)
os.makedirs(out, exist_ok=True)
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene

# ---------------------------------------------------------------- materials
def mat(name, color, metal=0.0, rough=0.4, coat=0.0):
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*color, 1); b.inputs['Metallic'].default_value = metal; b.inputs['Roughness'].default_value = rough
    if coat: b.inputs['Coat Weight'].default_value = coat
    return m
M = {
    'motor': mat('Motor | Marine blue enamel', (0.03, 0.12, 0.30), 0.15, 0.32, 0.4),
    'pump': mat('Pump | Grey-green enamel', (0.16, 0.24, 0.21), 0.2, 0.38, 0.3),
    'base': mat('Baseplate | Dark grey', (0.10, 0.11, 0.12), 0.3, 0.55),
    'steel': mat('Steel | Machined', (0.72, 0.74, 0.76), 1.0, 0.22),
    'bolt': mat('Steel | Bolts', (0.30, 0.31, 0.33), 0.9, 0.35),
    'brass': mat('Brass', (0.78, 0.60, 0.25), 1.0, 0.25),
    'guard': mat('Guard | Safety yellow', (0.95, 0.70, 0.05), 0.1, 0.4, 0.3),
    'plate': mat('Nameplate | Aluminium', (0.85, 0.86, 0.87), 1.0, 0.3),
    'black': mat('Rubber | Black', (0.02, 0.02, 0.02), 0.0, 0.7),
    'cable': mat('Cable gland | Black', (0.04, 0.04, 0.05), 0.2, 0.45),
}

root = bpy.data.objects.new('Pump set', None); scene.collection.objects.link(root)
def link(o, parent=root):
    if o.name not in scene.collection.objects: pass
    o.parent = parent; return o
def smooth(o, bevel=0.0, seg=2):
    for p in o.data.polygons: p.use_smooth = True
    if bevel:
        m = o.modifiers.new('Bevel', 'BEVEL'); m.width = bevel; m.segments = seg; m.limit_method = 'ANGLE'
    o.modifiers.new('Normals', 'WEIGHTED_NORMAL')
    return o
def cyl(name, r, depth, loc, rot=(0, 0, 0), m=None, verts=48, bevel=0.0):
    bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=depth, location=loc, rotation=rot, vertices=verts)
    o = bpy.context.object; o.name = name
    if m: o.data.materials.append(m)
    return link(smooth(o, bevel))
def box(name, size, loc, m=None, bevel=0.0, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc, rotation=rot)
    o = bpy.context.object; o.name = name; o.scale = size
    bpy.ops.object.transform_apply(scale=True)
    if m: o.data.materials.append(m)
    return link(smooth(o, bevel))
X = (0, math.pi / 2, 0)          # cylinder axis along X
Zr = (0, 0, 0)

# ---------------------------------------------------------------- baseplate (fabricated channel frame with grout holes)
box('Baseplate | top', (1.30, 0.42, 0.03), (0.02, 0, 0.015), M['base'], 0.004)
for y in (-0.19, 0.19): box('Baseplate | channel', (1.30, 0.04, 0.09), (0.02, y, -0.03), M['base'], 0.004)
for x in (-0.55, 0.0, 0.55):
    for y in (-0.15, 0.15): cyl('Baseplate | holding-down bolt', 0.012, 0.05, (x, y, 0.04), m=M['bolt'], verts=6)

# ---------------------------------------------------------------- motor (TEFC, cast fins, fan cowl, terminal box)
MX0, MX1, MR, MZ = -0.62, -0.10, 0.165, 0.235     # motor frame x-range, radius, axis height
cyl('Motor | frame', MR, MX1 - MX0, ((MX0 + MX1) / 2, 0, MZ), X, M['motor'], 64, 0.006)
for i in range(28):                                  # radial cooling fins along the frame
    a = i / 28 * 2 * math.pi
    if abs(math.sin(a)) < 0.25 and math.cos(a) < 0: continue   # leave the underside clear for the feet
    f = box('Motor | cooling fin', (MX1 - MX0 - 0.05, 0.006, 0.03), (0, 0, 0), M['motor'], 0.002)
    f.location = ((MX0 + MX1) / 2, math.cos(a) * (MR + 0.012), MZ + math.sin(a) * (MR + 0.012)); f.rotation_euler = (a - math.pi / 2, 0, 0)
cyl('Motor | drive-end shield', MR + 0.02, 0.05, (MX1 + 0.02, 0, MZ), X, M['motor'], 64, 0.008)
cyl('Motor | non-drive-end shield', MR + 0.02, 0.05, (MX0 - 0.01, 0, MZ), X, M['motor'], 64, 0.008)
cyl('Motor | fan cowl', MR + 0.03, 0.13, (MX0 - 0.10, 0, MZ), X, M['motor'], 64, 0.01)
cyl('Motor | fan cowl grille', MR - 0.01, 0.006, (MX0 - 0.168, 0, MZ), X, M['black'], 64)
for i in range(9):                                   # grille bars
    box('Motor | grille bar', (0.008, 2 * (MR - 0.02) * math.sqrt(max(0, 1 - ((i - 4) / 4.6) ** 2)), 0.012), (MX0 - 0.17, 0, MZ - 0.12 + i * 0.03), M['motor'])
for y in (-0.12, 0.12):                              # feet
    for x in (MX0 + 0.06, MX1 - 0.06):
        box('Motor | foot', (0.09, 0.07, 0.07), (x, y, 0.065), M['motor'], 0.006)
box('Motor | terminal box', (0.17, 0.15, 0.09), ((MX0 + MX1) / 2 + 0.02, 0, MZ + MR + 0.055), M['motor'], 0.012)
box('Motor | terminal box lid', (0.18, 0.16, 0.012), ((MX0 + MX1) / 2 + 0.02, 0, MZ + MR + 0.105), M['motor'], 0.004)
cyl('Motor | cable gland', 0.022, 0.05, ((MX0 + MX1) / 2 + 0.02, -0.095, MZ + MR + 0.05), (math.pi / 2, 0, 0), M['cable'], 24, 0.003)
box('Motor | nameplate', (0.10, 0.004, 0.06), ((MX0 + MX1) / 2 - 0.02, -(MR + 0.026), MZ + 0.03), M['plate'], 0.002)
cyl('Motor | lifting eye', 0.03, 0.01, ((MX0 + MX1) / 2 - 0.12, 0, MZ + MR + 0.06), (math.pi / 2, 0, 0), M['steel'], 24)
bpy.ops.mesh.primitive_torus_add(major_radius=0.028, minor_radius=0.008, location=((MX0 + MX1) / 2 - 0.12, 0, MZ + MR + 0.075), rotation=(math.pi / 2, 0, 0))
o = bpy.context.object; o.name = 'Motor | lifting eye ring'; o.data.materials.append(M['steel']); link(smooth(o))

# ---------------------------------------------------------------- lantern bracket with open coupling guard (shaft visible)
LX0, LX1 = -0.05, 0.13
for y in (-0.11, 0.11):
    box('Lantern | side web', (LX1 - LX0, 0.016, 0.19), ((LX0 + LX1) / 2, y, MZ), M['pump'], 0.004)
box('Lantern | top bridge', (LX1 - LX0, 0.22, 0.016), ((LX0 + LX1) / 2, 0, MZ + 0.10), M['pump'], 0.004)
box('Lantern | foot', (0.16, 0.28, 0.03), ((LX0 + LX1) / 2, 0, 0.045), M['pump'], 0.005)
box('Lantern | pedestal', (0.10, 0.16, MZ - 0.15), ((LX0 + LX1) / 2, 0, (MZ - 0.10) / 2 + 0.06), M['pump'], 0.005)
for i in range(5):                                  # yellow guard bars across the openings
    for y in (-0.112, 0.112):
        box('Coupling guard | bar', (0.006, 0.012, 0.15), (LX0 + 0.025 + i * 0.033, y * 1.04, MZ), M['guard'], 0.001)
shaft = bpy.data.objects.new('Shaft', None); scene.collection.objects.link(shaft); shaft.parent = root; shaft.location = (0, 0, MZ)
def on_shaft(o):
    o.location = (o.location.x, 0, 0); o.parent = shaft; return o
on_shaft(cyl('Shaft | steel', 0.022, 0.30, (0.04, 0, 0), X, M['steel'], 32))
on_shaft(cyl('Coupling | hub motor', 0.05, 0.05, (-0.005, 0, 0), X, M['steel'], 48, 0.004))
on_shaft(cyl('Coupling | hub pump', 0.05, 0.05, (0.075, 0, 0), X, M['steel'], 48, 0.004))
on_shaft(cyl('Coupling | spider', 0.046, 0.03, (0.035, 0, 0), X, M['black'], 48))
for i in range(6):                                   # coupling jaws, so the rotation reads
    a = i / 6 * 2 * math.pi
    j = box('Coupling | jaw', (0.03, 0.018, 0.02), (0, 0, 0), M['steel'], 0.002); j.parent = shaft
    j.location = (0.035, math.cos(a) * 0.035, math.sin(a) * 0.035); j.rotation_euler = (a, 0, 0)

# ---------------------------------------------------------------- pump: bearing housing, back cover, volute casing, nozzles
cyl('Pump | bearing housing', 0.075, 0.08, (0.17, 0, MZ), X, M['pump'], 48, 0.006)
PX, PR, PW = 0.30, 0.20, 0.15                         # casing centre x, volute outer radius, width
cyl('Pump | back cover', PR + 0.02, 0.025, (PX - PW / 2 - 0.012, 0, MZ), X, M['pump'], 72, 0.006)
# volute: a spiral casing whose radius grows round the impeller towards the discharge throat
bm = bmesh.new(); N = 72
rings = []
for k in range(N + 1):
    t = k / N; a = math.pi / 2 + t * 2 * math.pi * 0.99          # starts at the cut-water near the top
    r = PR * (0.72 + 0.28 * t)
    ring = []
    for s in range(16):
        b = s / 16 * 2 * math.pi
        rad = r + 0.045 * (0.6 + 0.4 * t) * math.cos(b)
        ring.append(bm.verts.new((PX + PW / 2 * 0.9 * math.sin(b), math.cos(a) * rad, MZ + math.sin(a) * rad)))
    rings.append(ring)
for k in range(N):
    for s in range(16):
        bm.faces.new((rings[k][s], rings[k][(s + 1) % 16], rings[k + 1][(s + 1) % 16], rings[k + 1][s]))
bm.faces.new(rings[0][::-1]); bm.faces.new(rings[N])                 # close both ends of the spiral (cut-water and throat)
me = bpy.data.meshes.new('volute'); bm.to_mesh(me); bm.free()
vol = bpy.data.objects.new('Pump | volute casing', me); scene.collection.objects.link(vol); vol.data.materials.append(M['pump']); link(smooth(vol))
cyl('Pump | casing core', PR * 0.80, PW, (PX, 0, MZ), X, M['pump'], 72, 0.01)
# discharge: from the volute throat straight up to a flanged nozzle
throat_y, throat_z = -PR * 0.95, MZ + 0.06
cyl('Pump | discharge neck', 0.055, 0.30, (PX, -PR * 0.62, MZ + 0.20), Zr, M['pump'], 48, 0.006)
DZ = MZ + 0.36
cyl('Pump | discharge flange', 0.095, 0.022, (PX, -PR * 0.62, DZ), Zr, M['steel'], 64, 0.003)
for i in range(8):
    a = i / 8 * 2 * math.pi
    cyl('Pump | discharge flange bolt', 0.009, 0.04, (PX + math.cos(a) * 0.075, -PR * 0.62 + math.sin(a) * 0.075, DZ + 0.004), Zr, M['bolt'], 6)
# suction: axial nozzle on the +X end with a flange
SX = PX + PW / 2 + 0.11
cyl('Pump | suction eye cover', PR * 0.62, 0.04, (PX + PW / 2 + 0.01, 0, MZ), X, M['pump'], 64, 0.008)
cyl('Pump | suction nozzle', 0.062, 0.16, (PX + PW / 2 + 0.07, 0, MZ), X, M['pump'], 48, 0.006)
cyl('Pump | suction flange', 0.105, 0.022, (SX, 0, MZ), X, M['steel'], 64, 0.003)
for i in range(8):
    a = i / 8 * 2 * math.pi
    cyl('Pump | suction flange bolt', 0.009, 0.04, (SX + 0.004, math.cos(a) * 0.083, MZ + math.sin(a) * 0.083), X, M['bolt'], 6)
for i in range(10):                                   # casing bolts round the back cover
    a = i / 10 * 2 * math.pi
    cyl('Pump | casing bolt', 0.008, 0.03, (PX - PW / 2 - 0.028, math.cos(a) * (PR + 0.005), MZ + math.sin(a) * (PR + 0.005)), X, M['bolt'], 6)
box('Pump | casing foot', (0.10, 0.30, 0.03), (PX, 0, 0.045), M['pump'], 0.005)
box('Pump | casing support', (0.06, 0.14, MZ - PR - 0.04), (PX, 0, (MZ - PR) / 2 + 0.03), M['pump'], 0.004)
cyl('Pump | gauge tapping', 0.012, 0.05, (PX, -PR * 0.62 + 0.065, MZ + 0.30), (math.pi / 2, 0, 0), M['brass'], 16)
cyl('Pump | drain plug', 0.014, 0.02, (PX, 0, MZ - PR - 0.035), Zr, M['brass'], 6)
cyl('Pump | vent cock', 0.01, 0.04, (PX + 0.04, 0, MZ + PR + 0.03), Zr, M['brass'], 12)
box('Pump | flow arrow plate', (0.07, 0.004, 0.03), (PX, -(PR * 0.80 + 0.002), MZ - 0.05), M['plate'], 0.001)

# ---------------------------------------------------------------- port markers for the app
def marker(name, loc, direction):
    e = bpy.data.objects.new(name, None); scene.collection.objects.link(e); e.parent = root; e.location = loc
    e.rotation_euler = Vector(direction).to_track_quat('Z', 'Y').to_euler(); e.empty_display_size = 0.08
marker('Suction_Port', (SX + 0.011, 0, MZ), (1, 0, 0))
marker('Discharge_Port', (PX, -PR * 0.62, DZ + 0.011), (0, 0, 1))

# ---------------------------------------------------------------- render: light studio, soft shadows, 3/4 view
scene.render.engine = 'CYCLES'; scene.cycles.samples = 96; scene.cycles.use_denoising = True
scene.render.resolution_x, scene.render.resolution_y = 1600, 1000
scene.render.film_transparent = False
world = bpy.data.worlds.new('Studio'); scene.world = world; world.use_nodes = True
world.node_tree.nodes['Background'].inputs['Color'].default_value = (0.86, 0.89, 0.91, 1); world.node_tree.nodes['Background'].inputs['Strength'].default_value = 0.45
scene.view_settings.view_transform = 'AgX'; scene.view_settings.look = 'AgX - Medium High Contrast'
bpy.ops.mesh.primitive_plane_add(size=12, location=(0, 0, -0.075)); fl = bpy.context.object; fl.name = 'Floor'
fl.data.materials.append(mat('Floor', (0.80, 0.83, 0.85), 0, 0.6)); fl.is_shadow_catcher = False
for name, loc, energy, size in (('Key', (1.6, -2.2, 2.6), 380, 2.5), ('Fill', (-2.4, -1.2, 1.4), 110, 3), ('Rim', (-0.6, 2.4, 2.0), 220, 2)):
    bpy.ops.object.light_add(type='AREA', location=loc); L = bpy.context.object; L.name = name; L.data.energy = energy; L.data.size = size
    L.rotation_euler = (Vector((0, 0, 0.25)) - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
bpy.ops.object.camera_add(location=(1.55, -1.55, 1.05)); cam = bpy.context.object; scene.camera = cam; cam.data.lens = 50
cam.rotation_euler = (Vector((-0.08, 0, 0.22)) - cam.location).to_track_quat('-Z', 'Y').to_euler()
scene.render.filepath = os.path.join(out, 'pump_render.png')
bpy.ops.render.render(write_still=True)

# ---------------------------------------------------------------- save and export (floor, lights and camera left out)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(out, 'pump_set.blend'))
for o in bpy.data.objects: o.select_set(o.name not in ('Floor',) and o.type in ('MESH', 'EMPTY'))
bpy.ops.export_scene.gltf(filepath=os.path.join(out, 'pump_set.glb'), use_selection=True, export_apply=True, export_yup=True)
print('PUMP_BUILD_COMPLETE')
