// =====================================================================
//  SF APEX DEVELOPER ASSESSMENT — Question Bank
//  Fixed 45 questions: 20 Scenario + 20 MCQ + 5 Live Coding
//  Topics: Apex Core + Apex Triggers
//  Questions appear in fixed order — no randomisation
// =====================================================================

const QUESTIONS = [

  // ══════════════════════════════════════════════════════════════
  //  PART 1 — SCENARIO / DESCRIPTIVE  (Q1 – Q20)
  // ══════════════════════════════════════════════════════════════

  {
    id: 1,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "REST Callouts",
    scenario: "Your Salesforce application needs to retrieve customer details from an external REST API whenever a user clicks a button.",
    question: "How would you implement this integration using Apex REST callouts? Explain the steps involved in sending the request and processing the response.",
    placeholder: "Enter your answer..."
  },
  {
    id: 2,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Named Credentials and OAuth 2.0",
    scenario: "Your organization needs to connect Salesforce with an external application that requires OAuth 2.0 authentication. The API endpoint and authentication details should not be hardcoded in Apex.",
    question: "How would you configure Named Credentials and OAuth 2.0 to establish a secure connection? What is the role of a Connected App in this integration?",
    placeholder: "Enter your answer..."
  },
  {
    id: 3,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Apex Web Services",
    scenario: "An external application wants to send customer information into Salesforce by invoking an Apex method through a REST endpoint.",
    question: "How would you expose an Apex class as a REST web service? Which annotations and HTTP methods would you use?",
    placeholder: "Enter your answer..."
  },
  {
    id: 4,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "LWC Fundamentals",
    scenario: "You are assigned to develop an LWC component using Visual Studio Code. The component should retrieve and display Account information.",
    question: "Explain the steps required to set up Salesforce CLI, connect a Salesforce org, create an LWC component, and deploy it to the org.",
    placeholder: "Enter your answer..."
  },
  {
    id: 5,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "JavaScript Basics",
    scenario: "You have an LWC component that accepts an employee name and salary from the user. You need to store these values and perform calculations using JavaScript.",
    question: "How would you declare variables, handle user input, define functions, and perform calculations in the LWC JavaScript file?",
    placeholder: "Enter your answer..."
  },
  {
    id: 6,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Data Binding and Expressions",
    scenario: "An LWC component should display a welcome message using the logged-in user's name and dynamically display the employee's salary.",
    question: "How would you use property binding and expressions in the HTML template to display JavaScript variables dynamically?",
    placeholder: "Enter your answer..."
  },
  {
    id: 7,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Conditional Rendering",
    scenario: "You are developing a component that displays a success message when an Account is created and an error message when the creation fails.",
    question: "How would you implement conditional rendering using lwc:if, lwc:elseif, and lwc:else?",
    placeholder: "Enter your answer..."
  },
  {
    id: 8,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Rendering Multiple Records",
    scenario: "You have a list of five Account records stored in a JavaScript array. You need to display all Account names in the component.",
    question: "How would you use for:each or iterator to render multiple records? Why is the key attribute required?",
    placeholder: "Enter your answer..."
  },
  {
    id: 9,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Lifecycle Hooks",
    scenario: "Your LWC component needs to perform initialization logic when it is inserted into the DOM. It also needs to execute logic whenever the component is rendered.",
    question: "Which LWC lifecycle hooks would you use? Explain the difference between constructor(), connectedCallback(), renderedCallback(), and disconnectedCallback().",
    placeholder: "Enter your answer..."
  },
  {
    id: 10,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Lightning Data Service",
    scenario: "You need to create and edit Account records in an LWC component without writing a separate Apex controller.",
    question: "How would you use Lightning Data Service and its base components such as lightning-record-form, lightning-record-edit-form, and lightning-record-view-form?",
    placeholder: "Enter your answer..."
  },
  {
    id: 11,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "LWC Datatable",
    scenario: "Your manager wants a component that displays Account records in a table with Name, Industry, Phone, and Rating columns.",
    question: "How would you implement this using lightning-datatable? Explain how you define columns and pass record data to the datatable.",
    placeholder: "Enter your answer..."
  },
  {
    id: 12,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Custom Datatable",
    scenario: "A standard lightning-datatable does not meet your requirement to display a custom button and a special status indicator inside a table column.",
    question: "How would you extend lightning-datatable to create a custom data type and display custom UI elements in a column?",
    placeholder: "Enter your answer..."
  },
  {
    id: 13,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Wire Method",
    scenario: "You need to retrieve Account records from Apex whenever the component loads. The data should be automatically refreshed when the reactive parameter changes.",
    question: "How would you use the @wire decorator to call an Apex method? Explain the difference between property-based and function-based wire implementations.",
    placeholder: "Enter your answer..."
  },
  {
    id: 14,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Imperative Apex",
    scenario: "A user enters an Account name and clicks Search. The component should call Apex only after the button is clicked and display the matching records.",
    question: "How would you implement this requirement using imperative Apex? Explain how you handle the returned Promise and errors.",
    placeholder: "Enter your answer..."
  },
  {
    id: 15,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Parent to Child Communication",
    scenario: "You have a parent component that displays a list of Accounts and a child component that displays the selected Account details.",
    question: "How would you pass the selected Account record from the parent component to the child component using public properties and the @api decorator?",
    placeholder: "Enter your answer..."
  },
  {
    id: 16,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Child to Parent Communication",
    scenario: "A child LWC component contains a form. After the user submits the form, the parent component needs to receive the entered employee details.",
    question: "How would you send data from the child component to the parent component using CustomEvent and event handling?",
    placeholder: "Enter your answer..."
  },
  {
    id: 17,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Lightning Message Service and Pub/Sub",
    scenario: "Two independent LWC components are placed in different regions of the same Lightning page. When a user selects an Account in one component, the other component should display the selected Account details.",
    question: "How would you implement communication between these components using Lightning Message Service? When would a Pub/Sub pattern be considered, and what are its limitations compared with Lightning Message Service?",
    placeholder: "Enter your answer..."
  },
  {
    id: 18,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "LWC Navigation",
    scenario: "You have an Account list component. When the user clicks an Account name, the application should navigate to that Account's record page. Another button should navigate to a new Contact creation page.",
    question: "How would you implement navigation using NavigationMixin? Explain how PageReference is used for record pages and new record pages.",
    placeholder: "Enter your answer..."
  },
  {
    id: 19,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Packages",
    scenario: "Your organization has developed a Salesforce application that needs to be distributed to multiple customers. Some customers should be able to customize the application, while others should receive a protected application.",
    question: "Explain the differences between Managed and Unmanaged Packages. How does AppExchange help distribute Salesforce applications?",
    placeholder: "Enter your answer..."
  },
  {
    id: 20,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Deployment and Change Sets",
    scenario: "You have completed development in a Salesforce sandbox and need to move Apex classes, LWC components, custom objects, and fields to production.",
    question: "Explain the different Salesforce deployment approaches. How would you use Outbound and Inbound Change Sets to move components between related Salesforce orgs?",
    placeholder: "Enter your answer..."
  },

  // ══════════════════════════════════════════════════════════════
  //  PART 2 — MCQ  (Q21 – Q40)
  // ══════════════════════════════════════════════════════════════

   {
    id: 21,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "REST Callouts",
    question: "Which Apex class is used to make an HTTP callout to an external REST API?",
    options: [
      "Http",
      "HttpRequest",
      "HttpResponse",
      "RestRequest"
    ],
    answer: 0
  },
  {
    id: 22,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Named Credentials",
    question: "What is the primary purpose of Named Credentials in Salesforce?",
    options: [
      "To create custom objects",
      "To store endpoint and authentication configuration securely",
      "To create Apex triggers",
      "To store LWC JavaScript files"
    ],
    answer: 1
  },
  {
    id: 23,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "OAuth 2.0 and Connected App",
    question: "Which Salesforce feature is commonly used to configure OAuth settings for an external application accessing Salesforce?",
    options: [
      "Connected App",
      "Validation Rule",
      "Record Type",
      "Page Layout"
    ],
    answer: 0
  },
  {
    id: 24,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Apex Web Services",
    question: "Which annotation is used to expose an Apex class as a REST web service?",
    options: [
      "@AuraEnabled",
      "@InvocableMethod",
      "@RestResource",
      "@RemoteAction"
    ],
    answer: 2
  },
  {
    id: 25,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "LWC Fundamentals",
    question: "Which command is commonly used to create a new LWC component using Salesforce CLI?",
    options: [
      "sf apex create class",
      "sf lightning generate component",
      "sf generate component",
      "sf project generate component"
    ],
    answer: 3
  },
  {
    id: 26,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "JavaScript Basics",
    question: "Which keyword is used to declare a block-scoped variable whose value can be reassigned?",
    options: [
      "const",
      "let",
      "static",
      "final"
    ],
    answer: 1
  },
  {
    id: 27,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Data Binding",
    question: "How do you display a JavaScript property named employeeName in an LWC HTML template?",
    options: [
      "{employeeName}",
      "{{employeeName}}",
      "$employeeName",
      "@employeeName"
    ],
    answer: 0
  },
  {
    id: 28,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Conditional Rendering",
    question: "Which directive is used to conditionally render an element in LWC?",
    options: [
      "for:each",
      "lwc:if",
      "key",
      "onclick"
    ],
    answer: 1
  },
  {
    id: 29,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Rendering Multiple Records",
    question: "Which attribute is required when rendering a list using for:each in LWC?",
    options: [
      "value",
      "name",
      "key",
      "id"
    ],
    answer: 2
  },
  {
    id: 30,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Lifecycle Hooks",
    question: "Which lifecycle hook is called when an LWC component is inserted into the DOM?",
    options: [
      "connectedCallback()",
      "renderedCallback()",
      "disconnectedCallback()",
      "constructor()"
    ],
    answer: 0
  },
  {
    id: 31,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Lightning Data Service",
    question: "Which base component can be used to create and edit a Salesforce record without writing Apex?",
    options: [
      "lightning-datatable",
      "lightning-record-edit-form",
      "lightning-card",
      "lightning-layout"
    ],
    answer: 1
  },
  {
    id: 32,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "LWC Datatable",
    question: "Which property is used to define the columns in lightning-datatable?",
    options: [
      "records",
      "rows",
      "columns",
      "fields"
    ],
    answer: 2
  },
  {
    id: 33,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Wire Method",
    question: "Which decorator is used to retrieve data from an Apex method reactively in LWC?",
    options: [
      "@api",
      "@track",
      "@wire",
      "@AuraEnabled"
    ],
    answer: 2
  },
  {
    id: 34,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Imperative Apex",
    question: "Which JavaScript concept is used to handle the result of an imperative Apex call?",
    options: [
      "Promise",
      "Trigger",
      "SOQL",
      "Annotation"
    ],
    answer: 0
  },
  {
    id: 35,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Parent to Child Communication",
    question: "Which decorator is used to expose a public property or method from a child LWC component?",
    options: [
      "@wire",
      "@api",
      "@track",
      "@AuraEnabled"
    ],
    answer: 1
  },
  {
    id: 36,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Child to Parent Communication",
    question: "Which mechanism is commonly used to send data from a child component to its parent?",
    options: [
      "CustomEvent",
      "NavigationMixin",
      "SOQL",
      "Named Credential"
    ],
    answer: 0
  },
  {
    id: 37,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Lightning Message Service",
    question: "Which module is used to publish and subscribe to messages using Lightning Message Service?",
    options: [
      "lightning/navigation",
      "lightning/messageService",
      "lightning/platformShowToastEvent",
      "lightning/uiRecordApi"
    ],
    answer: 1
  },
  {
    id: 38,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "LWC Navigation",
    question: "Which mixin is used for navigation in LWC?",
    options: [
      "LightningElementMixin",
      "NavigationMixin",
      "RecordMixin",
      "PageReferenceMixin"
    ],
    answer: 1
  },
  {
    id: 39,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Packages",
    question: "Which package type protects the intellectual property of its components and generally restricts subscriber modifications?",
    options: [
      "Unmanaged Package",
      "Managed Package",
      "Change Set",
      "Sandbox Package"
    ],
    answer: 1
  },
  {
    id: 40,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Deployment and Change Sets",
    question: "Which Change Set is used to send components from a sandbox to its related production org?",
    options: [
      "Inbound Change Set",
      "Outbound Change Set",
      "Deployment Change Set",
      "Apex Change Set"
    ],
    answer: 1
  },

  // ══════════════════════════════════════════════════════════════
  //  PART 3 — LIVE CODING — TRIGGERS  (Q41 – Q45)
  // ══════════════════════════════════════════════════════════════

  {
  id: 41,
  part: "Part 3 — Live Coding",
  type: "coding",
  category: "Apex Trigger",
  language: "Apex",
  file: "AccountTrigger.trigger",
  scenario: "Whenever a new Account is created, the Account Name should automatically be converted to uppercase before the record is saved.",
  question: "Write a before insert trigger on Account to convert every Account Name to uppercase. Handle multiple records using Trigger.new.",
  placeholder: "",
  hint: ""
},
  {
  id: 42,
  part: "Part 3 — Live Coding",
  type: "coding",
  category: "Apex Trigger",
  language: "Apex",
  file: "AccountTrigger.trigger",
  scenario: "Whenever a new Account is created, automatically create one related Contact with the Account Name as the Contact's LastName.",
  question: "Write an after insert trigger on Account to create a related Contact for every newly inserted Account. Make sure the trigger is bulkified and performs only one DML operation outside the loop.",
  placeholder: "",
  hint: ""
},
  {
  id: 43,
  part: "Part 3 — Live Coding",
  type: "coding",
  category: "Future Method",
  language: "Apex",
  file: "AccountFutureHandler.cls",
  scenario: "When an Account is created, you need to update its Description field with the text 'Account Created Successfully' using asynchronous Apex.",
  question: "Write an Apex class containing a future method that accepts a List of Account record IDs and updates their Description field. Explain how you would invoke this method.",
  placeholder: "",
  hint: ""
},
  {
  id: 44,
  part: "Part 3 — Live Coding",
  type: "coding",
  category: "Queueable Apex",
  language: "Apex",
  file: "AccountQueueable.cls",
  scenario: "Your requirement is to update the Rating field of an Account to 'Hot' using Queueable Apex whenever the job is executed.",
  question: "Write a Queueable Apex class that accepts an Account record ID, retrieves the Account, updates its Rating to 'Hot', and performs the update. Explain how to execute the Queueable job.",
  placeholder: "",
  hint: ""
},
  {
  id: 45,
  part: "Part 3 — Live Coding",
  type: "coding",
  category: "Scheduled Apex",
  language: "Apex",
  file: "AccountScheduledJob.cls",
  scenario: "Your organization wants to automatically update all Account records every day at midnight. The Account Description should be updated to 'Daily Scheduled Update'.",
  question: "Write a Schedulable Apex class that retrieves all Accounts and updates their Description field. Explain how to schedule the class using System.schedule().",
  placeholder: "",
  hint: ""
}

];
