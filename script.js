document.getElementById('download-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const teraboxUrl = document.getElementById('terabox-url').value.trim();
    const loader = document.getElementById('loader');
    const downloadLinkContainer = document.getElementById('download-link-container');

    // Hide previous link
    downloadLinkContainer.classList.add('hidden');

    // Validate URL
    if (!teraboxUrl || !teraboxUrl.includes('terabox')) {
        alert('Please enter a valid Terabox link.');
        return;
    }

    // Show loader
    loader.classList.remove('hidden');

    // Simulate fetching the link
    setTimeout(() => {
        const encodedLink = encodeURIComponent(teraboxUrl);
        const thirdPartyDownloader = `https://teraboxlink.com/download?link=${encodedLink}`;

        const downloadLink = document.getElementById('download-link');
        downloadLink.href = thirdPartyDownloader;

        // Hide loader and show button
        loader.classList.add('hidden');
        downloadLinkContainer.classList.remove('hidden');

    }, 1500); // Simulate a 1.5-second network request
});

// Basic language toggle (can be expanded)
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang');

if (lang === 'ar') {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
} else {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
}