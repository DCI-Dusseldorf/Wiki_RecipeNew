import React from 'react';
import { Button } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import ReactSummernote from 'react-summernote';

const addImage = ([file]) => {
  const reader = new FileReader();
  reader.onloadend = () => ReactSummernote.insertImage(reader.result);
  reader.readAsDataURL(file);
};

function Editor() {
  return (
    <>
      <div className='container mt-2'>
        <ReactSummernote
          options={{
            height: 350,
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
