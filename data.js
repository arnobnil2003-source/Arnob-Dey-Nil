// =====================================================
// এই ফাইলটাই তোমার পোর্টফোলিওর সব তথ্য। শুধু এখানে এডিট করলেই হবে।
// যে সেকশনের তালিকা খালি ([]) রাখবে, সেটা সাইট থেকে নিজে থেকেই লুকিয়ে যাবে।
// যে লিংকের url খালি ("") রাখবে, সেই বাটন দেখাবে না।
// [ ] এর ভেতরের লেখাগুলো নমুনা, নিজের তথ্য দিয়ে বদলে নিও।
// =====================================================

const DATA = {
  name: "Arnob Dey Nil",
  subtitle: "Veterinary Student",
  photo: "images/profile.jpg",
  badges: ["DVM Student", "Aspiring M.Sc. Researcher"],
  headline: "Veterinary student interested in rabies, epidemiology and antimicrobial resistance",
  location: "Habiganj Agricultural University, Habiganj, Bangladesh",
  email: "your.email@example.com",

  links: [
    { label: "Google Scholar", url: "" },
    { label: "ORCID", url: "" },
    { label: "LinkedIn", url: "" },
    { label: "Scopus", url: "" },
    { label: "Web of Science", url: "" },
    { label: "CV", url: "Arnob_Dey_Nil_CV.pdf" }
  ],

  about: [
    "I am a veterinary student at Habiganj Agricultural University, Bangladesh, building a research profile in epidemiology and infectious diseases. My work so far sits mostly in the One Health space, with a particular interest in rabies and antimicrobial resistance.",
    "I work within a low- and middle-income country context, which shapes the questions I ask and the methods that are practical here. My goal is to pursue an M.Sc. abroad with a scholarship and continue in public health research."
  ],

  interests: [
    "Rabies",
    "Epidemiology",
    "Antimicrobial resistance (AMR)",
    "Parasitology",
    "Microbiology",
    "Veterinary medicine",
    "Pathology"
  ],

  education: [
    {
      years: "[Start] - Present",
      title: "Doctor of Veterinary Medicine (DVM)",
      place: "Habiganj Agricultural University, Bangladesh",
      placeUrl: "",
      detail: "Faculty of Veterinary Medicine and Animal Science. [Add a line about coursework, internship or thesis.]",
      tags: ["CGPA: [add]"]
    },
    {
      years: "[Year]",
      title: "Higher Secondary Certificate (HSC)",
      place: "[Your college]",
      placeUrl: "",
      detail: "",
      tags: ["GPA: [add]"]
    }
  ],

  experience: [
    {
      years: "[Start] - Present",
      title: "Student Researcher",
      place: "[Lab, group or collaboration name]",
      placeUrl: "",
      detail: "[One or two lines on what you do: study design, data collection, analysis, writing.]",
      tags: ["Epidemiology", "Data analysis"]
    },
    {
      years: "[Year]",
      title: "[Training, workshop or volunteer role]",
      place: "[Organization]",
      placeUrl: "",
      detail: "[What you did and what you learned.]",
      tags: []
    }
  ],

  skills: [
    { group: "Research", items: ["Study design", "Questionnaire surveys", "Systematic review", "Meta-analysis", "Scientific writing"] },
    { group: "Laboratory", items: ["[Add lab techniques you have actually done]"] },
    { group: "Data and software", items: ["[R]", "[Excel]", "[Reference managers]"] },
    { group: "Languages", items: ["Bengali", "English"] }
  ],

  // প্রকাশিত পেপার না থাকলে status এ "In preparation" বা "Under review" লিখো।
  // সহ-লেখক বা সুপারভাইজারের অনুমতি ছাড়া অপ্রকাশিত পেপারের শিরোনাম দিও না।
  publications: [
    {
      year: "[Year]",
      title: "[Paper title]",
      authors: "Dey Nil A, [co-authors]",
      venue: "[Journal or conference]",
      status: "In preparation",
      url: ""
    }
  ],

  projects: [
    {
      title: "[Project name]",
      description: "[Two sentences: the question, the method, and your role.]",
      tags: ["[Tag]"],
      url: ""
    }
  ],

  awards: [
    { year: "[Year]", title: "[Award, scholarship or recognition]", detail: "" }
  ]
};
