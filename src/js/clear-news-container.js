export function clearMainContainer() {
    const mainContainer = document.getElementById('main-container');
    if (mainContainer.hasChildNodes) {
        mainContainer.childNodes.forEach(node =>
            node.parentNode.removeChild(node)
        );
    }
}
