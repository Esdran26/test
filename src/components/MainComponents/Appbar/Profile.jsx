import PropTypes from 'prop-types';
import imgProfile from '../../../assets/profile.jpg';

const Profile = ({ name }) => {
  return (
    <div className='flex gap-3 items-center'>
      <span>{name}</span>
      <div className='w-[40px]'>
        <img className='cursor-pointer rounded-md' src={imgProfile} alt='Profile' />
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Profile;
