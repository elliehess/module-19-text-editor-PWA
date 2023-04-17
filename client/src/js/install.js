const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// This is an event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
       window.deferredPrompt = event;

       butInstall.classList.toggle('hidden', false);
});

// Click event handler for the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }
  
    promptEvent.prompt();
    
    // Reset the deferred prompt variable
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
