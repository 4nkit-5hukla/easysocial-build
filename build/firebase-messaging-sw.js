importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js');

const firebaseConfig = {
    apiKey: 'AIzaSyDw_5Yol2MShQgNJf7VqD5-7UlarCmg4Mk',
    authDomain: 'push-notifs-trial.firebaseapp.com',
    projectId: 'push-notifs-trial',
    storageBucket: 'push-notifs-trial.appspot.com',
    messagingSenderId: '496911314870',
    appId: '1:496911314870:web:fa4724c12d95d07f6c5b17'
};

const secondary = firebase.initializeApp(firebaseConfig, 'secondary');

const messaging = secondary.messaging();

messaging.onBackgroundMessage(payload => {
    try {
        // notification title
        const notificationTitle = payload.data.title;

        // notification object
        const notificationOptions = {
            body: payload.data.body,
            icon: payload.data.icon,
            data: {
                url: payload.data.clickHandleURL
            },
            actions: [
                {
                    action: 'open_url',
                    title: 'Open Enquiry'
                }
            ]
        };

        return self.registration.showNotification(
            notificationTitle,
            notificationOptions
        );
    } catch (err) {
        console.log(err.message);
    }
});

// handle notification click event
self.addEventListener('notificationclick', event => {
    // handle the actions
    switch (event.action) {
        case 'open_url':
            const promiseChain = clients.openWindow(
                event.notification.data.url
            );
            event.waitUntil(promiseChain);
            break;

        default:
            console.log('Invalid action');
    }

    return event;
});
