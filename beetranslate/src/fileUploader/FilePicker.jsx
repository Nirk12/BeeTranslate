import Dropzone from 'react-dropzone'

function FilePicker({addFile}) {

    return (
        <div className="file-picker">

            <Dropzone onDrop={acceptedFiles => addFile(acceptedFiles[0])}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
        </div>
    );
}

export default FilePicker;
