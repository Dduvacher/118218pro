# 118218pro
An API to get business phone number

## Setup application
 * clone the repository
 * create a `.env` file at the repo root
   * Inside .env add 2 lines `PORT=7000` and `SOCIETE_INFO_API_KEY=Your api key` from [societe-info](https://societeinfo.com/api-doc)
 * run `npm i`
 * run `npm run webpack` and in another termianl tab run `npm start`
  
    You are ready to call your api

## Usage
You can call your api on port 7000 by CURL for example :
`curl http://localhost:7000/societe-infos/312180292` and you will get the phone number of society with the 312180292 SIRET number.