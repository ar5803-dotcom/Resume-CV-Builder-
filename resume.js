
<script>
function printCV() {
    // Access the form data from the previous page or the DOM based on your application

    // Example: Retrieving form values by their class names
    var titleInputs = document.querySelectorAll('.achieve_title');
    var descriptionInputs = document.querySelectorAll('.achieve_description');

    var content = "CV Content:\n";

    for (var i = 0; i < titleInputs.length; i++) {
        var title = titleInputs[i].value;
        var description = descriptionInputs[i].value;
        content += `Title: ${title}, Description: ${description}\n`;
    }

    // Open a new tab with the content to print
    var newTab = window.open('', '_blank');
    newTab.document.write(`<pre>${content}</pre>`);
    newTab.document.close();

    // Display a notification
    if ('Notification' in window) {
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                var notification = new Notification('CV Printed!', {
                    body: 'Your CV content has been opened in a new tab for printing.',
                    icon: 'icon.png' // You can provide your own icon image
                });
            }
        });
    }
}
</script>


