import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="#home" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">Anurag Bhat</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#publications" className="transition-colors hover:text-foreground/80">
                Publications
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button asChild size="sm">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20" />
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Environmental landscape with climate data visualization"
          width={1200}
          height={600}
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Anurag Bhat</h1>
            <p className="mx-auto max-w-[700px] text-lg text-gray-200 md:text-xl mt-4">
              Environmental Policy Analyst & Sustainability Researcher
            </p>
            <p className="mx-auto max-w-[600px] text-gray-300 mt-2">
              Bridging economics, policy, and environmental science to drive meaningful climate action and sustainable
              development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Link href="#contact">Download CV</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/50">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">
                  <User className="w-3 h-3 mr-1" />
                  About Me
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Driving Climate Action Through Policy & Research
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a Master of Public Affairs candidate at Indiana University's O'Neill School, specializing in
                  Policy Analysis and Sustainability. With an interdisciplinary background spanning economics,
                  environmental policy, and public administration, I tackle complex challenges at the intersection of
                  environment, economy, and equity.
                </p>
                <p>
                  My professional journey includes leading climate initiatives as a McKinney Climate Fellow with the
                  City of Bloomington, conducting independent research on renewable energy policies, and managing
                  regulatory compliance in government settings. I bring cross-cultural experience and a commitment to
                  evidence-based policy solutions.
                </p>
                <p>
                  Currently, I'm focused on environmental justice, climate resilience planning, and the economic
                  analysis of sustainable energy transitions. My work aims to inform policy decisions that promote both
                  environmental sustainability and social equity.
                </p>
              </div>

              {/* Education Timeline */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Education</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-5 h-5 mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium">Master of Public Affairs</p>
                      <p className="text-sm text-muted-foreground">Indiana University, Bloomington (2023-2025)</p>
                      <p className="text-sm text-muted-foreground">Concentration: Policy Analysis and Sustainability</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-5 h-5 mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium">Master of Science in Economics</p>
                      <p className="text-sm text-muted-foreground">
                        Gokhale Institute of Politics and Economics (2016-2018)
                      </p>
                      <p className="text-sm text-muted-foreground">Major: Development Economics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-5 h-5 mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium">Bachelor of Management Studies</p>
                      <p className="text-sm text-muted-foreground">University of Delhi (2013-2016)</p>
                      <p className="text-sm text-muted-foreground">Major: Finance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="space-y-6">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Anurag Bhat professional headshot"
                  width={300}
                  height={400}
                  className="rounded-lg object-cover"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Current Fellowships</h3>
                  <div className="space-y-1">
                    <Badge variant="secondary">McKinney Climate Fellow 2024</Badge>
                    <Badge variant="secondary">Environmental Justice Fellow 2024-25</Badge>
                    <Badge variant="secondary">Paul H. O'Neill School Fellow 2024-25</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">GIS</Badge>
                    <Badge variant="outline">R</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">STATA</Badge>
                    <Badge variant="outline">Tableau</Badge>
                    <Badge variant="outline">Excel</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container">
          <div className="space-y-2 text-center mb-12">
            <Badge variant="outline" className="w-fit mx-auto">
              <Briefcase className="w-3 h-3 mr-1" />
              Featured Projects
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Research & Policy Impact</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              Explore my work in environmental policy analysis, climate research, and sustainability initiatives
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Energy Policy</Badge>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-lg">New Jersey Energy Master Plan Analysis</CardTitle>
                <CardDescription>
                  Economic analysis of renewable energy strategies and LCOE modeling for policy recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Independent research with Gnarly Tree Sustainability Institute evaluating economic impacts of
                    renewable energy policies using NREL, EIA, and DOE datasets.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      Econometrics
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      LCOE Modeling
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      RStudio
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Climate Action</Badge>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-lg">Bloomington HeatWatch Initiative</CardTitle>
                <CardDescription>
                  Urban heat island mapping and community vulnerability assessment for climate resilience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Led city-wide heat mapping with 60+ volunteers, coordinating with NOAA to produce actionable
                    insights for urban cooling strategies.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      GIS
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Project Management
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Data Visualization
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">International Policy</Badge>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-lg">Central Asia Hydrological Hazards</CardTitle>
                <CardDescription>
                  Policy analysis for U.S. Department of State on disaster response systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Analyzed gaps in Early Warning Systems and conducted comparative analysis for improved community
                    disaster response capabilities.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      Policy Analysis
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      ArcGIS
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Hazard Mapping
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Community Research</Badge>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-lg">Community Heat Survey</CardTitle>
                <CardDescription>City-wide vulnerability assessment informing Extreme Heat Action Plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Designed and conducted comprehensive heat vulnerability survey across 64 neighborhoods, analyzing
                    data from 245 respondents.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      Survey Design
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Tableau
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Public Engagement
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Climate Planning</Badge>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-lg">South Bend Climate Action Plan</CardTitle>
                <CardDescription>
                  Social vulnerability assessment and equity-focused policy recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Created GIS maps highlighting vulnerability hotspots and formulated targeted social equity
                    recommendations for climate action.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      GIS
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Demographic Analysis
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Policy Recommendations
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Development Economics</Badge>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-lg">UNDP Women Entrepreneurship</CardTitle>
                <CardDescription>M&E analysis of pilot projects across 16 Indian states</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Conducted qualitative and quantitative analysis from field research, with recommendations increasing
                    program reach by 15%.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      Field Research
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Qualitative Analysis
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      M&E
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-muted/50">
        <div className="container">
          <div className="space-y-2 text-center mb-12">
            <Badge variant="outline" className="w-fit mx-auto">
              <Briefcase className="w-3 h-3 mr-1" />
              Professional Experience
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Career Journey</h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle>McKinney Climate Fellow</CardTitle>
                    <CardDescription>City of Bloomington, IN</CardDescription>
                  </div>
                  <Badge variant="outline">May 2024 – Dec 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • Directed HeatWatch initiative, coordinating 60+ volunteers and producing city heat map featured on
                    official website
                  </li>
                  <li>
                    • Led community heat survey across 64 neighborhoods, informing city's Extreme Heat Action Plan
                  </li>
                  <li>
                    • Revised Climate Resilience Plan by integrating new ordinances and enhancing community-focused
                    strategies
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle>Graduate Teaching Assistant</CardTitle>
                    <CardDescription>Indiana University Bloomington</CardDescription>
                  </div>
                  <Badge variant="outline">Aug 2023 – Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • Supported 400+ undergraduate students across five courses including data analysis and public
                    budgeting
                  </li>
                  <li>• Enhanced teaching materials using evidence-based instructional strategies</li>
                  <li>• Led office hours and tutoring sessions, improving student problem-solving skills and grades</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle>Independent Researcher</CardTitle>
                    <CardDescription>Gnarly Tree Sustainability Institute</CardDescription>
                  </div>
                  <Badge variant="outline">Sep 2024 – Jan 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Analyzed 2019 New Jersey Energy Master Plan using NREL, EIA, and DOE datasets</li>
                  <li>
                    • Calculated levelized costs of energy (LCOE) for solar and wind with regional cost considerations
                  </li>
                  <li>• Evaluated ratepayer impacts and economic feasibility of emissions reductions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle>Sub Inspector - State Taxes Department</CardTitle>
                    <CardDescription>Government of Jammu & Kashmir</CardDescription>
                  </div>
                  <Badge variant="outline">Nov 2021 – Feb 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Managed comprehensive tax administration for suburban Srinagar city firms</li>
                  <li>• Implemented enforcement measures resulting in enhanced compliance and increased revenue</li>
                  <li>• Conducted inspections and audits of small-scale industries</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24">
        <div className="container">
          <div className="space-y-2 text-center mb-12">
            <Badge variant="outline" className="w-fit mx-auto">
              <FileText className="w-3 h-3 mr-1" />
              Publications & Reports
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Research Output</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Analysis of the New Jersey Energy Master Plan</CardTitle>
                <CardDescription>
                  Economic analysis and policy recommendations for renewable energy transition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Policy Brief</Badge>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Bloomington Indiana HeatWatch Report</CardTitle>
                <CardDescription>Urban heat island mapping and vulnerability assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Research Report</Badge>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">2024 Bloomington Community Heat Survey Summary</CardTitle>
                <CardDescription>Community vulnerability assessment and policy recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Survey Report</Badge>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Evaluation of the City of South Bend 2019 Climate Action Plan</CardTitle>
                <CardDescription>Social vulnerability assessment and equity analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Policy Analysis</Badge>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Hydrological Hazards in Central Asia</CardTitle>
                <CardDescription>
                  Policy analysis for U.S. Department of State on disaster response systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Policy Brief</Badge>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Effective Governance and its Impact on CO2 Emissions</CardTitle>
                <CardDescription>
                  Regression analysis linking governance effectiveness to environmental outcomes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Research Paper</Badge>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/50">
        <div className="container">
          <div className="space-y-2 text-center mb-12">
            <Badge variant="outline" className="w-fit mx-auto">
              <Mail className="w-3 h-3 mr-1" />
              Get In Touch
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Let's Connect</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              Interested in collaboration or have questions about my work? I'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">bhat@iu.edu</p>
                      <p className="text-sm text-muted-foreground">anuragbhat94@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (930) 333-4618</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Bloomington, Indiana</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <Link href="#" className="text-sm text-primary hover:underline">
                        Connect with me
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button asChild className="flex-1">
                  <Link href="mailto:bhat@iu.edu">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link href="#">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Link>
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'm always open to discussing new opportunities and collaborations</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message..."
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anurag Bhat. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:bhat@iu.edu" className="text-muted-foreground hover:text-foreground">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
