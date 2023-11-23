const express = require('express');
const app = express();

const sessionTimeout = 15 * 60 * 1000; // 15 minutes timeout
const activeUsers = {}; // Map to store last activity timestamps

app.use((req, res, next) => {
    const userId = req.session.userId; // Assume you have a user ID in the session
    console.log(userId);

    if (userId) {
        activeUsers[userId] = Date.now(); // Update the last activity timestamp
    }

    next();
});

app.use((req, res, next) => {
    const userId = req.session.userId;

    if (userId && activeUsers[userId]) {
        const elapsedTime = Date.now() - activeUsers[userId];

        if (elapsedTime > sessionTimeout) {
            // Session expired, force logout
            req.session.destroy((err) => {
                if (err) {
                    console.error('Error destroying session:', err);
                }
                res.redirect('/login');
            });
        } else {
            next();
        }
    } else {
        next();
    }
});
