# SwapFunctionsVSCode
Different implementations for swapping 2 variables in multiple languages.

# To Run
Included below a .vscode template, create a folder in the main directory calles ".vscode" and paste the config code below into a "launch.json" file there in to debug, this contains all the logic to run these projects from within vscode on any os.
Please ensure all vscode extensions for these languages are installed.

To quick run some of these, install the following vscode extension and press "alt + ctrl + n" within the app main function page.
https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner 


// ================================ launch.json ================================

{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "java",
            "name": "Java",
            "request": "launch",
            "mainClass": "Java.SwapJava",
            "projectName": "Random Dev_39e3cbd5"
        },
        {
            "name": "Python: Current File",
            "type": "python",
            "request": "launch",
            "program": "${file}",
            "console": "integratedTerminal"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "JavaScript",
            "program": "${workspaceFolder}/JavaScript/Swap.js"
        }
    ]
}

// ================================ launch.json ================================
