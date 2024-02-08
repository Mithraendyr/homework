Example testing framework for '' using Cypress with JavaScript.

## Install Cypress project dependancies

Install depancies 

With yarn:
'''
yarn install
'''

With npm:
'''
npm init
'''


## How to execute test suite

To run all tests headlesly execute:

'''
npx cypress run
'''

npx cypress run --headed --browser chrome

## How to run/debug via Cypress app

To open App execute:

'''
npx cypress open
'''

1. Select "E2E Testing"
2. Select browser to execute on
3. Select test case to execute

