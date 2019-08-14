## Application

This web application created using React JS with react hooks.<br>
To replace `react-redux` dependencies, this app using `useReducer` as state management from `react-hooks` as build in features from React.

## Instruction

To run, should [install Node](https://nodejs.org/en/download/) first.<br>
In terminal, use command `npm install` to download dependencies.<br>

## Auth Page

![Auth Page](https://github.com/ahtrag/simplecrypto/blob/master/public/documentation/1.PNG)<br>
To be able to login, input email as **admin@admin.com** and password **admin**<br>
There is switch component to switch to forget password page<br>

## Forget Password Page

![Forget Password Page](https://github.com/ahtrag/simplecrypto/blob/master/public/documentation/2.PNG)<br>
To reset password, input email as **admin@admin.com** and will recieve return as `alert` showing the **password**

## Dashboard Page

![Dashboard Page](https://github.com/ahtrag/simplecrypto/blob/master/public/documentation/3.PNG)<br>
Unfotunately, client side can not recieve any `metadata` from `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest` end-point and recieve `opaque` type response in `console.log`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
