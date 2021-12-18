
function FileView({file}) {
    return (
        <div className="file-view">
            <div className='file-name'>{file.name}</div>
            <div className='file-actions'>
                <div>xlsx</div>
                <div>csv</div>
                <div>json</div>
            </div>
        </div>
    );
}

export default FileView;
