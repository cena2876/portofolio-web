const btnTema = document.getElementById('btnTema');

btnTema.addEventListener('click', () => {
  // Toggle = kalau class 'light-mode' belum ada, tambahkan; kalau sudah ada, hapus!
  document.body.classList.toggle('light-mode');

  // Ubah tulisan tombol sesuai kondisi tema sekarang
  if (document.body.classList.contains('light-mode')) {
    btnTema.textContent = '🌙 Gelap';
  } else {
    btnTema.textContent = '☀️ Terang';
  }
});