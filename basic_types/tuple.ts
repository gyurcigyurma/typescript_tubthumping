const identity: {
  name: string;
  regCard: [number, string];
} = {
  name: 'gunter',
  regCard: [145, 'admin'],
};

// ERR with warning!
identity.regCard[1] = 4;

//TS is fool, able to push
identity.regCard.push['coke'];
