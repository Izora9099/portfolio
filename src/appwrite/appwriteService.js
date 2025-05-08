import { Account, Databases, ID } from 'appwrite';
import client from './config';

export class AppwriteService {
    account;
    databases;

    constructor() {
        this.account = new Account(client);
        this.databases = new Databases(client);
    }

    // Authentication methods
    async createAccount({ email, password, name }) {
        try {
            const account = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            return account;
        } catch (error) {
            console.error('Error creating account:', error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error('Error getting current user:', error);
            return null;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
    }

    // Database methods
    async createDocument(databaseId, collectionId, data) {
        try {
            return await this.databases.createDocument(
                databaseId,
                collectionId,
                ID.unique(),
                data
            );
        } catch (error) {
            console.error('Error creating document:', error);
            throw error;
        }
    }

    async listDocuments(databaseId, collectionId) {
        try {
            return await this.databases.listDocuments(databaseId, collectionId);
        } catch (error) {
            console.error('Error listing documents:', error);
            throw error;
        }
    }
}

const appwriteService = new AppwriteService();
export default appwriteService;
