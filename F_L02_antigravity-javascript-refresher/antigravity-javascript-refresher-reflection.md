# JavaScript Refresher — Learning Reflections

Mga natutunan ko sa bawat file ng JavaScript refresher (00–23).

## 00 · Script in HTML
**File:** `00_script_in_html.html`

Ang aking natutunan una kasi ang ginagawa ko is nilalagay ko yung script sa pinaka-baba actually first time ko iyon, ngayon nung natutunan ko yung module or defer is ang gagawin niya babasahin niya muna lahat ng html bago niya babasahin yung nasa javascript

## 01 · Base Syntax
**File:** `01_base_syntax.js`

Target File: 01_base_syntax.js
  
  Requirements:
  
  Log "Hello JavaScript".
  
  Declare myName (assigned to "Marwin") and myname (assigned to a different value) using let.
  
  Log both variables.
  
  Limit code strictly to let and console.log.
  
  Wait for my approval before editing.

Ang natutunan ko rito tama naman yung requirements na binigay niya na console log then kung ano yung declare myname 

## 02 · Variables
**File:** `02_variables.js`

> Open 02_variables.js in F_L02_antigravity-javascript-refresher.
  Read-only: do not modify, create, or delete anything.
  
  Briefly explain, with one short example each:
  - string, number, boolean
  - typeof
  - == vs ===
  
  Then give a short implementation plan (3-5 steps) for the exercise.
  If the file isn't in that folder, tell me instead of guessing.

  Ang natutunan ko rito is bago mag is explain niya kung ano yung laman ng file

## 03 · Functions
**File:** `03_functions.js`

prompt: Implement greet(name) as a declaration, square(num) as an arrow function, and calculator(a, b) returning an object. Run it. If it fails, explain the error first.

after niyang irun yung bawa't function nakita ko rin yung output niya, maganda itong antivigravity dahil marunong rin siya kung paano mag run ng isang code

## 04 · Objects
**File:** `04_objects.js`

 04_objects.js
  Create aboutMe with name, age, course, and introduce(). First explain why introduce() must be a regular function, not an arrow function.

Explain niya yung nag create siya ng aboutmeat pinakita niya rin kung paano yung regular function hindi yung not an arrow function 

## 05 · Arrays
**File:** `05_arrays.js`

05_arrays.js
Implement it and run it. Tell me which operations mutate the array, which return a new one, and why .map() matters for React.

Ang ginawa niya explain niya yung details then return on niya, details niya rin naman kung bakit map() matters diko lang sure kung exact  yung explanation niya pero explain niya rin naman po ang sabi niya rin naman kasi  1. Rendering Dynamic Lists in JSX:
  In React, statements like for loops cannot be written inside JSX curly braces {}. Because .map() is an expression that returns a new array, it allows
  transforming data directly into React elements inline:
    <ul>
      {favoriteColors.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ul>

so rama rin naman po

## 06 · Control Structures
**File:** `06_control_structures.js`

 06_control_structures.js
  The grade checker is wrong. Reproduce the output, explain the root cause, and propose the smallest fix. Don't edit until I approve.

Actually ginawa ko wala naman akong dinagdag namali, pinacheck kolang sa kaniya kung talaga bang nababasa niya yung laman ng files ko pero may sinabi siya na   1. Incorrect Honors Threshold: so kahit na wala akong minamali cinocorrect niya naman yung pamamaraan 

## 07 · DOM
**File:** `07_dom.html`

07_dom.html
Don't modify. Explain what the button targets, the event listener used, and why setTimeout delays the paragraph change. Then give me a short browser checklist.

Explain niya naman yung button targets at kung anong event listener na ginagamit thendoon sa setTimeout  • setTimeout is an asynchronous browser Web API that registers a callback function to run after a specified duration (2000 ms / 2 seconds). so kahit pala html kaya niya itong basahin

## 08 · Essential Features
**File:** `08_essential_features.js`

08_essential_features.js
Explain how map, destructuring, and spread each work and why they matter in React. Keep it short.

Ang natutunan ko rito sa Essnstial features explain niya kung paano gunagana yugn map actually nung ibang files nabanggit naman why matters yung map, tapos dito naman kung paano ginagamit yung map, destructuring, and spread kaya't kung bakit siya mahalaga sa react    

## 09 · Tricky Parts
**File:** `09_tricky_parts.js`

09_tricky_parts.js
  Before running, give a prediction table for each console.log. Run it, compare with the actual output, and explain why the arrow method can't read
  this.name.

So nakita ko yung prediction ng table then by the line rin then compare niya yung actual output, after nun ni run niya then explain niya yung Why arrowMethod Can't Read this.name so natutunan ko kahit may mga gusto kang pag comparin sa mga output puwede mong gawin yun para mas ma-organize mo yung giangawa mo

## 10 · let at const
**File:** `10_let_const.js`

10_let_const.js
Review the declarations. Explain when to use const, let, and why to avoid var. Suggest one improvement only, don't edit.

Ang natutunan ko rito sa let_const.js lalo na sa pag prompt lalo't halimbawa kung baguhan lang ako tapos diko alam yung let, const, and var so dito explain na ni AI kung paano siya mag work lalo't hindi mo siya alam gamitin puwede rin tayong manghingi ng suggestion to improve

## 11 · Arrow Functions
**File:** `11_arrow_functions.js`

> 11_arrow_functions.js
  Convert the required functions to arrow functions and run it. Point out which use implicit return and which use a body.

Sa Arrow function hindi niya lang ginawa kung paano niya ito nirurun kundi kung paano niya rin ito Analyze at nagbigay pa nga siya ng difference ng Implicit Return vs. Function Body so ginagawa niya is nag different niya yung mga puwede nating gamitin

## 12 · Destructuring
**File:** `12_destructuring.js`

12_destructuring.js
Implement it and run it. Explain object, array, and function-parameter destructuring.

ang ginawa niya Implementation in 12_destructuring.js niya muna po ito tapos nagbigay narin siya ng expected output nito then explain niya na rin yung Concepts Explained yung mga ginamit niya na object, array, and  function-parameter destructuring

## 13 · Spread at Rest
**File:** `13_spread_rest.js`

> 13_spread_rest.js
  Implement it and add logs proving the original numbers and user are unchanged, and that rest collects all args.

Ang ginawa niya nag add muna siya sa files ko, bago niya nag implements pero bago yun  ask niya muna ako kung puwede ba siya maglagay mayroong  code and expected output tapos verification niya kung tama ba yung output niya 

## 14 · Classes at Inheritance
**File:** `14_classes_inheritance.js`

> 14_classes_inheritance.js
  Before editing, explain class, constructor, and extends. Then implement Person and Student.

ang ginawa niya  explain niya muna sakin yung class constructor, and extends nasunod naman yung prompt ko, then nag add na siya nag implement na siya then nag output na siya

## 15 · Modules: Export
**File:** `15_modules_export.js`

 15_modules_export.js
  Explain default vs named export, then implement a default export greet and a named export userInfo.

- Dito lang naman sa part na ito explain niya yung default vs named export then actually may pinakita sa akin ng mga features kung ano yung gagamitin niya so tama naman yung binigay niyang output and then yung code

## 16 · Modules: Import
**File:** `16_modules_import.js`

> 16_modules_import.js
  Using @15_modules_export.js, import both greet and userInfo. Explain why only one needs curly braces. If Node reports a module error, diagnose first before renaming anything.

Ginawa niya muna import niya muna yung nasa @15_module.export.js tapos combined niya itosa 16 modules nna import, nakita ko rin naman na explain niya rin yung one needs curly braces nag add siya ng userinfo after nun run niya at diagnose niya yung module na knung may error

## 17 · Logical Operators
**File:** `17_logical_operators.js`

 17_logical_operators.js
  Give a prediction table for all values first, then run it and compare. Highlight the surprising cases like [] and {}.

Actually sobrang haba rin ng kaniyangprompt pero batay dito nakita ko naman yung binigay niyang prediction tables then kung ano lahat ng values then Highlighting the Surprising Cases: [] and {} since mahaba nga yung screenshots ilagay ko nalang sinabi ni Anti-gravitity
  │ [!WARNING] Common Pitfall for Beginners and React Developers
  │ In languages like Python, empty lists ([]) and empty dicts ({}) evaluate to false. In JavaScript, all objects are truthy, even when completely empty!

  • Why [] and {} are Truthy:
  JavaScript determines truthiness based on primitive falsy values. There are only 8 falsy values in JavaScript:
  false, 0, -0, 0n, "" (empty string), null, undefined, and NaN.
  Everything else is an object reference, and any valid object reference—regardless of whether it holds data—evaluates to true.
  • Implication for React:
  You cannot check if an array or object has items using if (myList):
    // BUG: [] evaluates to true, rendering an empty container!
    if (items) { renderList(); } 

    // CORRECT:
    if (items.length > 0) { renderList(); }
    if (Object.keys(user).length > 0) { renderProfile(); }

nakita niya rin naman yung bug evaluate niya kung trun, sinabi niya na correct, dito maaari tayong manghingi kay AI ng prediction tables

## 18 · Ternary at Nullish
**File:** `18_ternary_nullish.js`

> 18_ternary_nullish.js
  Implement the pass/fail and even/odd ternaries. Add examples comparing age || 18 and age ?? 18 for 0, null, and undefined. Explain which is safer for API data.

Dito ang aking natutunan ginawa niya nag pa implement muna siya at nag add ng mga examples tapos pinakita niya true code at kung confused tayo tapos kung safe ba siya sa API  ?? (Nullish Coalescing) is significantly safer. sinabi niya na significantly safer naman siya at nagbigay rin ng problem counter and solution since mahaba yung screenshots bali ayun din naman yung ginawa niya

## 19 · Strings at Numbers
**File:** `19_strings_numbers.js`

19_strings_numbers.js
Implement the exercises. Explain which methods help with cleaning input, search, price formatting, and detecting invalid numbers.

Ngayon ginawa niya nag implement muna siya ng exercise tapos breakdown niya yung methods at nakatable na rin siya para mas organize siya

## 20 · Array Methods
**File:** `20_array_methods.js`

20_array_methods.js
  Implement it and run it. Give a short table of when to use filter, find, some, every, and sort. Then suggest one improvement only, don't edit.

Ang natutunan ko gumawa siya ng short table then chinicheck niya rin kung kelan ginagamit yung mga methods, then nag bigay rin siya ng suggestion since mahaba yung screenshots baba ko nalang rito yung sinasabi niyang improvements
  ### One Suggested Improvement

  Use optional chaining when logging the .find() result:

    // Safely handle cases where the student might not exist
    console.log(perfecto?.name ?? "Student not found");

  Reason: If .find() finds no match, it returns undefined. Direct property access (perfecto.name) would throw an unhandled TypeError: Cannot read
  properties of undefined (reading 'name').

  (No edits made to the file.)

## 21 · Errors at JSON
**File:** `21_errors_json.js`

 21_errors_json.js
  Implement divide(a, b) with try/catch and the JSON stringify/parse part. List success and failure cases first, run it, and explain why catch prevents a crash.

Ngayon nag implement siya ng divide(a, b) nag try/catch JSONG stringify/parse part catch prevents niya rin yung crash

## 22 · Async JavaScript
**File:** `22_async_javascript.js`

22_async_javascript.js
  Implement fetchUserMock(callback) and predict the output order before running. Then rewrite it as a Promise-based fetchUser() with an async showUser()
  using try/catch. Run it and explain.

Same lang rin naman ginawa niya nag fetchusermoch then explain niya yung output na binigay niya sa kin ang sabi niya 

  ### 4. Explanation of Key Concepts

  1. Why Synchronous Code Runs First:
  JavaScript is single-threaded. Synchronous statements (like console.log("Name:", name)) execute immediately on the call stack. Asynchronous operations
  (setTimeout, fetch, Promises) are offloaded to Web APIs / Node APIs, and their callbacks wait in queues (Microtask Queue for Promises, Macrotask Queue
  for setTimeout). They only run after the call stack is completely empty.
  2. Why async/await is Preferred over Callbacks:
      • Avoids "Callback Hell": Chaining multiple asynchronous steps with callbacks leads to deeply nested indentation. await flattens asynchronous code so
      it reads sequentially like synchronous code.
      • Centralized Error Handling: With callbacks, every callback needs error parameters ((err, data)). With async/await, standard try/catch blocks handle
      both synchronous exceptions and rejected Promises seamlessly.

## 23 · Closures at Scope
**File:** `23_closures_scope.js`

> 23_closures_scope.js
  Explain why insideBlock fails outside the if block, then run it. Explain step by step why counterA and counterB don't share a count, and how that's like useState. Beginner-friendly, no deep React internals.

Explain niya rito yung insideblock sa loobng fails outside the if block explain niya naman tapos ginawa niya nag step by step para kung aano ginawa tapos ginawa niya rin yung  4. How This Relates to React's useState