# Mobile Setup Guide

## Prerequisites

Before you begin, ensure your development environment meets the following requirements:

- **Node.js**: Version 14 or higher. Node.js is a JavaScript runtime that allows you to run JavaScript on your server or your machine.
- **npm or yarn**: Version 6 or higher. These are package managers for the JavaScript programming language. You can use either npm or yarn, but you'll need to have one of them installed.
- **Expo CLI**: Version 4 or higher. Expo is a set of tools, libraries, and services that lets you build native iOS and Android apps by writing JavaScript.
- **A mobile device or emulator**: You'll need a mobile device or an emulator to run the app. Expo provides a client app, Expo Go, which you can use to run your projects on your device.

## Step 1: Setting Up Environment Variables

To configure the Chat App with your Omise API credentials, follow these steps:

1. **Create a `.env` File**: In the root directory of your project, create a new file named `.env`.

2. **Add Your Omise API Credentials**: Open the `.env` file and add the following content, replacing `your_public_key_here` and `your_secret_key_here` with your actual Omise public and secret keys:

```dotenv
EXPO_PUBLIC_OMISE_API_URL=https://api.omise.co
EXPO_PUBLIC_OMISE_VAULT_API_URL=https://vault.omise.co
EXPO_PUBLIC_OMISE_PUBLIC_KEY=your_public_key_here
EXPO_PUBLIC_OMISE_SECRET_KEY=your_secret_key_here
```

Replace `your_public_key_here` and `your_secret_key_here` with your actual Omise public and secret keys.

## Step 2: Install Dependencies

Install the project dependencies:

```bash
yarn install
```


After the installation is complete, the Expo CLI will automatically open a new browser window displaying a QR code. Use the Expo Go app on your mobile device to scan this QR code and run the app.

## Step 3: Running the App on Different Platforms

The Chat App can be run on both Android and iOS platforms. Use the following commands to run the app on your preferred platform:

- **For Android**:

```bash
yarn android
```

- **For iOS**:

```bash
yarn ios
```