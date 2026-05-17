"use client";

import { useState } from "react";

const content: Record<string, any> = {
  th: {
    role: "นักพัฒนา Frontend",
    heroDesc:
      "ฉันเป็นคนที่กระตือรือร้นและชอบลองสิ่งใหม่ ๆ อยู่เสมอ ชอบท้าทายตัวเองกับชุมชนและสภาพแวดล้อมที่หลากหลาย มีความมุ่งมั่นและตั้งใจในการทำงาน พร้อมเรียนรู้และพัฒนาตัวเองอยู่เสมอ",
    viewProjects: "ดูผลงาน",
    downloadResume: "ดาวน์โหลด Resume",
    aboutLabel: "เกี่ยวกับฉัน",
    aboutTitle: "สร้างเว็บไซต์ที่ทั้ง สวย และใช้งานได้จริง",
    aboutDesc:
      "มีประสบการณ์ด้าน Frontend Development และ UX/UI Design ทั้งการออกแบบเว็บไซต์ ระบบ Dashboard และ Web Application พร้อมเข้าใจการทำ Responsive Design และ Modern UI",
    contactLabel: "ติดต่อ",
    locationLabel: "ที่อยู่",
    locationValue: "374/7 หอพักรอนงค์การ์เดนท์ ซอยวงศ์สว่าง 11 ถนนวงศ์สว่าง แขวงวงศ์สว่าง เขตบางซื่อ กทม. 10800",
    eduLabel: "การศึกษา",
    eduTitle: "ประวัติการศึกษา",
    skillsLabel: "ทักษะ",
    skillsTitle: "เทคโนโลยีที่ใช้",
    projectsLabel: "ผลงาน",
    projectsTitle: "ผลงานที่โดดเด่น",
    expLabel: "ประสบการณ์",
    expTitle: "ประสบการณ์การทำงาน",
    viewProject: "ดูผลงาน",
    whatIDid: "งานที่ทำ",
    moreImages: "ภาพเพิ่มเติม",
    thankYou: "ขอบคุณ",
    footerSub: "นักพัฒนา Frontend & นักออกแบบ UI",
    educations: [
      {
        period: "2564 – 2568",
        level: "มหาวิทยาลัย",
        school: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
        detail: "คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม · สาขาการจัดการเทคโนโลยีการผลิตและสารสนเทศ",
        gpax: "2.71",
      },
      {
        period: "2560 – 2563",
        level: "ประกาศนียบัตรวิชาชีพ (ปวช.)",
        school: "วิทยาลัยการอาชีพกบินทร์บุรี",
        detail: "สาขาคอมพิวเตอร์ธุรกิจ",
        gpax: "3.38",
      },
    ],
    experiences: [
      {
        period: "มกราคม 2569 – ปัจจุบัน",
        role: "ตำแหน่ง Frontend Developer",
        company: "บริษัท วิสดอม เซ็นทริค จำกัด",
        items: [
          "พัฒนาระบบภายในบริษัท",
          "ออกแบบ UX/UI, Infographic และไอคอนสำหรับใช้ภายในระบบและเว็บไซต์ และทำเทมเพลตสไลด์ใน PPT",
          "โพสต์ข่าวสำคัญเรื่อง IT และรูปวันสำคัญ",
        ],
      },
      {
        period: "กรกฎาคม 2567 – เมษายน 2568",
        role: "นักศึกษาฝึกงาน ตำแหน่งผู้ช่วยโปรแกรมเมอร์",
        company: "บริษัท มอสกี้ คอร์ปอเรชั่น จำกัด",
        items: [
          "ออกแบบและพัฒนาเว็บไซต์ภายในองค์กร",
          "พัฒนา Dashboard ของ SmartFarm",
          "ปรับปรุง UI หน้าโปรแกรม Remote Control Desktop",
        ],
      },
      {
        period: "ตุลาคม 2562 – กุมภาพันธ์ 2563",
        role: "นักศึกษาฝึกงาน",
        company: "บริษัท ไทยอี เมทัล เวิร์คส จำกัด",
        items: [
          "การจัดการเอกสาร",
          "วัดคุณภาพเหล็ก",
          "บันทึกข้อมูลคุณภาพเหล็กรายวันลงใน Excel",
          "เจ้าหน้าที่ห้องพัสดุ",
        ],
      },
    ],
    projects: [
      {
        title: "SmartFarm Dashboard",
        description:
          "ออกแบบและพัฒนา Dashboard สำหรับระบบ SmartFarm พร้อมแสดงข้อมูล IoT แบบ Real-time และ UX/UI ที่ใช้งานง่าย รองรับ Responsive ทั้ง Desktop และ Mobile",
        details: [
          "ออกแบบ UI Dashboard แสดงข้อมูลเซ็นเซอร์ IoT แบบ Real-time",
          "พัฒนาหน้าแสดงสถานะ Greenhouse แต่ละหลัง",
          "เชื่อมต่อข้อมูลผ่าน ThingsBoard.io",
          "ออกแบบไอคอนสำหรับใช้ภายใน Dashboard",
        ],
        tech: ["HTML", "JavaScript", "CSS", "ThingsBoard.io", "Dashboard", "IoT"],
        image: "/image/dashboard.jpg",
        images: ["/image/dashboard.jpg", "/image/fan.jpg"],
      },
      {
        title: "Employee Check-in System",
        description:
          "พัฒนาระบบเช็คอินพนักงานภายในองค์กร พร้อมระบบบันทึกเวลา ตรวจสอบสถานะ และออกแบบ UX/UI สำหรับการใช้งานจริง",
        details: [
          "พัฒนาระบบบันทึกเวลาเข้า-ออกงานของพนักงาน",
          "ออกแบบหน้า Dashboard แสดงสถานะพนักงานแบบ Real-time",
          "เชื่อมต่อฐานข้อมูลด้วย Supabase",
          "ออกแบบ UX/UI ให้ใช้งานง่าย รองรับ Responsive",
          "พัฒนาระบบจัดการข้อมูลภายในองค์กรด้วย Next.js",
        ],
        tech: ["Next.js", "JavaScript", "Tailwind CSS", "Supabase", "UX/UI", "Responsive Design"],
        image: "/image/system.jpg",
        images: ["/image/system.jpg", "/image/LOGINDT.jpg", "/image/MB.jpg", "/image/AT.jpg", "/image/MBAT.jpg", "/image/DB.jpg"],
      },
      {
        title: "UX/UI Mobile and Desktop Design",
        description:
          "ออกแบบ UX/UI สำหรับ Mobile และ Desktop Application ด้วยแนวคิด Modern Minimal พร้อมวิเคราะห์ User Flow และ Prototype",
        details: [
          "วิเคราะห์ User Flow และจัดทำ Wireframe",
          "ออกแบบ UI ด้วยแนวคิด Modern Minimal",
          "สร้าง Interactive Prototype ใน Figma",
          "จัดทำ Design System สำหรับใช้งานในทีม",
        ],
        tech: ["Figma", "Prototype", "UX/UI", "Wireframe", "Design System"],
        image: "/image/uxui.jpg",
        links: [
          {
            label: "📱 Mobile Prototype",
            url: "https://www.figma.com/proto/9vddZM8Bo91w4j6gWu8qdG/WCIS?node-id=98-1399&viewport=340%2C429%2C0.12&t=n7UYsiYPoMKRGF5i-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=144%3A425&show-proto-sidebar=1&page-id=0%3A1",
          },
          {
            label: "🖥️ Desktop Prototype",
            url: "https://www.figma.com/proto/gDtELyvAYDGav05aeLCgOb/Untitled?node-id=181-576&p=f&viewport=40%2C79%2C0.11&t=Hhgz8BWwU6ILxHPF-1&scaling=scale-down&content-scaling=fixed&page-id=181%3A190",
          },
        ],
      },
      {
        title: "Business Website & Management System",
        description:
          "พัฒนาเว็บไซต์และระบบจัดการภายในองค์กร พร้อมออกแบบ UI/UX และพัฒนา Responsive Design สำหรับการใช้งานจริง",
        details: [
          "พัฒนาเว็บไซต์บริษัทด้วย WordPress และ Elementor",
          "ออกแบบ UI/UX และ Responsive Design",
          "สร้าง Dashboard สำหรับจัดการข้อมูล",
        ],
        tech: ["WordPress", "Elementor", "CSS", "Next.js", "Dashboard", "Responsive"],
        image: "/image/web.png",
        images: ["/image/web.png", "/image/codesuite.png", "/image/inven.png", "/image/kp.png"],
      },
      {
        title: "Corporate Graphic & IT Media Design",
        description:
          "ออกแบบ Graphic สำหรับโพสต์ข่าวสาร IT สื่อประชาสัมพันธ์ และ Content ภายในองค์กร เพื่อใช้บน Social Media และเว็บไซต์บริษัท",
        details: [
          "ออกแบบ Graphic สำหรับโพสต์ข่าวสาร IT บน Social Media",
          "สร้าง Infographic และไอคอนสำหรับใช้ภายในองค์กร",
          "ออกแบบสื่อประชาสัมพันธ์และ Content วันสำคัญ",
          "จัดทำเทมเพลต PPT สำหรับการนำเสนองาน",
        ],
        tech: ["Canva", "Figma", "Graphic Design", "Social Media", "Branding"],
        image: "/image/graphic.jpg",
        images: ["/image/graphic.jpg", "/image/1.jpg", "/image/2.jpg", "/image/3.jpg", "/image/4.jpg", "/image/5.jpg", "/image/6.jpg"],
      },
    ],
  },
  en: {
    role: "Frontend Developer",
    heroDesc:
      "I am an active person who always tries new things and challenges myself with different communities and environments. Easy-going, Enthusiastic, and energetic — passionate about building great web experiences.",
    viewProjects: "View Projects",
    downloadResume: "Download Resume",
    aboutLabel: "ABOUT ME",
    aboutTitle: "Building websites that are both beautiful and functional",
    aboutDesc:
      "Experienced in Frontend Development and UX/UI Design — including website design, Dashboard systems, and Web Applications. Skilled in Responsive Design and Modern UI.",
    contactLabel: "CONTACT",
    locationLabel: "Location",
    locationValue: "374/7 Ornong Dormitory, Wong Sawang 11, Bang Sue, Bangkok 10800",
    eduLabel: "EDUCATION",
    eduTitle: "Education",
    skillsLabel: "SKILLS",
    skillsTitle: "Tech Stack",
    projectsLabel: "PROJECTS",
    projectsTitle: "Featured Projects",
    expLabel: "EXPERIENCE",
    expTitle: "Work Experience",
    viewProject: "View Project",
    whatIDid: "What I did",
    moreImages: "More Images",
    thankYou: "THANK YOU",
    footerSub: "Frontend Developer & UI Designer",
    educations: [
      {
        period: "2021 – 2025",
        level: "University",
        school: "King Mongkut's University of Technology North Bangkok",
        detail: "Industrial Technology College · Department of Information and Production Management",
        gpax: "2.71",
      },
      {
        period: "2017 – 2020",
        level: "Vocational Certificate",
        school: "Kabinburi Industrial and Community Education College",
        detail: "Department of Business Computer",
        gpax: "3.38",
      },
    ],
    experiences: [
      {
        period: "January 2026 – Present",
        role: "Frontend Developer",
        company: "Wisdom Centric Co., Ltd.",
        items: [
          "Develop and maintain internal company systems.",
          "Design UX/UI, infographics, icons for internal systems and websites, and PowerPoint presentation templates.",
          "Create and publish IT-related news content and important occasion graphics.",
        ],
      },
      {
        period: "July 2024 – April 2025",
        role: "Intern : Assistant Programmer",
        company: "Moscii Corporation Co., Ltd.",
        items: [
          "Designed and developed internal websites for the organization",
          "Developed a SmartFarm Dashboard system",
          "Improved the UI of the Remote Control Desktop application",
        ],
      },
      {
        period: "Oct 2019 – Feb 2020",
        role: "Intern",
        company: "Thai Vir Metal Works Company Limited",
        items: [
          "Document Management",
          "Measure steel quality",
          "Enter daily steel quality data into Excel",
          "Parcel room officer",
        ],
      },
    ],
    projects: [
      {
        title: "SmartFarm Dashboard",
        description:
          "Designed and developed a SmartFarm Dashboard with real-time IoT data visualization and an intuitive UX/UI, fully responsive for both Desktop and Mobile.",
        details: [
          "Designed a real-time IoT sensor data visualization UI",
          "Developed individual Greenhouse status monitoring pages",
          "Implemented Responsive Design for Desktop and Mobile",
          "Integrated data via ThingsBoard.io",
          "Designed custom icons for use within the Dashboard",
        ],
        tech: ["HTML", "JavaScript", "CSS", "ThingsBoard.io", "Dashboard", "IoT"],
        image: "/image/dashboard.jpg",
        images: ["/image/dashboard.jpg", "/image/fan.jpg"],
      },
      {
        title: "Employee Check-in System",
        description:
          "Developed an in-house employee check-in system with time tracking, status monitoring, and a practical UX/UI designed for real-world organizational use.",
        details: [
          "Built a time-in/time-out recording system for employees",
          "Designed a real-time employee status Dashboard",
          "Integrated database with Supabase",
          "Designed intuitive UX/UI with responsive layout",
        ],
        tech: ["Next.js", "JavaScript", "Tailwind CSS", "Supabase", "UX/UI", "Responsive Design"],
        image: "/image/system.jpg",
        images: ["/image/system.jpg", "/image/LOGINDT.jpg", "/image/MB.jpg", "/image/AT.jpg", "/image/MBAT.jpg", "/image/DB.jpg"],
      },
      {
        title: "UX/UI Mobile and Desktop Design",
        description:
          "Designed UX/UI for Mobile and Desktop Applications with a Modern Minimal concept, including User Flow analysis and interactive Prototyping.",
        details: [
          "Analyzed User Flow and created Wireframes",
          "Designed UI with a Modern Minimal concept",
          "Built interactive Prototypes in Figma",
          "Created a Design System for team-wide use",
        ],
        tech: ["Figma", "Prototype", "UX/UI", "Wireframe", "Design System"],
        image: "/image/uxui.jpg",
        links: [
          {
            label: "📱 Mobile Prototype",
            url: "https://www.figma.com/proto/9vddZM8Bo91w4j6gWu8qdG/WCIS?node-id=98-1399&viewport=340%2C429%2C0.12&t=n7UYsiYPoMKRGF5i-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=144%3A425&show-proto-sidebar=1&page-id=0%3A1",
          },
          {
            label: "🖥️ Desktop Prototype",
            url: "https://www.figma.com/proto/gDtELyvAYDGav05aeLCgOb/Untitled?node-id=181-576&p=f&viewport=40%2C79%2C0.11&t=Hhgz8BWwU6ILxHPF-1&scaling=scale-down&content-scaling=fixed&page-id=181%3A190",
          },
        ],
      },
      {
        title: "Business Website & Management System",
        description:
          "Developed a business website and internal management system with UI/UX design and responsive layout for real-world organizational use.",
        details: [
          "Built a company website using WordPress and Elementor",
          "Designed UI/UX and Responsive layout",
          "Created a Dashboard for data management",
        ],
        tech: ["WordPress", "Elementor", "CSS", "Next.js", "Dashboard", "Responsive"],
        image: "/image/web.png",
        images: ["/image/web.png", "/image/codesuite.png", "/image/inven.png", "/image/kp.png"],
      },
      {
        title: "Corporate Graphic & IT Media Design",
        description:
          "Designed graphics for IT news posts, corporate PR materials, and internal content for use on the company's Social Media and website.",
        details: [
          "Designed graphics for IT news posts on Social Media",
          "Created infographics and icons for internal use",
          "Produced PR materials and special occasion content",
          "Designed PowerPoint templates for presentations",
        ],
        tech: ["Canva", "Figma", "Graphic Design", "Social Media", "Branding"],
        image: "/image/graphic.jpg",
        images: ["/image/graphic.jpg", "/image/1.jpg", "/image/2.jpg", "/image/3.jpg", "/image/4.jpg", "/image/5.jpg", "/image/6.jpg"],
      },
    ],
  },
};

const skills = [
  "HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js",
  "Next.js", "WordPress", "Figma", "Canva", "Supabase",
  "Git", "VS Code", "Affinity Designer", "Microsoft Office", "AI Tools",
];

export default function PortfolioPage() {
  const [lang, setLang] = useState("th");
  const t = content[lang];
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-300/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-20 flex justify-end max-w-7xl mx-auto px-6 pt-6">
        <div className="flex items-center bg-slate-100 border border-slate-200 rounded-2xl p-1 gap-1">
          <button
            onClick={() => setLang("th")}
            className={`px-5 py-2 rounded-xl font-semibold text-sm transition ${
              lang === "th" ? "bg-blue-500 text-white shadow" : "text-slate-500 hover:text-blue-500"
            }`}
          >
            ไทย
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-5 py-2 rounded-xl font-semibold text-sm transition ${
              lang === "en" ? "bg-blue-500 text-white shadow" : "text-slate-500 hover:text-blue-500"
            }`}
          >
            EN
          </button>
        </div>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-blue-500 text-lg mb-4 tracking-[0.3em] uppercase">{t.role}</p>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 text-slate-900">
              {lang === "th" ? "จิราวรรณ" : "JIRAWRAN"}
              <br />
              <span className="text-blue-500">{lang === "th" ? "สองพล" : "SONGPOL"}</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-xl mb-10">{t.heroDesc}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-7 py-4 bg-blue-500 hover:bg-blue-600 text-white transition rounded-2xl font-semibold shadow-2xl shadow-blue-400/30"
              >
                {t.viewProjects}
              </a>
              <a
                href="/Resume en.pdf"
                download="Jirawran_Resume.pdf"
                className="px-7 py-4 border border-slate-300 hover:border-blue-400 hover:text-blue-500 transition rounded-2xl font-semibold text-slate-700"
              >
                {t.downloadResume}
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full" />
            <div className="relative bg-slate-100 border border-slate-200 rounded-[40px] p-6 shadow-2xl">
              <img
                src="/image/me.jpg"
                alt="profile"
                className="w-[380px] h-[500px] object-cover rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10">
            <p className="text-blue-500 font-semibold mb-4">{t.aboutLabel}</p>
            <h2 className="text-3xl font-bold mb-6 leading-tight text-slate-900">
              {lang === "th" ? (
                <>สร้างเว็บไซต์ที่ทั้ง<span className="text-blue-500"> สวย </span>และใช้งานได้จริง</>
              ) : (
                <>Building websites that are both <span className="text-blue-500">beautiful</span> and functional</>
              )}
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg">{t.aboutDesc}</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10">
            <p className="text-blue-500 font-semibold mb-6">{t.contactLabel}</p>
            <div className="space-y-5 text-slate-600 text-lg">
              <div>
                <p className="text-slate-400 mb-1">Email</p>
                <p className="text-slate-800">Jirawran0312@gmail.com</p>
              </div>
              <div>
                <p className="text-slate-400 mb-1">{lang === "th" ? "โทรศัพท์" : "Phone"}</p>
                <p className="text-slate-800">096-278-1302</p>
              </div>
              <div>
                <p className="text-slate-400 mb-1">{t.locationLabel}</p>
                <p className="text-slate-800">{t.locationValue}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <p className="text-blue-500 font-semibold mb-3">{t.eduLabel}</p>
          <h2 className="text-4xl font-bold text-slate-900">{t.eduTitle}</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {t.educations.map((edu: any, index: number) => (
            <div key={index} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <span className="px-4 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-medium">
                  {edu.level}
                </span>
                <span className="text-slate-400 text-sm">{edu.period}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.school}</h3>
              <p className="text-slate-500 text-sm mb-3">{edu.detail}</p>
              <p className="text-blue-500 font-semibold">GPA : {edu.gpax}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-blue-500 font-semibold mb-3">{t.skillsLabel}</p>
          <h2 className="text-4xl font-bold text-slate-900">{t.skillsTitle}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-400 transition duration-300 hover:-translate-y-1 shadow-sm"
            >
              <p className="font-semibold text-lg text-slate-800">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <p className="text-blue-500 font-semibold mb-3">{t.projectsLabel}</p>
          <h2 className="text-4xl font-bold text-slate-900">{t.projectsTitle}</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {t.projects.map((project: any, index: number) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-400 transition-all duration-300 shadow-sm"
            >
              <div className="overflow-hidden bg-slate-100 h-64">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="h-full flex flex-col items-center justify-center gap-3 p-6">
                    {project.links?.map((link: any, i: number) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{project.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-4 rounded-2xl bg-slate-100 hover:bg-blue-500 hover:text-white transition font-semibold text-slate-700"
                >
                  {t.viewProject}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <p className="text-blue-500 font-semibold mb-3">{t.expLabel}</p>
          <h2 className="text-4xl font-bold text-slate-900">{t.expTitle}</h2>
        </div>
        <div className="flex flex-col gap-6">
          {t.experiences.map((exp: any, index: number) => (
            <div key={index} className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                  <p className="text-blue-500 text-lg">{exp.company}</p>
                </div>
                <div className="text-slate-400">{exp.period}</div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {exp.items.map((item: any, i: number) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-slate-200 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-14 text-center">
          <h2 className="text-5xl font-black mb-4 text-slate-900">
            {lang === "th" ? (
              <><span className="text-blue-500">ขอบคุณ</span></>
            ) : (
              <>THANK <span className="text-blue-500">YOU</span></>
            )}
          </h2>
          <p className="text-slate-400 text-lg">{t.footerSub}</p>
        </div>
      </footer>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative shrink-0">
              {selectedProject.image ? (
                <>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white text-slate-700 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow transition"
                  >
                    ✕
                  </button>
                </>
              ) : (
                <div className="relative bg-slate-50 border-b border-slate-200 px-8 pt-8 pb-6 flex flex-col gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white hover:bg-slate-100 text-slate-700 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow transition"
                  >
                    ✕
                  </button>
                  <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">View Prototype</p>
                  {selectedProject.links?.map((link: any, i: number) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition shadow-md shadow-blue-200"
                    >
                      {link.label} <span className="text-xs opacity-75">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="p-8 overflow-y-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{selectedProject.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6 whitespace-pre-line">{selectedProject.description}</p>

              {selectedProject.details && (
                <div className="mb-6">
                  <p className="text-slate-700 font-semibold mb-3">{t.whatIDid}</p>
                  <ul className="space-y-2">
                    {selectedProject.details.map((detail: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-slate-500 text-sm">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {selectedProject.links && selectedProject.links.length > 0 && (
                    <div className="mt-4 flex flex-col gap-2">
                      {selectedProject.links.map((link: any, i: number) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition shadow-md shadow-blue-200 text-sm"
                        >
                          {link.label} <span className="opacity-75">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {selectedProject.images && selectedProject.images.length > 1 && (
                <div className="mb-6">
                  <p className="text-slate-700 font-semibold mb-3">{t.moreImages}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.images.slice(1).map((img: string, i: number) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${selectedProject.title} ${i + 2}`}
                        className="w-full h-40 object-cover rounded-2xl border border-slate-200"
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {selectedProject.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}