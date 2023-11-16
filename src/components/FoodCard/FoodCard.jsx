

const FoodCard = ({item}) => {

    const {image, price, recipe, name} = item || {}; 

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food items" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 p-2 rounded-md">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-slate-700 hover:bg-slate-500 bg-slate-50 border-0 border-b-4 text-black">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;