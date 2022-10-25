def palindrome(string: str) -> str:
    """
    For each possible substring of the input string, check if it's a palindrome and if so, see if it's
    the longest palindrome found so far

    :param string: str
    :type string: str
    :return: The longest palindrome in the string.
    """
    longest, n = "", len(string)
    for i in range(n):
        for j in range(i + 1, n + 1):
            print(i, j)
            word = string[i:j]
            if word == word[::-1]:
                if len(word) > len(longest):
                    longest = word
    return longest


# Example 1
print(palindrome("babad"))

# Example 2
print(palindrome("cbbd"))

# try out some words like banana and see