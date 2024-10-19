/* eslint-disable no-unused-vars */
import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import { useUser } from "@clerk/clerk-react";
import Header from "./components/layout/Header";
import  Toaster  from "./components/ui/Toaster";

function App() {
	const { user, isLoaded, isSignedIn } = useUser();
	if (!isSignedIn && isLoaded) {
		return <Navigate to={"/auth/sign-in"} />;
	}
	return (
		<>
			<Header />
			<Outlet />
			<Toaster />
		</>
	);
}

export default App;
