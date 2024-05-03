import Footer from "@/components/shared/Footer/Footer";
import Navber from "@/components/shared/Navber/Navber";

const Commonlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navber />
      <div className="min-h-screen"> {children}</div>
      <Footer />
    </>
  );
};

export default Commonlayout;
