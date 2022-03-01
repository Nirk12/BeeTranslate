import {jsonToCsv, jsonToXlsx} from "./utils/parser";
import {downloadCsvFile, downloadJsonFile, downloadXlsxFile} from "./utils/download";

const JSON = 'json'
const CSV = 'csv'
const XLSX = 'xlsx'

function FileView({fileName, json, toRemove}) {
    const handleCsv = () => {
        const csv = jsonToCsv(json)
        downloadCsvFile(csv, `${fileName}.${CSV}`)
    }

    const handleXlsx = () => {
        const xls = jsonToXlsx(json)
        downloadXlsxFile(xls, `${fileName}.${XLSX}`)
    }

    const handleJson = () => {
        downloadJsonFile(json, `${fileName}.${JSON}`)
    }

    return (
        <div className="file-view">
            <div className='file-name'>{fileName}</div>
            <div className='file-actions'>
                <div className='download-action' onClick={handleXlsx}>{XLSX}</div>
                <div className='download-action' onClick={handleCsv}>{CSV}</div>
                <div className='download-action' onClick={handleJson}>{JSON}</div>
                <div className='delete-action' onClick={toRemove}>Delete</div>
            </div>
        </div>
    );
}

export default FileView;
