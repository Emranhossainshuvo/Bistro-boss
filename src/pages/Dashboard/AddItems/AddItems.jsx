import { useForm } from "react-hook-form";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";


const AddItems = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div>
            <SectionTitles subHeading={"---What's new?---"} heading={"Add an item"}></SectionTitles>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Recipe Name?*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe name"
                            {...register('name')}
                            className="input input-bordered w-full max-w-xs"
                        />

                    </div>
                    <select {...register('category')} className="select select-bordered">
                        <option disabled selected>Select a category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="drinks">Drinks</option>
                        <option value="desserts">Desserts</option>

                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;