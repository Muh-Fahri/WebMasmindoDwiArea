import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedroles }) {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token) {
        return <Navigate to={'/Login-admin-123'} />
    }

    if (!allowedroles.includes(role)) {
        return <Navigate to={'/'} />
    }
    return children;
}