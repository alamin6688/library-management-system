import BookPage from "@/components/AllBooks/bookPage";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>
      <p>Welcome to your Library Management App!</p>
      <BookPage />
    </div>
  );
};

export default Home;
