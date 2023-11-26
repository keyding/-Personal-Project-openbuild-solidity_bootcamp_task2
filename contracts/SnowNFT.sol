// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SnowNFT is ERC721URIStorage {
  uint256 private _nextTokenId;

  constructor() 
    ERC721('SnowNFT', 'SNOW') 
  {}

  function mint(address to, string memory uri) public {
    uint256 newTokenId = _nextTokenId++;
    _safeMint(to, newTokenId);
    _setTokenURI(newTokenId, uri);
  }
}