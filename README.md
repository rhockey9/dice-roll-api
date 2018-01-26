Simple API for dice roll game.

Purpose is to:
- Write a typescript node express application
- Test typescript node modules written by me
- Use npm packages (transpiled from typescript) written by me and kept in npm (@cragi9)
- Deploying project to Elastic Beanstalk in AWS (http://dicerollapi-env.us-east-1.elasticbeanstalk.com)

/api/dice/{guess (1-6)}
- Rolls a dice and compares to guess provided in url

/api/card
- Draws a random card