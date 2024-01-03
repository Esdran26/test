/* eslint-disable react/prop-types */

const Cards = ({ users }) => {
    return (
        <>
            {users.map(({ img, title, info, user }, index) => {
                const date = Date.now().toString(36);
                const key = `${index}-${Math.random().toString(36)}-${date}`;

                return (
                    <div key={key} className="bg-white p-3 my-6 rounded-3xl shadow-md relative gap-2">
                        <div className="relative -mt-4">
                            <img src={img} alt="hola" className="w-full h-[150px] transform scale-110 rounded-lg" />
                        </div>
                        <div className="px-2 mt-4">
                            <p className="font-medium">{title}</p>
                            <span className="mt-2 text-gray-600">{info}</span>
                        </div>

                        <div className="flex my-2 items-center">
                            <div><img className="w-[50px] h-[50px] rounded-md m-2" src={user.imgProfile} /></div>
                            <div className="flex flex-col">
                                <p className="font-medium">{user.name}</p>
                                <p className="text-sm text-gray-500">{user.date}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Cards;
