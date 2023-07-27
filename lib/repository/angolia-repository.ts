const { Angolia } = process.env;
const algoliasearch = require("algoliasearch");
export const client = algoliasearch("EI7K5E2KYY", Angolia);
export const indexAngolia = client.initIndex('mean');
