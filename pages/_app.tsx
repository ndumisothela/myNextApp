import type { AppProps } from "next/app";
import "../src/app/globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6  my-14 px-5 lg:px-48">
      <div className="col-span-12 p-5 lg:col-span-4 bg-white rounded-lg text-center ">
        <Sidebar />
      </div>
      <div className="col-span-12 lg:col-span-8 flex flex-col bg-white rounded-lg overflow-hidden">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default App;
