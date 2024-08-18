document.addEventListener('DOMContentLoaded', function() {
    const mainContainer = document.createElement('main');
    mainContainer.id = 'main-container';

    const detailDiv = document.createElement('div');
    detailDiv.className = 'detail';

    const iconDiv = document.createElement('div');
    iconDiv.className = 'icon';

    const iconImg = document.createElement('img');
    iconImg.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUex7yqpZpsElZ-tSEsVoTxxAX-btvXgg5VOD8OjkJ0pKPr8h4wIjc44ayqjpCew8fc2vfe5yAbAvEiSNKIcF9vCWcTxUAL_joqkoAT1k2im_YazAo3gPJaoxPipS7_0z-GwrZBs3PPqLYmG0C0mrgYC3oLQxj1x5p1br1qWb3irLI-5EQ0nTD64ZFTmY/s320/rJpOcdV_d.webp';
    iconImg.alt = 'Dolls Division APK';
    iconImg.width = 100;
    iconImg.height = 100;

    iconDiv.appendChild(iconImg);

    const infoDiv = document.createElement('div');
    infoDiv.className = 'info';

    const appNameH1 = document.createElement('h1');
    appNameH1.id = 'detail-app-name';
    appNameH1.textContent = 'Dolls Division APK';

    infoDiv.appendChild(appNameH1);
    infoDiv.appendChild(document.createElement('div')).className = 'version';

    const statsDiv = document.createElement('div');
    statsDiv.className = 'stats';

    const ratingDiv = document.createElement('div');
    ratingDiv.id = 'detail-rating-id';

    const ratingImg = document.createElement('img');
    ratingImg.src = 'https://svgshare.com/i/19LJ.svg';
    ratingImg.alt = 'Star';
    ratingImg.width = 24;
    ratingImg.height = 24;

    const ratingSpan = document.createElement('span');
    ratingSpan.id = 'rating-inner-text';
    ratingSpan.textContent = '4.6';

    ratingDiv.appendChild(ratingImg);
    ratingDiv.appendChild(ratingSpan);

    const reviewsDiv = document.createElement('div');

    const reviewsImg = document.createElement('img');
    reviewsImg.src = 'https://svgshare.com/i/19Jf.svg';
    reviewsImg.alt = 'Reviews';
    reviewsImg.width = 24;
    reviewsImg.height = 24;

    const reviewsSpan = document.createElement('span');
    reviewsSpan.id = 'show-comments_app';
    reviewsSpan.className = 'blue';
    reviewsSpan.textContent = '138';

    reviewsDiv.appendChild(reviewsImg);
    reviewsDiv.appendChild(reviewsSpan);

    const downloadsDiv = document.createElement('div');
    downloadsDiv.className = 'dwstat';

    const downloadsImg = document.createElement('img');
    downloadsImg.src = 'https://svgur.com/i/19LH.svg';
    downloadsImg.alt = 'Downloads';
    downloadsImg.width = 24;
    downloadsImg.height = 24;

    const downloadsSpan = document.createElement('span');
    downloadsSpan.textContent = '80K';

    downloadsDiv.appendChild(downloadsImg);
    downloadsDiv.appendChild(downloadsSpan);

    statsDiv.appendChild(ratingDiv);
    statsDiv.appendChild(reviewsDiv);
    statsDiv.appendChild(downloadsDiv);

    const downloadButton = document.createElement('a');
    downloadButton.className = 'fWrNhH';
    downloadButton.id = 'download-button';
    downloadButton.textContent = 'Download';

    const countdownDiv = document.createElement('div');
    countdownDiv.id = 'countdown';

    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';

    const countdownText = document.createElement('div');
    countdownText.id = 'countdown-text';
    countdownText.textContent = '10';

    countdownDiv.appendChild(progressBar);
    countdownDiv.appendChild(countdownText);

    detailDiv.appendChild(iconDiv);
    detailDiv.appendChild(infoDiv);
    detailDiv.appendChild(statsDiv);
    detailDiv.appendChild(downloadButton);
    detailDiv.appendChild(countdownDiv);

    mainContainer.appendChild(detailDiv);

    document.body.appendChild(mainContainer);
});

