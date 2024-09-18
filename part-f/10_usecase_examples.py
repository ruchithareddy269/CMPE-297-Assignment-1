# Code Refactoring Examples

# 1. Refactoring Nested Loops
# Prompt: "Refactor the nested loops in the following code to improve readability and performance."

# Old Code:
"""
def multiply_matrices(matrix1, matrix2):
    result = []
    for i in range(len(matrix1)):
        row = []
        for j in range(len(matrix2[0])):
            sum = 0
            for k in range(len(matrix2)):
                sum += matrix1[i][k] * matrix2[k][j]
            row.append(sum)
        result.append(row)
    return result
"""

# New Version: Optimize the matrix multiplication by leveraging list comprehensions and built-in functions.

import numpy as np

def multiply_matrices(matrix1, matrix2):
    return np.dot(matrix1, matrix2).tolist()

# Explanation:
# - We import the numpy library, which provides efficient matrix operations.
# - The np.dot() function performs matrix multiplication efficiently.
# - We convert the result back to a list for consistency with the original function's output.
# - This approach is more readable, faster, and less error-prone than nested loops.

# Example usage:
matrix1 = [[1, 2], [3, 4]]
matrix2 = [[5, 6], [7, 8]]
result = multiply_matrices(matrix1, matrix2)
print("Example 1 result:", result)

# 2. Adding Inline Comments
# Prompt: "Add detailed inline comments to explain each step in the following code."

def factorial(n):
    # Base case: if n is 0, return 1
    if n == 0:
        return 1
    else:
        # Recursive case: multiply n with factorial of (n-1)
        # This recursively breaks down the problem into smaller subproblems
        return n * factorial(n-1)

# Explanation:
# - We added comments to explain the base case and the recursive case.
# - The base case (n == 0) is crucial for stopping the recursion.
# - The recursive case shows how the problem is broken down into smaller subproblems.

# Example usage:
print("Example 2 result:", factorial(5))

# 3. Converting Loops to List Comprehensions
# Prompt: "Convert the following loop into a list comprehension for better readability."

# Old Code:
"""
def square_numbers(numbers):
    squared = []
    for num in numbers:
        squared.append(num * num)
    return squared
"""

# New Version: Rewrite the code using a list comprehension to perform the same operation.

def square_numbers(numbers):
    return [num * num for num in numbers]

# Explanation:
# - The list comprehension [num * num for num in numbers] creates a new list.
# - It applies the operation (num * num) to each number in the input list.
# - This is more concise and often more readable than the equivalent for loop.

# Example usage:
numbers = [1, 2, 3, 4, 5]
print("Example 3 result:", square_numbers(numbers))

# 4. Enhancing Error Handling
# Prompt: "Improve error handling in the following code by adding appropriate try-except blocks."

# Old Code:
"""
def read_file(file_path):
    with open(file_path, 'r') as file:
        return file.read()
"""

# New Version: Include error handling for potential issues like file not found or read permissions.

def read_file(file_path):
    try:
        with open(file_path, 'r') as file:
            return file.read()
    except FileNotFoundError:
        print(f"Error: The file '{file_path}' was not found.")
    except PermissionError:
        print(f"Error: You don't have permission to read '{file_path}'.")
    except IOError as e:
        print(f"An I/O error occurred: {str(e)}")
    return None

# Explanation:
# - We added a try-except block to handle potential errors.
# - FileNotFoundError is caught if the file doesn't exist.
# - PermissionError is caught if the user doesn't have read permissions.
# - IOError catches other input/output related errors.
# - If an error occurs, we print an informative message and return None.

# Example usage:
print("Example 4 result:", read_file("nonexistent_file.txt"))

# 5. Improving Code Efficiency
# Prompt: "Optimize the following code to reduce its time complexity."

# Old Code:
"""
def find_duplicates(numbers):
    duplicates = []
    for i in range(len(numbers)):
        for j in range(i+1, len(numbers)):
            if numbers[i] == numbers[j] and numbers[i] not in duplicates:
                duplicates.append(numbers[i])
    return duplicates
"""

# New Version: Refactor to use a set for faster lookups and reduce the nested loop.

def find_duplicates(numbers):
    seen = set()
    duplicates = set()
    for num in numbers:
        if num in seen:
            duplicates.add(num)
        else:
            seen.add(num)
    return list(duplicates)

# Explanation:
# - We use two sets: 'seen' for numbers we've encountered, and 'duplicates' for repeated numbers.
# - We iterate through the list once, checking if each number is in 'seen'.
# - If it is, we add it to 'duplicates'. If not, we add it to 'seen'.
# - This reduces time complexity from O(n^2) to O(n), where n is the length of the input list.
# - We return the duplicates as a list to match the original function's return type.

# Example usage:
numbers = [1, 2, 3, 2, 4, 3, 5]
print("Example 5 result:", find_duplicates(numbers))

# 6. Autocompleting Function Definitions
# Prompt: "Complete the following function definition for calculating the average of a list of numbers."

# Old Code:
"""
def calculate_average(numbers):
    # Add your implementation here
    pass
"""

# New Version: Provide a complete function that calculates and returns the average.

def calculate_average(numbers):
    if not numbers:
        return None  # Return None for an empty list
    return sum(numbers) / len(numbers)

# Explanation:
# - We first check if the input list is empty to avoid division by zero.
# - If the list is not empty, we use the sum() function to add up all numbers.
# - We then divide the sum by the length of the list to get the average.
# - This implementation is concise and handles the edge case of an empty list.

# Example usage:
numbers = [1, 2, 3, 4, 5]
print("Example 6 result:", calculate_average(numbers))

# 7. Simplifying Conditional Statements
# Prompt: "Simplify the following conditional statements to make the code more concise."

# Old Code:
"""
def check_sign(num):
    if num > 0:
        return "Positive"
    elif num < 0:
        return "Negative"
    else:
        return "Zero"
"""

# New Version: Refactor using a more concise conditional expression.

def check_sign(num):
    return "Positive" if num > 0 else "Negative" if num < 0 else "Zero"

# Explanation:
# - We use a nested conditional expression (ternary operator) to simplify the function.
# - The first condition checks if the number is positive.
# - If not, it checks if the number is negative.
# - If neither condition is true, it returns "Zero".
# - This approach reduces the function to a single line while maintaining readability.

# Example usage:
print("Example 7 result:", check_sign(-5))

# 8. Generating Test Cases
# Prompt: "Generate test cases for the following function to ensure it handles edge cases."

# Old Code:
"""
def reverse_string(s):
    return s[::-1]
"""

# New Version: Create a set of test cases that include empty strings, palindromes, and special characters.

def reverse_string(s):
    return s[::-1]

# Test cases
def test_reverse_string():
    assert reverse_string("") == "", "Empty string test failed"
    assert reverse_string("a") == "a", "Single character test failed"
    assert reverse_string("hello") == "olleh", "Normal string test failed"
    assert reverse_string("racecar") == "racecar", "Palindrome test failed"
    assert reverse_string("12345") == "54321", "Numeric string test failed"
    assert reverse_string("a b c") == "c b a", "String with spaces test failed"
    assert reverse_string("!@#$%") == "%$#@!", "Special characters test failed"
    print("All test cases passed!")

# Explanation:
# - We created a test function that covers various edge cases:
#   1. Empty string
#   2. Single character string
#   3. Normal string
#   4. Palindrome
#   5. Numeric string
#   6. String with spaces
#   7. String with special characters
# - Each test case uses an assert statement to check if the function behaves correctly.
# - If all assertions pass, it prints a success message.

# Run the tests
test_reverse_string()

# 9. Documenting Functions
# Prompt: "Add docstrings to the following function to describe its purpose, parameters, and return value."

# Old Code:
"""
def merge_dicts(dict1, dict2):
    result = dict1.copy()
    result.update(dict2)
    return result
"""

# New Version: Provide a detailed docstring explaining the function's behavior.

def merge_dicts(dict1, dict2):
    """
    Merge two dictionaries into a new dictionary.

    This function takes two dictionaries and combines them into a new dictionary.
    If there are duplicate keys, the values from dict2 will overwrite those from dict1.

    Parameters:
    dict1 (dict): The first dictionary to merge.
    dict2 (dict): The second dictionary to merge. Its values will take precedence over dict1's values for duplicate keys.

    Returns:
    dict: A new dictionary containing all key-value pairs from both input dictionaries.

    Example:
    >>> d1 = {'a': 1, 'b': 2}
    >>> d2 = {'b': 3, 'c': 4}
    >>> merge_dicts(d1, d2)
    {'a': 1, 'b': 3, 'c': 4}
    """
    result = dict1.copy()
    result.update(dict2)
    return result

# Explanation:
# - We added a comprehensive docstring that explains:
#   1. The function's purpose
#   2. How it handles the input dictionaries
#   3. The parameters it expects
#   4. What it returns
#   5. An example of how to use the function
# - This docstring follows the common Python documentation style and provides clear information for users of the function.

# Example usage:
d1 = {'a': 1, 'b': 2}
d2 = {'b': 3, 'c': 4}
print("Example 9 result:", merge_dicts(d1, d2))

# 10. Refactoring Complex Expressions
# Prompt: "Refactor the following complex expression into a more readable format."

# Old Code:
"""
def calculate_discount(price, tax, discount):
    return price * (1 + tax) - price * discount
"""

# New Version: Break down the expression into separate steps and explain each step with comments.

def calculate_discount(price, tax, discount):
    # Calculate the price after tax
    price_after_tax = price * (1 + tax)

    # Calculate the discount amount
    discount_amount = price * discount

    # Calculate the final price by subtracting the discount from the price after tax
    final_price = price_after_tax - discount_amount

    return final_price

# Explanation:
# - We broke down the complex expression into three separate steps:
#   1. Calculate the price after applying tax
#   2. Calculate the discount amount
#   3. Calculate the final price by subtracting the discount from the price after tax
# - Each step is clearly commented, making the function more readable and maintainable.
# - This approach makes it easier to understand the logic and modify individual parts if needed.

# Example usage:
price = 100
tax = 0.1  # 10% tax
discount = 0.2  # 20% discount
print("Example 10 result:", calculate_discount(price, tax, discount))
