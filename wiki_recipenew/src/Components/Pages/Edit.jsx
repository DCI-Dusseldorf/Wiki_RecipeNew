import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';

export default function Edit(props) {
  const params = useParams();
  const history = useHistory();
  const article = props.list[params.title];
  const [value, setValue] = React.useState(article);

  return (
    <div>
      <Form.Control value={value} onChange={(e) => setValue(e.target.value)} />

      <Button
        onClick={(e) => {
          props.changeArticle(params.title, value);
          history.push(`/article/${params.title}`);
        }}
      >
        Update
      </Button>

      <Link to={`/article/${params.title}`}>
        <Button variant='danger'>Cancel</Button>
      </Link>
    </div>
  );
}
