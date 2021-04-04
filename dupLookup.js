var containsDuplicate = function (nums) {
  let lookup = {};
  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    lookup[number] ? (lookup[number] += 1) : (lookup[number] = 1);
  }
  for (let key in lookup) {
    if (lookup[key] > 1) {
      return true;
    }
  }
  return false;
};
