function connectDatabase() {
  const didConnect = database.connect(); // side effect: connects to db. expected
  if (didConnect) {
    return true;
  } else {
    console.log('Could not connect to database!'); // side effect: consol log. unexpected? mitigate by creating separate function that logs
    return false;
  }
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    console.log('Invalid input!'); // side effect, mitigate by creating separe function that logs
    return false;
  }
  return true;
}
