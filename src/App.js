import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AdminRooms from "./components/rooms/AdminRooms";
import NavbarGeneral from "./components/NavbarGeneral";
import AddRoom from "./components/rooms/AddRoom";
import SingleRoom from "./components/rooms/SingleRoom";
import SingleRoomUser from "./components/rooms/SingleRoomUser";
import UpdateRoom from "./components/rooms/UpdateRoom";
import ViewRooms from "./components/rooms/ViewRooms";
import BookRoom from "./components/rooms/user/BookRoom";
import PendingBookings from "./components/rooms/Admin/PendingBookings";
import ApprovedBookings from "./components/rooms/Admin/ApprovedBookings";
import SingleApprovedBookings from "./components/rooms/Admin/SingleApprovedBookings";
import ManageEmployees from "./components/employees/ManageEmployees";
import AddEmployee from "./components/employees/AddEmployee";
import UpdateEmployee from "./components/employees/UpdateEmployee";
import SingleEmployeePage from "./components/employees/SingleEmployeePage";
import UserBookings from "./components/rooms/user/UserBookings";
import SingleUserBooking from "./components/rooms/user/SingleUserBooking";
import ReamainingPayments from "./components/rooms/user/ReamainingPayments";
import UserReviews from "./components/rooms/user/UserReviews";
import Reviews from "./components/rooms/user/Reviews";
import Revenue from "./components/Revenue";
import AdminPrivateRoute from "./pages/AdminPrivateRoute";
import UserPrivateRoute from "./pages/UserPrivateRoute";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ViewReviews from "./components/ViewReviews";
function App() {
  return (
    <>
      <Router>
        <NavbarGeneral />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/managerooms"
            element={
              <AdminPrivateRoute>
                <AdminRooms />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/managerooms/addroom"
            element={
              <AdminPrivateRoute>
                <AddRoom />
              </AdminPrivateRoute>
            }
          />
          <Route path="/managerooms/:id" element={<SingleRoom />} />
          <Route
            path="/managerooms/updateroom/:id"
            element={
              <AdminPrivateRoute>
                <UpdateRoom />
              </AdminPrivateRoute>
            }
          />
          <Route path="/viewrooms" element={<ViewRooms />} />
          <Route path="/viewrooms/:id" element={<SingleRoomUser />} />
          <Route
            path="/viewrooms/bookroom/:id"
            element={
              <UserPrivateRoute>
                <BookRoom />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/pendingbookings"
            element={
              <AdminPrivateRoute>
                <PendingBookings />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/approvedbookings"
            element={
              <AdminPrivateRoute>
                <ApprovedBookings />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/approvedbookings/:id"
            element={
              <AdminPrivateRoute>
                <SingleApprovedBookings />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/manageemployees"
            element={
              <AdminPrivateRoute>
                <ManageEmployees />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/manageemployees/addemployee"
            element={
              <AdminPrivateRoute>
                <AddEmployee />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/manageemployees/:id"
            element={
              <AdminPrivateRoute>
                <SingleEmployeePage />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/revenue"
            element={
              <AdminPrivateRoute>
                <Revenue />
              </AdminPrivateRoute>
            }
          />
          <Route path="/reviews" element={<ViewReviews />} />
          <Route
            path={`/manageemployees/updateemployee/:id`}
            element={<UpdateEmployee />}
          />
          <Route
            path={`/userbookings`}
            element={
              <UserPrivateRoute>
                <UserBookings />
              </UserPrivateRoute>
            }
          />
          <Route
            path={`/userbookings/:id`}
            element={
              <UserPrivateRoute>
                <SingleUserBooking />
              </UserPrivateRoute>
            }
          />
          <Route
            path={`/pendingpayments`}
            element={
              <UserPrivateRoute>
                <ReamainingPayments />
              </UserPrivateRoute>
            }
          />
          <Route
            path={`/userreviews`}
            element={
              <UserPrivateRoute>
                <UserReviews />
              </UserPrivateRoute>
            }
          />
          <Route
            path={`/userreviews/:id`}
            element={
              <UserPrivateRoute>
                <Reviews />
              </UserPrivateRoute>
            }
          />
          <Route path={`/aboutus`} element={<AboutUs />} />
          <Route path={`/contactus`} element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
