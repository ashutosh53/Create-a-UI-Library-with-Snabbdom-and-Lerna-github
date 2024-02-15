import { createNode, renderNode } from 'my-ui-library';

// Initial state
let count = 0;

// Function to update state and re-render
function handleClick() {
  count++;
  updateView();
  console.log('State changed:', count);
}

// Function to create the UI
function createUI(): void {
  const appContainer = document.getElementById('app')!;
  const h1Node = createNode('h1', String(count));
  const buttonNode = createNode('button', 'Add');
  buttonNode.addEventListener('click', handleClick);

  renderNode(h1Node, appContainer);
  renderNode(buttonNode, appContainer);
}

// Function to update the view
function updateView(): void {
  const h1Node = createNode('h1', String(count));
  renderNode(h1Node, document.getElementById('app')!);
}

// Lifecycle event - Component mounted
window.addEventListener('DOMContentLoaded', () => {
  console.log('Component mounted');
  createUI();
});
