# Problem 2: Way Too Long Words

## Problem Statement

Sometimes some words like "localization" or "internationalization" are so long that writing them repeatedly becomes quite tiresome.

You are tasked to automate the abbreviation of these long words in a text.

**Definition:**  
A word is considered "too long" if its length is strictly greater than 10 characters. Such words should be replaced with a special abbreviation:
- The abbreviation consists of the first letter, followed by the number of letters between the first and last letter, ending with the last letter.
- For example, "localization" becomes `l10n`. "internationalization" becomes `i18n`.

Words that are not too long (length 10 or less) should remain unchanged.

---

## Input

- The first line contains an integer **n** (**1 ≤ n ≤ 100**), the number of words.
- Each of the following **n** lines contains one word.
- All words consist of lowercase Latin letters and have a length from 1 to 100 characters.

### Example Input

```
4
word
localization
internationalization
pneumonoultramicroscopicsilicovolcanoconiosis
```

---

## Output

- Print **n** lines.
- The i-th line should contain the abbreviation (if needed) of the i-th input word.

### Example Output

```
word
l10n
i18n
p43s
```

---

## Notes

- "localization" (length 12) becomes `l10n`: First letter (`l`), 10 letters in between, last letter (`n`).
- "internationalization" (length 20) becomes `i18n`: First letter (`i`), 18 (`20-2`) in between, last letter (`n`).
- "word" (length 4), is not too long and remains unchanged.

---
