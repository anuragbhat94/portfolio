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
  const assetPath = (path: string) =>
    process.env.NODE_ENV === "production" ? `/portfolio${path}` : path;

  // ─────────────────────────────────────────────────────────────────────────────
  // Projects data (with thumbnails)
  // ─────────────────────────────────────────────────────────────────────────────
  type Project = {
    category: string;
    title: string;
    thumbnail: string;
    thumbnailAlt?: string;
    description: string;
    affiliation: string;
    skills: string[];
    link?: string;
    status?: string;
  };

  const allProjects: Project[] = [
    {
      category: "Community Development · Regional Strategy",
      title: "Marshall County Countywide Housing Strategy",
      thumbnail: "/thumbnails/marshall-housing.svg",
      thumbnailAlt: "Marshall County housing strategy in development",
      description:
        "Leading a countywide process that brings municipalities, community organizations, and regional partners together around shared housing and infrastructure priorities.",
      affiliation:
        "The work translates local needs into scoped initiatives, resource pathways, and an implementation roadmap.",
      skills: ["Program Leadership", "Regional Strategy", "Stakeholder Coordination", "Implementation Planning"],
      status: "Strategy in development",
    },
    {
      category: "Civic Technology · Public Administration",
      title: "South Bend Public Systems Modernization",
      thumbnail: "/thumbnails/south-bend-dashboard.svg",
      thumbnailAlt: "Dashboard in development",
      description:
        "Supporting the City of South Bend in making public information and digital tools more usable, accessible, and maintainable.",
      affiliation:
        "Work includes a public budget dashboard, data definitions and maintenance documentation, and ADA-focused standards for ArcGIS applications.",
      skills: ["Power BI", "Public Systems", "Digital Accessibility", "Documentation"],
      status: "Dashboard in development",
    },
    {
      category: "Applied Research · National Policy",
      title: "Energy Justice Policy Infrastructure",
      thumbnail: "/thumbnails/enforcement-review.svg",
      thumbnailAlt: "Research and policy infrastructure project",
      description:
        "Supported national research on environmental-law enforcement disparities and utility-disconnection protections.",
      affiliation:
        "Screened and classified 825 research records and helped structure a 68-field, 50-state policy database for the Energy Justice Lab’s national dashboard.",
      skills: ["Research Evaluation", "Policy Databases", "Environmental Justice", "Research Synthesis"],
      status: "Manuscript in preparation",
    },
    {
      category: "Energy Policy · Strategy Evaluation",
      title: "Reassessing New Jersey’s Energy Strategy",
      thumbnail: "/thumbnails/nj-2024.webp",
      description:
        "Produced two independent evaluations of New Jersey’s energy strategy using federal and state data, policy research, affordability analysis, and resource-adequacy evidence.",
      affiliation:
        "The 2026 reassessment proposes readiness benchmarks, greater cost transparency, and an actionable transition framework.",
      skills: ["Energy Strategy", "Affordability", "Resource Adequacy", "Policy Evaluation"],
      link: "https://drive.google.com/file/d/14jRyXV2xhTQ33h-8Ro1X-fW5OWtXaL-4/preview",
    },
    {
      category: "Energy Policy · Economic Evaluation",
      title: "Evaluating New Jersey’s 2019 Energy Master Plan",
      thumbnail: "/thumbnails/nj.webp",
      description:
        "Evaluated New Jersey’s 2019 Energy Master Plan using federal and state datasets, policy research, and cost-effectiveness analysis.",
      affiliation:
        "The analysis examined renewable integration, levelized energy costs, the social cost of carbon, feasibility, and potential ratepayer impacts.",
      skills: ["Energy Policy", "Economic Analysis", "LCOE", "Policy Research"],
      link: "https://drive.google.com/file/d/1PV8nWaHGb6zQKCY_s1b78vnRoZvuhAU3/preview",
    },
    {
      category: "Climate Adaptation · Community Implementation",
      title: "Bloomington Heat Resilience",
      thumbnail: "/thumbnails/heat.webp",
      description:
        "Led Bloomington’s HeatWatch initiative with NOAA and CAPA Strategies, coordinated more than 60 volunteers, and combined citywide heat mapping with a survey across 64 neighborhoods.",
      affiliation:
        "The findings informed infrastructure planning, the Extreme Heat Action Plan, and updates to the city’s Climate Resilience Plan.",
      skills: ["Project Leadership", "Community Engagement", "Climate Adaptation", "Data Visualization"],
      link: "https://drive.google.com/file/d/1Erbs-hvKcFaGa9b7KJ17uDgr9HiBd2B4/preview",
    },
    {
      category: "Community Research",
      title: "Bloomington Community Heat Survey",
      thumbnail: "/thumbnails/survey.webp",
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
      thumbnail: "/thumbnails/hydro.webp",
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
      thumbnail: "/thumbnails/sbcap.webp",
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
      thumbnail: "/thumbnails/co2.webp",
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
      thumbnail: "/thumbnails/housing.webp",
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
      thumbnail: "/thumbnails/undp.webp",
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
            src={assetPath("/hero-sustainability.webp")}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
              Anurag Bhat
            </h1>
            <h2 className="mt-4 text-2xl md:text-3xl text-white">
              Civic Innovation &amp; Program Strategy
            </h2>
            <p className="mt-3 text-base md:text-lg font-medium tracking-wide text-white/85">
              Community Development · Public-Sector Modernization · Research &amp; Evaluation
            </p>
            <p className="mt-4 max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed">
              I help public and mission-driven organizations turn complex community needs into
              coordinated strategies, practical systems, and implementable programs.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white/10"
              >
                <Link href="#projects">Explore Selected Work</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white/10"
              >
                <Link href="#experience">View Experience</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white/10"
              >
                <a
                  href={assetPath("/resume.pdf")} target="_blank" rel="noopener noreferrer">
  Download Résumé
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
                From Evidence to Coordinated Action
              </h2>
            </div>

            {/* Two-column: photo + text */}
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Photo */}
              <div className="order-1 lg:order-2 flex justify-center">
                <img
                  src={assetPath("/anurag-bhat-headshot.webp")}
                  alt="Anurag Bhat professional photo"
                  className="max-w-xs w-full h-auto object-cover border-2 border-black"
                />
              </div>

              {/* Body copy */}
              <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I’m a civic innovation and program strategy professional with more than seven years of experience
                  across government, nonprofit, university, and consulting settings in the United States and India.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My work sits between analysis and delivery: defining complex problems, aligning sponsors and
                  partners, structuring workstreams, and translating evidence into decisions, implementation roadmaps,
                  and maintainable public systems.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As an Innovation Fellow at enFocus, I lead and support regional initiatives for municipal and
                  community partners. My current work includes leading a countywide housing strategy for Marshall
                  County, developing a public-facing budget dashboard for the City of South Bend, and establishing
                  accessibility standards for ArcGIS applications and other public digital tools.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Earlier work spans energy-strategy evaluation, environmental-justice research, municipal climate
                  resilience, tax administration, higher education, and housing-market research. This breadth allows me
                  to work across technical specialists, public officials, community organizations, researchers, and
                  implementation teams.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I’m particularly interested in work where project leadership, stakeholder coordination, and strategy
                  come together to produce measurable public value.
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
            {/* 3.2) How I Work */}
            {/* ─────────────────────────────────────────────────────────────────────── */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">How I Work</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  ["Program and Project Leadership", "Define project scopes, workplans, roles, decision points, and implementation pathways while coordinating sponsors and cross-functional contributors."],
                  ["Strategy and Implementation", "Translate research, public input, and institutional needs into priorities, roadmaps, resource pathways, and actionable recommendations."],
                  ["Stakeholder Coordination", "Bring public officials, community organizations, subject-matter experts, and project teams together around shared objectives and practical decisions."],
                  ["Public Systems Modernization", "Support accessible dashboards, data practices, governance standards, documentation, and maintainable technology workflows."],
                  ["Research and Evaluation", "Synthesize policy, administrative, quantitative, and community evidence into decision-ready products."],
                ].map(([title, description]) => (
                  <div key={title} className="border border-gray-200 rounded-lg p-6 bg-white">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">{title}</h4>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                  </div>
                ))}
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
                Selected Public-Impact Work
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600">
                Work spanning community development, public systems, applied research, energy strategy, and climate adaptation.
              </p>
            </div>

            {/* Grid of project tiles */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {displayedProjects.map((proj, idx) => {
                const cardContent = (
                  <>
                  {/* Thumbnail */}
                  <div className="relative w-full h-32">
                    <img
                      src={assetPath(proj.thumbnail)}
                      alt={proj.thumbnailAlt ?? `${proj.title} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                    {proj.status && (
                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-emerald-900 shadow-sm">
                        {proj.status}
                      </span>
                    )}
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
                  </>
                );

                return proj.link ? (
                  <a
                    key={idx}
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-md overflow-hidden rounded-lg border border-gray-200 transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                    aria-label={`View ${proj.title}`}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <article
                    key={idx}
                    className="w-full max-w-md overflow-hidden rounded-lg border border-gray-200 bg-white"
                  >
                    {cardContent}
                  </article>
                );
              })}
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
                Experience and Leadership
              </h2>
            </div>

            {/* Each experience tile */}
            <div className="space-y-12">
              {[
                {
                  group: "Current Leadership",
                  title: "Innovation Fellow",
                  org: "enFocus",
                  location: "South Bend Region, Indiana, USA",
                  dates: "Jan 2026 – Present",
                  bullets: [
                    "Lead development of a countywide housing strategy for Marshall County, coordinating municipalities, community organizations, and regional partners to translate housing and infrastructure needs into strategic priorities, project scopes, and implementation pathways.",
                    "Built a public-facing municipal budget dashboard in Power BI, integrating multi-source financial data into accessible views that improve public understanding and support departmental decision-making.",
                    "Developed ADA accessibility guidance and standard operating procedures for ArcGIS applications and other public-facing digital tools, translating WCAG 2.1 AA requirements into practical, maintainable compliance workflows.",
                  ],
                },
                {
                  group: "Professional Experience",
                  title: "Research Assistant",
                  org: "Indiana University O’Neill School / Energy Justice Lab",
                  location: "Indiana, USA",
                  dates: "Jul 2025 – Dec 2025",
                  bullets: [
                    "Supported a systematic review examining disparities in U.S. environmental-law enforcement, screening and classifying 825 research records to build a rigorous evidence base for analysis.",
                    "Conducted a 50-state review of utility-disconnection protections and structured a 68-field policy database for the Energy Justice Lab’s national dashboard.",
                    "Synthesized statutes, regulations, administrative materials, and scholarly evidence into structured research products that enable cross-state comparison and policy analysis.",
                  ],
                },
                {
                  group: "Professional Experience",
                  title: "Independent Researcher",
                  org: "Gnarly Tree Sustainability Institute",
                  location: "Indiana, USA",
                  dates: "Sep 2024 – Jan 2025",
                  bullets: [
                    "Conducted research on the 2019 New Jersey Energy Master Plan through literature reviews and analysis of NREL, EIA, DOE, and state datasets.",
                    "Applied analytical models to calculate solar and wind LCOE and integrate EPA’s Social Cost of Carbon, producing estimates of emissions-reduction cost-effectiveness.",
                  ],
                },
                {
                  group: "Professional Experience",
                  title: "McKinney Climate Fellow",
                  org: "City of Bloomington",
                  location: "Indiana, USA",
                  dates: "May 2024 – Dec 2024",
                  bullets: [
                    "Spearheaded the HeatWatch initiative with NOAA and CAPA Strategies, coordinating logistics, training 60+ volunteers, and delivering a citywide urban heat map used in infrastructure planning and published on the city’s website.",
                    "Designed and executed a community heat survey across 64 neighborhoods, translating resident input and spatial data into insights that shaped Bloomington’s Extreme Heat Action Plan.",
                    "Updated Bloomington’s Climate Resilience Plan by integrating recent ordinances and translating technical goals into community-driven, equity-focused strategies.",
                  ],
                },
                {
                  group: "Professional Experience",
                  title: "Sub Inspector – State Taxes Department",
                  org: "Government of Jammu & Kashmir",
                  location: "Srinagar, India",
                  dates: "Nov 2021 – Feb 2023",
                  bullets: [
                    "Managed the tax-administration life cycle for firms in suburban Srinagar, including audits, returns verification, reimbursements, and small-industry compliance.",
                    "Implemented inspections of products and production units, strengthening regulatory adherence and contributing to increased revenue collection.",
                  ],
                },
                {
                  group: "Professional Experience",
                  title: "Graduate Teaching Assistant",
                  org: "Indiana University Bloomington",
                  location: "Bloomington, Indiana, USA",
                  dates: "Aug 2023 – May 2025",
                  bullets: [
                    "Supported over 400 undergraduate students across five courses by leading office hours, providing one-on-one tutoring, and applying evidence-based instructional strategies to strengthen comprehension and analytical skills.",
                    "Managed grading, coordinated student projects, and maintained course operations to support faculty and improve student outcomes.",
                  ],
                },
                {
                  group: "Professional Experience",
                  title: "Associate – Research | Growth and Marketing",
                  org: "REA India, Gurugram",
                  location: "Gurugram, India",
                  dates: "Feb 2023 – Aug 2023",
                  bullets: [
                    "Conducted survey analysis and policy reviews to produce thought-leadership reports with industry insights.",
                    "Built automated dashboards that improved data access and supported stakeholder decision-making.",
                  ],
                },
                {
                  group: "Professional Experience",
                  title: "Field Investigator",
                  org: "Central University Jammu",
                  location: "Jammu, India",
                  dates: "May 2021 – Sep 2021",
                  bullets: [
                    "Executed household sampling and data collection covering 2,400 households across Jammu and Ladakh for a NITI Aayog theme study.",
                    "Analyzed field observations and collected data to identify key trends and produce detailed field-experience reports.",
                  ],
                },
                {
                  group: "Professional Experience",
                  title: "Consultant",
                  org: "Gokhale Institute of Politics and Economics",
                  location: "Pune, India",
                  dates: "Feb 2020 – Jul 2020",
                  bullets: [
                    "Analyzed census and National Family Health Survey data for an Indian Council for Social Science Research project on demographic and socioeconomic disparities across social groups.",
                    "Co-authored background papers and an interim report, advancing the project through secondary-data development and analysis.",
                  ],
                },
                {
                  group: "Professional Experience",
                  title: "Research Assistant",
                  org: "Indian Development Foundation (UNDP Project)",
                  location: "Gurugram, India",
                  dates: "Jul 2019 – Dec 2019",
                  bullets: [
                    "Monitored KPIs for 120 pilot projects under UNDP’s Disha initiative, combining field and management-information-system data into detailed progress reports.",
                    "Designed survey instruments and conducted interviews and focus groups to generate quantitative and qualitative field insights.",
                  ],
                },
                {
                  group: "Professional Experience",
                  title: "Academic Assistant",
                  org: "Indian Institute of Management, Udaipur",
                  location: "Udaipur, India",
                  dates: "Sep 2018 – Jun 2019",
                  bullets: [
                    "Supported faculty teaching and research by leading remedial macroeconomics sessions, designing instructional materials, reviewing literature, and conducting data analysis and mathematical modeling.",
                    "Delivered one-on-one tutoring, created LaTeX research outputs, and contributed to coursework development, strengthening student learning and faculty research.",
                  ],
                },
              ].map((exp, idx, experiences) => (
                <div key={idx} className="space-y-5">
                  {(idx === 0 || experiences[idx - 1].group !== exp.group) && (
                    <h3 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-3">
                      {exp.group}
                    </h3>
                  )}
                <Card
                  className={`w-full rounded-lg overflow-hidden ${
                    exp.group === "Current Leadership"
                      ? "border-2 border-emerald-700 shadow-md"
                      : "border border-gray-200"
                  }`}
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
                </div>
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
        Let’s Work on Complex Public Challenges
      </h2>
      <p className="mx-auto max-w-[600px] text-gray-600">
        I’m open to conversations about program strategy, project leadership, civic innovation,
        community development, and public-sector modernization roles with mission-driven organizations.
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
              <p className="text-sm text-gray-600">South Bend, Indiana</p>
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
                href={assetPath("/resume.pdf")} target="_blank" rel="noopener noreferrer">
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
