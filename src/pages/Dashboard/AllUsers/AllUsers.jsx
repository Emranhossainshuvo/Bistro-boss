import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {

    const axiosSecure = useAxiosSecure(); 
    const {data : users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users'); 
            return res.data; 
        }
    })

    return (
        <div>
            <div className="flex justify-evenly my-4">
            <h3>All users</h3>      
            <h3>Total users: {users.length}</h3>      
            </div>
        </div>
    );
};

export default AllUsers;