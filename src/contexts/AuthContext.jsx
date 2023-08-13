import { React, createContext, useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
const AuthContextProvider = createContext();

const AuthContext = ({ children }) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const [reviews, setReviews] = useState([]);
  const [userBookingsHistory, setUserBookingHistory] = useState([]);
  const [remainingPayments, setReamainingPayments] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [roomId, setRoomId] = useState("");

  const fetchUserBookings = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://smoggy-cheddar-banon.glitch.me/userbookings/getBookings?userName=${user.name}`
      );
      const data = response.data;
      setUserBookings(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const fetchUserPayments = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://smoggy-cheddar-banon.glitch.me/payments/getPayments?userName=${user.name}`
      );
      const data = response.data;
      setReamainingPayments(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const fetchSingleUserBooking = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://smoggy-cheddar-banon.glitch.me/userbookings/getSingleBooking?id=${id}&userName=${user.name}`
      );
      const data = response.data;
      setUserBookings(data);
      setRoomId(data[0].roomId);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const fetchDataForAddingReview = async () => {
    try {
      const response = await axios.get(
        `https://smoggy-cheddar-banon.glitch.me/userbookings/getBookingsHistory?userName=${user.name}`
      );
      const data = await response.data;
      setUserBookingHistory(data);
    } catch (err) {
      console.log(err);
    }
  };

  const AddReview = async () => {
    for (const booking of userBookingsHistory) {
      const { _id, userName } = booking;
      const response = await axios.get(
        `https://smoggy-cheddar-banon.glitch.me/userbookings/getSingleBookings?id=${_id}&userName=${userName}`
      );
      const data = response.data;
      if (data.length === 0) {
        const responseReview = await axios.get(
          `http://localhost:4000/reviews/getreviewforaddingreview?bookingId=${_id}&userName=${userName}`
        );
        const dataReview = await responseReview.data;
        if (dataReview.length === 0) {
          axios.post(
            `https://smoggy-cheddar-banon.glitch.me/reviews/addreview?bookingId=${_id}&userName=${userName}`
          );
        }
      }
    }
  };

  const fetchUserReviews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://smoggy-cheddar-banon.glitch.me/reviews/getreviews?userName=${user.name}`
      );
      const data = response.data;
      setReviews(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const fetchGivenReviews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://smoggy-cheddar-banon.glitch.me/reviews/getAllReviews`
      );
      const data = response.data;
      setReviews(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const fetchSingleUserReview = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://smoggy-cheddar-banon.glitch.me/reviews/getsinglereview?id=${id}&userName=${user.name}`
      );
      const data = response.data;
      data.length === 1 && setReviews(data[0]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  return (
    <AuthContextProvider.Provider
      value={{
        loginWithRedirect,
        logout,
        isAuthenticated,
        user,
        userBookings,
        fetchSingleUserBooking,
        fetchUserBookings,
        loading,
        roomId,
        remainingPayments,
        fetchUserPayments,
        fetchDataForAddingReview,
        AddReview,
        userBookingsHistory,
        reviews,
        fetchUserReviews,
        fetchSingleUserReview,
        fetchGivenReviews,
      }}
    >
      {children}
    </AuthContextProvider.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContextProvider);
};
export { AuthContext, AuthContextProvider };
