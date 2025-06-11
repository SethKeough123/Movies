document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    window.location.href = `results.html?q=${encodeURIComponent(query)}`;
  }
});
