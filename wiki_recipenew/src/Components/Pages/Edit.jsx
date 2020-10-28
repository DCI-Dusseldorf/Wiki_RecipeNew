import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import ReactSummernote from 'react-summernote';

const addImage = ([file]) => {
  const reader = new FileReader();
  reader.onloadend = () => ReactSummernote.insertImage(reader.result);
  reader.readAsDataURL(file);
};

export default function Edit({ list, setList }) {
  const { id } = useParams();
  const index = list.findIndex((item) => item.id === +id);
  const article = list[index];
  const titleRef = React.useRef();

  let [infoData, setInfoData] = useState(article.description);

  const onChangeHandler = (data) => {
    setInfoData(data);
  };

  const update = () => {
    article.title = titleRef.current.value;
    article.description = infoData;
    setList([...list]);
  };

  return (
    <div>
      <input
        className='mt-3 mb-3'
        defaultValue={article.title}
        type='text'
        ref={titleRef}
      />
      <ReactSummernote
        onInit={() => {
          const editArea = document.querySelector('.note-editable');
          editArea.innerHTML = Object.values({ infoData });
        }}
        options={{
          height: 300,
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
      <Link to={`/${article.id}`}>
        <Button className='mr-2 mt-3' variant='primary' onClick={update}>
          Update
        </Button>
      </Link>
      <Link to={`/${article.id}`}>
        <Button className='mt-3' variant='warning'>
          Cancel
        </Button>
      </Link>
    </div>
  );
}
