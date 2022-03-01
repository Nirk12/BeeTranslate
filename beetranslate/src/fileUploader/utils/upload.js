export function readTextFromFile(file) {
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.onload = async (e) => {
            resolve(e.target.result)
        };
        reader.readAsText(file)
    })
}
