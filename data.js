// ════════════════════════════════════════════════════════
//  GAME DATA — items, buildings, recipes
//  Loaded as a classic script before the app logic in index.html.
// ════════════════════════════════════════════════════════

const ITEMS = [
  // Raw
  {id:'iron-ore',name:'Iron Ore',cat:'raw',isRaw:true},
  {id:'copper-ore',name:'Copper Ore',cat:'raw',isRaw:true},
  {id:'limestone',name:'Limestone',cat:'raw',isRaw:true},
  {id:'coal',name:'Coal',cat:'raw',isRaw:true},
  {id:'caterium-ore',name:'Caterium Ore',cat:'raw',isRaw:true},
  {id:'raw-quartz',name:'Raw Quartz',cat:'raw',isRaw:true},
  {id:'sulfur',name:'Sulfur',cat:'raw',isRaw:true},
  {id:'bauxite',name:'Bauxite',cat:'raw',isRaw:true},
  {id:'uranium',name:'Uranium',cat:'raw',isRaw:true},
  {id:'sam',name:'SAM',cat:'raw',isRaw:true},
  {id:'crude-oil',name:'Crude Oil',cat:'liquid',isRaw:true},
  {id:'water',name:'Water',cat:'liquid',isRaw:true},
  {id:'nitrogen-gas',name:'Nitrogen Gas',cat:'gas',isRaw:true},
  // Byproducts treated as external supply
  {id:'heavy-oil-residue',name:'Heavy Oil Residue',cat:'petroleum',isRaw:true},
  {id:'polymer-resin',name:'Polymer Resin',cat:'petroleum',isRaw:true},
  // Ingots
  {id:'iron-ingot',name:'Iron Ingot',cat:'ingot'},
  {id:'copper-ingot',name:'Copper Ingot',cat:'ingot'},
  {id:'caterium-ingot',name:'Caterium Ingot',cat:'ingot'},
  {id:'steel-ingot',name:'Steel Ingot',cat:'ingot'},
  {id:'aluminum-ingot',name:'Aluminum Ingot',cat:'ingot'},
  // Basic
  {id:'iron-plate',name:'Iron Plate',cat:'basic'},
  {id:'iron-rod',name:'Iron Rod',cat:'basic'},
  {id:'wire',name:'Wire',cat:'basic'},
  {id:'cable',name:'Cable',cat:'basic'},
  {id:'concrete',name:'Concrete',cat:'basic'},
  {id:'screw',name:'Screw',cat:'basic'},
  {id:'copper-sheet',name:'Copper Sheet',cat:'basic'},
  {id:'steel-beam',name:'Steel Beam',cat:'basic'},
  {id:'steel-pipe',name:'Steel Pipe',cat:'basic'},
  {id:'quickwire',name:'Quickwire',cat:'basic'},
  {id:'quartz-crystal',name:'Quartz Crystal',cat:'basic'},
  {id:'silica',name:'Silica',cat:'basic'},
  {id:'aluminum-casing',name:'Aluminum Casing',cat:'basic'},
  {id:'alclad-sheet',name:'Alclad Aluminum Sheet',cat:'basic'},
  {id:'empty-canister',name:'Empty Canister',cat:'basic'},
  {id:'iron-rebar',name:'Iron Rebar',cat:'basic'},
  {id:'aluminum-scrap',name:'Aluminum Scrap',cat:'basic'},
  // Standard
  {id:'reinforced-iron-plate',name:'Reinforced Iron Plate',cat:'standard'},
  {id:'rotor',name:'Rotor',cat:'standard'},
  {id:'modular-frame',name:'Modular Frame',cat:'standard'},
  {id:'stator',name:'Stator',cat:'standard'},
  {id:'motor',name:'Motor',cat:'standard'},
  {id:'encased-industrial-beam',name:'Encased Industrial Beam',cat:'standard'},
  {id:'circuit-board',name:'Circuit Board',cat:'standard'},
  {id:'ai-limiter',name:'AI Limiter',cat:'standard'},
  {id:'automated-wiring',name:'Automated Wiring',cat:'standard'},
  {id:'versatile-framework',name:'Versatile Framework',cat:'standard'},
  {id:'heat-sink',name:'Heat Sink',cat:'standard'},
  {id:'electromagnetic-control-rod',name:'Electromagnetic Control Rod',cat:'standard'},
  // Industrial
  {id:'heavy-modular-frame',name:'Heavy Modular Frame',cat:'industrial'},
  {id:'computer',name:'Computer',cat:'industrial'},
  {id:'crystal-oscillator',name:'Crystal Oscillator',cat:'industrial'},
  {id:'high-speed-connector',name:'High-Speed Connector',cat:'industrial'},
  {id:'smart-plating',name:'Smart Plating',cat:'industrial'},
  {id:'radio-control-unit',name:'Radio Control Unit',cat:'industrial'},
  {id:'supercomputer',name:'Supercomputer',cat:'industrial'},
  {id:'modular-engine',name:'Modular Engine',cat:'industrial'},
  {id:'adaptive-control-unit',name:'Adaptive Control Unit',cat:'industrial'},
  {id:'turbo-motor',name:'Turbo Motor',cat:'industrial'},
  {id:'cooling-system',name:'Cooling System',cat:'industrial'},
  {id:'battery',name:'Battery',cat:'industrial'},
  {id:'fused-modular-frame',name:'Fused Modular Frame',cat:'industrial'},
  // Petroleum
  {id:'plastic',name:'Plastic',cat:'petroleum'},
  {id:'rubber',name:'Rubber',cat:'petroleum'},
  {id:'fuel',name:'Fuel',cat:'petroleum'},
  {id:'turbofuel',name:'Turbofuel',cat:'petroleum'},
  {id:'petroleum-coke',name:'Petroleum Coke',cat:'petroleum'},
  // Liquids
  {id:'alumina-solution',name:'Alumina Solution',cat:'liquid'},
  {id:'sulfuric-acid',name:'Sulfuric Acid',cat:'liquid'},
  {id:'nitric-acid',name:'Nitric Acid',cat:'liquid'},
  // Ammo / Explosives
  {id:'black-powder',name:'Black Powder',cat:'basic'},
  {id:'smokeless-powder',name:'Smokeless Powder',cat:'basic'},
  {id:'compacted-coal',name:'Compacted Coal',cat:'basic'},
  // Biofuel
  {id:'solid-biofuel',name:'Solid Biofuel',cat:'petroleum'},
  {id:'liquid-biofuel',name:'Liquid Biofuel',cat:'petroleum'},
  {id:'biomass',name:'Biomass',cat:'petroleum'},
  {id:'alien-protein',name:'Alien Protein',cat:'basic'},
  // Biomass sources (gathered / creature drops)
  {id:'wood',name:'Wood',cat:'raw',isRaw:true},
  {id:'leaves',name:'Leaves',cat:'raw',isRaw:true},
  {id:'mycelia',name:'Mycelia',cat:'raw',isRaw:true},
  {id:'hog-remains',name:'Hog Remains',cat:'raw',isRaw:true},
  {id:'hatcher-remains',name:'Hatcher Remains',cat:'raw',isRaw:true},
  {id:'spitter-remains',name:'Spitter Remains',cat:'raw',isRaw:true},
  {id:'stinger-remains',name:'Stinger Remains',cat:'raw',isRaw:true},
  // Nuclear
  {id:'uranium-waste',name:'Uranium Waste',cat:'nuclear',isRaw:true},
  {id:'encased-uranium-cell',name:'Encased Uranium Cell',cat:'nuclear'},
  {id:'uranium-fuel-rod',name:'Uranium Fuel Rod',cat:'nuclear'},
  {id:'non-fissile-uranium',name:'Non-fissile Uranium',cat:'nuclear'},
  {id:'plutonium-pellet',name:'Plutonium Pellet',cat:'nuclear'},
  {id:'encased-plutonium-cell',name:'Encased Plutonium Cell',cat:'nuclear'},
  {id:'plutonium-fuel-rod',name:'Plutonium Fuel Rod',cat:'nuclear'},
];

const BUILDINGS = [
  {id:'smelter',name:'Smelter',power:4},
  {id:'constructor',name:'Constructor',power:4},
  {id:'assembler',name:'Assembler',power:15},
  {id:'manufacturer',name:'Manufacturer',power:55},
  {id:'foundry',name:'Foundry',power:16},
  {id:'refinery',name:'Refinery',power:30},
  {id:'blender',name:'Blender',power:75},
  {id:'packager',name:'Packager',power:10},
  {id:'particle-accelerator',name:'Particle Accelerator',power:1500},
  {id:'converter',name:'Converter',power:100},
  {id:'quantum-encoder',name:'Quantum Encoder',power:1000},
  // Power generators (generates = MW produced, power = MW consumed by building itself)
  {id:'biomass-burner',name:'Biomass Burner',power:0,generates:30},
  {id:'coal-generator',name:'Coal Generator',power:0,generates:75},
  {id:'fuel-generator',name:'Fuel Generator',power:0,generates:250},
  {id:'nuclear-power-plant',name:'Nuclear Power Plant',power:0,generates:2500},
  {id:'geothermal-generator',name:'Geothermal Generator',power:0,generates:200}, // variable; 200 avg normal node
  // Extractors
  {id:'miner-mk1',name:'Miner Mk.1',power:5,mineMult:1},
  {id:'miner-mk2',name:'Miner Mk.2',power:12,mineMult:2},
  {id:'miner-mk3',name:'Miner Mk.3',power:22.5,mineMult:4},
  {id:'oil-extractor',name:'Oil Extractor',power:40},
  {id:'water-extractor',name:'Water Extractor',power:20},
  {id:'resource-well-pressurizer',name:'Resource Well Pressurizer',power:150},
];

// R() shorthand: recipe helper
const R=(id,name,machine,duration,inputs,outputs,isAlternate=false)=>
  ({id,name,machine,duration,inputs,outputs,isAlternate});
const io=(item,amount)=>({item,amount});

const RECIPES = [
  // ── Smelter ──
  R('r-iron-ingot','Iron Ingot','smelter',2,[io('iron-ore',1)],[io('iron-ingot',1)]),
  R('r-copper-ingot','Copper Ingot','smelter',2,[io('copper-ore',1)],[io('copper-ingot',1)]),
  R('r-caterium-ingot','Caterium Ingot','smelter',4,[io('caterium-ore',3)],[io('caterium-ingot',1)]),
  // ── Foundry ──
  R('r-steel-ingot','Steel Ingot','foundry',4,[io('iron-ore',3),io('coal',3)],[io('steel-ingot',3)]),
  R('r-aluminum-ingot','Aluminum Ingot','foundry',4,[io('aluminum-scrap',6),io('silica',5)],[io('aluminum-ingot',4)]),
  // ── Constructor ──
  R('r-iron-plate','Iron Plate','constructor',6,[io('iron-ingot',3)],[io('iron-plate',2)]),
  R('r-iron-rod','Iron Rod','constructor',4,[io('iron-ingot',1)],[io('iron-rod',1)]),
  R('r-wire','Wire','constructor',4,[io('copper-ingot',1)],[io('wire',2)]),
  R('r-cable','Cable','constructor',2,[io('wire',2)],[io('cable',1)]),
  R('r-concrete','Concrete','constructor',4,[io('limestone',3)],[io('concrete',1)]),
  R('r-screw','Screw','constructor',6,[io('iron-rod',1)],[io('screw',4)]),
  R('r-copper-sheet','Copper Sheet','constructor',6,[io('copper-ingot',2)],[io('copper-sheet',1)]),
  R('r-steel-beam','Steel Beam','constructor',4,[io('steel-ingot',4)],[io('steel-beam',1)]),
  R('r-steel-pipe','Steel Pipe','constructor',6,[io('steel-ingot',3)],[io('steel-pipe',2)]),
  R('r-quickwire','Quickwire','constructor',5,[io('caterium-ingot',1)],[io('quickwire',5)]),
  R('r-quartz-crystal','Quartz Crystal','constructor',8,[io('raw-quartz',5)],[io('quartz-crystal',3)]),
  R('r-silica','Silica','constructor',8,[io('raw-quartz',3)],[io('silica',5)]),
  R('r-aluminum-casing','Aluminum Casing','constructor',2,[io('aluminum-ingot',3)],[io('aluminum-casing',2)]),
  R('r-empty-canister','Empty Canister','constructor',4,[io('plastic',2)],[io('empty-canister',4)]),
  R('r-iron-rebar','Iron Rebar','constructor',4,[io('iron-rod',1)],[io('iron-rebar',1)]),
  R('r-alclad-sheet','Alclad Aluminum Sheet','assembler',6,[io('aluminum-ingot',3),io('copper-ingot',1)],[io('alclad-sheet',3)]),
  // ── Assembler ──
  R('r-rip','Reinforced Iron Plate','assembler',12,[io('iron-plate',6),io('screw',12)],[io('reinforced-iron-plate',1)]),
  R('r-rotor','Rotor','assembler',15,[io('iron-rod',5),io('screw',25)],[io('rotor',1)]),
  R('r-modular-frame','Modular Frame','assembler',60,[io('reinforced-iron-plate',3),io('iron-rod',12)],[io('modular-frame',2)]),
  R('r-stator','Stator','assembler',12,[io('steel-pipe',3),io('wire',8)],[io('stator',1)]),
  R('r-motor','Motor','assembler',12,[io('rotor',2),io('stator',2)],[io('motor',1)]),
  R('r-eib','Encased Industrial Beam','assembler',10,[io('steel-beam',3),io('concrete',6)],[io('encased-industrial-beam',1)]),
  R('r-circuit-board','Circuit Board','assembler',8,[io('copper-sheet',2),io('plastic',4)],[io('circuit-board',1)]),
  R('r-ai-limiter','AI Limiter','assembler',12,[io('copper-sheet',5),io('quickwire',20)],[io('ai-limiter',1)]),
  R('r-automated-wiring','Automated Wiring','assembler',24,[io('stator',1),io('cable',20)],[io('automated-wiring',1)]),
  R('r-versatile-framework','Versatile Framework','assembler',24,[io('modular-frame',1),io('steel-beam',12)],[io('versatile-framework',2)]),
  R('r-heat-sink','Heat Sink','assembler',8,[io('alclad-sheet',5),io('copper-sheet',3)],[io('heat-sink',1)]),
  R('r-emcr','Electromagnetic Control Rod','assembler',30,[io('stator',3),io('ai-limiter',2)],[io('electromagnetic-control-rod',2)]),
  // ── Manufacturer ──
  R('r-hmf','Heavy Modular Frame','manufacturer',30,
    [io('modular-frame',5),io('steel-pipe',20),io('encased-industrial-beam',5),io('screw',120)],
    [io('heavy-modular-frame',1)]),
  R('r-computer','Computer','manufacturer',24,
    [io('circuit-board',4),io('cable',8),io('plastic',16)],
    [io('computer',1)]),
  R('r-crystal-oscillator','Crystal Oscillator','manufacturer',120,
    [io('quartz-crystal',36),io('cable',28),io('reinforced-iron-plate',5)],
    [io('crystal-oscillator',2)]),
  R('r-high-speed-connector','High-Speed Connector','manufacturer',16,
    [io('quickwire',56),io('cable',10),io('circuit-board',1)],
    [io('high-speed-connector',1)]),
  R('r-smart-plating','Smart Plating','assembler',30,
    [io('reinforced-iron-plate',1),io('rotor',1)],
    [io('smart-plating',1)]),
  R('r-rcu','Radio Control Unit','manufacturer',48,
    [io('aluminum-casing',32),io('crystal-oscillator',1),io('computer',2)],
    [io('radio-control-unit',2)]),
  R('r-supercomputer','Supercomputer','manufacturer',32,
    [io('computer',4),io('ai-limiter',2),io('high-speed-connector',3),io('plastic',28)],
    [io('supercomputer',1)]),
  R('r-modular-engine','Modular Engine','manufacturer',60,
    [io('motor',2),io('rubber',15),io('smart-plating',2)],
    [io('modular-engine',1)]),
  R('r-acu','Adaptive Control Unit','manufacturer',60,
    [io('automated-wiring',5),io('circuit-board',5),io('heavy-modular-frame',1),io('computer',2)],
    [io('adaptive-control-unit',1)]),
  R('r-turbo-motor','Turbo Motor','manufacturer',32,
    [io('cooling-system',4),io('radio-control-unit',2),io('motor',4),io('rubber',24)],
    [io('turbo-motor',1)]),
  R('r-uranium-fuel-rod','Uranium Fuel Rod','manufacturer',150,
    [io('encased-uranium-cell',50),io('encased-industrial-beam',3),io('electromagnetic-control-rod',5)],
    [io('uranium-fuel-rod',1)]),
  // ── Refinery ──
  R('r-plastic','Plastic','refinery',6,[io('crude-oil',3)],[io('plastic',2),io('heavy-oil-residue',1)]),
  R('r-rubber','Rubber','refinery',6,[io('crude-oil',3)],[io('rubber',2),io('heavy-oil-residue',2)]),
  R('r-fuel','Fuel','refinery',6,[io('crude-oil',6)],[io('fuel',4),io('polymer-resin',3)]),
  R('r-petroleum-coke','Petroleum Coke','refinery',6,[io('heavy-oil-residue',4)],[io('petroleum-coke',12)]),
  R('r-residual-plastic','Residual Plastic','refinery',6,[io('polymer-resin',6),io('water',2)],[io('plastic',2)]),
  R('r-residual-rubber','Residual Rubber','refinery',6,[io('polymer-resin',4),io('water',4)],[io('rubber',2)]),
  R('r-residual-fuel','Residual Fuel','refinery',6,[io('heavy-oil-residue',6)],[io('fuel',4)]),
  R('r-turbofuel','Turbofuel','refinery',16,[io('fuel',6),io('compacted-coal',4)],[io('turbofuel',5)]),
  R('r-sulfuric-acid','Sulfuric Acid','refinery',6,[io('sulfur',5),io('water',5)],[io('sulfuric-acid',5)]),
  R('r-alumina-solution','Alumina Solution','refinery',6,[io('bauxite',12),io('water',18)],[io('alumina-solution',12),io('silica',5)]),
  R('r-aluminum-scrap','Aluminum Scrap','refinery',1,[io('alumina-solution',4),io('coal',2)],[io('aluminum-scrap',6),io('water',2)]),
  // ── Blender ──
  R('r-cooling-system','Cooling System','blender',10,
    [io('heat-sink',2),io('rubber',2),io('water',5),io('nitrogen-gas',25)],
    [io('cooling-system',1)]),
  R('r-battery','Battery','blender',6,
    [io('sulfuric-acid',5),io('alumina-solution',4),io('aluminum-casing',2),io('water',3)],
    [io('battery',2)]),
  R('r-nitric-acid','Nitric Acid','blender',6,
    [io('nitrogen-gas',12),io('water',3),io('iron-plate',1)],
    [io('nitric-acid',3)]),
  R('r-fused-modular-frame','Fused Modular Frame','blender',40,
    [io('heavy-modular-frame',1),io('aluminum-casing',50),io('nitrogen-gas',25)],
    [io('fused-modular-frame',1)]),
  R('r-encased-uranium-cell','Encased Uranium Cell','blender',12,
    [io('uranium',10),io('concrete',3),io('sulfuric-acid',8)],
    [io('encased-uranium-cell',5)]),
  R('r-non-fissile-uranium','Non-fissile Uranium','blender',24,
    [io('uranium-waste',15),io('silica',10),io('nitric-acid',6),io('sulfuric-acid',6),io('water',6)],
    [io('non-fissile-uranium',20)]),
  // ── Miners: purity recipes at Mk.1 base /min; building tier multiplies (Mk1×1, Mk2×2, Mk3×4) ──
  ...['iron-ore','copper-ore','limestone','coal','caterium-ore','raw-quartz','sulfur','bauxite','uranium','sam'].flatMap(ore=>{
    const n = ITEMS.find(x=>x.id===ore)?.name || ore;
    return [
      R(`mine-${ore}-impure`, `${n} (Impure)`, 'miner', 2, [], [io(ore,1)]),
      R(`mine-${ore}-normal`, `${n} (Normal)`, 'miner', 1, [], [io(ore,1)]),
      R(`mine-${ore}-pure`,   `${n} (Pure)`,   'miner', 1, [], [io(ore,2)]),
    ];
  }),
  // ── Fluid / Gas Extractors ──
  R('extract-crude-oil-n','Extract Crude Oil (Normal)','oil-extractor',1,[],[io('crude-oil',2)]),
  R('extract-crude-oil-p','Extract Crude Oil (Pure)','oil-extractor',1,[],[io('crude-oil',4)]),
  R('extract-crude-oil-i','Extract Crude Oil (Impure)','oil-extractor',1,[],[io('crude-oil',1)]),
  R('extract-water','Extract Water','water-extractor',1,[],[io('water',2)]),
  R('extract-nitrogen-n','Extract Nitrogen Gas (Normal)','resource-well-pressurizer',1,[],[io('nitrogen-gas',1)]),
  R('extract-nitrogen-p','Extract Nitrogen Gas (Pure)','resource-well-pressurizer',1,[],[io('nitrogen-gas',2)]),
  // ── Explosives / Ammo ──
  R('r-black-powder','Black Powder','assembler',4,[io('coal',1),io('sulfur',1)],[io('black-powder',2)]),
  R('r-smokeless-powder','Smokeless Powder','refinery',6,[io('black-powder',2),io('heavy-oil-residue',1)],[io('smokeless-powder',2)]),
  R('r-compacted-coal','Compacted Coal','assembler',12,[io('coal',2),io('sulfur',1)],[io('compacted-coal',4)]),
  // ── Biofuel ──
  R('r-biomass-wood','Biomass (Wood)','constructor',4,[io('wood',4)],[io('biomass',20)]),
  R('r-biomass-leaves','Biomass (Leaves)','constructor',5,[io('leaves',10)],[io('biomass',5)]),
  R('r-biomass-mycelia','Biomass (Mycelia)','constructor',4,[io('mycelia',1)],[io('biomass',10)]),
  R('r-biomass-protein','Biomass (Alien Protein)','constructor',4,[io('alien-protein',1)],[io('biomass',100)]),
  R('r-protein-hog','Hog Protein','constructor',3,[io('hog-remains',1)],[io('alien-protein',1)]),
  R('r-protein-hatcher','Hatcher Protein','constructor',3,[io('hatcher-remains',1)],[io('alien-protein',1)]),
  R('r-protein-spitter','Spitter Protein','constructor',3,[io('spitter-remains',1)],[io('alien-protein',1)]),
  R('r-protein-stinger','Stinger Protein','constructor',3,[io('stinger-remains',1)],[io('alien-protein',1)]),
  R('r-solid-biofuel','Solid Biofuel','constructor',4,[io('biomass',8)],[io('solid-biofuel',4)]),
  R('r-liquid-biofuel','Liquid Biofuel','refinery',4,[io('solid-biofuel',6),io('water',3)],[io('liquid-biofuel',4)]),
  // ── Generator fuel recipes (inputs = fuel consumed, no item outputs) ──
  // Biomass Burner (30 MW): 15 Solid Biofuel/min → duration=4, amount=1
  R('gen-biomass-solidbiofuel','Solid Biofuel (30 MW)','biomass-burner',4,[io('solid-biofuel',1)],[]),
  R('gen-biomass-biomass','Biomass (30 MW)','biomass-burner',2,[io('biomass',1)],[]),
  // Coal Generator (75 MW): 15 Coal + 45 Water /min → duration=4, coal=1, water=3
  R('gen-coal-coal','Coal (75 MW)','coal-generator',4,[io('coal',1),io('water',3)],[]),
  R('gen-coal-coke','Petroleum Coke (75 MW)','coal-generator',12,[io('petroleum-coke',5),io('water',3)],[]),
  R('gen-coal-compacted','Compacted Coal (75 MW)','coal-generator',8,[io('compacted-coal',1),io('water',3)],[]),
  // Fuel Generator (250 MW): 20 Fuel/min → duration=3, amount=1
  R('gen-fuel-fuel','Fuel (250 MW)','fuel-generator',3,[io('fuel',1)],[]),
  R('gen-fuel-turbofuel','Turbofuel (250 MW)','fuel-generator',8,[io('turbofuel',1)],[]),
  R('gen-fuel-liquidbiofuel','Liquid Biofuel (250 MW)','fuel-generator',3,[io('liquid-biofuel',1)],[]),
  // Nuclear Power Plant (2500 MW): 0.2 Uranium Fuel Rod/min + 240 Water/min → duration=300
  R('gen-nuclear-uranium','Uranium Fuel Rod (2500 MW)','nuclear-power-plant',300,[io('uranium-fuel-rod',1),io('water',1200)],[]),
  R('gen-nuclear-plutonium','Plutonium Fuel Rod (2500 MW)','nuclear-power-plant',600,[io('plutonium-fuel-rod',1),io('water',2400)],[]),
  // Geothermal (no fuel)
  R('gen-geothermal','Geothermal (200 MW avg)','geothermal-generator',1,[],[]),
  // ── Particle Accelerator ──
  R('r-plutonium-pellet','Plutonium Pellet','particle-accelerator',60,
    [io('non-fissile-uranium',100),io('uranium-fuel-rod',0.1)],
    [io('plutonium-pellet',30)]),

  // ══ ALTERNATE RECIPES ══
  // Ingots
  R('alt-iron-alloy-ingot','Iron Alloy Ingot','foundry',6,[io('iron-ore',2),io('copper-ore',2)],[io('iron-ingot',5)],true),
  R('alt-copper-alloy-ingot','Copper Alloy Ingot','foundry',12,[io('copper-ore',10),io('iron-ore',5)],[io('copper-ingot',20)],true),
  R('alt-solid-steel-ingot','Solid Steel Ingot','foundry',3,[io('iron-ingot',2),io('coal',2)],[io('steel-ingot',3)],true),
  R('alt-coke-steel-ingot','Coke Steel Ingot','foundry',12,[io('iron-ore',15),io('petroleum-coke',15)],[io('steel-ingot',20)],true),
  R('alt-pure-iron-ingot','Pure Iron Ingot','refinery',12,[io('iron-ore',7),io('water',4)],[io('iron-ingot',13)],true),
  R('alt-pure-copper-ingot','Pure Copper Ingot','refinery',24,[io('copper-ore',6),io('water',4)],[io('copper-ingot',15)],true),
  R('alt-pure-caterium-ingot','Pure Caterium Ingot','refinery',5,[io('caterium-ore',2),io('water',2)],[io('caterium-ingot',1)],true),
  // Wire / Cable
  R('alt-iron-wire','Iron Wire','constructor',24,[io('iron-ingot',5)],[io('wire',9)],true),
  R('alt-caterium-wire','Caterium Wire','constructor',4,[io('caterium-ingot',1)],[io('wire',8)],true),
  R('alt-fused-wire','Fused Wire','assembler',20,[io('copper-ingot',4),io('caterium-ingot',1)],[io('wire',30)],true),
  R('alt-insulated-cable','Insulated Cable','assembler',12,[io('wire',9),io('rubber',6)],[io('cable',20)],true),
  R('alt-quickwire-cable','Quickwire Cable','assembler',24,[io('quickwire',3),io('rubber',2)],[io('cable',11)],true),
  R('alt-coated-cable','Coated Cable','assembler',8,[io('wire',5),io('heavy-oil-residue',2)],[io('cable',9)],true),
  // Iron Plate / RIP
  R('alt-coated-iron-plate','Coated Iron Plate','assembler',12,[io('iron-plate',10),io('plastic',2)],[io('iron-plate',15)],true),
  R('alt-stitched-iron-plate','Stitched Iron Plate','assembler',32,[io('iron-plate',10),io('wire',20)],[io('reinforced-iron-plate',3)],true),
  R('alt-bolted-iron-plate','Bolted Iron Plate','assembler',12,[io('iron-plate',18),io('screw',50)],[io('reinforced-iron-plate',3)],true),
  // Modular Frame
  R('alt-steeled-frame','Steeled Frame','assembler',60,[io('reinforced-iron-plate',2),io('steel-pipe',10)],[io('modular-frame',3)],true),
  R('alt-bolted-frame','Bolted Frame','assembler',24,[io('reinforced-iron-plate',3),io('screw',56)],[io('modular-frame',2)],true),
  // Rotor
  R('alt-copper-rotor','Copper Rotor','assembler',16,[io('copper-sheet',6),io('screw',52)],[io('rotor',3)],true),
  R('alt-steel-rotor','Steel Rotor','assembler',12,[io('steel-pipe',2),io('wire',6)],[io('rotor',1)],true),
  // Stator / Motor
  R('alt-quickwire-stator','Quickwire Stator','assembler',15,[io('steel-pipe',4),io('quickwire',15)],[io('stator',2)],true),
  R('alt-rigour-motor','Rigour Motor','assembler',48,[io('rotor',3),io('stator',3),io('crystal-oscillator',1)],[io('motor',6)],true),
  // Circuit Board
  R('alt-silicon-circuit-board','Silicon Circuit Board','assembler',24,[io('copper-sheet',11),io('silica',11)],[io('circuit-board',5)],true),
  R('alt-electrode-circuit-board','Electrode Circuit Board','assembler',12,[io('rubber',6),io('petroleum-coke',9)],[io('circuit-board',1)],true),
  // Computer
  R('alt-crystal-computer','Crystal Computer','manufacturer',64,[io('circuit-board',8),io('crystal-oscillator',3)],[io('computer',3)],true),
  R('alt-caterium-computer','Caterium Computer','manufacturer',16,[io('circuit-board',7),io('quickwire',28),io('rubber',12)],[io('computer',1)],true),
  // HMF
  R('alt-heavy-flexible-frame','Heavy Flexible Frame','manufacturer',16,[io('modular-frame',5),io('encased-industrial-beam',3),io('rubber',20),io('screw',104)],[io('heavy-modular-frame',1)],true),
  R('alt-heavy-encased-frame','Heavy Encased Frame','manufacturer',64,[io('modular-frame',8),io('encased-industrial-beam',10),io('steel-pipe',36),io('concrete',22)],[io('heavy-modular-frame',3)],true),
  // Supercomputer
  R('alt-super-state-computer','Super-State Computer','manufacturer',50,[io('computer',3),io('electromagnetic-control-rod',2),io('battery',20),io('wire',45)],[io('supercomputer',2)],true),
  // Steel
  R('alt-encased-industrial-pipe','Encased Industrial Pipe','assembler',15,[io('steel-pipe',7),io('concrete',5)],[io('encased-industrial-beam',1)],true),
  R('alt-steel-screw','Steel Screw','constructor',12,[io('steel-beam',1)],[io('screw',52)],true),
  R('alt-cast-screw','Cast Screw','constructor',24,[io('iron-ingot',5)],[io('screw',20)],true),
  // Plastic / Rubber
  R('alt-recycled-plastic','Recycled Plastic','refinery',12,[io('rubber',6),io('fuel',6)],[io('plastic',12)],true),
  R('alt-recycled-rubber','Recycled Rubber','refinery',12,[io('plastic',6),io('fuel',6)],[io('rubber',12)],true),
  // Cooling / Battery
  R('alt-heat-exchanger','Heat Exchanger','blender',6,[io('aluminum-casing',5),io('nitrogen-gas',6)],[io('cooling-system',1)],true),
  R('alt-fine-black-powder','Fine Black Powder','assembler',8,[io('sulfur',1),io('compacted-coal',2)],[io('black-powder',6)],true),
];
