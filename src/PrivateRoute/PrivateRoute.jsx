import { Navigate } from "react-router-dom";
import useGlobal from "../Hooks/useGlobal";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useGlobal();

    if (loading) {
        return <div className="h-[80vh] flex items-center justify-center">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    else if (user) {
        return children
    }
    else {
        return <Navigate to={'/login'}></Navigate>
    }
}


PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute