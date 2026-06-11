export const MainHeader = () =>{
    return(
        <header className='bg-neutral-950 px-6 py-4 text-white'>
            <div className = 'flex'>
                <h1>Portfolio</h1>
                <nav>
                    <a href='/about'>About</a>
                    <a href='/project'>Project</a>
                    <a href='/links'>Links</a>
                    <a href='/play'>Play</a>
                </nav>
            </div>
        </header>
    );
};