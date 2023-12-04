import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {

    const  {user} = useAuth(); 

    return (
        <>
            <h2 className="text-3xl">Welcome back {
            user?.displayName ? user.displayName : 'Back'
            }</h2>
        </>
    );
};

export default AdminHome;