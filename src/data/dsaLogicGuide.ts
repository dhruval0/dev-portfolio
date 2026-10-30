import type { PaperDocument } from "@/types";

/** Full DSA Logic Building Guide — content lives in the vault note (not a PDF link). */
export const dsaLogicGuideNote: PaperDocument = {
  id: "dsa-logic-building-guide",
  eyebrow: "from the vault",
  topic: "DSA · 2026 Edition",
  title: "The Ultimate DSA Logic Building Guide",
  blocks: [
    {
      type: "callout",
      text: "“I understand the solution, but I can't think of it.” If that sounds like you, the problem isn't intelligence. It's method.",
    },
    {
      type: "paragraph",
      text: "Most people practice DSA by reading solutions and hoping the logic sticks. It doesn't. Logic is a process you can learn, step by step, like anything else.",
    },

    { type: "heading", text: "What this guide gives you" },
    {
      type: "list",
      items: [
        "A repeatable thinking process you can use on any problem, even one you've never seen",
        "15 patterns with their triggers, so you recognize the technique from the problem itself",
        "A practice system that makes solutions stick instead of disappearing in a week",
        "An interview structure so you think clearly, and out loud, under pressure",
      ],
    },

    { type: "heading", text: "How to use it" },
    {
      type: "list",
      items: [
        "Go phase by phase. Each phase ends with a practice task — do it before moving on",
        "Keep this open while solving. Use Phases 01–06 as a checklist on every problem until it becomes automatic",
        "Any language works. Examples are in Python because it reads like plain English",
      ],
    },

    { type: "divider" },

    { type: "heading", text: "The guide at a glance — 9 phases" },
    {
      type: "paragraph",
      text: "Phases 01–06 are the process you'll follow on every single problem. Phases 07–09 make it stick and help you perform when it matters.",
    },
    {
      type: "table",
      headers: ["Phase", "Focus"],
      rows: [
        ["01 · Understand the Problem", "Restate, examples, tricky cases"],
        ["02 · Brute Force First", "Solve it slowly, find the repeated work"],
        ["03 · Let Constraints Choose", "Input size tells you the complexity"],
        ["04 · Recognize the Pattern", "15 patterns and their triggers"],
        ["05 · Optimize Step by Step", "Remove the bottleneck"],
        ["06 · Dry Run & Edge Cases", "Catch bugs before running"],
        ["07 · Recursion & DP Thinking", "State, choices, recurrence"],
        ["08 · Practice Like This", "Pattern log and re-solving"],
        ["09 · Interview Mode", "Think out loud, in structure"],
      ],
    },
    {
      type: "pin",
      text: "You don't need to have seen the problem before. You need a process that works on problems you haven't seen.",
    },

    { type: "divider" },

    { type: "heading", text: "01 · Understand the Problem" },
    {
      type: "paragraph",
      text: "Most wrong solutions come from solving a different problem than the one asked. Before you think about any algorithm, make sure you know exactly what goes in, what comes out, and what the rules are. (Every problem, 3–5 min.)",
    },
    {
      type: "list",
      items: [
        "Read it twice — first for the story, second for the exact requirement",
        "Restate it in one line: “Given X, return Y such that Z.” If you can't, you don't understand it yet",
        "Write inputs and outputs — types, sizes, and what exactly to return: a value, an index, a count, or a list?",
        "Note the constraints — size of n, value ranges, negatives, duplicates, sorted or not",
        "Solve 2 examples by hand on paper, without code — your hand-solution is the first draft of the algorithm",
        "Make one tricky example — empty input, one element, all duplicates. Find out what should happen before coding",
      ],
    },
    {
      type: "callout",
      text: "Two Sum restatement: Find two different positions i and j where nums[i] + nums[j] == target. Return [i, j]. Ask: always one answer? same element twice? negatives? sorted?",
    },
    {
      type: "pin",
      text: "Practice: Take 3 problems you've already solved. For each, write the one-line restatement and one tricky example, without looking at your code.",
    },
    {
      type: "paragraph",
      text: "Common mistake: Jumping straight to code after reading the title. Five minutes of understanding saves thirty minutes of debugging.",
    },

    { type: "divider" },

    { type: "heading", text: "02 · Brute Force First" },
    {
      type: "paragraph",
      text: "The brute-force solution is not a waste of time. It proves you understand the problem, gives you something to test against, and shows you exactly what work is being repeated. Optimization starts there.",
    },
    {
      type: "list",
      items: [
        "Ask: how would I check every possibility? Every pair, every subarray, every subset",
        "Write it in plain steps — no code yet. Loops and checks in simple language",
        "Calculate its complexity — count nested loops. Two loops over n is O(n²)",
        "Find the repeated work — what is calculated again and again? That's your optimization target",
        "Name a faster way for that one step — searching repeatedly? Hash map. Summing repeatedly? Prefix sums",
      ],
    },
    {
      type: "flow",
      text: "BRUTE FORCE O(n²)\nfor i in range(n):\n    for j in range(i + 1, n):\n        if nums[i] + nums[j] == target:\n            return [i, j]\n\nOPTIMIZED O(n) — hash map\nseen = {}\nfor i, x in enumerate(nums):\n    if target - x in seen:\n        return [seen[target - x], i]\n    seen[x] = i",
    },
    {
      type: "pin",
      text: "Practice: For your next 5 problems, write the brute force and its complexity first. Then write one sentence: “The repeated work is ___.”",
    },
    {
      type: "paragraph",
      text: "Common mistake: Freezing because you can't see the optimal answer. Nobody sees it instantly. Brute force first, then improve.",
    },

    { type: "divider" },

    { type: "heading", text: "03 · Let Constraints Choose" },
    {
      type: "paragraph",
      text: "Constraints are hints. The size of the input tells you how fast your solution must be. Computers handle roughly 10⁸ simple operations per second — match your complexity to n.",
    },
    {
      type: "table",
      headers: ["Input size", "Complexity", "Typical approaches"],
      rows: [
        ["n ≤ 10–12", "O(n!)", "All permutations, backtracking"],
        ["n ≤ 20–25", "O(2ⁿ)", "All subsets, bitmasking, backtracking"],
        ["n ≤ 100–500", "O(n³)", "Three nested loops, some interval DP"],
        ["n ≤ 1,000–5,000", "O(n²)", "Two nested loops, 2D DP"],
        [
          "n ≤ 10⁵–10⁶",
          "O(n log n) or O(n)",
          "Sorting, binary search, two pointers, hashing, sliding window, heaps",
        ],
        ["n ≥ 10⁹", "O(log n) or O(1)", "Binary search on the answer, math formulas"],
      ],
    },
    {
      type: "list",
      items: [
        "Find the largest input size — look for the biggest n in the constraints",
        "Look it up in the table — that's the slowest complexity that will still pass",
        "Shortlist approaches that fit — anything slower is out",
        "Check value ranges too — large values can mean overflow, or you can't use them as array indexes",
      ],
    },
    {
      type: "callout",
      text: "Example: 1 ≤ n ≤ 10⁵. An O(n²) solution is about 10¹⁰ operations — too slow. You need O(n log n) or O(n).",
    },
    {
      type: "pin",
      text: "Practice: Open 10 random problems. Look only at the constraints and write which complexity is required, then check against the solution.",
    },
    {
      type: "paragraph",
      text: "Common mistake: Ignoring constraints and writing O(n²) for n = 10⁵. It will be correct — and it will still fail.",
    },

    { type: "divider" },

    { type: "heading", text: "04 · Recognize the Pattern" },
    {
      type: "paragraph",
      text: "Interviews rarely repeat questions, but they constantly repeat patterns. Stop memorizing problems. Learn the triggers: the words and shapes that point to a technique.",
    },
    {
      type: "table",
      headers: ["Pattern", "When you see…", "Start with"],
      rows: [
        ["Hashing", "Seen before?, frequency, fast lookups", "Two Sum · Valid Anagram"],
        [
          "Two pointers",
          "Sorted array, pairs/triplets, both ends",
          "Container With Most Water · 3Sum",
        ],
        [
          "Sliding window",
          "Contiguous subarray/substring + condition",
          "Longest Substring Without Repeating · Min Window Substring",
        ],
        [
          "Prefix sum",
          "Sum of a range, subarray sum equals k",
          "Subarray Sum Equals K · Range Sum Query",
        ],
        [
          "Binary search",
          "Sorted data, or min value that works",
          "Search in Rotated Sorted Array · Koko Eating Bananas",
        ],
        [
          "Monotonic stack",
          "Next greater/smaller, spans",
          "Daily Temperatures · Next Greater Element I",
        ],
        [
          "Heap",
          "Top k, kth largest, repeated min/max",
          "Kth Largest Element · Top K Frequent Elements",
        ],
        [
          "Intervals",
          "Overlapping ranges, meetings, merging",
          "Merge Intervals · Non-overlapping Intervals",
        ],
        [
          "BFS",
          "Shortest path unweighted, level by level",
          "Binary Tree Level Order · Rotting Oranges",
        ],
        [
          "DFS",
          "Explore everything, components, tree paths",
          "Number of Islands · Max Depth of Binary Tree",
        ],
        [
          "Topological sort",
          "Dependencies, prerequisites, ordering",
          "Course Schedule · Course Schedule II",
        ],
        [
          "Union-Find",
          "Grouping, merging, connected?",
          "Number of Provinces · Redundant Connection",
        ],
        [
          "Backtracking",
          "All combinations, subsets, permutations",
          "Subsets · Combination Sum",
        ],
        [
          "Greedy",
          "Best local choice → best overall",
          "Jump Game · Best Time to Buy and Sell Stock",
        ],
        [
          "Dynamic programming",
          "Count ways, min/max, overlapping subproblems",
          "Climbing Stairs · Coin Change",
        ],
      ],
    },
    {
      type: "pin",
      text: "Practice: Learn one pattern at a time (5–8 problems each). Before solving any problem, write which pattern you think it is — and why.",
    },

    { type: "divider" },

    { type: "heading", text: "05 · Optimize Step by Step" },
    {
      type: "paragraph",
      text: "Optimization isn't magic. It's removing repeated work, one bottleneck at a time.",
    },
    {
      type: "list",
      items: [
        "Find the bottleneck — which line runs the most times?",
        "Precompute — prefix sums, frequency maps, sorted copies",
        "Trade space for time — hash map/set turns O(n) search into O(1)",
        "Sort first — unlocks two pointers, binary search, or greedy",
        "Remember results — memoization when the same subproblem repeats",
        "Pick a better data structure — heap for min/max, stack or queue for order",
      ],
    },
    {
      type: "flow",
      text: "Subarray Sum Equals K — O(n)\ncount, prefix = 0, 0\nseen = {0: 1}\nfor x in nums:\n    prefix += x\n    count += seen.get(prefix - k, 0)\n    seen[prefix] = seen.get(prefix, 0) + 1\n# Sum(i..j) = prefix[j] − prefix[i−1]",
    },
    {
      type: "pin",
      text: "Practice: Pick 3 brute-force solutions. Circle the slowest line and write which technique could speed it up.",
    },
    {
      type: "paragraph",
      text: "Common mistake: Jumping straight to optimal. Improve one step at a time: O(n³) → O(n²) → O(n).",
    },

    { type: "divider" },

    { type: "heading", text: "06 · Dry Run & Edge Cases" },
    {
      type: "paragraph",
      text: "Your code does exactly what you wrote, not what you meant. Trace line by line with a small input and a table of variables before you hit Run.",
    },
    {
      type: "list",
      items: [
        "Empty input · Single element · All elements the same · Duplicates",
        "Negative numbers and zero · Already sorted / reverse sorted",
        "Largest possible input (time) · Integer overflow",
        "Off-by-one at boundaries · No valid answer exists",
      ],
    },
    {
      type: "list",
      items: [
        "Pick a small input (3–5 elements)",
        "Make a variable table — one column per variable, one row per step",
        "Follow the code, not your intention",
        "Run the edge-case checklist",
      ],
    },
    {
      type: "table",
      headers: ["Step", "lo", "hi", "mid", "nums[mid]", "Action"],
      rows: [
        ["1", "0", "4", "2", "5", "5 < 7 → lo = 3"],
        ["2", "3", "4", "3", "7", "found → return 3"],
      ],
    },
    {
      type: "paragraph",
      text: "Binary search dry run: nums = [1, 3, 5, 7, 9], target = 7.",
    },
    {
      type: "pin",
      text: "Practice: For your next 5 accepted solutions, do a full dry run on paper anyway.",
    },
    {
      type: "paragraph",
      text: "Common mistake: Testing only the example from the problem statement. Bugs live at the edges.",
    },

    { type: "divider" },

    { type: "heading", text: "07 · Recursion & DP Thinking" },
    {
      type: "paragraph",
      text: "Don't try to trace every call in your head. Define what your function means, trust it for smaller inputs, and focus only on the current choice.",
    },
    {
      type: "list",
      items: [
        "Define the state in words — “dp[i] = the best answer using the first i items.” If you can't say it, you can't code it",
        "List the choices — take or skip? left or right? this coin or not?",
        "Write the recurrence — dp[i] = best of (choice A, choice B)",
        "Set base cases — smallest inputs where the answer is obvious",
        "Start top-down (recursion + memo), then convert to bottom-up and optimize space",
      ],
    },
    {
      type: "flow",
      text: "House Robber\n# dp[i] = most money from first i houses\nprev, cur = 0, 0  # dp[i-2], dp[i-1]\nfor x in nums:\n    prev, cur = cur, max(cur, prev + x)\nreturn cur",
    },
    {
      type: "pin",
      text: "Practice: Climbing Stairs, House Robber, Coin Change — write the state in words and the choices before any code.",
    },
    {
      type: "paragraph",
      text: "Common mistake: Memorizing DP solutions without the state definition. If you can't explain what dp[i] means, you haven't learned the problem.",
    },

    { type: "divider" },

    { type: "heading", text: "08 · Practice Like This" },
    {
      type: "paragraph",
      text: "Logic is built by how you practice, not how much. 100 problems you truly understand beat 400 you rushed through.",
    },
    {
      type: "table",
      headers: ["Problem", "Pattern", "Trigger I noticed", "Key insight", "Re-solve on"],
      rows: [
        ["…", "…", "…", "…", "Day 3 / 7 / 21"],
        ["…", "…", "…", "…", "Day 3 / 7 / 21"],
        ["…", "…", "…", "…", "Day 3 / 7 / 21"],
      ],
    },
    {
      type: "list",
      items: [
        "Learn by pattern — 5–8 problems per pattern before moving on",
        "Time-box — try 30–45 minutes; stuck? study the solution, but understand why",
        "Log every problem — pattern, trigger, and one key insight",
        "Re-solve from scratch on day 3, 7, and 21 without looking",
        "Mix patterns later so you learn to identify them",
        "Do one timed contest a week",
      ],
    },
    {
      type: "pin",
      text: "Practice: Start the log today with the last 3 problems you solved. Schedule their re-solve dates.",
    },
    {
      type: "paragraph",
      text: "Common mistake: Counting problems instead of patterns. A big solved-count with no revision is why people forget everything in a month.",
    },

    { type: "divider" },

    { type: "heading", text: "09 · Interview Mode" },
    {
      type: "paragraph",
      text: "How you think matters as much as the final answer. Interviewers can't score what they can't hear. Use the same structure every time — out loud. (~45 minutes.)",
    },
    {
      type: "list",
      items: [
        "Clarify (~5 min) — restate, ask about constraints and edge cases",
        "Examples (~3 min) — one normal and one tricky",
        "Brute force (~3 min) — explain it and complexity; don't code unless asked",
        "Optimize (~10 min) — repeated work, name the pattern, explain the improvement",
        "Code (~15 min) — clean names, small helpers, talk while you type",
        "Test (~5–10 min) — dry run, edge cases, state final complexity",
      ],
    },
    {
      type: "callout",
      text: "Say out loud: “Let me restate the problem…” · “The brute force is O(n²) because…” · “The repeated work is searching for the complement, so a hash map would help.” · “Let me trace this with a small example before I say it's done.”",
    },
    {
      type: "pin",
      text: "Practice: One mock interview a week. Record yourself if you're alone — did you explain why, or just what?",
    },
    {
      type: "paragraph",
      text: "Common mistake: Coding in silence for 20 minutes. Even a perfect solution scores lower if the interviewer couldn't follow your thinking.",
    },

    { type: "divider" },

    {
      type: "callout",
      text: "Logic is built, not born. Use this process on your next problem, and the one after that. In a few weeks, you'll start seeing patterns before you finish reading.",
    },
  ],
};
