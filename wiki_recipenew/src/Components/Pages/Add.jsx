import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import ReactSummernote from 'react-summernote';

const addImage = ([file]) => {
  const reader = new FileReader();
  reader.onloadend = () => ReactSummernote.insertImage(reader.result);
  reader.readAsDataURL(file);
};

function Editor(props) {
  let [infoData, setInfoData] = useState('');
  const titleUseRef = useRef(null);

  const onChangeHandler = (data) => {
    setInfoData(data);
  };

  function cancel() {}
  function save(e) {
    e.preventDefault();

    let textObj = {};
    textObj.id = Math.floor(Date.now() / 1000);
    textObj.title = titleUseRef.current.value;
    textObj.description = infoData;

    props.setList([...props.list, textObj]);
  }

  return (
    <>
      <div className='container mt-2 '>
        <input
          type='text'
          placeholder='Add Title of Your Recipe...'
          className=' mb-3'
          ref={titleUseRef}
        />

        <ReactSummernote
          value={infoData}
          options={{
            height: 210,
            dialogsInBody: true,

            toolbar: [
              ['style', ['style']],
              ['font', ['bold', 'underline', 'clear']],
              ['fontname', ['fontname']],
              ['para', ['ul', 'ol', 'paragraph']],
              ['table', ['table']],
              ['insert', ['link', 'picture', 'video']],
              ['view', ['fullscreen', 'codeview']],
            ],
          }}
          onImageUpload={addImage}
          onChange={onChangeHandler}
        />
        <Button className='mt-3' color='primary mt-5' onClick={save}>
          Save
        </Button>

        <Button
          variant='danger'
          className='mt-3 ml-5'
          color='primary mt-5'
          onClick={cancel}
        >
          Cancel
        </Button>
      </div>
    </>
  );
}
export default Editor;
