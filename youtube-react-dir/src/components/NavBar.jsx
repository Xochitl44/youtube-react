import YouTubeLogo from './YouTubeLogo';

export default function NavBar () {
    return (
        <nav className="col-start-1 col-end-3 grid grid-cols-3">
            <div className='flex flex-row items-center gap-1 pl-4'>
                <YouTubeLogo height='1.8rem' width="3rem" />
                <span>YouTube</span>
            </div>
            <div className="flex items-center justify-center">
                <input className="w-full pt-2 pr-4 border-solid border-2 border-neutral-900 bg-transparent rounded-full" type='text' placeholder='
                Search' />                
            </div>
            <div className="flex justify-end">
                <img className='w-8 h-8 rounded' src="https://api.dicebear.com/8.x/notionists/svg?seed=Xochitl" alt='user' />
            </div>
        </nav>
    );
};