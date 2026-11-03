/* PROBLEM
1. Two Sum
Solved
Easy
Topics
premium lock icon
Companies
Hint
You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9

Output: [0,1]

Explanation:

The sum of nums[0] and nums[1] is 2 + 7 = 9, which equals the target. Therefore, the indices [0, 1] are returned.

Example 2:

Input: nums = [3,2,4], target = 6

Output: [1,2] 

*/
/*PREP
 - @param {number[]} an array of nums, these nums can be + or - integers, the array will always have at least two elements
 - @param {number} target, this number can be + or - integer
 - @return {number[]} indicies of the array of numbers that add up to the target parameter 
 - example: Input: nums = [2,7,11,15], target = 9; Output: [0,1]
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
           if(nums[j] === target - nums[i]){
            return[i,j];
           }
        }
    }
};