// Function to capture all click events and page views
(function () {
    // Function to log events
    function logEvent(eventType, event) {
        const timestamp = new Date().toISOString();
        let eventObject;

        // Determine the type of event object
        if (event.target.tagName.toLowerCase() === 'img') {
            eventObject = 'image';
        } else if (event.target.tagName.toLowerCase() === 'select') {
            eventObject = 'drop-down';
        } else if (event.target.tagName.toLowerCase() === 'input' && event.target.type === 'text') {
            eventObject = 'text';
        } else {
            eventObject = event.target.tagName.toLowerCase();
        }

        console.log(`${timestamp}, ${eventType}, ${eventObject}`);
    }

    // Capture click events
    document.addEventListener('click', (event) => {
        logEvent('click', event);
    });

    // Capture page views (when the page is loaded)
    window.addEventListener('load', (event) => {
        logEvent('view', event);
    });
})();