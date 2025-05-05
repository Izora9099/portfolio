import { Client } from 'appwrite';

const client = new Client();

// Your Appwrite endpoint and project ID will go here
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('681929f20030b25bd5eb');        // Your project ID

export default client;
