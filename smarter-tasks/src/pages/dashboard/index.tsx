
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';


const Dashboard: React.FC = () => {
 const navigate = useNavigate();
 const [user,setUser]=useLocalStorage<{
  name?:string;
  email?:string;
 }>('userData',{});

 const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setUser({}); 
    navigate('/signin');
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-4">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <p className="text-lg text-gray-700">Welcome, {user.name}</p>
      <p className="text-md text-gray-600">Email: {user.email}</p>
      <button
        id="logout-link"
        onClick={handleLogout}
        className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};
  
export default Dashboard;