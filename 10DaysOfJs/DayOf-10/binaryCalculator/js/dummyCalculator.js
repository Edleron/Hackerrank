function NullCode(nums, operat) {
    if (operat.includes('*')) {
        let indexOfMul = operat.indexOf('*');
        let mul = (indexOfMul != 0 ? parseInt(nums[indexOfMul - 1], 2) : parseInt(nums[indexOfMul], 2)) * parseInt(nums[indexOfMul + 1], 2);
        nums.splice(indexOfMul, 2);
        nums.splice(indexOfMul, 0, mul.toString(2));
        operat.splice(indexOfMul, 1);
    } else if (operat.includes('/')) {
        let indexOfDiv = operat.indexOf('/');
        let division = (indexOfDiv != 0 ? parseInt(nums[indexOfDiv - 1], 2) : parseInt(nums[indexOfDiv], 2)) / parseInt(nums[indexOfDiv + 1], 2);
        nums.splice(indexOfDiv, 2);
        nums.splice(indexOfDiv, 0, division.toString(2));
        operat.splice(indexOfDiv, 1);
    } else if (operat.includes('+')) {
        let indexOfSum = operat.indexOf('+');
        let sum = (indexOfSum != 0 ? parseInt(nums[indexOfSum - 1], 2) : parseInt(nums[indexOfSum], 2)) + parseInt(nums[indexOfSum + 1], 2);
        nums.splice(indexOfSum, 2);
        nums.splice(indexOfSum, 0, sum.toString(2));
        operat.splice(indexOfSum, 1);
    } else {
        let indexOfSub = operat.indexOf('-');
        let sub = (indexOfSub != 0 ? parseInt(nums[indexOfSub - 1], 2) : parseInt(nums[indexOfSub], 2)) - parseInt(nums[indexOfSub + 1], 2);
        nums.splice(indexOfSub, 2);
        nums.splice(indexOfSub, 0, sub.toString(2));
        operat.splice(indexOfSub, 1);
    }
}
