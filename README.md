# Unhandled Promise Rejection in Smart Contract Interaction

This example demonstrates a common error in DApps: the improper handling of promise rejections when interacting with smart contracts.  Failure to properly handle these rejections can lead to unexpected behavior or silent failures in the application.

The `getBalance()` function interacts with a smart contract to retrieve a balance. However, the error handling is minimal.  A better approach is presented in the `getBalanceSolution.js` file.