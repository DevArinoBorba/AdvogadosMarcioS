(function() {
  try {
    var saved = localStorage.getItem('sandim_theme');
    var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    var theme = saved || (prefersLight ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
    var metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = theme === 'light' ? '#F6F4EF' : '#0E2E38';
    }
  } catch (e) {}
})();
