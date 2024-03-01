# Language Flag Lookup

This simple JavaScript function allows you to retrieve the flag of a country based on its language code.

## Usage

1. Include the `languageFlag.js` file in your project.
2. Use the `getLanguageFlag(languageCode)` function to retrieve the flag for a specific language code.

```javascript
import { getLanguageFlag } from "./languageFlag.js";

// Example
let flag = getLanguageFlag("en");
console.log(flag); // Output: 🇬🇧
```

## Supported Language Codes

The function supports a range of language codes, and their corresponding flags are stored in a JSON object within the `languageFlag.js` file.

Note: If a language code is not found, the function will return a generic globe symbol "🌐" as the default flag.
