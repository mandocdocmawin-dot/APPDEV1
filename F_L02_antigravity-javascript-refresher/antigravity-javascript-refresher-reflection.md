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

Actually first time ko ito yung arrow function diko talaga siya alam pero nung naintindihan ko siya nung naitruo sa javascript refresher yung implicit return that skips the {} while naman kapag ginagamit yung {} is explicit, ang implicit ginagamit ng ()

## 12 · Destructuring
**File:** `12_destructuring.js`

Ang destructuring ay isa sa mga pinakamahalagang JavaScript features na nagpapabilis at nagpapalinis sa pagsusulat ng code. Sa halip na paulit-ulit na mag-type ng person.name o hobbies[0], pinapayagan tayo nitong kunin agad ang kailangang values sa iisang linya, at kapag ginamit ito diretso sa function parameters tulad ng printName({ name })

## 13 · Spread at Rest
**File:** `13_spread_rest.js`

Dito ko natutunan yung pinagkaiba ng Spread and Rest at kung kelan ito gagamitin halimbawa ito yung spread const newNumbers = [...numbers, 4, 5]; while sa Rest function sum(...args)

## 14 · Classes at Inheritance
**File:** `14_classes_inheritance.js`

Ang inheritance na kung saan mayroon kang function na nag inherit ng child halimbawa mayroon tayong parent and child kung ang parent mo ay ang class Person while kapag gagamitin siya as a child ganito siya class Student extends Person

## 15 · Modules: Export
**File:** `15_modules_export.js`

Ang Modules export itinuturo rito nito kung paano tayo mag exports sa another modules na puwedeng makapag share ng Javascript code between files without everything living is one giant script halimbawa nito yung export default greet; export { userInfo };

## 16 · Modules: Import
**File:** `16_modules_import.js`

Ang import naman ito naman yung kung saan may export and import si import brings exported values from another file, ibig sabihin puwede mong import yung may export, Import both greet and userInfo from 15_modules_export.js and log a message using them, halimbawa nalang ito yung import { userInfo } from "./15_modules_export.js";

## 17 · Logical Operators
**File:** `17_logical_operators.js`

Ang pag-unawa sa truthy at falsy values ay isa sa mga pinakapundamental na konseptong nagpapadali sa pagsusulat ng malinis at magandang logic flow sa JavaScript. Sa pagtuturo sa Javascriot refresher yung na anim lamang ang opisyal na falsy values false, 0, "", null, undefined, at NaN mas madali nating naiiwasan ang mga karaniwang bug, lalo na't itinuturing na truthy ang mga walang lamang array ([]) at object ({}). Bukod dito, napakahalaga rin ng kaalamang ito sa modernong web development tulad ng React, kung saan ginagamit ang mga short-circuit operator na && at || para sa conditional rendering upang maiwasan ang mga hindi inaasahang UI display bugs. at isa pa rito kapag && kapag may isang false, false na yung condition, while sa || kapag may isang true naman ang kahit may isang false true parin ang condition

## 18 · Ternary at Nullish
**File:** `18_ternary_nullish.js`

Sa modern Javascript and sa react mas laging ginagamit ang ternary compare sa statement, ang lagi na ginagamit ng mga developer yung condition katulad ng const result = score >= 70 ? "Pass" : "Fail"; ?. safely reads a nested property and stops with undefined instead of throwing and ?? then supplies a fallback 

## 19 · Strings at Numbers
**File:** `19_strings_numbers.js`

Sa string numbers itinuro rito yung paggamit ng split(), trim(), toUpperCase(), includes(), slice() sa paggamit ng string may different na built na method na puwede mong gamitin na call mo nalang kesa gumawa pa ng algorithm para mas mapabilis si developer at may different ito kung paano mo gagamitin 

## 20 · Array Methods
**File:** `20_array_methods.js`

Sa paggamit ng array methods mayroon rin itong iba't ibang method na puwede mong gamitin tulad ng filter(), map(), find(), some(), every(), and sort(), gaya ng sabi ko sa string numbers instead na gumawa kapa ng algorithm dahil nag adjust si Javascript for developer na buo ang mga methods na ito upang mas higit na matulungan rin si developer.

## 21 · Errors at JSON
**File:** `21_errors_json.js`

Ang paggamit ng try, catch, at throw ay napakahalaga sa JavaScript upang maging ligtas ang ating application laban sa mga hindi inaasahang error, tulad ng pag-fetch ng data sa API o pagproseso ng maling input. Sa halip na tuluyang mag-crash ang buong programa kapag nagkaroon ng problema tulad ng pag-divide sa zero pinapayagan tayo nitong mag-throw ng custom error at mahuli ito sa catch block upang makapaglabas ng mas malinaw at friendly na mensahe sa user na nag handle ng eror para hindi magulat si user once nag ka error.

## 22 · Async JavaScript
**File:** `22_async_javascript.js`

Ang mga callback function ang nagsisilbing pundasyon ng asynchronous programming sa JavaScript sa pamamagitan ng pagpapahintulot sa ating magpasa ng function bilang argument upang patakbuhin lamang kapag natapos na ang isang proseso tulad ng pag-fetch ng data o paghihintay sa setTimeout. kahit ganun napapagana nito ang mga operasyong na hindi nakaka-block sa pagpatuloy ng pagtakbo ng code, ang labis pag-nest ng mga callback ay maaaring magdulot ng tinatawag na "callback hell" na mahirap basahin at i-maintain. Kaya naman, ang pag-unawa sa simpleng  ito ang unang mahalagang hakbang bago lumipat sa mas malinis at modernong mga pamamaraan tulad ng Promises at async/await.

## 23 · Closures at Scope
**File:** `23_closures_scope.js`

Ang let at const ay block-scoped kaya't mapapansin natin hindi lumalabas ang variables sa {} block kung saan sila idineklara para maiwasan ang bugs. Samantala, ang closure naman ay nagpapahintulot sa function na maalala ang variables mula sa outer scope nito kahit natapos na itong tumakbo isang mahalagang pundasyon para sa mga React Hooks tulad ng useState. at isa pa rito halimbawa natin yung createCounter() kung sa loob nito mayroon tayong increment na kung saan nag add ng isa then mayroon tayong counterA and counterB, so kapag paulit mong tinawag si counterA ngayon lalabas siya a 2 pero kapag tinawag mo sa counter B  instead na mag increment siya since iba siya ng variable and value so hindi siya mag increment Nang halimbawa natin yung pindutin ng Guard ng Gate 1 ang clicker niya nang dalawang beses (counterA()), naging 2 ang bilang sa Gate 1. Pagkatapos, nang pindutin naman ng Guard ng Gate 2 ang clicker niya sa unang beses (counterB()), 1 pa lang ang lalabas sa kanya dahil magkaiba at hiwalay ang hawak nilang aparato.