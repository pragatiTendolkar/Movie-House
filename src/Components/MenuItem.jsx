import React from 'react';
import { CiSearch, CiHome } from "react-icons/ci";
import { IoTvOutline } from "react-icons/io5";

const MenuItem = () => {
    const Menuitem = [
        { name: 'Search', Icon: CiSearch, id: 1 },
        { name: 'Home', Icon: CiHome, id: 2 },
        { name: 'TV', Icon: IoTvOutline, id: 3 },
    ];

    return (
        <div className='bg-slate-700 w-[20%] h-[100vh] absolute top-0 left-0 flex justify-center opacity-50 flex-col'>
            {Menuitem.map(({ name, Icon, id }) => (
                <div key={id} className='flex p-5 gap-3' >
                    <div className="name-icon flex items-center text-2xl gap-3">
                        <Icon />
                        {name}
                    </div>


                </div>
            ))}
        </div>
    );
};

export default MenuItem;
