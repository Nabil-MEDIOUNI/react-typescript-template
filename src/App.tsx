import { useEffect } from 'react';

import { Data, DataSelector } from './interfaces';
import { getAllData } from './redux/actions/data';
import { useTypedDispatch, useTypedSelector } from './redux/store';

function App() {
  const dispatch = useTypedDispatch();
  const { data }: DataSelector = useTypedSelector((state) => state.dataReducer);

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  return (
    <div data-testid='screen-app' className='App'>
      {data.map((element: Data) => (
        <div key={element.id} />
      ))}
    </div>
  );
}

export default App;
