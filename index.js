/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.sums = [];
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        this.sums[i] = nums[i] + sum;
        sum = this.sums[i];
    }
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    var r = val - this.nums[i];
    this.nums[i] = val;
    for (var j = i; j < this.nums.length; j++) {
        this.sums[j] += r;
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if (i === 0) {
        return this.sums[j];
    } else {
        return this.sums[j] - this.sums[i - 1];
    }
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.update(1, 10);
 * numArray.sumRange(0, 2);
 */
var nums = [1,3,5];
var numArray = new NumArray(nums);
console.log(numArray.sumRange(0, 2));
console.log(numArray.update(1, 2));
console.log(numArray.sumRange(0, 2));