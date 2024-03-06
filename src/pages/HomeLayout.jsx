import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar } from "../components";

function HomeLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
}

export default HomeLayout;
