
console.log("SW Startup!");

// Install Service Worker
self.addEventListener('install', function(event){
    console.log('installed!');
});

// Service Worker Active
self.addEventListener('activate', function(event){
    console.log('activated!');
});

// Receives Messages
self.addEventListener('message', function(event){
    console.log("SW Received Message: " + JSON.parse(event.data));
});
