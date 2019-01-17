export async function foo () {
    const { bar } = await import('./baar');
    return bar().then(r => `foo${r}`);
}