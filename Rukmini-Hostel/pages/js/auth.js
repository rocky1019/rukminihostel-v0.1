// =====================================================
// RUKMINI HOSTEL
// AUTHENTICATION
// =====================================================

import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { auth } from "./firebase-config.js";


// =====================================================
// SIGN UP
// =====================================================

export async function signupUser(email, password) {

    try {

        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

        return {
            success: true,
            user: userCredential.user
        };

    } catch (error) {

        console.error("Signup error:", error);

        return {
            success: false,
            error: error
        };

    }
}