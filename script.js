// スクロール時にアニメーション表示
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

window.dispatchEvent(new Event('scroll'));

// PDFモーダル表示
function openPDF() {
  document.getElementById('pdfModal').style.display = 'block';
}

function closePDF() {
  document.getElementById('pdfModal').style.display = 'none';
}
