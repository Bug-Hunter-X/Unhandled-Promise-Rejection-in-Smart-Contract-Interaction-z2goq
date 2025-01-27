function getBalance() {
  const contract = new web3.eth.Contract(abi, contractAddress);
  return contract.methods.balanceOf(account).call();
}

// ... later in the code ...

getBalance().then(balance => {
  console.log("Balance:", balance);
}).catch(error => {
  console.error("Error getting balance:", error);
});