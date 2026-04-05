
# 30 Common Coding Problems for Software Engineer Trainee Positions

1. **Reverse a String**
	 - Write a function to reverse a string.
	 ```js
	 function reverseString(str) {
		 return str.split('').reverse().join('');
	 }
	 // reverseString('hello') => 'olleh'
	 ```

2. **Check for Palindrome**
	 - Determine if a string is a palindrome.
	 ```js
	 function isPalindrome(str) {
		 return str === str.split('').reverse().join('');
	 }
	 // isPalindrome('madam') => true
	 ```

3. **Find Maximum in Array**
	 - Return the largest number in an array.
	 ```js
	 function findMax(arr) {
		 return Math.max(...arr);
	 }
	 // findMax([1, 2, 3]) => 3
	 ```

4. **Sum of Array Elements**
	 - Calculate the sum of all elements in an array.
	 ```js
	 function arraySum(arr) {
		 return arr.reduce((a, b) => a + b, 0);
	 }
	 // arraySum([1, 2, 3]) => 6
	 ```

5. **Fibonacci Sequence**
	 - Print the first n Fibonacci numbers.
	 ```js
	 function fibonacci(n) {
		 let seq = [0, 1];
		 for (let i = 2; i < n; i++) {
			 seq.push(seq[i-1] + seq[i-2]);
		 }
		 return seq.slice(0, n);
	 }
	 // fibonacci(5) => [0, 1, 1, 2, 3]
	 ```

6. **Factorial of a Number**
	 - Find the factorial of a number.
	 ```js
	 function factorial(n) {
		 return n <= 1 ? 1 : n * factorial(n - 1);
	 }
	 // factorial(5) => 120
	 ```

7. **Count Vowels in a String**
	 - Count the number of vowels in a string.
	 ```js
	 function countVowels(str) {
		 return (str.match(/[aeiou]/gi) || []).length;
	 }
	 // countVowels('hello') => 2
	 ```

8. **Find Duplicate Elements in Array**
	 - Return duplicates in an array.
	 ```js
	 function findDuplicates(arr) {
		 return arr.filter((item, idx) => arr.indexOf(item) !== idx);
	 }
	 // findDuplicates([1,2,2,3,3,4]) => [2,3]
	 ```

9. **Remove Duplicates from Array**
	 - Remove duplicate values from an array.
	 ```js
	 function removeDuplicates(arr) {
		 return [...new Set(arr)];
	 }
	 // removeDuplicates([1,2,2,3]) => [1,2,3]
	 ```

10. **Check Prime Number**
		- Check if a number is prime.
		```js
		function isPrime(n) {
			if (n <= 1) return false;
			for (let i = 2; i <= Math.sqrt(n); i++) {
				if (n % i === 0) return false;
			}
			return true;
		}
		// isPrime(7) => true
		```

11. **Find Second Largest Number**
		- Return the second largest number in an array.
		```js
		function secondLargest(arr) {
			let unique = [...new Set(arr)].sort((a,b) => b-a);
			return unique[1];
		}
		// secondLargest([1,2,3,4]) => 3
		```

12. **Sum of Digits**
		- Find the sum of digits of a number.
		```js
		function sumDigits(n) {
			return n.toString().split('').reduce((a,b) => a + Number(b), 0);
		}
		// sumDigits(123) => 6
		```

13. **Reverse an Array**
		- Reverse the elements of an array.
		```js
		function reverseArray(arr) {
			return arr.reverse();
		}
		// reverseArray([1,2,3]) => [3,2,1]
		```

14. **Find Missing Number**
		- Find the missing number in an array of 1 to n.
		```js
		function findMissing(arr, n) {
			let sum = n*(n+1)/2;
			return sum - arr.reduce((a,b) => a+b,0);
		}
		// findMissing([1,2,4,5],5) => 3
		```

15. **Check Anagram**
		- Check if two strings are anagrams.
		```js
		function isAnagram(a, b) {
			return a.split('').sort().join('') === b.split('').sort().join('');
		}
		// isAnagram('listen','silent') => true
		```

16. **Find Intersection of Arrays**
		- Find common elements in two arrays.
		```js
		function intersection(a, b) {
			return a.filter(x => b.includes(x));
		}
		// intersection([1,2,3],[2,3,4]) => [2,3]
		```

17. **Find Largest Word in String**
		- Return the largest word in a string.
		```js
		function largestWord(str) {
			return str.split(' ').reduce((a,b) => a.length > b.length ? a : b);
		}
		// largestWord('I love programming') => 'programming'
		```

18. **Capitalize First Letter of Each Word**
		- Capitalize the first letter of every word in a string.
		```js
		function capitalizeWords(str) {
			return str.replace(/\b\w/g, c => c.toUpperCase());
		}
		// capitalizeWords('hello world') => 'Hello World'
		```

19. **Count Occurrences of Character**
		- Count how many times a character appears in a string.
		```js
		function countChar(str, char) {
			return str.split(char).length - 1;
		}
		// countChar('hello','l') => 2
		```

20. **Find GCD of Two Numbers**
		- Find the greatest common divisor (GCD) of two numbers.
		```js
		function gcd(a, b) {
			return b === 0 ? a : gcd(b, a % b);
		}
		// gcd(12, 8) => 4
		```

21. **Check Armstrong Number**
		- Check if a number is an Armstrong number.
		```js
		function isArmstrong(n) {
			let digits = n.toString().split('');
			let sum = digits.reduce((a,b) => a + Math.pow(Number(b), digits.length), 0);
			return sum === n;
		}
		// isArmstrong(153) => true
		```

22. **Find All Even Numbers in Array**
		- Return all even numbers from an array.
		```js
		function evenNumbers(arr) {
			return arr.filter(x => x % 2 === 0);
		}
		// evenNumbers([1,2,3,4]) => [2,4]
		```

23. **Find All Substrings of a String**
		- Return all possible substrings of a string.
		```js
		function allSubstrings(str) {
			let subs = [];
			for(let i=0;i<str.length;i++){
				for(let j=i+1;j<=str.length;j++){
					subs.push(str.slice(i,j));
				}
			}
			return subs;
		}
		// allSubstrings('abc') => ['a','ab','abc','b','bc','c']
		```

24. **Check if Array is Sorted**
		- Check if an array is sorted in ascending order.
		```js
		function isSorted(arr) {
			for(let i=1;i<arr.length;i++){
				if(arr[i]<arr[i-1]) return false;
			}
			return true;
		}
		// isSorted([1,2,3]) => true
		```

25. **Find First Non-Repeated Character**
		- Return the first non-repeated character in a string.
		```js
		function firstNonRepeated(str) {
			for(let c of str) {
				if(str.indexOf(c) === str.lastIndexOf(c)) return c;
			}
			return null;
		}
		// firstNonRepeated('aabbcde') => 'c'
		```

26. **Rotate Array by K Steps**
		- Rotate an array to the right by k steps.
		```js
		function rotateArray(arr, k) {
			k = k % arr.length;
			return arr.slice(-k).concat(arr.slice(0, -k));
		}
		// rotateArray([1,2,3,4,5],2) => [4,5,1,2,3]
		```

27. **Find Sum of All Odd Numbers**
		- Return the sum of all odd numbers in an array.
		```js
		function sumOdd(arr) {
			return arr.filter(x => x % 2 !== 0).reduce((a,b) => a+b,0);
		}
		// sumOdd([1,2,3,4]) => 4
		```

28. **Check if Two Arrays are Equal**
		- Check if two arrays have the same elements in the same order.
		```js
		function arraysEqual(a, b) {
			return a.length === b.length && a.every((v,i) => v === b[i]);
		}
		// arraysEqual([1,2,3],[1,2,3]) => true
		```

29. **Find the Power of a Number**
		- Calculate x raised to the power y.
		```js
		function power(x, y) {
			return Math.pow(x, y);
		}
		// power(2,3) => 8
		```

30. **Find the Median of an Array**
		- Return the median value of an array.
		```js
		function median(arr) {
			arr = arr.slice().sort((a,b) => a-b);
			let mid = Math.floor(arr.length/2);
			return arr.length % 2 !== 0 ? arr[mid] : (arr[mid-1]+arr[mid])/2;
		}
		// median([1,2,3,4,5]) => 3
		```

# 100 Common Writing/Communication Problems and Sample Answers

1. **Describe yourself in a few sentences.**
   - I am a motivated and detail-oriented computer science graduate with a passion for problem-solving and software development.

2. **Why do you want to join our company?**
   - I am impressed by your company’s commitment to innovation and professional growth, and I want to contribute to your team while developing my skills.

3. **Describe a challenging situation you faced and how you handled it.**
   - During a group project, we faced a tight deadline. I organized team meetings, delegated tasks, and ensured open communication, which helped us complete the project successfully.

4. **How do you handle criticism?**
   - I view criticism as an opportunity to learn and improve. I listen carefully, reflect on the feedback, and make necessary adjustments.

5. **Write an email to request a meeting with your manager.**
   - Subject: Request for Meeting
	 Dear [Manager],
	 I would like to schedule a meeting to discuss my current project progress and seek your guidance. Please let me know your available times.

6. **Explain a technical concept to a non-technical person.**
   - A database is like a digital filing cabinet where information is stored and organized for easy access.

7. **Describe your strengths.**
   - My strengths include logical thinking, adaptability, and effective communication.

8. **Describe your weaknesses.**
   - I sometimes focus too much on details, but I am working on improving my time management.

9. **How do you prioritize your work?**
   - I list tasks by urgency and importance, then tackle high-priority items first.

10. **Write a thank-you note after an interview.**
	- Thank you for the opportunity to interview. I appreciate your time and consideration, and I look forward to the possibility of joining your team.

11. **Describe a time you worked in a team.**
	- In my final year project, I collaborated with classmates, shared ideas, and supported each other to achieve our goals.

12. **How do you handle tight deadlines?**
	- I break tasks into smaller steps, set mini-deadlines, and stay focused to ensure timely completion.

13. **Write a short paragraph about your favorite technology.**
	- I enjoy working with JavaScript because it enables interactive web development and has a vibrant community.

14. **How do you resolve conflicts in a team?**
	- I encourage open communication, listen to all perspectives, and work towards a mutually beneficial solution.

15. **Describe your ideal work environment.**
	- My ideal environment is collaborative, supportive, and encourages continuous learning.

16. **Write a brief self-introduction for a new team.**
	- Hello, I’m [Your Name], a recent computer science graduate excited to contribute and learn with you all.

17. **How do you stay organized?**
	- I use to-do lists, digital calendars, and set reminders to manage my tasks efficiently.

18. **Write a response to a customer complaint.**
	- Thank you for your feedback. We apologize for the inconvenience and are working to resolve the issue promptly.

19. **Describe a time you learned something new quickly.**
	- I quickly learned Python for a project by following tutorials and practicing daily, which helped me deliver results on time.

20. **How do you handle multitasking?**
	- I prioritize tasks, focus on one at a time when possible, and use tools to track progress.

21. **Write a short paragraph about teamwork.**
	- Teamwork allows us to combine strengths, share ideas, and achieve goals more efficiently than working alone.

22. **How do you ensure clear communication?**
	- I use simple language, confirm understanding, and encourage questions.

23. **Write a follow-up email after submitting an application.**
	- Dear [Recipient],
	  I am following up on my application for the Software Engineer Trainee position. I look forward to your response.

24. **Describe a time you solved a problem creatively.**
	- I automated a repetitive task using a script, saving my team hours of manual work.

25. **How do you handle stress?**
	- I stay calm, break down tasks, and focus on solutions rather than problems.

26. **Write a short paragraph about your career goals.**
	- My goal is to become a skilled software engineer, contribute to impactful projects, and continuously learn new technologies.

27. **How do you adapt to change?**
	- I stay open-minded, seek to understand the reasons for change, and adjust my approach as needed.

28. **Write a message to introduce yourself to a mentor.**
	- Hello, I’m [Your Name], eager to learn from your experience and guidance as I start my software engineering journey.

29. **Describe a time you received constructive feedback.**
	- My supervisor suggested I improve my documentation, so I adopted better commenting practices in my code.

30. **How do you ensure accuracy in your work?**
	- I double-check my work, use checklists, and review results before submission.

31. **Write a brief paragraph about your interest in software development.**
	- I am passionate about software development because it allows me to solve real-world problems and create useful applications.

32. **How do you handle disagreements with colleagues?**
	- I listen respectfully, discuss differences calmly, and seek common ground.

33. **Write a short note to congratulate a teammate.**
	- Congratulations on your achievement! Your hard work and dedication are inspiring.

34. **Describe a time you managed a project.**
	- I led a small team to develop a web app, coordinated tasks, and ensured we met our deadlines.

35. **How do you keep your skills up to date?**
	- I follow industry news, take online courses, and practice coding regularly.

36. **Write a paragraph about the importance of documentation.**
	- Good documentation ensures that code is understandable, maintainable, and easy for others to use or update.

37. **How do you approach learning a new technology?**
	- I start with tutorials, experiment with small projects, and seek help from the community if needed.

38. **Write a message to thank a mentor.**
	- Thank you for your guidance and support. I appreciate your help in my professional growth.

39. **Describe a time you worked under pressure.**
	- I managed multiple assignments during exams by creating a schedule and sticking to it.

40. **How do you ensure your code is readable?**
	- I use clear variable names, consistent formatting, and add comments where necessary.

41. **Write a paragraph about the value of feedback.**
	- Feedback helps identify areas for improvement and encourages personal and professional growth.

42. **How do you handle mistakes?**
	- I acknowledge mistakes, analyze what went wrong, and take steps to prevent them in the future.

43. **Write a message to request clarification on a task.**
	- Could you please clarify the requirements for this task? I want to ensure I meet your expectations.

44. **Describe a time you exceeded expectations.**
	- I delivered a project ahead of schedule and added extra features that improved user experience.

45. **How do you balance quality and speed?**
	- I focus on writing efficient code, but never compromise on quality or best practices.

46. **Write a paragraph about continuous learning.**
	- Continuous learning keeps me updated with new technologies and helps me adapt to changing industry demands.

47. **How do you handle repetitive tasks?**
	- I look for ways to automate or streamline repetitive tasks to save time and reduce errors.

48. **Write a message to apologize for a mistake.**
	- I apologize for the oversight. I have corrected the issue and will ensure it does not happen again.

49. **Describe a time you helped a teammate.**
	- I assisted a teammate in debugging code, which helped us complete the project faster.

50. **How do you ensure effective collaboration?**
	- I communicate openly, share progress, and support my teammates.

51. **Write a paragraph about the importance of deadlines.**
	- Deadlines help prioritize work, ensure timely delivery, and keep projects on track.

52. **How do you handle new responsibilities?**
	- I embrace new challenges, seek guidance if needed, and give my best effort.

53. **Write a message to update your manager on progress.**
	- I have completed the initial phase of the project and am on track to meet the next milestone.

54. **Describe a time you learned from failure.**
	- I failed a coding test but used the feedback to improve and succeeded on my next attempt.

55. **How do you ensure your work aligns with team goals?**
	- I communicate regularly with my team and align my tasks with our objectives.

56. **Write a paragraph about adaptability.**
	- Adaptability allows me to handle change positively and find solutions in new situations.

57. **How do you handle incomplete information?**
	- I ask questions, do research, and make informed assumptions if necessary.

58. **Write a message to request feedback.**
	- I would appreciate your feedback on my recent work to help me improve.

59. **Describe a time you took initiative.**
	- I proposed and implemented a new feature that improved our application’s usability.

60. **How do you manage conflicting priorities?**
	- I assess urgency, communicate with stakeholders, and adjust my plan as needed.

61. **Write a paragraph about professional growth.**
	- Professional growth involves learning new skills, taking on challenges, and seeking feedback to improve.

62. **How do you handle working with diverse teams?**
	- I respect different perspectives and learn from my colleagues’ experiences.

63. **Write a message to welcome a new teammate.**
	- Welcome to the team! I look forward to working with you.

64. **Describe a time you managed your time effectively.**
	- I used a planner to allocate time for each task, which helped me meet all my deadlines.

65. **How do you ensure your work is high quality?**
	- I review my work, test thoroughly, and seek feedback before submission.

66. **Write a paragraph about teamwork challenges.**
	- Teamwork can be challenging due to different working styles, but open communication helps overcome obstacles.

67. **How do you handle last-minute changes?**
	- I stay flexible, adjust my plan, and focus on delivering the best possible result.

68. **Write a message to express appreciation.**
	- Thank you for your support and encouragement. It means a lot to me.

69. **Describe a time you worked with minimal supervision.**
	- I managed a solo project by setting my own goals and tracking my progress.

70. **How do you ensure your work is understandable to others?**
	- I document my work and use clear, concise language.

71. **Write a paragraph about the importance of asking questions.**
	- Asking questions helps clarify doubts, avoid mistakes, and promotes learning.

72. **How do you handle feedback you disagree with?**
	- I listen respectfully, consider the perspective, and discuss my viewpoint if needed.

73. **Write a message to request help from a colleague.**
	- Could you assist me with this task? Your expertise would be valuable.

74. **Describe a time you improved a process.**
	- I suggested using a new tool that streamlined our workflow and saved time.

75. **How do you handle confidential information?**
	- I follow company policies and ensure sensitive data is protected.

76. **Write a paragraph about the value of learning from others.**
	- Learning from others broadens my perspective and helps me grow professionally.

77. **How do you handle repetitive feedback?**
	- I take it seriously and work to address the underlying issue.

78. **Write a message to confirm understanding of a task.**
	- Just to confirm, you would like me to complete the report by Friday, correct?

79. **Describe a time you worked on a cross-functional team.**
	- I collaborated with marketing and design teams to launch a new product feature.

80. **How do you ensure your work meets requirements?**
	- I clarify expectations, review requirements, and check my work against them.

81. **Write a paragraph about the importance of clear instructions.**
	- Clear instructions help prevent misunderstandings and ensure tasks are completed correctly.

82. **How do you handle unexpected obstacles?**
	- I stay calm, analyze the situation, and find alternative solutions.

83. **Write a message to update a client on progress.**
	- We have completed the initial phase and are on schedule for the next milestone.

84. **Describe a time you learned from a mistake.**
	- I missed a deadline once, but I improved my planning to avoid it in the future.

85. **How do you ensure your work is aligned with company values?**
	- I familiarize myself with company values and reflect them in my work.

86. **Write a paragraph about the importance of active listening.**
	- Active listening helps build trust, ensures understanding, and improves collaboration.

87. **How do you handle working on multiple projects?**
	- I prioritize, plan, and allocate time for each project to ensure timely completion.

88. **Write a message to request an extension on a deadline.**
	- Due to unforeseen circumstances, may I request an extension for this task?

89. **Describe a time you contributed to team success.**
	- I shared my knowledge of a new tool, which helped the team complete the project faster.

90. **How do you ensure your work is error-free?**
	- I review, test, and ask for peer reviews to catch mistakes.

91. **Write a paragraph about the importance of goal setting.**
	- Setting goals gives direction, motivates effort, and helps measure progress.

92. **How do you handle feedback from multiple sources?**
	- I consider all feedback, look for common themes, and prioritize improvements.

93. **Write a message to express interest in a new project.**
	- I am interested in contributing to the new project and would like to learn more about it.

94. **Describe a time you adapted to a new tool or technology.**
	- I learned to use Git for version control, which improved my workflow.

95. **How do you ensure your work is well-documented?**
	- I write clear comments, maintain up-to-date documentation, and organize files logically.

96. **Write a paragraph about the importance of time management.**
	- Good time management helps me meet deadlines, reduce stress, and balance multiple tasks.

97. **How do you handle working remotely?**
	- I set a routine, communicate regularly, and use collaboration tools to stay connected.

98. **Write a message to express gratitude for support.**
	- Thank you for your support during the project. It made a big difference.

99. **Describe a time you took on a leadership role.**
	- I led a study group, organized meetings, and helped members understand complex topics.

100. **How do you ensure continuous improvement?**
	- I seek feedback, reflect on my work, and set new learning goals regularly.
