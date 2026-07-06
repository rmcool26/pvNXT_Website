export type Product = {
  slug: string; name: string; tagline: string; status: "Live"|"In progress"|"Internal";
  users: string; usersShort: string; livePortal?: string;
  overview: string; capabilities: string[]; features: string[]; userChips: string[];
  screenshotLabel: string; screenshot: {width:number;height:number;ratio:string;bg:string}
  before?: string; after?: string;
}

export const products: Product[] = [
{
  slug:"studio",
  name:"pvNXT Studio",
  tagline:"EPC design and proposal workspace.",
  status:"Live",
  users:"EPC designers, sales teams, solar businesses",
  usersShort:"EPC designers, sales teams, solar businesses",
  livePortal:"https://epc.pvnxt.com/",
  overview:"pvNXT Studio is the EPC workspace for solar system design. Create layouts, run roof analysis, generate BOQ and reports, and prepare proposal-ready outputs – in one place.",
  capabilities:["Solar layout creation","Roof and shadow analysis","BOQ generation","Project reports","Proposal-ready design export","Project tracking"],
  features:["Solar layout creation","Shadow/roof analysis","BOQ","Reports","Proposal-ready output","Project tracking"],
  userChips:["EPC designers","Sales teams","Solar businesses"],
  screenshotLabel:"[ pvNXT Studio — layout & BOQ screen | client screenshot yaha aayega | ratio 16:9 | 1280x720px | bg: #ffffff ]",
  screenshot:{width:1280,height:720,ratio:"16/9",bg:"#ffffff"}
},
{
  slug:"connect",
  name:"pvNXT Connect",
  tagline:"Consumer solar portal.",
  status:"Live",
  users:"Homeowners, solar customers",
  usersShort:"Homeowners, solar customers",
  livePortal:"https://consumer.pvnxt.com/",
  overview:"pvNXT Connect is the customer-facing portal for homeowners. Check feasibility, view cost and ROI, compare quotes, track installation, and monitor plant performance – without technical jargon.",
  capabilities:["Feasibility check","Cost and ROI estimate","Quote comparison","Order and installation tracking","Plant monitoring dashboard"],
  features:["Feasibility check","Cost & ROI estimate","Quote compare","Order/installation tracking","Plant monitoring"],
  userChips:["Homeowners","Solar customers"],
  screenshotLabel:"[ pvNXT Connect — homeowner journey screen | client screenshot yaha aayega | ratio 16:9 | 1100x620px | bg: #ffffff ]",
  screenshot:{width:1100,height:620,ratio:"16/9",bg:"#ffffff"}
},
{
  slug:"go",
  name:"pvNXT Go",
  tagline:"Installer field portal.",
  status:"Live",
  users:"Installers, site teams, EPC managers",
  usersShort:"Installers, site teams, EPC managers",
  livePortal:"https://installer.pvnxt.com/",
  overview:"pvNXT Go is built for on-site installation teams. Manage site tasks, update work status, upload photo proof, and report delays with reasons – directly from the rooftop.",
  capabilities:["Site task assignment","Work status updates","Photo-proof upload","Delay reporting – weather / site / resource","Verification workflow"],
  features:["Site task assignment","Daily photo proof","Status updates","Delay-reason","Verification"],
  userChips:["Installers","Site teams","EPC managers"],
  screenshotLabel:"[ pvNXT Go — installer daily update screen | client screenshot yaha aayega | ratio 9:16 | 390x844px | bg: #ffffff ]",
  screenshot:{width:390,height:844,ratio:"9/16",bg:"#ffffff"}
},
{
  slug:"proposal",
  name:"Proposal System",
  tagline:"Automated customer proposals.",
  status:"Live",
  users:"EPC teams presenting to customers",
  usersShort:"EPC teams presenting to customers",
  livePortal:"",
  overview:"The Proposal System generates clear, customer-ready solar proposals directly from Studio project data. Includes system details, cost breakdown, subsidy, savings, and environmental impact.",
  capabilities:["Auto-generated from project data","System summary","Cost, subsidy and savings tables","Solar impact summary","Customer-friendly layout"],
  features:["Auto-generated from project data","System summary","Cost + subsidy + savings tables","Solar impact","Customer-friendly layout"],
  userChips:["EPC teams","Sales"],
  screenshotLabel:"[ Proposal System — sample proposal document | client screenshot yaha aayega | ratio A4 portrait | 794x1123px | bg: #ffffff ]",
  screenshot:{width:794,height:1123,ratio:"0.707",bg:"#ffffff"}
},
{
  slug: "field-app",
  name: "Field App",
  tagline: "One visit, complete site capture.",
  status: "Internal",
  users: "Field survey teams",
  usersShort: "Field survey teams",
  livePortal: "",
  overview: "Field capture app that records site data, roof details, keepouts, measurements, photos and handoff notes in a single visit.",
  capabilities: ["Site data capture","Roof details & keepouts","Measurements","Photos","Structured handoff notes"],
  features: ["Site data capture","Roof details & keepouts","Measurements","Photos","Structured handoff notes"],
  userChips: ["Field survey teams"],
  before: "Site visits produced incomplete handoffs — design later had to re-ask for missing details.",
  after: "One visit captures everything — cleaner handoff, fewer missing details, faster proposals.",
  screenshotLabel: "[ Field App — site survey capture | client screenshot yaha aayega | ratio 9:16 | 390x844px | bg: #ffffff ]",
  screenshot: {width:390,height:844,ratio:"9/16",bg:"#ffffff"}
},
{
  slug: "scada",
  name: "SCADA Monitoring",
  tagline: "Every alert, accountable.",
  status: "In progress",
  users: "EPC managers, plant owners, field techs, O&M owners",
  usersShort: "EPC managers, plant owners, field techs, O&M owners",
  livePortal: "https://scada.pvnxt.com/",
  overview: "Role-based monitoring dashboard for plant visibility, alerts, inverter/string issues, work orders, assignments and activity logs.",
  capabilities: ["Role-based views (Manager/Owner/Tech/O&M)","Live alerts","Work orders & assignment","Activity history","Plant-level monitoring"],
  features: ["Role-based views (Manager/Owner/Tech/O&M)","Live alerts","Work orders & assignment","Activity history","Plant-level monitoring"],
  userChips: ["EPC managers","Plant owners","Field techs","O&M owners"],
  before: "O&M relied on manual checks, scattered screenshots, delayed alerts and unclear issue ownership.",
  after: "A visible, accountable operations flow — every alert has a clear owner.",
  screenshotLabel: "[ SCADA — monitoring dashboard | client screenshot yaha aayega | ratio 16:9 | 1280x720px | bg: #ffffff ]",
  screenshot: {width:1280,height:720,ratio:"16/9",bg:"#ffffff"}
}
]
