// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title CreateStore
 * @dev Store & retrieve name of Store.
 */
contract CreateStore {

    mapping(address => string) private Store;

    /**
     * @dev Store value in variable
     * @param storeName to store
     */
    function addStore(string memory storeName) public {
        Store[msg.sender]= storeName;
    }

    /**
     * @dev Return value 
     * @return value of 'storeName'
     */
    function retrieve() public view returns (string memory) {
        return Store[msg.sender];
    }
}