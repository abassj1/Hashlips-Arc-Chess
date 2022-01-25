const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
//Update baseUri after generating the images
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Background"},
      { name: "Arc 1"},
      { name: "Arc 2"},
      { name: "Arc 3"},
      { name: "Arc 4"},
      { name: "Arc 5"},
      { name: "Arc 6"},
      { name: "Arc 7"},
      { name: "Arc 8"},
      { name: "Arc 9"},
      { name: "Arc 10"},
      { name: "Arc 11"},
      { name: "Arc 12"},
      { name: "Arc 13"},
      { name: "Arc 14"},
      { name: "Arc 15"},
      { name: "Arc 16"},
      { name: "Arc 17"},
      { name: "Arc 18"},
      { name: "Arc 19"},
      { name: "Arc 20"},
      { name: "Arc 21"},
      { name: "Arc 22"},
      { name: "Arc 23"},
      { name: "Arc 24"},
      { name: "Arc 25"},
      { name: "Arc 26"},
      { name: "Arc 27"},
      { name: "Arc 28"},
      { name: "Arc 29"},
      { name: "Arc 30"},
      { name: "Arc 31"},
      { name: "Arc 32"},
    ],
  },

  /*Another order can be called to create within the same collection but with different layout
    The grothEditionSizeTo value must me more than the first one which would create more editions
    from this section. e.g if previous growth value is 5 and this one is set to 10, it creates
    5 more editions with this new layer*/

  // This can be used to create things like race of a species.
  // {
  //   growEditionSizeTo: 500,
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Arc 1" },
  //     { name: "Arc 2" },
  //     { name: "Arc 3" },
  //     { name: "Arc 4" },
  //     { name: "Arc 5" },
  //     { name: "Arc 6" },
  //   ],
  // },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1804,
  height: 1804,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
