"use client";

import Header from "./components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  FileText,
  User,
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  // ─────────────────────────────────────────────────────────────────────────────
  // Projects data (with thumbnails)
  // ─────────────────────────────────────────────────────────────────────────────
  const allProjects = [
    {
      category: "Energy Policy",
      title: "New Jersey Energy Master Plan Analysis",
      thumbnail: "/thumbnails/nj.png",
      description:
        "Economic modeling of renewable energy strategies and LCOE analysis for policy recommendations",
      affiliation: "Independent research using datasets from NREL, EIA, and DOE",
      skills: ["LCOE Modeling", "Policy Evaluation", "Cost-Benefit Analysis"],
      link: "https://drive.google.com/file/d/1PV8nWaHGb6zQKCY_s1b78vnRoZvuhAU3/preview",
    },
    {
      category: "Climate Action",
      title: "Bloomington HeatWatch Initiative",
      thumbnail: "/thumbnails/heat.png",
      description:
        "Urban heat island mapping and vulnerability assessment for climate resilience",
      affiliation:
        "Conducted in collaboration with NOAA and CAPA Strategies, informing local adaptation strategies",
      skills: ["Project Management", "Stakeholder Engagement", "Data Visualization"],
      link: "https://drive.google.com/file/d/1Erbs-hvKcFaGa9b7KJ17uDgr9HiBd2B4/preview",
    },
    {
      category: "Community Research",
      title: "Bloomington Community Heat Survey",
      thumbnail: "/thumbnails/survey.png",
      description:
        "Citywide heat vulnerability survey and analysis across 64 neighborhoods",
      affiliation:
        "Findings directly informed Bloomington’s Extreme Heat Action Plan",
      skills: ["Survey Design", "RStudio", "Public Engagement", "Report Writing"],
      link: "https://drive.google.com/file/d/1ECmvGh8H--fCEfnWW0hwE9D8wLRi7j-R/preview",
    },
    {
      category: "International Policy",
      title: "Central Asia Hydrological Hazards",
      thumbnail: "/thumbnails/hydro.png",
      description:
        "Policy analysis for U.S. Department of State on Early Warning Systems and disaster resilience",
      affiliation:
        "Identified infrastructure gaps and proposed improvements for cross-border coordination",
      skills: ["Policy Analysis", "ArcGIS", "Hazard Mapping", "Technical Editing"],
      link: "https://drive.google.com/file/d/1FBQRoZ9_SimDnA_SeAm-LRyjdRC1uglM/preview",
    },
    {
      category: "Climate Planning",
      title: "South Bend Climate Action Plan",
      thumbnail: "/thumbnails/sbcap.png",
      description:
        "Social vulnerability assessment and GIS mapping to support equity-centered policy",
      affiliation:
        "Collaborated on targeted recommendations for city-led climate action",
      skills: ["Vulnerability Mapping", "Demographic Analysis", "Policy Recommendations"],
      link: "https://drive.google.com/file/d/1KtfZAgfHWIOgKdgehOKTU09mfcqBnSgO/preview",
    },
    {
      category: "Governance & Emissions",
      title: "Effective Governance and CO₂ Emissions",
      thumbnail: "/thumbnails/co2.png",
      description:
        "Graduate-level research linking governance indicators to CO₂ outcomes through regression modeling",
      affiliation:
        "Refined models to assess institutional effectiveness and climate performance",
      skills: ["Policy Analysis", "Econometrics", "RStudio"],
      link: "https://drive.google.com/file/d/1DnoZ90SDusd_mJ-RqkrzgJG5KEq3tJRt/preview",
    },
    // Hidden by default (View More)
    {
      category: "Data & Market Insights",
      title: "Real Insight Residential Market Report",
      thumbnail: "/thumbnails/housing.png",
      description:
        "Quarterly industry report analyzing housing trends and buyer behavior in India",
      affiliation:
        "Developed automated Tableau dashboards and authored data-driven insights",
      skills: ["Tableau", "Survey Analysis", "Data Visualization", "Report Writing"],
      link: "https://drive.google.com/file/d/1xnE3fVR5MnbkXtszhEqb_RJp988NOyn8/preview",
    },
    {
      category: "Women’s Economic Empowerment",
      title: "Pilot Review – UNDP Disha",
      thumbnail: "/thumbnails/undp.png",
      description:
        "Process evaluation of entrepreneurship mentorship model for rural women in Haryana",
      affiliation:
        "Assessed implementation, psycho-social training, and market engagement strategies",
      skills: ["Field Research", "Qualitative Analysis", "M&E", "Report Writing"],
      link: "https://drive.google.com/file/d/14uZPRj2C0nXVon0W6fBL7JhpZ7tVWq6Q/preview",
    },
  ];

  // View More toggle state
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6);

  // Contact form submission state
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      {/* ───────────────────────────────────────────────────────────────────────── */}
      {/* 1) Header */}
      {/* ───────────────────────────────────────────────────────────────────────── */}
      <Header />

      {/* Push content down so header doesn’t overlap */}
      <div className="pt-15">
        {/* ─────────────────────────────────────────────────────────────────────── */}
        {/* 2) Hero Section */}
        {/* ─────────────────────────────────────────────────────────────────────── */}
        <section id="home" className="relative h-screen">
          {/* Background image */}
          <img
            src="/Gemini_Generated_Image_23fetk23fetk23fe.png"
            alt="Hero background"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
              Anurag Bhat
            </h1>
            <h2 className="mt-4 text-2xl md:text-3xl text-white">
              MPA, M.Sc. Economics - Policy Analyst &amp; Interdisciplinary Researcher
            </h2>
            <p className="mt-4 max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed">
              Grounded in economics, sustainability, and public affairs, I work across
              sectors to advance data-informed solutions that build resilience, equity,
              and climate readiness.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white/10"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white/10"
              >
                <a
                  href="https://drive.google.com/file/d/11uDN1wH3Zuj-aS-fZc4Gvmeg_oll-g0d/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────── */}
        {/* 3) About Section */}
        {/* ─────────────────────────────────────────────────────────────────────── */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-6">
            {/* Section Heading */}
            <div className="space-y-2 text-center mb-12">
              <Badge variant="outline" className="w-fit mx-auto">
                <User className="w-3 h-3 mr-1" />
                About Me
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-800">
                Driving Change at the Intersection of Policy, Equity &amp; Climate
              </h2>
            </div>

            {/* Two-column: photo + text */}
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Photo */}
              <div className="order-1 lg:order-2 flex justify-center">
                <img
                  src="/IMG_5100.jpg"
                  alt="Anurag Bhat professional photo"
                  className="max-w-xs w-full h-auto object-cover border-2 border-black"
                />
              </div>

              {/* Body copy */}
              <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I’m a policy analyst and interdisciplinary researcher with advanced training in economics,
                  sustainability, and public affairs. Holding degrees from Indiana University’s O’Neill School of
                  Public and Environmental Affairs and the Gokhale Institute of Politics and Economics, I focus on
                  data-driven solutions to pressing challenges in environmental policy, climate justice, and equitable
                  development.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My work spans government, nonprofit, and academic sectors, including collaborations with the U.S.
                  Department of State, NOAA, the City of Bloomington, UNDP, local and state governments, and several
                  public institutions and universities in India. I’ve contributed to projects in municipal climate
                  planning, national energy policy evaluation, and socio-environmental field research in both urban and
                  remote regions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With experience in regulatory administration, applied data science, and cross-cultural community
                  engagement, I bring a global and interdisciplinary lens to public problem-solving. Currently, I’m
                  advancing community-informed energy equity and supporting the design of inclusive climate resilience
                  strategies. I strive to translate complex data into public insights that drive just, sustainable
                  outcomes.
                </p>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────────────── */}
            {/* 3.1) Education Subsection */}
            {/* ─────────────────────────────────────────────────────────────────────── */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Education</h3>

              <div className="space-y-12">
                {/* Master of Public Affairs */}
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 mt-1 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-gray-800">Master of Public Affairs</p>
                    <p className="text-sm italic text-gray-600">
                      Indiana University, Bloomington, IN, USA ― O’Neill School of Public and Environmental Affairs
                    </p>
                    <p className="text-sm text-gray-600 mt-0.5">(2023 – 2025)</p>
                    <p className="text-sm text-gray-600">Concentration: Policy Analysis and Sustainability</p>

                    <div className="mt-2">
                      <p className="text-sm font-semibold text-gray-700">Advanced Courses:</p>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4 mt-1">
                        <li>Data Science for Public and Environmental Affairs</li>
                        <li>Data Analysis for Public and Environmental Affairs</li>
                        <li>Public Program Evaluation</li>
                        <li>Environmental Policy Design &amp; Implementation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Master of Science in Economics */}
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 mt-1 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-gray-800">Master of Science in Economics</p>
                    <p className="text-sm italic text-gray-600">
                      Gokhale Institute of Politics and Economics, Pune, India
                    </p>
                    <p className="text-sm text-gray-600 mt-0.5">(2016 – 2018)</p>
                    <p className="text-sm text-gray-600">Major: Development Economics</p>

                    <div className="mt-2">
                      <p className="text-sm font-semibold text-gray-700">Advanced Courses:</p>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4 mt-1">
                        <li>Econometrics II</li>
                        <li>Microeconomics II</li>
                        <li>Population Studies and Health Economics</li>
                        <li>Transport Economics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bachelor of Management Studies */}
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 mt-1 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-gray-800">Bachelor of Management Studies</p>
                    <p className="text-sm italic text-gray-600">University of Delhi, India</p>
                    <p className="text-sm text-gray-600 mt-0.5">(2013 – 2016)</p>
                    <p className="text-sm text-gray-600">Major: Finance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────────────── */}
            {/* 3.2) Skills / Fellowships / Languages */}
            {/* ─────────────────────────────────────────────────────────────────────── */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Skills Box */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Skills</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Policy analysis and research methodology</li>
                  <li>Statistical modeling and data visualization</li>
                  <li>Technical writing and report development</li>
                  <li>Community engagement</li>
                  <li>Project management</li>
                  <li>Survey design and GIS</li>
                  <li>Advanced Excel</li>
                  <li>R, Python, STATA, and Tableau</li>
                </ul>
              </div>

              {/* Languages Box */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Languages</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>English (Fluent)</li>
                  <li>Hindi (Fluent)</li>
                  <li>Urdu (Fluent)</li>
                  <li>Punjabi (Fluent)</li>
                  <li>Kashmiri (Fluent)</li>
                  <li>Marathi (Professional)</li>
                  <li>Bangla (Basic)</li>
                </ul>
              </div>

              {/* Fellowships Box */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Fellowships</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>McKinney Climate Fellow (2024)</li>
                  <li>Environmental Justice Fellow (2024–25)</li>
                  <li>Paul H. O’Neill School Fellow (2024–25)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────── */}
        {/* 4) Projects Section */}
        {/* ─────────────────────────────────────────────────────────────────────── */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-6">
            <div className="space-y-2 text-center mb-12">
              <Badge variant="outline" className="w-fit mx-auto">
                <FileText className="w-3 h-3 mr-1" />
                Featured Projects &amp; Reports
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Research &amp; Policy Impact
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600">
                Explore my work in environmental policy analysis, climate research, and sustainability initiatives.
              </p>
            </div>

            {/* Grid of project tiles */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {displayedProjects.map((proj, idx) => (
                <a
                  key={idx}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-md border border-gray-200 rounded-lg overflow-hidden transform transition hover:shadow-xl hover:scale-105"
                >
                  {/* Thumbnail */}
                  <div className="w-full h-32">
                    <img
                      src={proj.thumbnail}
                      alt={`${proj.title} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card content */}
                  <div className="p-6">
                    <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-2 py-1 rounded mb-2">
                      {proj.category}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-gray-800">
                      {proj.title}
                    </h3>

                    <p className="mt-2 text-gray-600">{proj.description}</p>

                    <p className="mt-2 text-gray-500 italic text-sm">{proj.affiliation}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {proj.skills.map((skill, sidx) => (
                        <span
                          key={sidx}
                          className="inline-block border border-gray-300 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* View More / View Less toggle */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-sm text-gray-700 px-4 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
              >
                {showAll ? "View Less" : "View More"}
              </button>
            </div>
          </div>
        </section>



        {/* ─────────────────────────────────────────────────────────────────────── */}
        {/* 5) Career Journey (Experience) */}
        {/* ─────────────────────────────────────────────────────────────────────── */}
        <section id="experience" className="py-24 bg-muted/50">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="space-y-2 text-center mb-12">
              <Badge variant="outline" className="w-fit mx-auto">
                <Briefcase className="w-3 h-3 mr-1" />
                Professional Experience
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Career Journey
              </h2>
            </div>

            {/* Each experience tile */}
            <div className="space-y-12">
              {[
                {
                  title: "Independent Researcher",
                  org: "Indiana University Bloomington",
                  location: "Bloomington, Indiana, USA",
                  dates: "Sep 2024 – Jan 2025",
                  bullets: [
                    "Performed independent research focused on the 2019 New Jersey Energy Master Plan (EMP) using NREL, EIA, and DOE data.",
                    "Conducted LCOE and carbon‐cost analyses to assess cost‐effectiveness of clean energy strategies.",
                    "Contributed to ratepayer‐impact studies and feasibility assessments for solar and wind integration.",
                  ],
                },
                {
                  title: "McKinney Climate Fellow",
                  org: "City of Bloomington, IN",
                  location: "Bloomington, Indiana, USA",
                  dates: "May 2024 – Dec 2024",
                  bullets: [
                    "Led the HeatWatch initiative in collaboration with NOAA and CAPA Strategies to produce the city’s heat map.",
                    "Conducted a community heat‐survey across 64 neighborhoods, informing the city’s Extreme Heat Action Plan.",
                    "Revised the Climate Resilience Plan by integrating new ordinances and equity-focused strategies.",
                  ],
                },
                {
                  title: "Graduate Teaching Assistant",
                  org: "Indiana University Bloomington",
                  location: "Bloomington, Indiana, USA",
                  dates: "Aug 2023 – May 2025",
                  bullets: [
                    "Supported 400+ students across five Public Affairs courses (data analysis, budgeting).",
                    "Led tutoring sessions and office hours to improve student performance in applied policy analysis.",
                    "Managed grading, feedback, and project coordination while enhancing course materials.",
                  ],
                },
                {
                  title: "Associate – Research | Growth and Marketing",
                  org: "REA India, Gurugram",
                  location: "Gurugram, India",
                  dates: "Feb 2023 – Aug 2023",
                  bullets: [
                    "Developed interactive Tableau dashboards and authored reports analyzing housing and market trends.",
                    "Conducted policy research and survey analysis to inform stakeholder decision-making.",
                  ],
                },
                {
                  title: "Sub Inspector – State Taxes Department",
                  org: "Government of Jammu & Kashmir",
                  location: "Srinagar, India",
                  dates: "Nov 2021 – Feb 2023",
                  bullets: [
                    "Oversaw tax audits, returns, and regulatory compliance for firms in suburban Srinagar.",
                    "Strengthened enforcement measures and improved revenue collection from SMEs.",
                  ],
                },
                {
                  title: "Field Investigator",
                  org: "Central University Jammu",
                  location: "Jammu, India",
                  dates: "May 2021 – Sept 2021",
                  bullets: [
                    "Collected household data from 2,400+ households for a NITI Aayog–funded study in the Indian Himalayas.",
                    "Produced field reports and assisted in analysis of socioeconomic trends across remote districts.",
                  ],
                },
                {
                  title: "Consultant",
                  org: "Gokhale Institute of Politics and Economics",
                  location: "Pune, India",
                  dates: "Feb 2020 – Jul 2020",
                  bullets: [
                    "Co-authored background research papers analyzing demographic and socioeconomic disparities using census and NFHS data.",
                    "Conducted statistical analysis for ICSSR-funded research under Dr. Suddhasil Siddhanta.",
                  ],
                },
                {
                  title: "Research Assistant",
                  org: "Indian Development Foundation (UNDP Project)",
                  location: "Gurugram, India",
                  dates: "Jul 2019 – Dec 2019",
                  bullets: [
                    "Led M&E efforts for 120+ pilot projects under the UNDP Disha initiative.",
                    "Designed and implemented survey instruments and conducted interviews for qualitative insights.",
                  ],
                },
                {
                  title: "Research Assistant",
                  org: "Indian Institute of Management, Udaipur",
                  location: "Udaipur, India",
                  dates: "Jan 2019 – Jun 2019",
                  bullets: [
                    "Supported faculty with data collection, econometric modeling, and LaTeX report generation.",
                    "Performed literature reviews and preliminary data analysis for multiple research projects.",
                  ],
                },
                {
                  title: "Teaching Assistant – Macroeconomics",
                  org: "Indian Institute of Management, Udaipur",
                  location: "Udaipur, India",
                  dates: "Sept 2018 – Jan 2019",
                  bullets: [
                    "Delivered remedial sessions and supported curriculum design for undergraduate macroeconomics.",
                  ],
                },
              ].map((exp, idx) => (
                <Card
                  key={idx}
                  className="w-full border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Left column */}
                    <div className="lg:w-1/3 bg-gray-50 p-6 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <p className="italic text-gray-600 mt-1">{exp.org}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{exp.location}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{exp.dates}</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden lg:block w-px bg-gray-200" />

                    {/* Right column */}
                    <div className="lg:w-2/3 p-6">
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {exp.bullets.map((bullet, bidx) => (
                          <li key={bidx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------- */}
{/* 6) Contact Section */}
{/* ------------------------------- */}
<section id="contact" className="py-24 bg-muted/50">
  <div className="container mx-auto px-6">
    {/* Section Header */}
    <div className="space-y-2 text-center mb-12">
      <Badge variant="outline" className="w-fit mx-auto">
        <Mail className="w-3 h-3 mr-1" />
        Get In Touch
      </Badge>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
        Let's Connect
      </h2>
      <p className="mx-auto max-w-[600px] text-gray-600">
        Interested in collaboration or have questions about my work? I’d love to hear from you.
      </p>
    </div>

    <div className="grid gap-12 lg:grid-cols-2">
      {/* ───────────────────────────────────────── */}
      {/* Left Box: Contact Info + Buttons */}
      {/* ───────────────────────────────────────── */}
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          {/* 1) Emails on a single line, both clickable */}
          <div className="flex items-center space-x-3 mb-4">
            <Mail className="w-5 h-5 text-primary" />
            <p className="text-gray-800">
              <a
                href="mailto:anuragbhat94@gmail.com"
                className="hover:underline"
              >
                anuragbhat94@gmail.com
              </a>
              {"  |  "}
              <a
                href="mailto:bhat@iu.edu"
                className="hover:underline"
              >
                bhat@iu.edu
              </a>
            </p>
          </div>

          {/* 2) Phone */}
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium text-gray-800">Phone</p>
              <p className="text-sm text-gray-600">+1 (930) 333-4618</p>
            </div>
          </div>

          {/* 3) Location */}
          <div className="flex items-center space-x-3 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium text-gray-800">Location</p>
              <p className="text-sm text-gray-600">Bloomington, Indiana</p>
            </div>
          </div>

          {/* 4) LinkedIn */}
          <div className="flex items-center space-x-3 mb-6">
            <Linkedin className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium text-gray-800">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/anurag-bhat-7136a187/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                Connect with me
              </a>
            </div>
          </div>

          {/* 5) Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Send Email */}
            <Button
              asChild
              className="flex-1 bg-black hover:bg-gray-800 text-white"
            >
              <a href="mailto:anuragbhat94@gmail.com">
                <Mail className="w-4 h-4 mr-2 inline-block" />
                Send Email
              </a>
            </Button>

            {/* Download CV */}
            <Button
              asChild
              variant="outline"
              className="flex-1 hover:bg-gray-100 text-gray-800"
            >
              <a
                href="https://drive.google.com/file/d/11uDN1wH3Zuj-aS-fZc4Gvmeg_oll-g0d/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 mr-2 inline-block" />
                Download CV
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ───────────────────────────────────────── */}
      {/* Right Box: “Send a Message” Form */}
      {/* ───────────────────────────────────────── */}
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
          <CardDescription>
            I’m always open to discussing new opportunities and collaborations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Show success / error banners */}
          {submissionStatus === "success" && (
            <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submissionStatus === "error" && (
            <div className="mb-4 p-4 bg-red-100 text-red-800 rounded">
              Oops! Something went wrong. Please try again later.
            </div>
          )}

          {/* Formspree form */}
          <form
            action="https://formspree.io/f/xpwraenj"
            method="POST"
            onSubmit={(e) => {
              setSubmissionStatus("idle");
              setIsSubmitting(true);
            }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="emailForm"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="emailForm"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What's this about?"
                className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="messageForm"
                className="text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="messageForm"
                name="message"
                required
                placeholder="Your message..."
                rows={4}
                className="w-full px-3 py-2 border border-input rounded-md bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <Button
                type="submit"
                className={`w-full ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


        {/* ─────────────────────────────────────────────────────────────────────── */}
        {/* 7) Footer */}
        {/* ─────────────────────────────────────────────────────────────────────── */}
        <footer className="border-t py-6">
          <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Anurag Bhat. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.linkedin.com/in/anurag-bhat-7136a187/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:anuragbhat94@gmail.com" className="text-gray-600 hover:text-gray-800">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
