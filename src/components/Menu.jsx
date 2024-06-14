export default function Menu () {
    
    // list rendering
    const menuItems = [
        { icon: '🏠', text: 'Home' },
        { icon: '🎥', text: 'Shorts' },
        { icon: '⏰', text: 'Subscriptions' },
        { icon: '😍', text: 'Favorites' },

    ];
    
    
    return (
        <aside className="col-start-1 col-end-2 row-start-2 row-end-3 pt-0 pr-0 pb-0 pl-4">
            {menuItems.map((item) => {
                return (
                    <div key={`menu-item-${item.text}`} className="pt-4 flex flex-row gap-1 items-center 
                    rounded-lg text-white
                    hover:bg-gray-500/[.06]">
                        <span>{item.icon}</span>
                        <span>{item.text}</span>
                    </div> 
                    );
                })}
        </aside>
    );
};