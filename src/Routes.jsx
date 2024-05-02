import { Routes, Route } from "react-router-dom";
import CreateThreadsPage from "./pages/CreateThreadsPage";
import Home from "./pages/Home";
import './index.css';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/CreateThreadsPage" element={<CreateThreadsPage />} />
        </Routes>
    )
}