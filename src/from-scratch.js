const coolGreeting = (obj) => {
  return obj.isCool ? `What is UP ${obj.name.toUpperCase()}? How you been doin'?` : `Greetings ${obj.name}, how have you been lately?`
};

const haveBirthday = (obj) => {
  obj.age += 1
};

const becomeSecretAgent = (obj, spyHandle) => {
  delete obj.name
  obj.spyHandle = spyHandle

};

const carMaker = (name, maker, year) => {
  const car = {
    name: name,
    maker: maker,
    year: year,
    needsOilChange: false,
  }
  return car
};

const weAreNotFriends = (obj) => {
  let lastName = obj.friends.pop()
  return lastName
};

const listHobbies = (obj) => {
  for (let i = 0; i < obj.hobbies.length; i++) {
    console.log(`${obj.name} likes ${obj.hobbies[i]}.`)
  }
};

const getNextOpponent = () => {
};

const listAllKeys = () => {
};

const listAllValues = () => {
};

const convertToMatrix = () => {
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
