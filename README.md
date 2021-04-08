## HOW TO INSTALL CYPRESS

**Pre-requisites**

We have specific pre-requisites before Cypress installation

1. **Install browser at your preferences:** *If you don't have any browser you have to install a browser like Chrome or Firefox: For Chrome use this link https://www.google.com/chrome/ and follow the instructions. For Firefox use this link https://www.mozilla.org/en-US/firefox/new/ and follow the instructions.* 
2. **Install Node JS:** *As we know that [Node.js](https://en.wikipedia.org/wiki/Node.js) is a JavaScript runtime environment and Cypress being a Node-based application, the first step in the journey of Cypress will be to install and set up Node.js. So before we rush to Cypress, let’s follow step by step guidelines mentioned in the tutorial “**[Install Node JS and Setup NPM](https://www.toolsqa.com/blogs/install-node/)**” to setup Node and NPM successfully on our system.*
3. **Install Visual Studio Code:** *After having Node setup successfully, the next thing is to have IDE. We will be using Visual Studio Code Editor, which is a lightweight but powerful source code editor and comes with inbuilt support for JavaScript. For having IDE setup and getting a brief introduction about the same, please follow step by step guidelines in the tutorial “**[Install Visual Studio Code Editor](https://www.toolsqa.com/blogs/install-visual-studio-code/)**” to have a glimpse about the same.* 
4. *Clone or Download digital-motors cypress framework from github repository ( https://github.com/YasinTurkkan/digital-motors) to a folder.*  
5. **Install Cypress using npm**:  *In VS Code terminal use the command below to download Cypress using the **node package manager.** We have to execute this command in the same directory, which means inside the your Project folder. **npm install cypress**



#### How to Execute Cypress Tests 

We will be using the VS Code Terminal for test execution.*In the main project directory you have two ways to execute tests in VS Code Terminal. First with the **cypress test runner**, Second with the **command line execution with the headless browser** which is faster than the first method.*

- **For Cypress Test Runner method** execute one of these commands **npx cypress open or npm run test** afterwards cypress test runner will show up and you will see the two tests in the test runner. You can execute these tests one by one by clicking on them or clicking on "**Run 2 integration specs**" from the top-right corner of the test runner.

-  **For Command line execution** **with headless browser** execute one of these commands, **npx cypress run** or **npm run test:headless** after execution you will see the test results in the VS Code Terminal

