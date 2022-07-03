import * as XLSX from 'xlsx';

export function jsonToCsv(json) {
    const rows = [
        Object.keys(json[0]),
        ...json.map(item => Object.values(item))
    ];

    return "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
}

export function jsonToXlsx(json) {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(json);
    XLSX.utils.book_append_sheet(workbook, worksheet);
    return XLSX.write(workbook, {type: 'array', bookType: 'xlsx'})
}

export function txtToJson(txt) {
    const rows = txt.replace("start", "").replace("end", "").trim()
    return rows.split("\n").map(row => {
        const [feeder, date, time, rfId, shouldReceive, awards, wakefulness] = row.trim().split("###")
        return {
            "Feeder": feeder,
            "Date": date,
            'Time': time,
            'RFID': rfId,
            'Should receive an award': shouldReceive,
            'How many awards he received': awards,
            'Wakefulness': wakefulness,
        }
    })
}








