
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Reference to : {\n   \"time\": 1550476186479,\n   \"blocks\": [\n      {\n         \"id\": \"oUq2g_tl8y\",\n         \"type\": \"header\",\n         \"data\": {\n            \"text\": \"Editor.js\",\n            \"level\": 2\n         }\n      },\n      {\n         \"id\": \"zbGZFPM-iI\",\n         \"type\": \"paragraph\",\n         \"data\": {\n            \"text\": \"Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.\"\n         }\n      },\n      {\n         \"id\": \"qYIGsjS5rt\",\n         \"type\": \"header\",\n         \"data\": {\n            \"text\": \"Key features\",\n            \"level\": 3\n         }\n      },\n      {\n         \"id\": \"XV87kJS_H1\",\n         \"type\": \"list\",\n         \"data\": {\n            \"style\": \"unordered\",\n            \"items\": [\n               \"It is a block-styled editor\",\n               \"It returns clean data output in JSON\",\n               \"Designed to be extendable and pluggable with a simple API\"\n            ]\n         }\n      },\n      {\n         \"id\": \"AOulAjL8XM\",\n         \"type\": \"header\",\n         \"data\": {\n            \"text\": \"What does it mean «block-styled editor»\",\n            \"level\": 3\n         }\n      },\n      {\n         \"id\": \"cyZjplMOZ0\",\n         \"type\": \"paragraph\",\n         \"data\": {\n            \"text\": \"Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\\\"cdx-marker\\\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core.\"\n         }\n      }\n   ],\n   \"version\": \"2.8.1\"\n}\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"time\": 1687799986365,\n  \"blocks\": [\n    {\n      \"id\": \"8221422\",\n      \"type\": \"header\",\n      \"data\": {\n        \"text\": \"Grocery TODO List\",\n        \"level\": 1\n      }\n    },\n    {\n      \"id\": \"2485620\",\n      \"type\": \"paragraph\",\n      \"data\": {\n        \"text\": \"This is my grocery list. I'll use this to keep track of what I need to buy and what I've already purchased.\"\n      }\n    },\n    {\n      \"id\": \"2600342\",\n      \"type\": \"list\",\n      \"data\": {\n        \"style\": \"unordered\",\n        \"items\": [\n          \"Milk\",\n          \"Eggs\",\n          \"Bread\",\n          \"Cheese\",\n          \"Apples\"\n        ]\n      }\n    },\n    {\n      \"id\": \"7804651\",\n      \"type\": \"paragraph\",\n      \"data\": {\n        \"text\": \"I've already bought the following:\"\n      }\n    },\n    {\n      \"id\": \"4610493\",\n      \"type\": \"list\",\n      \"data\": {\n        \"style\": \"unordered\",\n        \"items\": [\n          \"Milk\",\n          \"Eggs\",\n          \"Cheese\"\n        ]\n      }\n    },\n    {\n      \"id\": \"1877121\",\n      \"type\": \"paragraph\",\n      \"data\": {\n        \"text\": \"I still need to get:\"\n      }\n    },\n    {\n      \"id\": \"9402342\",\n      \"type\": \"list\",\n      \"data\": {\n        \"style\": \"unordered\",\n        \"items\": [\n          \"Bread\",\n          \"Apples\"\n        ]\n      }\n    }\n  ],\n  \"version\": \"2.8.1\"\n}\n```\n\n**Explanation:**\n\n* **`time`:** Represents the timestamp when the data was generated (or last modified).\n* **`blocks`:**  An array containing the content of the Editor.js. Each block is a separate element with its own type, ID, and data.\n* **`version`:**  The version of the Editor.js API used to generate this data.\n\n**Content Breakdown:**\n\n* **Headers:** We use `header` blocks to create headings for the list and different sections.\n* **Paragraphs:** `paragraph` blocks are used for regular text.\n* **Lists:** `list` blocks are used for creating both unordered (bullet points) and ordered (numbered) lists.  We use separate lists for items already bought and items still needed. \n\n**How to Use this Template:**\n\n1. **Install Editor.js:** If you haven't already, install Editor.js in your project.\n2. **Initialize Editor.js:**  Set up the Editor.js instance in your code.\n3. **Load the Template:**  Load the JSON data from this template into the Editor.js instance.\n\n**Example (using JavaScript):**\n\n```javascript\nconst editor = new EditorJS({\n    holder: 'editorjs', // Your container element ID\n    tools: { // You might need to define tools here based on your Editor.js setup\n        // ...\n    }\n});\n\n// Load JSON data\neditor.isReady.then(() => {\n    editor.render({ \n        blocks: [\n            //  ...JSON data from the template above...\n        ],\n        time: 1687799986365, // This can be updated with the current time \n        version: \"2.8.1\" \n    });\n});\n```\n\nThis code will load the grocery list template into your Editor.js instance, giving you a starting point to edit and manage your grocery list. \n"},
          ],
        },
      ],
    });
  
    
 