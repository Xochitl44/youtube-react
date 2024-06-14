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
        <div id="categories-list">
              {categories.map((category) => {
                return (
                    <span key={`category-${category}`} className="category">
                        {category}
                    </span>
                );
              })}
        </div>
    );
}