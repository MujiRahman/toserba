import React from 'react'
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import {hum, toko, trolly} from '../../../assets';

interface header{
    children: string;
}

const Header: React.FC<header> = ({children}) => {
    return (
        <nav className="absolute shadow bg-white w-full bg-white flex p-4 px-6 items-center">
            <div className="flex items-center w-1/2">
                <img src={toko} alt="toko" className="hidden md:block flex-none h-20 ml-16"/>
                <img src={hum} alt="humberger" className="md:hidden h-6"/>
                <h2 className="md:hidden font-sans text-green-500 font-medium text-2xl">Toserba</h2>
            </div>
            <p className="hidden md:block font-sans text-green-500 text-3xl font-medium">kategori</p>
            <div className=" hidden md:block">
                <Input placeholder="search" type="search" className=" bg-gray-200 p-2 pl8"/>
                <img src={trolly} alt="trolly" className=" flex-none w-10 h-10" />
                <img src="" alt=""/>
                <img src="" alt=""/>
            </div>
            <div className="flex justify-end w-1/2 md:w-3/6 justify-around">
                <Button children="Daftar" className="hidden md:block uppercase text-sm"/>
                <Button children="Masuk" className="uppercase text-sm" />
            </div>
        </nav>
        
    )
}

export default Header;
