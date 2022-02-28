# To-Do App Acceptance

This repository belongs to a To-Do App based on Golang and Vue.js. It contains acceptance tests using Cucumber & Puppeteer.Feature set is: 

```gherkin
Feature: ToDo
  Scenario: Add Item to List
    Given Empty ToDo list
    When I write "buy some milk" to <text box> and click to <add button>
    Then I should see "buy some milk" item in ToDo list
```

## Visuals
<img src="https://media.giphy.com/media/xfNZv6gJKcVUpgFbBY/giphy.gif" width="600"  />


## Installation

```
yarn install
```

or

```
npm install
```

## Usage

To run tests: 

```
yarn start
```


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
  
