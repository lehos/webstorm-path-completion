# About
This repo reproduces bug in webstorm 2021.3 when there is no completion in import paths


#### Steps to reproduce:
- Install npm deps
- Open project in webstorm 2021.3 beta (or 2021.2)
- In file src/App.tsx point cursor on line 3:30 
- Invoke basic code completion action

#### Actual result:

"No suggestions" in completion popup (2021.3.beta.png)

#### Excepted result:

List of subfolders (2021.1.3.png)


### Install
    npm i

### Run
    npm dev
