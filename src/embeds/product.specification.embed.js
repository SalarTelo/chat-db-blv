const mongoose = require('mongoose');

// TODO: Make task config and add enum from there.
const productSpecificationSchema = new mongoose.Schema(
  {
    squareMeter: {
      type: mongoose.SchemaTypes.Number,
      min: 0,
      required: true,
    },
    material: {
      type: mongoose.SchemaTypes.String,
      enum: ['STONE', 'CONCRETE', 'WOOD', 'STEEL'],
      required: true,
    },
    floorPlans: {
      type: [mongoose.SchemaTypes.String],
      enum: ['HALF_PLANE', 'ONE_PLANE', 'TWO_PLANE', 'BASEMENT', 'LOFT', 'MEZZANINE'],
      required: true,
    },
    constructionType: {
      type: mongoose.SchemaTypes.String,
      enum: [
        'COMPLEMENTARY_HOUSING', // KOMPLEMENTBOSTAD
        'GUEST_HOUSE', // GÄSTSTUGA
        'HOLIDAY_HOME', // FRITIDSHUS
        'VILLA', // VILLA
        'TOWNHOUSE', // RADHUS
        'SEMI_DETACHED_HOUSE', // PARHUS
        'APARTMENT_BUILDINGS', // FLERBOSTADSHUS
        'INDUSTRIAL_PROPERTY', // INDUSTRIFASTIGHET
        'RETAINING_WALL', // STÖDMUR
        'VARIETY', // AVVÄXLING
        'DORMER_WINDOW', // TAKKUPA
        'BALCONY', // BALKONG
        'WINDOW', // FÖNSTER
        'PATIO_DOOR', // ALTANDÖRR
        'CONSERVATORY', // UTERUM
        'GARAGE', // GARAGE
        'CARPORT', // CARPORT
        'FENCE', // STAKET
        'BASEMENT', // KÄLLARE
        'POOL', // POOL
        'POOL_ROOF', // POOLTAK
        'CANOPY', // SKÄRMTAK
        'SOLAR_CELLS', // SOLCELLER
        'PARKING_SPOT', // PARKERKINGSPLATS
        'STOREHOUSE', // FÖRRÅD
        'FACADE_SIGNS', // FASADSKYLTAR
        'SIGNS', // SKYLTAR
        'ADVERTISING', // REKLAM
        'LOT', // TOMT
      ],
      required: true,
    },
    actionType: [
      {
        type: mongoose.SchemaTypes.String,
        enum: [
          'BUILDING_PERMIT',
          'CONSTRUCTION',
          'U_VALUE',
          'VVS',
          'RENDERING',
          'KA',
          'VA',
          'FIRE_DOCUMENTATION',
          'ENERGY_CALCULATION',
          'MOISTURE_SAFETY_DESCRIPTION',
          'SIZING_CERTIFICATE',
          'CONSTRUCTION_DOCUMENTATION',
        ],
      },
    ],
    type: {
      type: mongoose.SchemaTypes.String,
      // TODO: Change 'marklov' to english translation.
      enum: ['NEW_CONSTRUCTION', 'EXTENSION', 'RECONSTRUCTION', 'SUPERSTRUCTURE', 'FACADE_CHANGE', 'MARKLOV', 'DEMOLITION'],
      required: true,
    },
  },
  {
    _id: false,
  }
);
module.exports = productSpecificationSchema;
