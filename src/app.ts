function main() {
    const toggle = document.getElementById('theme-toggle') as HTMLInputElement;
    const html = document.documentElement;

    // Function to set theme
    const setTheme = (theme: string) => {
        html.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        toggle.checked = theme === 'dark';
    };

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Toggle on change
    toggle.addEventListener('change', () => {
        const newTheme = toggle.checked ? 'dark' : 'light';
        setTheme(newTheme);
    });
}

// Expose main globally for HTML onload
(window as any).main = main;