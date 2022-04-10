# AWS AMPLIFY

AWS AMPLIFY

1. Some of commands required to be run from a bash terminal, fish not supported
2. Pre-requist: install aws CLI and amplify CLI globally

## Pulling a new backend from Amplify

Check on the menu "Local setup instructions"

```bash
# Open Amplify Console in the browser
amplify pull --appId d35tmr3kauuhuk --envName staging
# The browser will then open to verify the user
```

## Amplify Environment

```bash
# Check current env
amplify env list

| Environments |
| ------------ |
| *staging     |

# Create dev env and automatically checkout to dev
amplify env add dev

| Environments |
| ------------ |
| staging      |
| *dev         |
# Once done, check in Amplify Console if it's sucessfully completed

# Checkout to other env
amplify env checkout staging
# pull the latest env
amplify pull
```

## AUTH

Remember to check the current env

```bash
# adding auth
amplify add auth
# removing auth
amplify remove auth
```

## UPDATE ENV AND API

Remember to check the current env

```bash
# Checkout to other env prod/staging/dev
amplify env checkout prod
# Check current env status
amplify status
# If there's need to be updated, the operation column will be showing 'Update'
# Run push to update backend and do this for every env
amplify push

# Update code/API
```

Remove Project

```bash
amplify env remove staging
# You cannot delete your current environment. Please switch to another environment to delete your current environment
# If this is your only environment you can use the 'amplify delete' command to delete your project
amplify delete
```
