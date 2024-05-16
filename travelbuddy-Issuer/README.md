# Event Registration app

This is a ready-to-use reference app that showcases how to implement password-less login using Affinidi Login and request user profile from Affinidi Vault 

## Prerequistes

Please go through the below steps to install Affinidi tools
1. Install Affinidi Vault from [here](https://dev.docs.affinidi.com/labs/affinidi-login-nextjs/#before-you-begin-i-classfa-solid-fa-stari)

2. Install Affinidi CLI tool from the [here](https://dev.docs.affinidi.com/dev-tools/affinidi-cli/)

## Setup App

Setting up the reference app is easy, just follow these steps:  
1. Download baseline application code from [link here](here) and extract the **reference-app.zip** file.

```bash
cd reference-app
```

2. Unzip the downloaded repository and open it in Visual Studio Code or similar IDE.

3. Open a new terminal in IDE to make further changes (e.g. VSCode > Terminal > New Terminal)

4. Install the dependencies:

```bash
npm install
```

5. Install Affinidi Client Extension NPM package to interact with Affinidi Vault directly

```bash
npm install @affinidi/client-aiv-extension
```  
6. Install affinidi react auth NPM package for adding Affinidi Login button and also easy to direct flow integrate 

```bash
npm install @affinidi/affinidi-react-auth
```  

7. Create a `.env` file:
```bash
cp .env.example .env
```

8. Check the Application is running:
```bash
npm run dev
```
Open http://localhost:3000 with your browser to see the application is running fine.

## Create Login Configuration
1. Create Login configuration using the [link](https://dev.docs.affinidi.com/docs/affinidi-login/login-configuration/#create-a-login-configuration) 

2. You can specify name as `Affinidi Login App` and redirect-uri as `http://localhost:3000/api/auth/callback/Affinidi` while creating login configuration

    Sample Command
    ```
    affinidi login create-config --name='Affinidi Login App' --redirect-uris='http://localhost:3000/api/auth/callback/Affinidi'
    ```

    Sample response
    ```
    {
        "ari:identity:ap-southeast-1:d085c5a5-5765-4d8f-b00e-398f0916a161:login_configuration/0143bf454065664893b030289ae17903",
        "projectId": "d085c5a5-5765-4d8f-b00e-398f0916a161",
        "id": "<LOGIN_CONFIG_ID>",
        "name": "Affinidi Login App",
        "auth": {
            "clientId": "<CLIENT_ID>",
            "clientSecret": "<CLIENT_SECRET>",
            "issuer": "<ISSUER>",
            "tokenEndpointAuthMethod": "client_secret_post"
        },
        "redirectUris": [
            "http://localhost:3000/api/auth/callback/Affinidi"
        ],
        "clientMetadata": {
            "name": "",
            "origin": "",
            "logo": ""
        },
        "creationDate": "2023-09-19T05:10:19Z"
    }

    ```

    **Important**: Keep the Client ID and Client Secret safe that will be used later for setting up your IdP or your OIDC-compliant applications. Client Secret will only be available once.
3. Once you have successfully created a Login Configuration, you can copy the contents of the `LOGIN_CONFIG_ID`, `CLIENT_ID`, `CLIENT_SECRET`
4. The above login configuration uses default PEX query which requests only `Email` data, Now we modify the PEX query to request `Email` and `User Profile` data
5. Execute the below command to update the login configuration by replacing `LOGIN_CONFIG_ID` with value obtained from previous step
 
```
affinidi login update-config --id=LOGIN_CONFIG_ID --file=./src/utils/profile-pex.json
``` 
Sample Command
```
affinidi login update-config --id=384192b3b3ea3df8cece307fda64cf98 --file=./src/utils/profile-pex.json
```


## Update .env file with Login Configuration
1. Open `.env` file and update the environment variable `PROVIDER_CLIENT_ID` with the `CLIENT_ID`,  `PROVIDER_CLIENT_SECRET` with the `CLIENT_SECRET` and `PROVIDER_ISSUER` with `ISSUER` obtained from previous section

    ```bash
    PROVIDER_CLIENT_ID="CLIENT_ID"
    PROVIDER_CLIENT_SECRET="CLIENT_SECRET"
    PROVIDER_ISSUER="ISSUER"
    ```
    Sample Values
    ```bash
    PROVIDER_CLIENT_ID="8d1d6ac5-dae8-43bd-bd77-1d9fcc73ca6e"
    PROVIDER_CLIENT_SECRET="QKoupDfYr6hDFmpcmsGwiTHmy911"
    PROVIDER_ISSUER="https://apse1.api.affinidi.io/vpa/v1/login/project/d085c5a5-5765-4d8f-b00e-398f0916a161"
    ```

## Update .env file with Project Scope Token for VP verification
1. Follow the steps to generate token from the [readme file](/scripts/README.MD)

2. Open `.env` file and update the environment variable `PROJECT_SCOPE_TOKEN` with the token generated from previous step
```bash
PROJECT_SCOPE_TOKEN="Copy the contents of file /scripts/token.txt"
```
Note: If Project scope token not set, then a warning will be logged on server and VP verification will be skipped


