import EmbarkJS from '../embarkjs';

const TransferHelperConfig = {"abiDefinition":[],"className":"TransferHelper","args":[],"gas":"auto","silent":false,"track":true,"deploy":false,"realRuntimeBytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220810276820fd0cf585c","realArgs":[],"code":"60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220810276820fd0cf585c52bdd73cc6ee464f221787d3faf154315b5a102565cb8e64736f6c63430006060033","runtimeBytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220810276820fd0cf585c52bdd73cc6ee464f221787d3faf154315b5a102565cb8e64736f6c63430006060033","linkReferences":{},"swarmHash":"52bdd73cc6ee464f221787d3faf154315b5a102565cb8e64736f6c6343000606","gasEstimates":{"creation":{"codeDepositCost":"17200","executionCost":"97","totalCost":"17297"},"internal":{"safeApprove(address,address,uint256)":"infinite","safeTransfer(address,address,uint256)":"infinite","safeTransferETH(address,uint256)":"infinite","safeTransferFrom(address,address,address,uint256)":"infinite"}},"functionHashes":{},"filename":"/mnt/512-2/dfd/SvetAng2/EmbarkUniswapRouter02/.embark/node_modules/@uniswap/lib/contracts/libraries/TransferHelper.sol","originalFilename":"contracts//mnt/512-2/dfd/SvetAng2/EmbarkUniswapRouter02/.embark/node_modules/@uniswap/lib/contracts/libraries/TransferHelper.sol","path":"/mnt/512-2/dfd/SvetAng2/EmbarkUniswapRouter02/contracts/.embark/node_modules/@uniswap/lib/contracts/libraries/TransferHelper.sol","type":"file","deploymentAccount":"0x4AE013A1417453Bbd06930814A6cA79D63eF8a88"};
const TransferHelper = new EmbarkJS.Blockchain.Contract(TransferHelperConfig);

export default TransferHelper;