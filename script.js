// write your JavaScript here
document.querySelector('button').addEventListener('click', function() {
        const input = document.getElementById('copy');
        const placeholderText = input.placeholder;

        navigator.clipboard.writeText(placeholderText)
            .then(() => {
                alert('Copied to clipboard: ' + placeholderText);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });

