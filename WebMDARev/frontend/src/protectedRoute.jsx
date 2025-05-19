import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedroles }) {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    // console.log('ProtectedRoute:', { token, role, allowedroles });

    if (!token) {
        return <Navigate to={'/Login-admin-123'} />
    }

    if (!allowedroles.includes(role)) {
        return <Navigate to={'/'} />
    }
    return children;
}

// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//     const role = localStorage.getItem("role");
//     const isAdmin = role === "admin";

//     return isAdmin ? children : <Navigate to="/" />;
// };

// export default ProtectedRoute;