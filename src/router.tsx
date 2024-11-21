import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/global/loader/loader";
import HomeLayout from "./layouts/homeLayout/homeLayout";

const Home = lazy(() => import("./pages/home/home"));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <HomeLayout>
                <Home />
              </HomeLayout>
            </Suspense>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
