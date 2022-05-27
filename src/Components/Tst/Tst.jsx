import {useParams} from 'react-router-dom';

const Tst = () => {
  const {id} = useParams()
  return (
    <div>
      {id}
    </div>
  );
};

export  {Tst};
