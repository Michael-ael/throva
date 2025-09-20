 
        // JavaScript code to load header and footer
        function loadHTML(elementId, filePath) {
            fetch(filePath)
                .then(response => response.text())
                .then(data => {
                    document.getElementById(elementId).innerHTML = data;
                })
                .catch(error => {
                    console.error('Error loading ' + filePath + ':', error);
                });
        }
        
        // Load header and footer when page loads
        document.addEventListener('DOMContentLoaded', function() {
            loadHTML('header-container', 'header.html');
            loadHTML('footer-container', 'footer.html');
        });


 