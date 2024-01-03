import recientUsers from '../../data/UsersRecient';
import ListInformation from './ListInformation';
const Recient = () => {
    return (
        <div>
          <ListInformation title={'Reciente'} users={recientUsers} /> 
        </div>
    );
}

export default Recient;
