import { ContactUs } from "@/components/ContactForm";
import { ProjectTile } from "@/components/ProjectTile";
import profilePic from "../../public/DSC_2071a_ok (1).jpg";
import bookGetherImg from "../../public/gallery.jpg";
import openWheelImg from "../../public/Your paragraph text (2).jpg";
import cdpBeImg from "../../public/Your paragraph text.png";
import Image from "next/image";
import { ScrollHorizontoalIndocator } from "@/components/ScrollHorizontalIndicator";
import { FadeOnView } from "@/components/FadeOnView";

const myProjects = [
  {
    title: "BookGether",
    desc: "BookGether is book sharing platform. Our mission is to reduce paper utilization and production by encouraging the sharing of books, especially those that are often read just once.",
    tools: ["TS", "Zustand", "Zod", "Tailwind", "Shadcn", "Supabase"],
    img: bookGetherImg,
    url: [
      {
        url: "https://github.com/timgio26/bookgether",
        icons: "github",
      },
      {
        url: "https://github.com/timgio26/openwheel",
        icons: "app",
      },
    ],
  },
  {
    title: "OpenWheel",
    desc: "ride-sharing application designed to connect people who have similar travel routes, enabling them to share a ride in a single vehicle",
    tools: ["TS", "Redux", "Zod", "Tailwind", "Supabase"],
    img: openWheelImg,
    url: [
      {
        url: "https://github.com/timgio26/openwheel",
        icons: "github",
      },
      {
        url: "https://openwheel.netlify.app/",
        icons: "app",
      },
    ],
  },
  {
    title: "Customer Data Platform Backend",
    desc: "Tools to manage customer & historical services for indonesian water treatment company",
    tools: ["Python", "Django"],
    img: cdpBeImg,
    url: [
      {
        url: "https://github.com/timgio26/CDP_BE",
        icons: "github",
      },
      {
        url: "https://timgio.pythonanywhere.com/",
        icons: "app",
      },
    ],
  },
];

// import { FaLinkedin,FaGithubSquare } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <ScrollHorizontoalIndocator />
      {/* top section */}
      <div className="flex flex-col sm:flex-row md:gap-20 justify-center">
        <div className="flex justify-center">
          <div className="h-60 w-60 rounded-full m-5 overflow-hidden border-4">
            {/* this is photo */}
            <Image
              src={profilePic}
              alt="Picture of the author"
              className="grayscale-25"
              // width={500} automatically provided
              // height={500} automatically provided
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <span>Hello I&apos;m</span>
          <div className="flex flex-col items-center justify-center">
            <span className="font-semibold text-3xl">Timotius Giovandi</span>
            <span>Fullstack Developer | Learner</span>
          </div>
          <div className="flex flex-row gap-5">
            <div className="px-5 py-1 rounded-full bg-gray-900 dark:bg-amber-900 text-gray-50 cursor-pointer hover:opacity-50 transition-opacity">
            <a href="/CV_Timotius Giovandi 2025 v2_1.pdf" download="CV_Timotius Giovandi">Download CV</a>
            </div>
            <div className="px-5 py-1 rounded-full border-gray-900 border-2 dark:border-amber-900 cursor-pointer hover:opacity-50 transition-opacity">
            <a href="#contact_me">Contact Me</a>
            </div>
          </div>
          {/* <div className="flex flex-row gap-4">
            <div><FaGithubSquare size={40}/></div>
            <div><FaLinkedin size={40}/></div>
          </div> */}
        </div>
      </div>

      {/* experice section */}
      <div className="flex justify-center mt-5" id="about_me">
        <span className="font-semibold border-amber-900 border-b-4 pb-3">
          Experience
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-10/12 bg-gray-300/10 p-5 rounded-xl my-5 shadow">
          <span className="text-2xl font-bold">
            Ecommerce Analyst & Web App Developer
          </span>
          <span>2020 - 2024</span>
          <span className="text-amber-900 dark:text-amber-500">
            PT Nutrifood Indonesia
          </span>
          <span>
            Consolidate e-commerce sales data with 99% accuracy using Python to
            support decision-making. Conduct data exploration, cleaning, and
            feature engineering to guide promotions and marketing. Develop and
            maintain a web application to improve internal processes, boosting
            price accuracy to 95%.
          </span>
        </div>
      </div>

      {/* education section */}
      <div className="flex justify-center mt-5">
        <span className="font-semibold border-amber-900 border-b-4 pb-3">
          Education
        </span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-10/12">
          <FadeOnView>
            <div className="flex flex-col bg-gray-300/10 p-5 rounded-xl mt-5 shadow">
              <span className="text-2xl font-bold">Business Informatics</span>
              <span>Master | 2024 - Current</span>
              <span className="text-amber-900 dark:text-amber-500">
                Univerity of Gdansk, Poland
              </span>
              {/* <span>Ecommerce Analyst & Web App Developer</span> */}
              <div className="border-t mt-2">
                <span>Relevant Coursework</span>
                <ul className="list-disc list-inside">
                  <li>Design of Human Computer Interaction</li>
                  <li>Business Applications for Small/Medium Enterprises</li>
                </ul>
              </div>
            </div>
          </FadeOnView>
        </div>
        <div className="w-10/12">
          <FadeOnView>
            <div className="flex flex-col bg-gray-300/10 p-5 rounded-xl mt-5 shadow">
              <span className="text-2xl font-bold">Chemical Engineering</span>
              <span>Bachelor | GPA: 3.66/4.00 | 2015 - 2019</span>
              <span className="text-amber-900 dark:text-amber-500">
                Institut Teknologi Sepuluh Nopember Surabaya, Indonesia
              </span>
              {/* <span>Ecommerce Analyst & Web App Developer</span> */}
              <div className="border-t mt-2">
                <span>Activities</span>
                <ul className="list-disc list-inside">
                  <li>
                    Chem E Car Team, compete in Indonesia, Australia and United
                    States
                  </li>
                  <li>
                    Process engineer intern at ammonia fertilizer factory PT
                    Pupuk Sriwidjaja
                  </li>
                  <li>Analytical chemistry lab assistant</li>
                </ul>
              </div>
            </div>
          </FadeOnView>
        </div>
      </div>

      {/* Project section */}
      <div className="flex justify-center mt-5" id="my_project">
        <span className="font-semibold border-amber-900 border-b-4 pb-3">
          Projects
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-10/12  my-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {myProjects.map((each, index) => (
              <ProjectTile data={each} key={index} />
            ))}
            {/* <ProjectTile data={}/> */}
            {/* <ProjectTile />
            <ProjectTile /> */}
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="flex justify-center mt-5">
        <span className="font-semibold border-amber-900 border-b-4 pb-3">
          Contact
        </span>
      </div>
      <div className="flex flex-col items-center px-5">
        <ContactUs />
      </div>
    </div>
  );
}
