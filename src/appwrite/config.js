import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('681929f20030b25bd5eb');

export const account = new Account(client);
export const databases = new Databases(client);
export default client;
