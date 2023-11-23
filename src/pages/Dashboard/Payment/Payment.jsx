import { loadStripe } from "@stripe/stripe-js";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import { Elements } from "@stripe/react-stripe-js";

// **************publishable key needed here
const stripePromise = loadStripe(''); 
const Payment = () => {
    return (
        <div>
            <SectionTitles heading="Payment" subHeading="Pay before you eat"></SectionTitles>
            <div>
                <Elements stripe={stripePromise}>
                    
                </Elements>
            </div>
        </div>
    );
};

export default Payment;