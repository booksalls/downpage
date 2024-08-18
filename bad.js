    function startCountdown() {
        const downloadButton = document.getElementById('download-button');
        const countdownElement = document.getElementById('countdown');
        const progressBar = document.getElementById('progress-bar');
        const countdownText = document.getElementById('countdown-text');
        const downloadLink = "https://booksalls.github.io/downpage/";   
        downloadButton.style.display = 'none';
        countdownElement.style.display = 'flex'; 
        let countdownTime = 30;
        progressBar.style.width = '0%'; 
        countdownText.textContent = countdownTime;
        const countdownInterval = setInterval(() => {
            countdownTime--;
            const percentage = (countdownTime / 30) * 100;
            progressBar.style.width = `${percentage}%`;
            countdownText.textContent = countdownTime;
            if (countdownTime <= 0) {
                clearInterval(countdownInterval);
                countdownElement.style.display = 'none';
                window.location.href = downloadLink;
            }
        }, 1000);
    }
    
    document.getElementById('download-button').addEventListener('click', (event) => {
        event.preventDefault();
        startCountdown();
    });
