//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
contract ERC1155_Im is ERC1155{

    uint public constant sword = 1;
    uint public constant silver = 2;
    uint public constant gold = 3;
    
    constructor() ERC1155("https://abcoathup.github.io/SampleERC1155/api/token/0000000000000000000000000000000000000000000000000000000000000003.json"){
        _mint(msg.sender, sword, 1, "");
        _mint(msg.sender, gold, 10**20, "");
        _mint(msg.sender, silver, 10**18, "");
      }

}

