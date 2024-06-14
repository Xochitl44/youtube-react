export default function Categories() {
    const categories = [
        "All", 
        "Music", 
        "Gaming", 
        "Code", 
        "Programming", 
        "Lifestyle", 
        "Sports"
    ];

    return (
        <div className="flex flex-row gap-2">
              {categories.map((category) => {
                return (
                    <span key={`category-${category}`} className="pt-2 pr-4 rounded-lg bg-gray-500/[.06] text-white">
                        {category}
                    </span>
                );
              })}
        </div>
    );
}