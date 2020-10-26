import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import ReactSummernote from 'react-summernote';

const addImage = ([file]) => {
  const reader = new FileReader();
  reader.onloadend = () => ReactSummernote.insertImage(reader.result);
  reader.readAsDataURL(file);
};

function Editor() {
  const titleUseRef = useRef(null);

  let [infoData, setInfoData] = useState('');

  const [text, setText] = useState(
    JSON.parse(localStorage.getItem('textData')) || [
      { id: 0, title: 'sample', info: 'sampleInfo' },
    ]
  );

  useEffect(() => {
    localStorage.setItem('textData', JSON.stringify(text));
  }, [text]);

  const onChangeHandler = (data) => {
    //setText(data);
    setInfoData(data);
  };

  function cancel() {}
  function save(e) {
    e.preventDefault();

    let textObj = {};
    textObj.id = Math.floor(Date.now() / 1000);
    textObj.title = titleUseRef.current.value;

    textObj.description = infoData;

    setText([...text, textObj]);
    console.log(textObj);

    console.log(text);
  }

  return (
    <>
      <div className='container mt-2'>
        <input
          type='text'
          placeholder='Title'
          className=' mb-5'
          ref={titleUseRef}
        />

        <ReactSummernote
          value={infoData}
          options={{
            height: 150,
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
          Submit
        </Button>

        <Button className='mt-3 ml-5' color='primary mt-5' onClick={cancel}>
          Cancel
        </Button>
      </div>
    </>
  );
}
export default Editor;
