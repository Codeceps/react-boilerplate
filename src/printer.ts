
function delayedPrint(delay: number, cb: () => void): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            cb();
            resolve();
        }, delay);
    })
}

const namePrinter = async (name: string, delay: number) => {
    console.log(`Printing delayed name...`);
    await delayedPrint(delay, () => {
        console.log(`Name: ${name}`);
    });
}


export {
    namePrinter
}