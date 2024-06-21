"use client";
import Main from "@/views/main/Main";
import MainLayout from "@/views/layout/MainLayout";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <main>
        <Main />
      </main>
    </MainLayout>
  );
};

export default Home;
