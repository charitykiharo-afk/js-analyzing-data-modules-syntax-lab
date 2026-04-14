function combineUsers(...args) {
  const combinedObject = {
    users: [],
  };

  args.forEach(arr => {
    combinedObject.users.push(...arr);
  });

  combinedObject.merge_date = new Date().toDateString();

  return combinedObject;
}

module.exports = combineUsers;
