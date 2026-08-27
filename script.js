// Script untuk toggle menu hamburger di Mobile
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinksMenu = document.getElementById('nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinksMenu.classList.toggle('hidden');
});


// --- PDF Modal Logic ---
function openPdfModal(pdfPath, title) {
    const pdfModal = document.getElementById('pdf-modal');
    const pdfModalContent = document.getElementById('pdf-modal-content');
    const pdfIframe = document.getElementById('pdf-iframe');
    const pdfModalTitle = document.getElementById('pdf-modal-title');
    const pdfLoader = document.getElementById('pdf-loader');
    const pdfFallback = document.getElementById('pdf-fallback-link');
    
    if (!pdfModal) return;

    // Set content (Encode URI to handle spaces in filename)
    const encodedPath = encodeURI(pdfPath);
    pdfModalTitle.innerText = title;
    pdfLoader.style.display = 'flex';
    
    // Set fallback link and iframe src
    if (pdfFallback) pdfFallback.href = encodedPath;
    pdfIframe.src = encodedPath;
    
    // Show modal
    pdfModal.classList.remove('hidden');
    // Trigger animations
    setTimeout(() => {
        pdfModal.classList.remove('opacity-0');
        pdfModalContent.classList.remove('scale-95');
        pdfModalContent.classList.add('scale-100');
    }, 10);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

function closePdfModal() {
    const pdfModal = document.getElementById('pdf-modal');
    const pdfModalContent = document.getElementById('pdf-modal-content');
    const pdfIframe = document.getElementById('pdf-iframe');
    
    if (!pdfModal) return;

    // Hide animations
    pdfModal.classList.add('opacity-0');
    pdfModalContent.classList.remove('scale-100');
    pdfModalContent.classList.add('scale-95');
    
    // Hide modal after animation completes
    setTimeout(() => {
        pdfModal.classList.add('hidden');
        if(pdfIframe) pdfIframe.src = ''; // clear iframe to stop loading
        document.body.style.overflow = 'auto'; // restore body scroll
    }, 300);
}
