import { h, init } from 'snabbdom';
import { VNode } from 'snabbdom/vnode';

// Initialize Snabbdom
const patch = init([]);

// Function to create a virtual node
export function createNode(tag: string, text: string): VNode {
  return h(tag, text);
}

// Function to render a virtual node to the DOM
export function renderNode(node: VNode, container: HTMLElement): void {
  patch(container, node);
}
