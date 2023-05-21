export const removeChildren = (container) => {
    const containerChildren = container.children;

    Array.from(containerChildren).forEach(child => {
        container.removeChild(child);
    });
};



