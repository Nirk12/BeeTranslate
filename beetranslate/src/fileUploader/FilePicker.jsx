import Dropzone from 'react-dropzone'

function FilePicker({addFiles}) {
    return (
        <div className="file-picker">
            <Dropzone onDrop={acceptedFiles => addFiles(acceptedFiles)}>
                {({getRootProps, getInputProps, isDragActive }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            {isDragActive ? <p>Drop Here</p> :
                                <p>Drag 'n' drop some files here, or click to select files</p>}
                        </div>
                    </section>
                )}
            </Dropzone>
        </div>
    );
}

export default FilePicker;
