# 35. Search Insert Position

---

## Description

> Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

> You may assume no duplicates in the array.

> Here are few examples.
> [1,3,5,6], 5 → 2
> [1,3,5,6], 2 → 1
> [1,3,5,6], 7 → 4
> [1,3,5,6], 0 → 0

## Javascript

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.indexOf(target) !== -1) {
        return nums.indexOf(target);
    }

    var i;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
            return i;
        }
    }

    return nums.length;
};
```
