import imgProfile from '../../../assets/profile.jpg'
// eslint-disable-next-line react/prop-types
const Profile = ({name}) => {
    return (
        <div className='flex gap-3 items-center'>
            <span>{name}</span>
            <div className='w-[40px]'>
                <img className='rounded-md' src={imgProfile} />
            </div>
        </div>
    );
}

export default Profile;
