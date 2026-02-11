// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const ownerModule = buildModule("OwnerModule", (m) => {
  const owner = m.contract("Storage");
  
  return { owner };
});

export default ownerModule;
