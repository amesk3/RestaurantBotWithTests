# Restaurant Bot using Twilio & Slack API

[![Build Status](https://travis-ci.org/amesk3/RestaurantBotWithTests.svg?branch=master)](https://travis-ci.org/amesk3/RestaurantBotWithTests)

## What this app does

Implemented a texting bot that allows a customer for a restaurant to make reservations and display the results.

## Installation

npm install

Also install ngrok and have a Twilio account.

## Try It

Start the sever:

```sh
cd server
npm start
```

Start the client:

```sh
cd client
npm start
```

Make a connection to the phone number of your chioce:

```sh
./ngrok http 3001
```

(Make sure to update the Forwarding address from you terminal in your Twilio account)

## Contributors

Originally by Katie Francis and Amy Kim. Slack modifications by Amy Kim
