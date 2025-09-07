import BookPage from "@/components/AllBooks/bookPage";
import Footer from "@/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl text-center font-bold mt-4">Home</h1>
      <p className="text-center mt-2">Welcome to your Library Management App!</p>
      <BookPage />
      <Footer />
    </div>
  );
};

export default Home;
