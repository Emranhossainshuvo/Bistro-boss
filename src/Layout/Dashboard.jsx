import { NavLink, Outlet } from "react-router-dom";
import { MdBook, MdCalendarToday, MdHome, MdList, MdMenu, MdReviews, MdShoppingCart, MdWallet } from "react-icons/md";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <MdHome />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <MdCalendarToday />
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymentHistory">
                            <MdWallet />
                            payment history
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <MdShoppingCart />
                            My cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addReview">
                            <MdReviews />
                            Add review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myBooking">
                            <MdList />
                            My Booking
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <MdHome />
                             Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <MdMenu />
                             Menu
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;