//SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.28;

import "forge-std/Script.sol";
import "../src/owner.sol";

contract DeployOwner is Script {
    function run() external {
        vm.startBroadcast();
        Storage storageContract = new Storage();
        vm.stopBroadcast();
    }
}