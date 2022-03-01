import React, {useState} from 'react'
import FilePicker from "./FilePicker";
import './fileUploder.css'
import FileView from "./FileView";
import {readTextFromFile} from "./utils/upload";
import {txtToJson} from "./utils/parser";

function FileUploaderPage() {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState();

    const addFiles = async (files) => {
        try {
            const formattedFiles = await Promise.all(files.map(file => formattingFile(file)))
            setFiles(prevState => prevState.concat(...formattedFiles))
            setError()
        } catch (e) {
            setError(e)
        }
    }

    const formattingFile = async (file) => {
        const txt = await readTextFromFile(file)
        const json = txtToJson(txt)
        return {name: file.name, json, id: generateId()}
    }

    const getLocalDate = () => {
        return new Date().toLocaleString("heb")
    }

    const combineFiles = () => {
        return files.flatMap(file => file.json)
    }

    const generateId = () => {
        return (Math.random() + 1).toString(36).substring(7);
    }

    const removeFileById = (id) => {
        setFiles(prevState => prevState.filter(file => file.id !== id))
    }

    const removeAllFiles = () => {
        setFiles([])
    }

    return (
        <div className="file-uploader">
            <div className='file-uploader-main'>
                <FilePicker addFiles={addFiles}/>
                <div className='error'>{JSON.stringify(error)}</div>

                {files.length > 0 && <div>
                    <div className='files-container'>
                        <h3>Files: </h3>
                        <hr/>
                        {files.map((file) => {
                            return <FileView key={file.id} fileName={file.name} json={file.json} toRemove={()=> removeFileById(file.id)}/>
                        })}
                    </div>
                    <FileView fileName={`Combine files - ${getLocalDate()}`} json={combineFiles()} toRemove={removeAllFiles}/>
                </div>}
            </div>
        </div>
    );
}

export default FileUploaderPage;
