/* Toast notification */
function showToast(msg, type) {
  type = type || 'success';
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = (type === 'success' ? '✓  ' : 'ℹ  ') + msg;
  t.className = 'toast toast-' + type + ' show';
  setTimeout(function() { t.classList.remove('show'); }, 3000);
}

/* Modal confirmation */
function showModal(title, text, onConfirm) {
  var o = document.getElementById('modal-overlay');
  if (!o) return;
  o.querySelector('h3').textContent = title;
  o.querySelector('p').textContent = text;
  o.classList.add('show');
  o._onConfirm = onConfirm;
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('show');
}
function confirmModal() {
  var o = document.getElementById('modal-overlay');
  o.classList.remove('show');
  if (o._onConfirm) o._onConfirm();
}

/* Hamburger menu toggle */
function toggleNav() {
  document.querySelector('.banner__nav').classList.toggle('open');
}
