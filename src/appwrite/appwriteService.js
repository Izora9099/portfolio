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
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log('Error getting current user:', error);
            return null;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            throw error;
        }
    }

    // Database methods - customize these based on your needs
    async createDocument(databaseId, collectionId, data) {
        try {
            return await this.databases.createDocument(
                databaseId,
                collectionId,
                ID.unique(),
                data
            );
        } catch (error) {
            throw error;
        }
    }

    async listDocuments(databaseId, collectionId) {
        try {
            return await this.databases.listDocuments(databaseId, collectionId);
        } catch (error) {
            throw error;
        }
    }
}

const appwriteService = new AppwriteService();
export default appwriteService;
