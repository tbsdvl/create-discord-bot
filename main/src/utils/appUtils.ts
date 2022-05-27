import { App } from "../models/App";
import { Errback } from "express";

export const startUpBot = (bot: App) => {

    try {

        // Start up app
        bot.startApp();

        // Return true if no errors thrown
        console.log(`Bot started on port: ${bot.PORT}`)
        return true;
        
    } catch (err) {
        // Throw error function based on type of error passed in catch
        throw err;
    };
};