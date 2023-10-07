import { Outlet } from "react-router-dom"

const MainLayOut = () => {

    return (
        <div>
            header here
            <div className="min-h-[70vh]">
                <Outlet />
            </div>
            footer here
        </div>
    )
}

export default MainLayOut