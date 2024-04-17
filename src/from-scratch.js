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

const getNextOpponent = (obj) => {
  if (obj.matches[0] === undefined) {
    return null
  } else {
    return obj.matches[0].teamName
  }
};

const listAllKeys = (obj) => {
  return Object.keys(obj)
};

const listAllValues = (obj) => {
  return Object.values(obj)
};

const convertToMatrix = (arrOfObj) => {
  if (arrOfObj[0] === undefined || arrOfObj[0] === null) return []
  const totalArr = []
  totalArr.push(Object.keys(arrOfObj[0]))
  for (let e in arrOfObj) {
    totalArr.push(Object.values(arrOfObj[e]))
  }
  return totalArr
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
