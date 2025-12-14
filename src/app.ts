import { storage, OPFSStorage } from './lib/storage';

/**
 * Main application entry point
 */
export function init(): void {
  console.log('Colorwork Sweater Designer - Initializing...');

  // Check OPFS support
  if (OPFSStorage.isSupported()) {
    console.log('OPFS is supported');
    storage.initialize().then(() => {
      console.log('OPFS initialized successfully');
    }).catch((error) => {
      console.error('Failed to initialize OPFS:', error);
    });
  } else {
    console.warn('OPFS is not supported in this browser');
  }

  // Setup any event listeners or UI initialization here
  setupUI();
}

/**
 * Setup UI components and event listeners
 */
function setupUI(): void {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = `
      <div class="container mt-5">
        <h1 class="mb-4">Colorwork Sweater Designer</h1>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Welcome</h5>
            <p class="card-text">
              This is a single-page TypeScript application with Bootstrap 5 and OPFS support.
            </p>
            <p class="card-text">
              <strong>OPFS Status:</strong> 
              <span class="badge ${OPFSStorage.isSupported() ? 'bg-success' : 'bg-warning'}">
                ${OPFSStorage.isSupported() ? 'Supported' : 'Not Supported'}
              </span>
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
