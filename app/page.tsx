import { Feature } from "@/components/Feature/feature";
import { Footer } from "@/components/Footer/footer";
import Heading from "@/components/Heading/heading";
import { Service } from "@/components/Service/service";
// import { VideoPage } from "@/components/VideoPage/videoPage";

export default function Home() {
  return (
    <div className="flex flex-col lg:gap-0">
      <Heading />
      <Feature />
      {/* <VideoPage /> */}
      <Service />
      <Footer />
    </div>
  );
}
