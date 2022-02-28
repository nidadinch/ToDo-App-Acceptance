# To-Do App Acceptance

This repository belongs to a To-Do App based on Golang and Vue.js. It contains acceptance tests using Cucumber & Puppeteer. 

## Table of contents

- [Feature set](#feature-set)
- [Visuals](#visuals)
- [Project Tree](#project-tree)
- [Installation](#installation)
    - [Install dependencies](#install-dependencies)
    - [Run sanity test](#run-sanity-test)
    - [Run all tests and generate HTML report](#run-all-tests-and-generate-html-reporter)
- [Dependencies](#dependencies)
- [Pipeline](#pipeline)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Feature set

```gherkin
Feature: ToDo
  Scenario: Add Item to List
    Given Empty ToDo list
    When I write "buy some milk" to <text box> and click to <add button>
    Then I should see "buy some milk" item in ToDo list
```

## Visuals
<img src="https://media.giphy.com/media/xfNZv6gJKcVUpgFbBY/giphy.gif" width="600"  />

## Project Tree 

```
├── features/
│   ├── sanity.feature
│   ├── todo.feature
│   └── steps/
│   │ ├── sanity.js
│   │ └── todo.js 
    └── support/  <––– built-in methods 
│     └── ...
├── package.json
└── ...
```

## Installation

  ### Install Dependencies

      ```
      yarn install
      ```

      or

      ```
      npm install
      ```

  ### Run sanity test

      To run sanity test for checking the environment works correctly: 

      ```
      yarn cucumber-js features/sanity.feature
      ```
  ### Run all tests and generate HTML report

      ```
      yarn start
      ```

## Dependencies

All dependencies can be found on package.json file. Also you can check the list:

- [Cucumber](https://cucumber.io/docs/cucumber/)
- [Puppeteer](https://pptr.dev)
- [cucumber-html-reporter](https://www.npmjs.com/package/cucumber-html-reporter)

## Pipeline

Project has GitLab CI pipeline and tests are running automatically. And can be triggered on another step. It uses satantime/puppeteer-node docker image that contains chromium and all dependencies that Puppeteer can run tests.

For more information please check .gitlab-ci.yml file.

This project contains a docker file that generates a docker image. This image adds dependencies to run chromium with puppeteer. For more information please check Dockerfile.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Nida Dinç - niddinc@gmail.com
  
