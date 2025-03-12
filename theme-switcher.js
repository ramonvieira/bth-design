
// Gerenciador de tema para BTH Design
(function() {
  const DARK_THEME_CLASS = 'bth-dark-theme';
  const THEME_STORAGE_KEY = 'bth-theme-preference';
  
  // Verifica se há preferência salva ou usa preferência do sistema
  function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    
    // Verifica preferência do sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  // Aplica o tema no documento
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add(DARK_THEME_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_THEME_CLASS);
    }
    
    // Salva a preferência
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    
    // Atualiza o switch se existir
    const themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
      themeSwitch.checked = theme === 'dark';
    }
  }
  
  // Inicializa o tema
  function initTheme() {
    applyTheme(getInitialTheme());
    
    // Configura o listener do switch
    const themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
      themeSwitch.addEventListener('change', function() {
        applyTheme(this.checked ? 'dark' : 'light');
      });
    }
  }
  
  // Quando o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
  
  // Expõe funções úteis globalmente
  window.themeManager = {
    toggleTheme: function() {
      const isDark = document.documentElement.classList.contains(DARK_THEME_CLASS);
      applyTheme(isDark ? 'light' : 'dark');
    },
    setTheme: applyTheme,
    getCurrentTheme: function() {
      return document.documentElement.classList.contains(DARK_THEME_CLASS) ? 'dark' : 'light';
    }
  };
})();
