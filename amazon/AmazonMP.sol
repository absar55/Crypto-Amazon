pragma solidity ^0.8.0;

contract AmazonMP {
    uint public itemCount;
    address public cowner;

    struct item{
        uint id;
        string title;
        string info;
        uint8 category;
        uint price;
        address owner;
        bool instock;
    }

    mapping (uint => item) public items;
    mapping (address => uint) public balance;

    constructor() public {
        cowner = msg.sender;
        itemCount = 0;
    }

    function getBalance() public view returns (uint) {
        return balance[msg.sender];
    }

    function getContractBalance() public view returns (uint) {
        require(msg.sender == cowner);
        return address(this).balance;
    }

    function deposit() public payable{
        require(msg.value > 0);
        uint amount = (msg.value/100)*99;
        balance[msg.sender] += amount; 
    }

    function withdraw(uint _amount) public {
        require(_amount > 0 && _amount <= balance[msg.sender]);
        uint amount = (_amount/100)*99;
        balance[msg.sender] -= _amount;
        payable(msg.sender).transfer(amount);
    }

    function getItems(uint8 _category) public view returns(item[] memory, uint8){
        item[] memory _items = new item[](itemCount);
        uint8 itemNum = 0;
        if (_category != 0){
            for (uint i = 0; i < itemCount; i++) {
                item memory _item = items[i];
                if(_item.category == _category && _item.instock == true && _item.owner != msg.sender){
                    _items[itemNum] = _item;
                    itemNum++;
                }
            }
        }else {
            for (uint i = 0; i < itemCount; i++) {
                item memory _item = items[i];
                if(_item.instock == true && _item.owner != msg.sender){
                    _items[itemNum] = _item;
                    itemNum++;
                }
            }
        }
        return (_items, itemNum);
    }

    function getMyItems(uint8 _category) public view returns(item[] memory, uint8){
        item[] memory _items = new item[](itemCount);
        uint8 itemNum = 0;
        if (_category == 0){
            for (uint i = 0; i < itemCount; i++) {
                item memory _item = items[i];
                if(_item.owner == msg.sender){
                    _items[itemNum] = _item;
                    itemNum++;
                }
            }
        } else{
            for (uint i = 0; i < itemCount; i++) {
                item memory _item = items[i];
                if(_item.owner == msg.sender && _item.category == _category){
                    _items[itemNum] = _item;
                    itemNum++;
                }
            }
        }
        return (_items, itemNum);
    }

    function addItem(string memory _title, string memory _info, uint8 _category, uint _price, bool _instock) public {
        items[itemCount] = item(itemCount, _title, _info, _category, _price, msg.sender, _instock);
        itemCount++;
    }

    function editItem(uint _id, uint _price, bool _instock) public {
        require(items[_id].owner == msg.sender);
        items[_id].price = _price;
        items[_id].instock = _instock;
    }

    function buyItem(uint _id, uint _price) public {
        require(_id < itemCount, "asas");
        require(_price == items[_id].price);
        require(items[_id].instock == true);
        require(msg.sender != items[_id].owner);
        require(balance[msg.sender] >= items[_id].price);
        balance[msg.sender] -= items[_id].price;
        balance[items[_id].owner] += items[_id].price;
        items[_id].instock = false;
        items[_id].owner = msg.sender;
    }

}