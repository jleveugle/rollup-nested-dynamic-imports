async function index() {
    const { foo } = await import('./foo');
    foo().then(r => console.log(r));
}

index();