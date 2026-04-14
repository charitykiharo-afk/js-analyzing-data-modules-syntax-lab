// Import datejs
require('datejs');

function combineUsers(...args) {
  // Initialize return object
  const combinedObject = {
    users: []
  };

  // Merge all arrays into one
  args.forEach(arr => {
    combinedObject.users.push(...arr);
  });

  // Add today's date in M/d/yyyy format
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Return the result
  return combinedObject;
}

// Export for testing
module.exports = combineUsers;