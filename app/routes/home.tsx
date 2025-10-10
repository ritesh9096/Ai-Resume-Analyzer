import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "../components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "../lib/putur";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Anton Resume Analyzer" },
    {
      name: "description",
      content: "Do you care about your resume? Let's find out!",
    },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/auth?next=/");
    }
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Anton Resume Analyzer</h1>
          <p>Do you care about your resume? Let's find out!</p>
        </div>
        <div className="resumes-section">
          {resumes.map((resume: Resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      </section>
    </main>
  );
}
