
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
// import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid"; // ✅ Adjust path if necessary
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="overflow-hidden w-full h-auto">
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />  
        
      </div>
      
      
    </main>
    <Footer />
    </div>
  );
}
