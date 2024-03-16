# Chat App Setup Guide

This guide will help you set up and run the Chat App project on your local development environment. The project is built with Expo, a framework for building universal React applications, and it uses various libraries for navigation, form handling, and API interactions.

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn
- Expo CLI (version 4 or higher)
- A mobile device or emulator for running the app

## Step 1: Set Up Environment Variables

First, you need to create a new file named `.env` in the root of your project directory. Add the following content to the file:


`EXPO_PUBLIC_OMISE_API_URL=https://api.omise.co
EXPO_PUBLIC_OMISE_VAULT_API_URL=https://vault.omise.co
EXPO_PUBLIC_OMISE_PUBLIC_KEY=your_public_key_here
EXPO_PUBLIC_OMISE_SECRET_KEY=your_secret_key_here`

Replace `your_public_key_here` and `your_secret_key_here` with your actual Omise public and secret keys.

## Step 2: Install Dependencies

Install the project dependencies:

`yarn install`

The Expo CLI will open a new browser window with a QR code. Scan this QR code with the Expo Go app on your mobile device to run the app.

## Step 3: Running on Different Platforms

You can run the app on different platforms (Android, iOS) using the following commands:

- For Android:
  - `yarn android`
- For iOS:
  - `yarn ios`

