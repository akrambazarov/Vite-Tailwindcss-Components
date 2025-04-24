import React from 'react'
import Button from './assets/icons/button';
import BurgerMenu from './assets/icons/burgerMenu';

const Header = () => {
    const navItem = ['About','Features','Pricing','Testimonials','Contact'];
    
    return (
        <header className='w-[80%] z-20 relative  max-lg:w-full flex justify-between items-center p-6 max-w-7xl mx-auto'>
            <h2 className='uppercase text-white  font-extrabold max-md:text-xl'>vpng<span className='text-amber-200'>.</span></h2>
            
            {/* Десктопное меню */}
            <nav className="flex max-md:hidden text-white gap-4 mx-auto">
                {navItem.map((e,i) => (
                    <span key={i}>{e}</span>
                ))}
            </nav>
            
            {/* Десктопные кнопки */}
            <div className="flex max-md:hidden items-center gap-4">
                <button className='border-0 outline-0 text-white'>Log in</button>
                <Button 
                text="Sign Up" className="bg-amber-300 hover:bg-amber-400 transition-all"/>
            </div>
            
            {/* Мобильное меню  */}
            <nav 
                id='itemMenu' 
                className="hidden bg-gradient-to-br from-[#34b1ce] to-[#5075b6] text-white w-full flex-col absolute shadow-md top-16 left-0 p-6"
            >
                {navItem.map((e,i) => (
                    <span key={i} className="block mb-2.5">{e}</span>
                ))}
                
                <div className="flex flex-col gap-4 mt-4">
                    <button className='w-fit border-1 px-6 py-2 rounded-md outline-0 text-white text-center'>
                        Log in
                    </button>
                    <Button 
                        text="Sign Up" 
                        className="text-black bg-amber-300 hover:bg-amber-400 transition-all w-2/10 text-center"
                    />
                </div>
            </nav>
            
            {/* Бургер-кнопка */}
            <div 
                className="md:hidden cursor-pointer"
                onClick={() => {
                    const menu = document.getElementById('itemMenu');
                    menu.classList.toggle('hidden');
                }}
            >
                <BurgerMenu />
            </div>
        </header>
    )
}

export default Header