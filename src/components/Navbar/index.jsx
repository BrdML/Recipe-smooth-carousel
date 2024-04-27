import Image from 'next/image';
import React from 'react';

function NavBar() {
  return (
    <div className='flex justify-between items-center p-10 align'>
        <div className="menu-burger">
            <Image 
                src={"/assets/images/hamburger.svg"}
                width={40}
                height={40}
                alt="Avatar"
            />
        </div>
        <div className="search-content flex gap-10 justify-between items-center">
            <div>
            <Image 
                src={"/assets/images/search.svg"}
                width={40}
                height={40}
                alt="Avatar"
            />
            </div>
            <Image 
                src={"/assets/images/Avatar.jpg"}
                width={40}
                height={40}
                alt="Avatar"
                className="rounded-full"
            />
        </div>
    </div>
  )
}

export default NavBar