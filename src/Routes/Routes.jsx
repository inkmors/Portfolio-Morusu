import { Routes, Route, BrowserRouter } from "react-router-dom"

import Programming from "../Pages/Programming/Programming"
import Creative from "../Pages/Creative/Creative"
import Error from "../Pages/Error/Error"

export default function RoutesPages() {
    return (
        <BrowserRouter>
        <div className="w-full justify-center items-center flex-col">
            
                <Routes>
                    <Route path="/" element={<Programming />} />
                    <Route path="/galery" element={<Creative />} />
                
                    <Route path="*" element={<Error />} />
                </Routes>
        </div>
        </BrowserRouter>
    )
}

