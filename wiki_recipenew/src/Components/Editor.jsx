import React from 'react';
import { Button } from 'react-bootstrap';


import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap'

import ReactSummernote from 'react-summernote';

const addImage = ([file]) => {
  const reader = new FileReader();
  reader.onloadend = () => ReactSummernote.insertImage(reader.result);
  reader.readAsDataURL(file);
};

function Editor() {
  const [text, setText] = React.useState('');
  const onChangeHandler = (data) => {
    setText(data);
  };

  return (
    <>
      <InputGroup className='container mt-5'>
        <FormControl
          placeholder='Tittle Of the Recepi'
          aria-label='Tittle Of Recepi'
          aria-describedby='basic-addon2'
          
        />
      
      </InputGroup>
      <div className='container mt-2'>

        <ReactSummernote
         value={text}
          options={{
            height: 250,
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
        <Button className='mt-3' color='primary mt-5'>
          New Page
        </Button>

        <Button className='mt-3 ml-5' color='primary mt-5'>
          Cancel
        </Button>
      </div>
    </>
  );
}
export default Editor;
