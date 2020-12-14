import EmbarkJS from '../embarkjs';

const ExampleFlashSwapConfig = {"abiDefinition":[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_factoryV1","type":"address"},{"internalType":"address","name":"router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"uniswapV2Call","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],"className":"ExampleFlashSwap","args":[],"gas":"auto","silent":false,"track":true,"deploy":false,"realRuntimeBytecode":"6080604052600436106100225760003560e01c806310d1e85c1461002e57610029565b3661002957005b600080fd5b34801561003a57600080fd5b506100c76004803603608081101561005157600080fd5b6001600160a01b03823516916020810135916040820135919081019060808101606082013564010000000081111561008857600080fd5b82018360208201111561009a57600080fd5b803590602001918460018302840111640100000000831117156100bc57600080fd5b5090925090506100c9565b005b60408051600280825260608083018452926020830190803683370190505090506000806000336001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561012757600080fd5b505afa15801561013b573d6000803e3d6000fd5b505050506040513d602081101561015157600080fd5b50516040805163d21220a760e01b81529051919250600091339163d21220a7916004808301926020929190829003018186803b15801561019057600080fd5b505afa1580156101a4573d6000803e3d6000fd5b505050506040513d60208110156101ba57600080fd5b505190506101e97f00000000000000000000000000000000000000000000000000000000000000008383610a81565b6001600160a01b0316336001600160a01b03161461020357fe5b88158061020e575087155b61021457fe5b88156102205780610222565b815b8560008151811061022f57fe5b6001600160a01b039092166020928302919091019091015288156102535781610255565b805b8560018151811061026257fe5b6001600160a01b0392831660209182029290920101527f00000000000000000000000000000000000000000000000000000000000000008116908316146102a957886102ab565b875b93507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316146102ec57876102ee565b885b925050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168360008151811061032957fe5b60200260200101516001600160a01b0316148061038b57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168360018151811061037857fe5b60200260200101516001600160a01b0316145b61039157fe5b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846000815181106103ca57fe5b60200260200101516001600160a01b0316146103fa57836000815181106103ed57fe5b6020026020010151610410565b8360018151811061040757fe5b60200260200101515b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166306f2bf62836040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561048a57600080fd5b505afa15801561049e573d6000803e3d6000fd5b505050506040513d60208110156104b457600080fd5b505190508315610805576000878760208110156104d057600080fd5b506040805163095ea7b360e01b81526001600160a01b038581166004830152602482018990529151923593509085169163095ea7b3916044808201926020929091908290030181600087803b15801561052857600080fd5b505af115801561053c573d6000803e3d6000fd5b505050506040513d602081101561055257600080fd5b5050604080516395e3c50b60e01b81526004810187905260248101839052600019604482015290516000916001600160a01b038516916395e3c50b9160648082019260209290919082900301818787803b1580156105af57600080fd5b505af11580156105c3573d6000803e3d6000fd5b505050506040513d60208110156105d957600080fd5b50519050600061060a7f0000000000000000000000000000000000000000000000000000000000000000888a610b41565b60008151811061061657fe5b6020026020010151905080821161062957fe5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561068457600080fd5b505af1158015610698573d6000803e3d6000fd5b50506040805163a9059cbb60e01b81523360048201526024810186905290516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016945063a9059cbb9350604480830193506020928290030181600087803b15801561070a57600080fd5b505af115801561071e573d6000803e3d6000fd5b505050506040513d602081101561073457600080fd5b505161073c57fe5b604080516000808252602082019092526001600160a01b038f1690838503906040518082805190602001908083835b6020831061078a5780518252601f19909201916020918201910161076b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146107ec576040519150601f19603f3d011682016040523d82523d6000602084013e6107f1565b606091505b50509050806107fc57fe5b50505050610a75565b60008787602081101561081757600080fd5b5060408051632e1a7d4d60e01b8152600481018790529051913592506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691632e1a7d4d9160248082019260009290919082900301818387803b15801561088557600080fd5b505af1158015610899573d6000803e3d6000fd5b505050506000826001600160a01b031663f39b5b9b86846000196040518463ffffffff1660e01b815260040180838152602001828152602001925050506020604051808303818588803b1580156108ef57600080fd5b505af1158015610903573d6000803e3d6000fd5b50505050506040513d602081101561091a57600080fd5b50519050600061094b7f0000000000000000000000000000000000000000000000000000000000000000878a610b41565b60008151811061095757fe5b6020026020010151905080821161096a57fe5b6040805163a9059cbb60e01b81523360048201526024810183905290516001600160a01b0387169163a9059cbb9160448083019260209291908290030181600087803b1580156109b957600080fd5b505af11580156109cd573d6000803e3d6000fd5b505050506040513d60208110156109e357600080fd5b50516109eb57fe5b6040805163a9059cbb60e01b81526001600160a01b038f81166004830152838503602483015291519187169163a9059cbb916044808201926020929091908290030181600087803b158015610a3f57600080fd5b505af1158015610a53573d6000803e3d6000fd5b505050506040513d6020811015610a6957600080fd5b5051610a7157fe5b5050505b50505050505050505050565b6000806000610a908585610c8e565b604080516bffffffffffffffffffffffff19606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501206001600160f81b031960688401529a90941b9093166069840152607d8301989098527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b6060600282511015610b9a576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a20494e56414c49445f504154480000604482015290519081900360640190fd5b815167ffffffffffffffff81118015610bb257600080fd5b50604051908082528060200260200182016040528015610bdc578160200160208202803683370190505b5090508281600183510381518110610bf057fe5b60209081029190910101528151600019015b8015610c8657600080610c3f87866001860381518110610c1e57fe5b6020026020010151878681518110610c3257fe5b6020026020010151610d6c565b91509150610c61848481518110610c5257fe5b60200260200101518383610e3a565b846001850381518110610c7057fe5b6020908102919091010152505060001901610c02565b509392505050565b600080826001600160a01b0316846001600160a01b03161415610ce25760405162461bcd60e51b815260040180806020018281038252602581526020018061105f6025913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b031610610d02578284610d05565b83835b90925090506001600160a01b038216610d65576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015290519081900360640190fd5b9250929050565b6000806000610d7b8585610c8e565b509050600080610d8c888888610a81565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610dc457600080fd5b505afa158015610dd8573d6000803e3d6000fd5b505050506040513d6060811015610dee57600080fd5b5080516020909101516dffffffffffffffffffffffffffff91821693501690506001600160a01b0387811690841614610e28578082610e2b565b81815b90999098509650505050505050565b6000808411610e7a5760405162461bcd60e51b815260040180806020018281038252602c815260200180611033602c913960400191505060405180910390fd5b600083118015610e8a5750600082115b610ec55760405162461bcd60e51b81526004018080602001828103825260288152602001806110846028913960400191505060405180910390fd5b6000610ee96103e8610edd868863ffffffff610f2a16565b9063ffffffff610f2a16565b90506000610f036103e5610edd868963ffffffff610f9316565b9050610f206001828481610f1357fe5b049063ffffffff610fe316565b9695505050505050565b6000811580610f4557505080820282828281610f4257fe5b04145b610f8d576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b92915050565b80820382811115610f8d576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b80820182811015610f8d576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe556e697377617056324c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553556e697377617056324c6962726172793a20494e53554646494349454e545f4c4951554944495459a2646970667358221220230cf5f42058f19e12","realArgs":[],"code":"60e060405234801561001057600080fd5b506040516112213803806112218339818101604052606081101561003357600080fd5b5080516020808301516040938401516001600160601b0319606083811b821660805285901b1660a05284516315ab88c960e31b815294519394919390926001600160a01b0384169263ad5c46489260048083019392829003018186803b15801561009c57600080fd5b505afa1580156100b0573d6000803e3d6000fd5b505050506040513d60208110156100c657600080fd5b50516001600160601b031960609190911b1660c05250505060805160601c60a05160601c60c05160601c6110e16101406000398061027a52806102af52806102f452806103435280610395528061062b52806106c1528061083d5250806101c352806105e4528061092552508061041652506110e16000f3fe6080604052600436106100225760003560e01c806310d1e85c1461002e57610029565b3661002957005b600080fd5b34801561003a57600080fd5b506100c76004803603608081101561005157600080fd5b6001600160a01b03823516916020810135916040820135919081019060808101606082013564010000000081111561008857600080fd5b82018360208201111561009a57600080fd5b803590602001918460018302840111640100000000831117156100bc57600080fd5b5090925090506100c9565b005b60408051600280825260608083018452926020830190803683370190505090506000806000336001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561012757600080fd5b505afa15801561013b573d6000803e3d6000fd5b505050506040513d602081101561015157600080fd5b50516040805163d21220a760e01b81529051919250600091339163d21220a7916004808301926020929190829003018186803b15801561019057600080fd5b505afa1580156101a4573d6000803e3d6000fd5b505050506040513d60208110156101ba57600080fd5b505190506101e97f00000000000000000000000000000000000000000000000000000000000000008383610a81565b6001600160a01b0316336001600160a01b03161461020357fe5b88158061020e575087155b61021457fe5b88156102205780610222565b815b8560008151811061022f57fe5b6001600160a01b039092166020928302919091019091015288156102535781610255565b805b8560018151811061026257fe5b6001600160a01b0392831660209182029290920101527f00000000000000000000000000000000000000000000000000000000000000008116908316146102a957886102ab565b875b93507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316146102ec57876102ee565b885b925050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168360008151811061032957fe5b60200260200101516001600160a01b0316148061038b57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168360018151811061037857fe5b60200260200101516001600160a01b0316145b61039157fe5b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846000815181106103ca57fe5b60200260200101516001600160a01b0316146103fa57836000815181106103ed57fe5b6020026020010151610410565b8360018151811061040757fe5b60200260200101515b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166306f2bf62836040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561048a57600080fd5b505afa15801561049e573d6000803e3d6000fd5b505050506040513d60208110156104b457600080fd5b505190508315610805576000878760208110156104d057600080fd5b506040805163095ea7b360e01b81526001600160a01b038581166004830152602482018990529151923593509085169163095ea7b3916044808201926020929091908290030181600087803b15801561052857600080fd5b505af115801561053c573d6000803e3d6000fd5b505050506040513d602081101561055257600080fd5b5050604080516395e3c50b60e01b81526004810187905260248101839052600019604482015290516000916001600160a01b038516916395e3c50b9160648082019260209290919082900301818787803b1580156105af57600080fd5b505af11580156105c3573d6000803e3d6000fd5b505050506040513d60208110156105d957600080fd5b50519050600061060a7f0000000000000000000000000000000000000000000000000000000000000000888a610b41565b60008151811061061657fe5b6020026020010151905080821161062957fe5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561068457600080fd5b505af1158015610698573d6000803e3d6000fd5b50506040805163a9059cbb60e01b81523360048201526024810186905290516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016945063a9059cbb9350604480830193506020928290030181600087803b15801561070a57600080fd5b505af115801561071e573d6000803e3d6000fd5b505050506040513d602081101561073457600080fd5b505161073c57fe5b604080516000808252602082019092526001600160a01b038f1690838503906040518082805190602001908083835b6020831061078a5780518252601f19909201916020918201910161076b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146107ec576040519150601f19603f3d011682016040523d82523d6000602084013e6107f1565b606091505b50509050806107fc57fe5b50505050610a75565b60008787602081101561081757600080fd5b5060408051632e1a7d4d60e01b8152600481018790529051913592506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691632e1a7d4d9160248082019260009290919082900301818387803b15801561088557600080fd5b505af1158015610899573d6000803e3d6000fd5b505050506000826001600160a01b031663f39b5b9b86846000196040518463ffffffff1660e01b815260040180838152602001828152602001925050506020604051808303818588803b1580156108ef57600080fd5b505af1158015610903573d6000803e3d6000fd5b50505050506040513d602081101561091a57600080fd5b50519050600061094b7f0000000000000000000000000000000000000000000000000000000000000000878a610b41565b60008151811061095757fe5b6020026020010151905080821161096a57fe5b6040805163a9059cbb60e01b81523360048201526024810183905290516001600160a01b0387169163a9059cbb9160448083019260209291908290030181600087803b1580156109b957600080fd5b505af11580156109cd573d6000803e3d6000fd5b505050506040513d60208110156109e357600080fd5b50516109eb57fe5b6040805163a9059cbb60e01b81526001600160a01b038f81166004830152838503602483015291519187169163a9059cbb916044808201926020929091908290030181600087803b158015610a3f57600080fd5b505af1158015610a53573d6000803e3d6000fd5b505050506040513d6020811015610a6957600080fd5b5051610a7157fe5b5050505b50505050505050505050565b6000806000610a908585610c8e565b604080516bffffffffffffffffffffffff19606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501206001600160f81b031960688401529a90941b9093166069840152607d8301989098527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b6060600282511015610b9a576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a20494e56414c49445f504154480000604482015290519081900360640190fd5b815167ffffffffffffffff81118015610bb257600080fd5b50604051908082528060200260200182016040528015610bdc578160200160208202803683370190505b5090508281600183510381518110610bf057fe5b60209081029190910101528151600019015b8015610c8657600080610c3f87866001860381518110610c1e57fe5b6020026020010151878681518110610c3257fe5b6020026020010151610d6c565b91509150610c61848481518110610c5257fe5b60200260200101518383610e3a565b846001850381518110610c7057fe5b6020908102919091010152505060001901610c02565b509392505050565b600080826001600160a01b0316846001600160a01b03161415610ce25760405162461bcd60e51b815260040180806020018281038252602581526020018061105f6025913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b031610610d02578284610d05565b83835b90925090506001600160a01b038216610d65576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015290519081900360640190fd5b9250929050565b6000806000610d7b8585610c8e565b509050600080610d8c888888610a81565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610dc457600080fd5b505afa158015610dd8573d6000803e3d6000fd5b505050506040513d6060811015610dee57600080fd5b5080516020909101516dffffffffffffffffffffffffffff91821693501690506001600160a01b0387811690841614610e28578082610e2b565b81815b90999098509650505050505050565b6000808411610e7a5760405162461bcd60e51b815260040180806020018281038252602c815260200180611033602c913960400191505060405180910390fd5b600083118015610e8a5750600082115b610ec55760405162461bcd60e51b81526004018080602001828103825260288152602001806110846028913960400191505060405180910390fd5b6000610ee96103e8610edd868863ffffffff610f2a16565b9063ffffffff610f2a16565b90506000610f036103e5610edd868963ffffffff610f9316565b9050610f206001828481610f1357fe5b049063ffffffff610fe316565b9695505050505050565b6000811580610f4557505080820282828281610f4257fe5b04145b610f8d576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b92915050565b80820382811115610f8d576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b80820182811015610f8d576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe556e697377617056324c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553556e697377617056324c6962726172793a20494e53554646494349454e545f4c4951554944495459a2646970667358221220230cf5f42058f19e12860d4ad041865200071025b3ddadc4e55bed468163575064736f6c63430006060033","runtimeBytecode":"6080604052600436106100225760003560e01c806310d1e85c1461002e57610029565b3661002957005b600080fd5b34801561003a57600080fd5b506100c76004803603608081101561005157600080fd5b6001600160a01b03823516916020810135916040820135919081019060808101606082013564010000000081111561008857600080fd5b82018360208201111561009a57600080fd5b803590602001918460018302840111640100000000831117156100bc57600080fd5b5090925090506100c9565b005b60408051600280825260608083018452926020830190803683370190505090506000806000336001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561012757600080fd5b505afa15801561013b573d6000803e3d6000fd5b505050506040513d602081101561015157600080fd5b50516040805163d21220a760e01b81529051919250600091339163d21220a7916004808301926020929190829003018186803b15801561019057600080fd5b505afa1580156101a4573d6000803e3d6000fd5b505050506040513d60208110156101ba57600080fd5b505190506101e97f00000000000000000000000000000000000000000000000000000000000000008383610a81565b6001600160a01b0316336001600160a01b03161461020357fe5b88158061020e575087155b61021457fe5b88156102205780610222565b815b8560008151811061022f57fe5b6001600160a01b039092166020928302919091019091015288156102535781610255565b805b8560018151811061026257fe5b6001600160a01b0392831660209182029290920101527f00000000000000000000000000000000000000000000000000000000000000008116908316146102a957886102ab565b875b93507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316146102ec57876102ee565b885b925050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168360008151811061032957fe5b60200260200101516001600160a01b0316148061038b57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168360018151811061037857fe5b60200260200101516001600160a01b0316145b61039157fe5b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846000815181106103ca57fe5b60200260200101516001600160a01b0316146103fa57836000815181106103ed57fe5b6020026020010151610410565b8360018151811061040757fe5b60200260200101515b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166306f2bf62836040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561048a57600080fd5b505afa15801561049e573d6000803e3d6000fd5b505050506040513d60208110156104b457600080fd5b505190508315610805576000878760208110156104d057600080fd5b506040805163095ea7b360e01b81526001600160a01b038581166004830152602482018990529151923593509085169163095ea7b3916044808201926020929091908290030181600087803b15801561052857600080fd5b505af115801561053c573d6000803e3d6000fd5b505050506040513d602081101561055257600080fd5b5050604080516395e3c50b60e01b81526004810187905260248101839052600019604482015290516000916001600160a01b038516916395e3c50b9160648082019260209290919082900301818787803b1580156105af57600080fd5b505af11580156105c3573d6000803e3d6000fd5b505050506040513d60208110156105d957600080fd5b50519050600061060a7f0000000000000000000000000000000000000000000000000000000000000000888a610b41565b60008151811061061657fe5b6020026020010151905080821161062957fe5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561068457600080fd5b505af1158015610698573d6000803e3d6000fd5b50506040805163a9059cbb60e01b81523360048201526024810186905290516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016945063a9059cbb9350604480830193506020928290030181600087803b15801561070a57600080fd5b505af115801561071e573d6000803e3d6000fd5b505050506040513d602081101561073457600080fd5b505161073c57fe5b604080516000808252602082019092526001600160a01b038f1690838503906040518082805190602001908083835b6020831061078a5780518252601f19909201916020918201910161076b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146107ec576040519150601f19603f3d011682016040523d82523d6000602084013e6107f1565b606091505b50509050806107fc57fe5b50505050610a75565b60008787602081101561081757600080fd5b5060408051632e1a7d4d60e01b8152600481018790529051913592506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691632e1a7d4d9160248082019260009290919082900301818387803b15801561088557600080fd5b505af1158015610899573d6000803e3d6000fd5b505050506000826001600160a01b031663f39b5b9b86846000196040518463ffffffff1660e01b815260040180838152602001828152602001925050506020604051808303818588803b1580156108ef57600080fd5b505af1158015610903573d6000803e3d6000fd5b50505050506040513d602081101561091a57600080fd5b50519050600061094b7f0000000000000000000000000000000000000000000000000000000000000000878a610b41565b60008151811061095757fe5b6020026020010151905080821161096a57fe5b6040805163a9059cbb60e01b81523360048201526024810183905290516001600160a01b0387169163a9059cbb9160448083019260209291908290030181600087803b1580156109b957600080fd5b505af11580156109cd573d6000803e3d6000fd5b505050506040513d60208110156109e357600080fd5b50516109eb57fe5b6040805163a9059cbb60e01b81526001600160a01b038f81166004830152838503602483015291519187169163a9059cbb916044808201926020929091908290030181600087803b158015610a3f57600080fd5b505af1158015610a53573d6000803e3d6000fd5b505050506040513d6020811015610a6957600080fd5b5051610a7157fe5b5050505b50505050505050505050565b6000806000610a908585610c8e565b604080516bffffffffffffffffffffffff19606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501206001600160f81b031960688401529a90941b9093166069840152607d8301989098527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b6060600282511015610b9a576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a20494e56414c49445f504154480000604482015290519081900360640190fd5b815167ffffffffffffffff81118015610bb257600080fd5b50604051908082528060200260200182016040528015610bdc578160200160208202803683370190505b5090508281600183510381518110610bf057fe5b60209081029190910101528151600019015b8015610c8657600080610c3f87866001860381518110610c1e57fe5b6020026020010151878681518110610c3257fe5b6020026020010151610d6c565b91509150610c61848481518110610c5257fe5b60200260200101518383610e3a565b846001850381518110610c7057fe5b6020908102919091010152505060001901610c02565b509392505050565b600080826001600160a01b0316846001600160a01b03161415610ce25760405162461bcd60e51b815260040180806020018281038252602581526020018061105f6025913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b031610610d02578284610d05565b83835b90925090506001600160a01b038216610d65576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015290519081900360640190fd5b9250929050565b6000806000610d7b8585610c8e565b509050600080610d8c888888610a81565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610dc457600080fd5b505afa158015610dd8573d6000803e3d6000fd5b505050506040513d6060811015610dee57600080fd5b5080516020909101516dffffffffffffffffffffffffffff91821693501690506001600160a01b0387811690841614610e28578082610e2b565b81815b90999098509650505050505050565b6000808411610e7a5760405162461bcd60e51b815260040180806020018281038252602c815260200180611033602c913960400191505060405180910390fd5b600083118015610e8a5750600082115b610ec55760405162461bcd60e51b81526004018080602001828103825260288152602001806110846028913960400191505060405180910390fd5b6000610ee96103e8610edd868863ffffffff610f2a16565b9063ffffffff610f2a16565b90506000610f036103e5610edd868963ffffffff610f9316565b9050610f206001828481610f1357fe5b049063ffffffff610fe316565b9695505050505050565b6000811580610f4557505080820282828281610f4257fe5b04145b610f8d576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b92915050565b80820382811115610f8d576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b80820182811015610f8d576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe556e697377617056324c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553556e697377617056324c6962726172793a20494e53554646494349454e545f4c4951554944495459a2646970667358221220230cf5f42058f19e12860d4ad041865200071025b3ddadc4e55bed468163575064736f6c63430006060033","linkReferences":{},"swarmHash":"860d4ad041865200071025b3ddadc4e55bed468163575064736f6c6343000606","gasEstimates":{"creation":{"codeDepositCost":"864200","executionCost":"infinite","totalCost":"infinite"},"external":{"uniswapV2Call(address,uint256,uint256,bytes)":"infinite"}},"functionHashes":{"uniswapV2Call(address,uint256,uint256,bytes)":"10d1e85c"},"filename":"/mnt/512-2/dfd/SvetAng2/EmbarkUniswapRouter02/.embark/contracts/examples/ExampleFlashSwap.sol","originalFilename":"contracts/examples/ExampleFlashSwap.sol","path":"/mnt/512-2/dfd/SvetAng2/EmbarkUniswapRouter02/contracts/examples/ExampleFlashSwap.sol","type":"file","deploymentAccount":"0x4AE013A1417453Bbd06930814A6cA79D63eF8a88"};
const ExampleFlashSwap = new EmbarkJS.Blockchain.Contract(ExampleFlashSwapConfig);

export default ExampleFlashSwap;
