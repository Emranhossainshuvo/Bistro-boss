import { useLoaderData } from "react-router-dom";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";


const UpdateItem = () => {

    const item = useLoaderData(); 

    return (
        <div>
            <SectionTitles heading="update item" subHeading="Share, what's the new"></SectionTitles>            
        </div>
    );
};

export default UpdateItem;