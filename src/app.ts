function main() {
    const toggleButton = document.getElementById('theme-toggle') as HTMLButtonElement;
    const html = document.documentElement;

    // Function to set theme
    const setTheme = (theme: string) => {
        html.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        toggleButton.textContent = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    };

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Toggle on click
    toggleButton.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

// Expose main globally for HTML onload
(window as any).main = main;