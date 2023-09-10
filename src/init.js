// eslint-disable-next-line import/prefer-default-export
export function initializePage() {
    const container = document.querySelector('.container');

    if (container) {
        const header = document.createElement('header');
        header.innerHTML = '<h1>Weather APP</h1>';

        const mainContent = document.createElement('div');
        mainContent.classList.add('mainContent');
        mainContent.innerHTML = '<p>TEST maincontent</p>';
        
        container.appendChild(header);
        container.appendChild(mainContent);
    }
}