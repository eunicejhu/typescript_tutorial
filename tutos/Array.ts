// binary search on sorted array
const binarySearch = (
  array: number[],
  search: number,
  start: number,
  end: number
): number => {
  if (start > end) {
    return -1;
  }
  const middle = Math.floor((start + end) / 2);

  if (array[middle] === search) {
    return middle;
  } else if (array[middle] > search) {
    return binarySearch(array, search, start, middle - 1);
  } else {
    return binarySearch(array, search, middle + 1, end);
  }
};

const sortedArray = [1, 4, 9, 32, 76, 102, 120, 130];
// const foundIndex = binarySearch(sortedArray, 130, 0, sortedArray.length - 1);
// console.log(foundIndex);

// Linear search
// Does not need a sorted array. O(n)

const LinearSearch = (array: number[], search: number): number => {
  let foundIndex = -1;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === search) {
      foundIndex = index;
      break;
    }
  }

  return foundIndex;
};

// const linearFoundIndex = LinearSearch(sortedArray, 32);
// console.log({ linearFoundIndex });

// Array.forEach(element, index)
// there is no way to stop or break a forEach loop other than by throwing an exception

// isPrime
const IsPrime = (n: number): boolean => {
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

// const isPrime = IsPrime(17);
// console.log(isPrime);

// factorial
const Factorial = (n: number): number => {
  let factorial = 1;
  if (n > 2) {
    for (let i = n; i > 1; i--) {
      factorial *= i;
    }
  }
  return factorial;
};

// const factorial = Factorial(1);
// console.log(factorial);

// Fibonacci
export const Fibonacci = (n: number): number => {
  let fibonacci = 0;
  if (n === 0 || n === 1) {
    return n;
  }
  fibonacci = Fibonacci(n - 1) + Fibonacci(n - 2);
  return fibonacci;
};

// const fibonacci = Fibonacci(0);
// console.log(fibonacci);

interface IObject {
  [p: string]: any;
}
// Object Equality
function isEqual(a: IObject, b: IObject) {
  // check property length
  if (
    Object.getOwnPropertyNames(a).length !==
    Object.getOwnPropertyNames(b).length
  ) {
    return false;
  }

  for (let property in a) {
    if (a[property] !== b[property]) {
      return false;
    }
  }
}

// Array iteration
const animals: string[] = ["dog", "cat", "owl", "turtle"];
for (const animal of animals) {
  animal.toUpperCase();
}

const dateObj = {
  now: new Date(),
  nextDay() {
    return new Date(this.now.setDate(this.now.getDate() + 1));
  }
};

const birthday = { now: new Date("1990-05-16") };

// Sorting Algorithm

// 1. bubble sorting, O(n*2) time complexity, O(n) space complexity

export const swap = (input: number[], i: number, j: number): number[] => {
  if (j >= input.length || i >= input.length) {
    return input;
  }
  const temp = input[i];
  input[i] = input[j];
  input[j] = temp;
  return input;
};

export const BubbleSort = (input: number[]): number[] => {
  const sorted: number[] = input.slice();
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 1, stop = sorted.length - i; j < stop; j++) {
      if (sorted[j - 1] > sorted[j]) {
        swap(sorted, j - 1, j);
      }
    }
  }
  return sorted;
};

// 2. quickSort  O(n*log n) time complexity , O(n) space complexity

export const QuickSort = (input: number[]): number[] => {
  let originalArray: number[] = input.slice();
  let left: number[] = [];
  let right: number[] = [];
  const length = originalArray.length;
  const pivot = originalArray[length - 1];

  if (length <= 1) {
    return originalArray;
  }

  for (let i = 0; i < length - 1; i++) {
    if (originalArray[i] < pivot) {
      left.push(originalArray[i]);
    } else {
      right.push(originalArray[i]);
    }
  }

  return [...QuickSort(left), pivot, ...QuickSort(right)];
};

// Array Chunking
// solution1:
export const chunk1 = (array: number[], size: number): number[][] => {
  const originalArray = array.slice();
  let chunkedArray: number[][] = [];
  const length = originalArray.length;
  let chunk = [];
  for (let i = 0; i < length; i++) {
    if (i % size === 0 && chunk.length) {
      chunkedArray.push(chunk);
      chunk = [];
    }
    chunk.push(originalArray[i]);
    if (i === length - 1 && chunk.length) {
      chunkedArray.push(chunk);
    }
  }
  return chunkedArray;
};

// solution2
export const chunk2 = (array: number[], size: number): number[][] => {
  // declaring variable 'chunked' as an empty array
  let chunked = [];

  // for loop iterating through every element of our input array
  for (let ele of array) {
    // declaring variable 'last' as the last index of our 'chunked' array
    const last = chunked[chunked.length - 1];

    // checking if last is undefined or if the last subarray is equal to the size
    if (!last || last.length === size) {
      // then we push the element to be a new subarray in 'chunked'
      chunked.push([ele]);
    } else {
      // if not, then we add the element to the 'last' subarray
      last.push(ele);
    }
  }
  return chunked;
};

// 3. MergeSort O(n log n) time complexity

/**
 * sort accept arguments of two sorted array
 * @param left
 * @param right
 */
export const sort = (left: number[], right: number[]): number[] => {
  let sorted = [];
  let il = 0,
    rl = 0;
  while (il < left.length && rl < right.length) {
    if (left[il] < right[rl]) {
      sorted.push(left[il]);
      il++;
    } else {
      sorted.push(right[rl]);
      rl++;
    }
  }
  return [...sorted, ...left.slice(il), ...right.slice(rl)];
};

/**
 *
 * @param array
 * return the mutated array
 *
 */
export const MergeSort = (array: number[]): number[] => {
  if (array.length < 2) {
    return array;
  }
  let sorted: number[] = [];
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  sorted = sort(MergeSort(left), MergeSort(right));
  // in-place sort
  array.splice.apply(array, [0, array.length, ...sorted]);
  return array;
};
