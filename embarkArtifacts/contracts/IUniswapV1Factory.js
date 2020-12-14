import EmbarkJS from '../embarkjs';

const IUniswapV1FactoryConfig = {"abiDefinition":[{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"getExchange","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"className":"IUniswapV1Factory","args":[],"gas":"auto","silent":false,"track":true,"deploy":false,"realRuntimeBytecode":"","realArgs":[],"code":"","runtimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"getExchange(address)":"06f2bf62"},"filename":"/mnt/512-2/dfd/SvetAng2/EmbarkUniswapRouter02/.embark/contracts/interfaces/V1/IUniswapV1Factory.sol","originalFilename":"contracts/interfaces/V1/IUniswapV1Factory.sol","path":"/mnt/512-2/dfd/SvetAng2/EmbarkUniswapRouter02/contracts/interfaces/V1/IUniswapV1Factory.sol","type":"file","deploymentAccount":"0x4AE013A1417453Bbd06930814A6cA79D63eF8a88"};
const IUniswapV1Factory = new EmbarkJS.Blockchain.Contract(IUniswapV1FactoryConfig);

export default IUniswapV1Factory;
