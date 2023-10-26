
function makeHash(length: number) {
    let result = '';
    const characters = 'abcdef0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const HashGen = {
    createSessionId: () => {
        return makeHash(8) + '-' + makeHash(4) + '-' + makeHash(4) + '-' + makeHash(4) + '-' + makeHash(12);
    }
}

export default HashGen;