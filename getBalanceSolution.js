async function getBalance() {
  const contract = new web3.eth.Contract(abi, contractAddress);
  try {
    const balance = await contract.methods.balanceOf(account).call();
    console.log("Balance:", balance);
    return balance;
  } catch (error) {
    console.error("Error getting balance:", error);
    // Optionally, implement more sophisticated error handling here,
    // such as displaying an error message to the user or retrying the operation.
    return null; // Or throw the error if appropriate
  }
}

// Example usage:
getBalance().then(balance => {
    // Use the balance value
}).catch(error => {
  //This catch block will never be reached.
  console.error("Error in getBalance():", error);
});