
// MALT NAMES
// Whisky
const whiskyDistillingJP = "ディスティリング";
const whiskyDistillingEN = "Distilling Malt";
const whiskyDistillingCN = "蒸馏麦芽";

const whiskyPeatedLightJP = "ピーテッド (ライト)";
const whiskyPeatedLightEN = "Peated Malt (Light)";
const whiskyPeatedLightCN = "泥煤麦芽(轻度泥煤)";

const whiskyPeatedMedJP = "ピーテッド (ミディアム)";
const whiskyPeatedMedEN = "Peated Malt (Medium)";
const whiskyPeatedMedCN = "泥煤麦芽(中度泥煤)";

const whiskyPeatedHeavyJP = "ピーテッド (ヘビー)";
const whiskyPeatedHeavyEN = "Peated Malt (Heavy)";
const whiskyPeatedHeavyCN = "泥煤麦芽(重度泥煤)";

// Beer
const beerPilsnerJP = "ピルスナー";
const beerPilsnerEN = "Pilsner Malt";
const beerPilsnerCN = "皮尔森麦芽";

// OEM
const oemBaseJP = "OEMベース・モルト";
const oemBaseEN = "OEM Base Malt";
const oemBaseCN = "OEM基础麦芽";

const oemPeatedLightJP = "OEMピーテッド (ライト)";
const oemPeatedLightEN = "OEM Peated Malt (Light)";
const oemPeatedLightCN = "OEM泥煤麦芽(轻度泥煤)";

const oemPeatedMedJP = "OEMピーテッド (ミディアム)";
const oemPeatedMedEN = "OEM Peated Malt (Medium)";
const oemPeatedMedCN = "OEM泥煤麦芽(中度泥煤)";

const oemPeatedHeavyJP = "OEMピーテッド (ヘビー)";
const oemPeatedHeavyEN = "OEM Peated Malt (Heavy)";
const oemPeatedHeavyCN = "OEM泥煤麦芽(重度泥煤)";

const oemSmokedJP = "OEMスモーク・モルト";
const oemSmokedEN = "OEM Smoked Malt";
const oemSmokedCN = "OEM烟熏麦芽";

// MALTS DETAILS
// WHISKY MALTS
// Distilling
const infoWhiskyDisitilling = {
  'nameJP': whiskyDistillingJP,
  'nameEN': whiskyDistillingEN,
  'nameCN': whiskyDistillingCN,
  'moisture': '5.0',
  'ebc': '3-5',
  'phenoles': '',
  'price': '370'
}
// Peated | light
export const infoWhiskyPeatedLight = {
  'nameJP': whiskyPeatedLightJP,
  'nameEN': whiskyPeatedLightEN,
  'nameCN': whiskyPeatedLightCN,
  'moisture': '5.0',
  'ebc': '3-5',
  'phenoles': '1-5',
  'price': '380'
}
// Peated | medium
const infoWhiskyPeatedMed = {
  'nameJP': whiskyPeatedMedJP,
  'nameEN': whiskyPeatedMedEN,
  'nameCN': whiskyPeatedMedCN,
  'moisture': '5.0',
  'ebc': '3-5',
  'phenoles': '6-15',
  'price': '390'
}
// Peated | heavy
const infoWhiskyPeatedHeavy = {
  'nameJP': whiskyPeatedHeavyJP,
  'nameEN': whiskyPeatedHeavyEN,
  'nameCN': whiskyPeatedHeavyCN,
  'moisture': '5.0',
  'ebc': '3-5',
  'phenoles': '16-40',
  'price': '500'
}

// BEER MALTS
const infoBeerPilsner = {
  'nameJP': beerPilsnerJP,
  'nameEN': beerPilsnerEN,
  'nameCN': beerPilsnerCN,
  'moisture': '5.0',
  'ebc': '3-5',
  'phenoles': '',
  'price': '370'
}

// OEM MALTS
// Base
const infoOemBase = {
  'nameJP': oemBaseJP,
  'nameEN': oemBaseEN,
  'nameCN': oemBaseCN,
  'moisture': '5.0',
  'ebc': '3-10',
  'phenoles': '',
  'price': '270'
}
// Peated | light
const infoOemPeatedLight = {
  'nameJP': oemPeatedLightJP,
  'nameEN': oemPeatedLightEN,
  'nameCN': oemPeatedLightCN,
  'moisture': '5.0',
  'ebc': '3-10',
  'phenoles': '1-5',
  'price': '280'
}
// Peated | medium
const infoOemPeatedMed = {
  'nameJP': oemPeatedMedJP,
  'nameEN': oemPeatedMedEN,
  'nameCN': oemPeatedMedCN,
  'moisture': '5.0',
  'ebc': '3-10',
  'phenoles': '6-15',
  'price': '290'
}
// Peated | heavy
const infoOemPeatedHeavy = {
  'nameJP': oemPeatedHeavyJP,
  'nameEN': oemPeatedHeavyEN,
  'nameCN': oemPeatedHeavyCN,
  'moisture': '5.0',
  'ebc': '3-10',
  'phenoles': '16-40',
  'price': '400'
}
// Smoke
const infoOemSmoked = {
  'nameJP': oemSmokedJP,
  'nameEN': oemSmokedEN,
  'nameCN': oemSmokedCN,
  'moisture': '5.0',
  'ebc': '3-10',
  'phenoles': '1-40',
  'price': '435-2000'
}


export const whiskyMaltsData = [
  infoWhiskyDisitilling,
  infoWhiskyPeatedLight,
  infoWhiskyPeatedMed,
  infoWhiskyPeatedHeavy
];

export const beerMaltsData = [
  infoBeerPilsner
];

export const oemMaltsData = [
  infoOemBase,
  infoOemPeatedLight,
  infoOemPeatedMed,
  infoOemPeatedHeavy,
  infoOemSmoked
];