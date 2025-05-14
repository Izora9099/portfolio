import { Client } from 'appwrite';

//this file is for initializing appwrite services
const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('681929f20030b25bd5eb');
export default client;
