const provider = new ethers.providers.Web3Provider(window.ethereum);

dMmbal = document.getElementById("mmbal");
dAccountid = $$("accountid");
dBalance = $$("balance");
dWamount = $$("wamount");
dWbtn = $$("wBtn");
dDamount = $$("damount");
dDbtn = $$("dBtn");
dTab = $$('tabbar');
dBtab = $$('newtabs');

const Amazon_Contract_Address = "0xE1170d7034F8a8a40Efe0dc56b5e5d2e31d1DdB0";
const Amazon_Contract_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_info",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_category",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_instock",
				"type": "bool"
			}
		],
		"name": "addItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "buyItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cowner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_instock",
				"type": "bool"
			}
		],
		"name": "editItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_category",
				"type": "uint8"
			}
		],
		"name": "getItems",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "info",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "category",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "instock",
						"type": "bool"
					}
				],
				"internalType": "struct AmazonMP.item[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_category",
				"type": "uint8"
			}
		],
		"name": "getMyItems",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "info",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "category",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "instock",
						"type": "bool"
					}
				],
				"internalType": "struct AmazonMP.item[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "itemCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "items",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "info",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "category",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "instock",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

async function main() {
	// CONNECT TO METAMASK
	provider.send("eth_requestAccounts", []);

	if (window.ethereum) {
		window.ethereum.on("accountsChanged", () => {
			// window.location.reload();
			main();
		});
	}

	const signer = provider.getSigner();
	let userAddress = await signer.getAddress();
	dAccountid.setValue(userAddress);

	// INITIALIZING CONTRACT
	AmazonMPContract = new ethers.Contract(Amazon_Contract_Address, Amazon_Contract_ABI, signer);

	let cBalance = await AmazonMPContract.getBalance();
	dBalance.setValue(ethers.utils.formatEther(cBalance));
	
	let metaBalance = await provider.getBalance(userAddress);
	// we use the code below to convert the balance from wei to eth
	metaBalance = ethers.utils.formatEther(metaBalance);
	dMmbal.innerHTML = metaBalance;

	getMyItems();

}
main();

const deposit = async () => {
	if (dDamount.getValue() < 0.01){
		alert("AMOUNT SHOULD BE GREATER THAN 0.01 ETH!");
	} else{
		$$("win1").show();
		const transaction = await AmazonMPContract.deposit({ value: ethers.utils.parseEther(dDamount.getValue()) });
		await transaction.wait();
		$$("win1").hide();
		main();
	}
}

const withdraw = async() => {
	if (dWamount.getValue() < 0.01){
		alert("AMOUNT SHOULD BE GREATER THAN 0.01 ETH!");
	} else{
		$$("win1").show();
		const transaction = await AmazonMPContract.withdraw(ethers.utils.parseEther(dWamount.getValue()));
		await transaction.wait();
		$$("win1").hide();
		main();
	}
}

const buyItem = async(_id, _price) => {
	console.log(_id, _price, dBalance.getValue());
	if(dBalance.getValue() < _price){
		alert("INSUFFICIENT BALANCE TO BY THIS ITEM");
	} else{
		$$("win1").show();
		console.log(_price.toString());
		const transaction = await AmazonMPContract.buyItem(_id, ethers.utils.parseUnits(_price.toString(), "ether"));
		await transaction.wait();
		$$("win1").hide();
		main();
	}
}

const addItem = async(_title, _info, _category, _price, _instock) => {
	$$("win2").disable();
	const transaction = await AmazonMPContract.addItem(_title, _info, _category, ethers.utils.parseUnits(_price.toString(), "ether"), _instock);
	await transaction.wait();
	$$("win2").close();
	getMyItems();
}

const editItem = async(_id, _price, _instock) => {
	$$("win3").disable();
	const transaction = await AmazonMPContract.editItem(_id, ethers.utils.parseUnits(_price.toString(), "ether"), _instock);
	await transaction.wait();
	$$("win3").close();
	getMyItems();
}

const getItems = async () => {
	console.log(dTab.getValue());
	const [itemData, num] = await AmazonMPContract.getItems(parseInt(dTab.getValue()));
	var _itemData = [];
	for(i = 0; i < num; i++){
		_itemData.push({ id:itemData[i][0], title:itemData[i][1], info:itemData[i][2], price:ethers.utils.formatEther(itemData[i][4])});
	}
	$$(dTab.getValue()).clearAll();
	$$(dTab.getValue()).parse(_itemData);
}

const getMyItems = async () => {
	console.log(parseInt(dBtab.getValue()));
	const [itemData, num] = await AmazonMPContract.getMyItems(parseInt(dBtab.getValue()));
	var _itemData = [];
	for(i = 0; i < num; i++){
		_itemData.push({ id:itemData[i][0], title:itemData[i][1], info:itemData[i][2], cat:itemData[i][3], price:ethers.utils.formatEther(itemData[i][4]), instock:itemData[i][6]});
	}
	$$(dBtab.getValue()).clearAll();
	$$(dBtab.getValue()).parse(_itemData);
}


dDbtn.attachEvent("onItemClick", deposit);
dWbtn.attachEvent("onItemClick", withdraw);
// dTab.attachEvent("onItemClick", getItems);
dBtab.attachEvent("onItemClick", getMyItems);
