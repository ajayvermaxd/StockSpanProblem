// # Task 1
// # start by intilizing the necessary variables such as n to store the length of price array , span as an array of zeros to store the stock span, and set the span of first day to 1 

// # Task 2: Transverse through the prices
// # Iterate through the prices array from the second to the last day

// # Task 3: Initialise Span and Index
// # For each day, initialise a variable ’span’ to 1 to represent the current span and an index ‘j’ to set ‘I-1’  to start back traversal.

// # Task 4: Backward Traversal
// # Traverse backward from current day until a greater price is found or the start of the series is reached

// # Task 5: Calculate Span
// # Within the backward traverse loop, add the span of previous day to the current span if the current day span is greater than or equal to the previous day’s price.Update the index  ‘j’ to ‘j-span[j]’.

// # Task 6: Stored Calculated Span
// # Once the backward traversal is complete, store the calculated span for the current day in the spans array at index ‘i’

// # Task 7: Repeat
// # Repeat steps 3-6 for the remaining days in the prices array.
    
// Task 1: Initializing necessary variables
function calculateSpan(prices) {
    var n = prices.length;  // Length of the prices array
    var span = new Array(n).fill(0);  // Initialize span array with zeros
    span[0] = 1;  // Span for the first day is always 1

    // Task 2: Iterate through the prices array starting from the second day
    for (var i = 1; i < n; i++) {
        // Task 3: Initialize span and index
        var currentSpan = 1;  // Represent the current span
        var j = i - 1;  // Set j to the previous day

        // Task 4: Backward traversal to find the span
        while (j >= 0 && prices[j] <= prices[i]) {
            // Task 5: Calculate span
            currentSpan += span[j];  // Add the span of the previous day
            j -= span[j];  // Update j to jump back by the span of day j
        }

        // Task 6: Store the calculated span for the current day
        span[i] = currentSpan;
    }

    return span;
}

// Example usage
var prices = [55, 75, 100, 69, 88, 70, 90];
console.log("The stock spans are:", calculateSpan(prices));

