// asyn/wait

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog() {
    return new Promise((resolve, rejecte) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve("You walk the dog 🐕‍🦺");
            }
            else {
                rejecte("You DID'T walk the dog");
            }
        }, 5000);
    });
}

function cleanKitchen() {
    return new Promise((resolve, rejecte) => {
        setTimeout(() => {
            const cleanedKitchen = true;

            if (cleanedKitchen) {
                resolve("You clean the kitchen 🧹");
            }
            else {
                rejecte("You DID'T clean the kitchen");
            }
        }, 3000);
    });
}

function takeOutTrash() {
    return new Promise((resolve, rejecte) => {
        setTimeout(() => {
            const takenOutTrash = true;

            if (takenOutTrash) {
                resolve("You take out the trash ♻️");
            }
            else {
                rejecte("You DIDN'T take out the trash");
            }
        }, 500);
    });
}

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores!")
    }
    catch (error) {
        console.error(error)
    }
}

doChores();