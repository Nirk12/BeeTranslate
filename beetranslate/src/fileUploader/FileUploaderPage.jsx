import {useState} from 'react'
import FilePicker from "./FilePicker";
import './fileUploder.css'
import FileView from "./FileView";

function FileUploaderPage() {
    const [files, setFiles] = useState([]);

    const addFile = (file) => {
        setFiles(prevState => prevState.concat(file))
    }

    return (
        <div className="file-uploader">
            <div className='file-uploader-main'>
            <FilePicker addFile={addFile} />

            <div className='files-container'>
                <h3>Files: </h3>
                <hr/>
                {files.map(file => {
                    return <FileView file={file}/>
                })}
            </div>
            </div>
        </div>
    );
}

export default FileUploaderPage;
