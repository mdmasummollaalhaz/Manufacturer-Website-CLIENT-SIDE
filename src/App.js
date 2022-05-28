import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './share/Header/Header';
import Footer from './share/Footer/Footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import NotFound from './pages/NotFound/NotFound';
import Purchase from './pages/Purchase/Purchase';
import RequireAuth from './components/RequireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import Payment from './pages/Dashboard/Payment';
import AllUsers from './pages/Dashboard/AllUsers';
import AddParts from './pages/Dashboard/AddParts';
import ManageParts from './pages/Dashboard/ManageParts';
import ManageOrders from './pages/Dashboard/ManageOrders';
import Blogs from './pages/Blogs/Blogs';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/my-portfolio' element={<Portfolio />} />
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path='my-orders' element={<MyOrders />} />
          <Route path='add-review' element={<AddReview />} />
          <Route index element={<MyProfile />} />
          <Route path='payment/:id' element={<Payment />} />
          <Route path='all-users' element={<AllUsers />} />
          <Route path='add-parts' element={<AddParts />} />
          <Route path='manage-parts' element={<ManageParts />} />
          <Route path='manage-orders' element={<ManageOrders />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
