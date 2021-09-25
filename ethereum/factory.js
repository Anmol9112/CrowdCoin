import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xb082f6474DDdECB40393cF43d278cd273fbdf47C'
);

export default instance;
