import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        console.log("Appwrite URL:", conf.appwriteUrl);
        console.log("Appwrite Project ID:", conf.appwriteProjectId);
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount(email, password, name) {
        try {
            // Create a new user account
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login(email, password);  // Log in after account creation
            }
            return userAccount;
        } catch (error) {
            throw error;
        }
    }

    async login(email, password) {
        try {
            console.log("Attempting to log in with email:", email);  // Debugging statement
            console.log("Account object:", this.account);  // Log the account object
            // Log in with email and password
            return await this.account.createSession(email, password);
        } catch (error) {
            console.error("Login error:", error);  // Log the error
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            // Get the currently logged-in user
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service:: getCurrentUser():: ", error);
        }
        return null;
    }

    async logout() {
        try {
            // Log the user out by deleting their sessions
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service:: logout()::", error);
            return false;
        }
    }
}

const authService = new AuthService();

export default authService;
