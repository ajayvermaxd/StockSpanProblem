// Stock Span Problem

// Problem Statement
/*
The Stock Span Problem is a financial problem that deals with an analysis of stock prices over a series of days. 
For each day, the task is to calculate the stock span, which is defined as the maximum number of consecutive days 
(starting from today and going backwards) for which the stock's price was less than or equal to the price on the current day.
*/

// Objective
/*
The objective of this problem is to develop an algorithm that can efficiently calculate the stock span for each day, given a series of daily price quotes for a stock.
*/

// Input
/*
The input will be an array or a list of daily stock prices. 

Example:
*/
const prices = [100, 80, 60, 70, 60, 75, 85];

// Output
/*
The output should be an array or a list representing the stock span for each day.

For the given example, the output should be:
*/
const spans = [1, 1, 1, 2, 1, 4, 6];

// Approach
/*
A common approach to solve this problem is using a stack data structure. 
The idea is to push the index of each stock price onto the stack and pop indices from the stack 
while the stack is not empty and the top of the stack is less than or equal to the current price. 
The span will then be the difference between the current index and the index obtained after popping from the stack.
*/

// Usage
/*
1. Clone the repository.
2. Navigate to the directory containing the solution file.
3. Run the solution file with the input data.
*/

// Example
/*
Here is a brief example to illustrate how the algorithm works:

// Example JavaScript function for the Stock Span Problem
*/

function calculateSpan(prices) {
    // Implementation of the algorithm
    // ...
}

// Test the function
const pricesExample = [100, 80, 60, 70, 60, 75, 85];
const spansExample = calculateSpan(pricesExample);
console.log(spansExample);  // Output: [1, 1, 1, 2, 1, 4, 6]

// Contributing
/*
Contributions to improve the solution or to optimize the algorithm are welcome. 
Please feel free to submit a pull request or open an issue.
*/

// License
/*
[MIT License](LICENSE.md)
*/

// ---
/*
This README provides a basic overview of the Stock Span Problem, including the problem statement, 
input/output format, a suggested approach, and an example. 
You can modify it as needed, especially in the sections for usage and contributing guidelines.
*/
