(function() {
  try {
    localStorage.removeItem('sandim_theme');
    var saved = localStorage.getItem('sandim_theme_user');
    var theme = saved === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    var metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = theme === 'light' ? '#F6F4EF' : '#0E2E38';
    }
    var metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaColorScheme) {
      metaColorScheme.content = theme === 'light' ? 'light dark' : 'dark light';
    }
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
