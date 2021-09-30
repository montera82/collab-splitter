export default [{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"anonymous": false,
	"inputs": [{
			"indexed": true,
			"internalType": "address",
			"name": "previousOwner",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "address",
			"name": "newOwner",
			"type": "address"
		}
	],
	"name": "OwnershipTransferred",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [{
			"indexed": true,
			"internalType": "address",
			"name": "splitter",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "string",
			"name": "name",
			"type": "string"
		},
		{
			"indexed": false,
			"internalType": "address[]",
			"name": "recipients",
			"type": "address[]"
		},
		{
			"indexed": false,
			"internalType": "uint256[]",
			"name": "amounts",
			"type": "uint256[]"
		}
	],
	"name": "SplitterCreated",
	"type": "event"
},
{
	"inputs": [{
			"internalType": "string",
			"name": "name_",
			"type": "string"
		},
		{
			"internalType": "bytes32",
			"name": "merkleRoot",
			"type": "bytes32"
		},
		{
			"internalType": "address[]",
			"name": "recipients",
			"type": "address[]"
		},
		{
			"internalType": "uint256[]",
			"name": "amounts",
			"type": "uint256[]"
		}
	],
	"name": "createSplitter",
	"outputs": [{
		"internalType": "address",
		"name": "newContract",
		"type": "address"
	}],
	"stateMutability": "payable",
	"type": "function"
},
{
	"inputs": [],
	"name": "getSplitterImplementation",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [{
			"internalType": "address",
			"name": "splitterImplementation",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "owner_",
			"type": "address"
		}
	],
	"name": "initialize",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "implementation",
		"type": "address"
	}],
	"name": "setSplitterImplementation",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}
]