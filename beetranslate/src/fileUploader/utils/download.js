export function downloadCsvFile(csv, fileName){
    const encodedUri = encodeURI(csv);
    downloadFile(encodedUri, fileName)
}

export function downloadXlsxFile(xlsx, fileName){
    const blob = new Blob([xlsx]);
    const objectUrl = URL.createObjectURL(blob);
    downloadFile(objectUrl, fileName)
}

export function downloadJsonFile(json, fileName){
    const blob = new Blob([JSON.stringify(json, null, 2)], {type: "application/json"});
    const objectUrl = URL.createObjectURL(blob);
    downloadFile(objectUrl, fileName)
}

function downloadFile(objectUrl, fileName){
    const link = document.createElement("a");

    link.setAttribute("href",  objectUrl);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
