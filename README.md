# Condeforce - Coding Practice & Problem Solving

A comprehensive repository for solving competitive programming problems and practicing fundamental coding concepts in JavaScript.

## 📋 Project Overview

This repository contains solutions to Codeforce problems, coding challenges, and JavaScript fundamentals. It's designed for developers to practice and improve their problem-solving skills, from basic data structures to algorithm optimization.

---

## 📁 Folder Structure

### **Problem-1: Watermelon Problem**
- **File:** `Problem-1/watermelon.js`
- **Problem:** Check if a watermelon of weight `w` can be divided into two parts, each weighing an even number of kilograms.
- **Constraints:** 1 ≤ w ≤ 100
- **Example:** 
  - Input: `8`
  - Output: `YES` (can be divided into 4 + 4)

### **Problem-2: Way Too Long Words**
- **File:** `Problem-2/logstring.js`
- **Problem:** Abbreviate words longer than 10 characters using the pattern: first letter + number of middle letters + last letter.
- **Examples:**
  - "localization" → `l10n`
  - "internationalization" → `i18n`
  - "word" → `word` (unchanged, ≤ 10 chars)

### **JavaScript Fundamentals (javascript-re/)**
Core JavaScript concepts and exercises:
- `variables.js` - Variable declaration and scoping
- `datatypes.js` - Data types and type checking
- `operators.js` - Arithmetic, logical, and comparison operators
- `conditionals.js` & `conditions.js` - If/else and switch statements
- `functions.js` - Function declaration, parameters, and return values
- `arrays.js` - Array methods and manipulation
- `objects.js` - Object creation and properties
- `loops.js` & `loop.js` & `wloop.js` - For, while, and do-while loops
- `async.js` - Asynchronous programming and promises
- `error-handling.js` - Try/catch and error management
- `Closure.md` - Closure concepts and explanation
- `Javascript.md` - General JavaScript guide
- `recap.js` - Review of key concepts

### **Coding Problems (wrtiing/)**
Collection of common coding interview problems:
- `arraySum.js` - Calculate sum of array elements
- `MaxArray.js` - Find maximum element in array
- `palindrome.js` - Check if a string is a palindrome
- `Reverse.js` - Reverse a string
- `codingProblems.js` - Multiple problem solutions
- `writing.md` - Documentation of 30 common coding problems

### **Database (DB/)**
- `DB.md` - Database documentation
- `recap.js` - Database-related code snippets

---

## 🚀 How to Use

1. **Review JavaScript Fundamentals:** Start with files in `javascript-re/` to understand core concepts
2. **Practice Coding Problems:** Work through problems in `wrtiing/` folder
3. **Solve Codeforce Challenges:** Attempt `Problem-1/` and `Problem-2/` problems
4. **Check Solutions:** Compare your solutions with provided implementations

---

## 📝 Key Problem Examples

### Problem 1: Watermelon
**Logic:** An even number can only be split into two even numbers if the total is > 2 and even.
```javascript
// If w is even and > 2, answer is YES, otherwise NO
```

### Problem 2: Way Too Long Words
**Logic:** For words with length > 10, create abbreviation using first letter + middle count + last letter.
```javascript
// "localization".length = 12
// Abbreviation: l + (12-2) + n = l10n
```

---

## 🎓 Learning Outcomes

After completing this repository, you'll understand:
- ✅ Core JavaScript fundamentals
- ✅ Problem-solving approaches
- ✅ Algorithm optimization
- ✅ Array and string manipulation
- ✅ Competitive programming basics
- ✅ Common coding interview patterns

---

## 📚 Resources

- Codeforce: https://codeforces.com/
- MDN JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/
- Interview preparation materials included in `wrtiing/writing.md`

---

**Last Updated:** May 2026