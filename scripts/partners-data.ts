export interface PartnerDef {
  id: string;
  type: 'Manufacturer' | 'Supplier';
  name: string;
  nameEn: string;
  country: string;
  city: string;
  address: string;
  email: string;
  contactPerson: string;
  phone: string;
  website: string;
  status: 'Active' | 'Inactive' | 'Blacklisted';
  evaluation?: {
    totalScore: number;
    grade: 'A' | 'B' | 'C' | 'D';
    status: 'Approved Supplier' | 'Pending Approval' | 'Conditional Approval' | 'Rejected';
    documents: Record<string, {
      key: string;
      nameFa: string;
      nameEn: string;
      status: 'Approved' | 'Permit Approval' | 'Expired' | 'Not Submitted';
      score: number;
      fileName?: string;
    }>;
  };
}

const MANUFACTURERS: PartnerDef[] = [
  { id: 'bp_mfg_001', type: 'Manufacturer', name: 'BASF SE', nameEn: 'BASF SE', country: 'آلمان', city: 'لودویگزهافن', address: 'Carl-Bosch-Str. 38', email: 'pharma@basf.com', contactPerson: 'Dr. Klaus Weber', phone: '+49 621 60-0', website: 'https://www.basf.com', status: 'Active' },
  { id: 'bp_mfg_002', type: 'Manufacturer', name: 'Lonza Group AG', nameEn: 'Lonza Group AG', country: 'سوئیس', city: 'بازل', address: 'Muenchensteinerstrasse 38', email: 'contact@lonza.com', contactPerson: 'Sarah Jenkins', phone: '+41 61 316 8111', website: 'https://www.lonza.com', status: 'Active' },
  { id: 'bp_mfg_003', type: 'Manufacturer', name: 'Zhejiang Tianyu Pharmaceutical', nameEn: 'Zhejiang Tianyu Pharmaceutical Co., Ltd.', country: 'چین', city: 'تایژو', address: 'No. 189 Huangyan Development Zone', email: 'sales@tianyupda.com', contactPerson: 'Li Wei', phone: '+86 576 8427 1234', website: 'http://www.tianyupda.com', status: 'Active' },
  { id: 'bp_mfg_004', type: 'Manufacturer', name: 'داروسازی سیناژن (CinnaGen)', nameEn: 'CinnaGen Medical Co.', country: 'ایران', city: 'تهران', address: 'شهرک صنعتی سیمین دشت، خیابان هفتم', email: 'info@cinnagen.com', contactPerson: 'مهندس علوی', phone: '021-42915000', website: 'https://www.cinnagen.com', status: 'Active' },
  { id: 'bp_mfg_005', type: 'Manufacturer', name: 'داروسازی دکتر عبیدی', nameEn: 'Dr. Abidi Pharmaceuticals', country: 'ایران', city: 'تهران', address: 'کیلومتر ۸ جاده مخصوص کرج', email: 'info@abidipharma.com', contactPerson: 'دکتر صمدی', phone: '021-44522000', website: 'https://www.abidipharma.com', status: 'Active' },
  { id: 'bp_mfg_006', type: 'Manufacturer', name: 'داروسازی البرز دارو', nameEn: 'Alborz Darou Pharmaceutical', country: 'ایران', city: 'قزوین', address: 'شهرک صنعتی البرز', email: 'info@alborzdarou.com', contactPerson: 'مهندس رستمی', phone: '028-32224500', website: 'https://www.alborzdarou.com', status: 'Active' },
  { id: 'bp_mfg_007', type: 'Manufacturer', name: 'داروسازی دانا', nameEn: 'Daana Pharma Co.', country: 'ایران', city: 'تبریز', address: 'کیلومتر ۲۵ جاده تبریز تهران', email: 'info@daanapharma.com', contactPerson: 'دکتر تقی‌زاده', phone: '041-36300000', website: 'https://www.daanapharma.com', status: 'Active' },
  { id: 'bp_mfg_008', type: 'Manufacturer', name: 'داروسازی اکسیر', nameEn: 'Exir Pharmaceutical Co.', country: 'ایران', city: 'بروجرد', address: 'کیلومتر ۵ جاده بروجرد خرم‌آباد', email: 'info@exir.co.ir', contactPerson: 'مهندس بیرانوند', phone: '066-42500000', website: 'https://www.exir.co.ir', status: 'Active' },
  { id: 'bp_mfg_009', type: 'Manufacturer', name: 'داروسازی سبحان دارو', nameEn: 'Sobhan Darou Co.', country: 'ایران', city: 'رشت', address: 'شهرک صنعتی رشت', email: 'info@sobhandarou.com', contactPerson: 'دکتر گیلانی', phone: '013-33880000', website: 'https://www.sobhandarou.com', status: 'Active' },
  { id: 'bp_mfg_010', type: 'Manufacturer', name: 'داروسازی داروپخش', nameEn: 'Darou Pakhsh Pharma Chem', country: 'ایران', city: 'تهران', address: 'کیلومتر ۱۸ اتوبان کرج', email: 'info@dppharmachem.com', contactPerson: 'مهندس میرزایی', phone: '021-44980000', website: 'https://www.dppharmachem.com', status: 'Active' },
  { id: 'bp_mfg_011', type: 'Manufacturer', name: 'داروسازی جابر ابن حیان', nameEn: 'Jaber Ebne Hayyan Pharma', country: 'ایران', city: 'تهران', address: 'کیلومتر ۱۱ جاده مخصوص کرج', email: 'info@jaber-pharma.com', contactPerson: 'دکتر شریفی', phone: '021-44505000', website: 'https://www.jaber-pharma.com', status: 'Active' },
  { id: 'bp_mfg_012', type: 'Manufacturer', name: 'داروسازی اسوه', nameEn: 'Osvah Pharmaceutical Co.', country: 'ایران', city: 'تهران', address: 'کیلومتر ۹ جاده مخصوص کرج', email: 'info@osvahpharma.com', contactPerson: 'مهندس کاظمی', phone: '021-44520000', website: 'https://www.osvahpharma.com', status: 'Active' },
  { id: 'bp_mfg_013', type: 'Manufacturer', name: 'داروسازی رازک', nameEn: 'Razak Laboratories', country: 'ایران', city: 'تهران', address: 'کیلومتر ۱۱ جاده مخصوص کرج', email: 'info@razakpharma.com', contactPerson: 'دکتر باقری', phone: '021-44503000', website: 'https://www.razakpharma.com', status: 'Active' },
  { id: 'bp_mfg_014', type: 'Manufacturer', name: 'داروسازی پارس دارو', nameEn: 'Pars Darou Co.', country: 'ایران', city: 'تهران', address: 'تهرانپارس، خیابان جشنواره', email: 'info@parsdarou.ir', contactPerson: 'مهندس نوری', phone: '021-77882000', website: 'https://www.parsdarou.ir', status: 'Active' },
  { id: 'bp_mfg_015', type: 'Manufacturer', name: 'داروسازی زهراوی', nameEn: 'Zahravi Pharmaceutical Co.', country: 'ایران', city: 'تبریز', address: 'کیلومتر ۲۰ جاده تهران تبریز', email: 'info@zahravipharm.com', contactPerson: 'دکتر محمودی', phone: '041-36302000', website: 'https://www.zahravipharm.com', status: 'Active' },
  { id: 'bp_mfg_016', type: 'Manufacturer', name: 'داروسازی فارابی', nameEn: 'Farabi Pharmaceutical Co.', country: 'ایران', city: 'اصفهان', address: 'کیلومتر ۱۵ جاده اصفهان شیراز', email: 'info@farabipharma.com', contactPerson: 'مهندس نجفی', phone: '031-36540000', website: 'https://www.farabipharma.com', status: 'Active' },
  { id: 'bp_mfg_017', type: 'Manufacturer', name: 'داروسازی ابوریحان', nameEn: 'Aburaihan Pharmaceutical Co.', country: 'ایران', city: 'تهران', address: 'خیابان دماوند، چهارراه تهرانپارس', email: 'info@aburaihan.com', contactPerson: 'دکتر حسینی', phone: '021-77860000', website: 'https://www.aburaihan.com', status: 'Active' },
  { id: 'bp_mfg_018', type: 'Manufacturer', name: 'داروسازی باختر بیوشیمی', nameEn: 'Bakhtar Bioshimi Co.', country: 'ایران', city: 'کرمانشاه', address: 'شهرک صنعتی کرمانشاه', email: 'info@bakhtarbioshimi.com', contactPerson: 'مهندس امینی', phone: '083-34270000', website: 'https://www.bakhtarbioshimi.com', status: 'Active' },
  { id: 'bp_mfg_019', type: 'Manufacturer', name: 'داروسازی سینا دارو', nameEn: 'Sina Darou Laboratories', country: 'ایران', city: 'تهران', address: 'کیلومتر ۱۵ جاده مخصوص کرج', email: 'info@sinadarou.com', contactPerson: 'دکتر رضوی', phone: '021-44903000', website: 'https://www.sinadarou.com', status: 'Active' },
  { id: 'bp_mfg_020', type: 'Manufacturer', name: 'داروسازی لقمان', nameEn: 'Loghman Pharmaceutical Co.', country: 'ایران', city: 'تهران', address: 'کیلومتر ۱۰ جاده مخصوص کرج', email: 'info@loghmanpharma.com', contactPerson: 'مهندس طاهری', phone: '021-44502000', website: 'https://www.loghmanpharma.com', status: 'Active' },
  { id: 'bp_mfg_021', type: 'Manufacturer', name: "Dr. Reddy's Laboratories", nameEn: "Dr. Reddy's Laboratories Ltd.", country: 'هند', city: 'حیدرآباد', address: '8-2-337 Road No. 3 Banjara Hills', email: 'contact@drreddys.com', contactPerson: 'Rajesh Sharma', phone: '+91 40 4900 2900', website: 'https://www.drreddys.com', status: 'Active' },
  { id: 'bp_mfg_022', type: 'Manufacturer', name: 'Sun Pharmaceutical Industries', nameEn: 'Sun Pharmaceutical Industries Ltd.', country: 'هند', city: 'بمبئی', address: 'Sun House CTS No. 201 B/1 Western Express Highway', email: 'corpcomm@sunpharma.com', contactPerson: 'Amit Patel', phone: '+91 22 4324 4324', website: 'https://www.sunpharma.com', status: 'Active' },
  { id: 'bp_mfg_023', type: 'Manufacturer', name: 'Cipla Limited', nameEn: 'Cipla Limited', country: 'هند', city: 'بمبئی', address: 'Cipla House Peninsula Business Park Ganpatrao Kadam Marg', email: 'contactus@cipla.com', contactPerson: 'Priya Nair', phone: '+91 22 2482 6000', website: 'https://www.cipla.com', status: 'Active' },
  { id: 'bp_mfg_024', type: 'Manufacturer', name: 'Aurobindo Pharma Ltd.', nameEn: 'Aurobindo Pharma Ltd.', country: 'هند', city: 'حیدرآباد', address: 'Plot No. 2 Maitrivihar Ameerpet', email: 'info@aurobindo.com', contactPerson: 'Suresh Kumar', phone: '+91 40 6672 5000', website: 'https://www.aurobindo.com', status: 'Active' },
  { id: 'bp_mfg_025', type: 'Manufacturer', name: 'Hetero Drugs Limited', nameEn: 'Hetero Drugs Limited', country: 'هند', city: 'حیدرآباد', address: '7-2-A2 Hetero Corporate Industrial Estates Sanath Nagar', email: 'contact@heterodrugs.com', contactPerson: 'K. V. Rao', phone: '+91 40 2370 4923', website: 'https://www.hetero.com', status: 'Active' },
  { id: 'bp_mfg_026', type: 'Manufacturer', name: 'Aarti Drugs Limited', nameEn: 'Aarti Drugs Limited', country: 'هند', city: 'بمبئی', address: 'Plot No. N-198 MIDC Tarapur', email: 'investor@aartidrugs.com', contactPerson: 'Harshit Patil', phone: '+91 22 2407 2249', website: 'https://www.aartidrugs.co.in', status: 'Active' },
  { id: 'bp_mfg_027', type: 'Manufacturer', name: "Divi's Laboratories Limited", nameEn: "Divi's Laboratories Limited", country: 'هند', city: 'حیدرآباد', address: '1-72/23(P)/DIVIS/303 Cyber Hills Gachibowli', email: 'mail@divislabs.com', contactPerson: 'Murali Divi', phone: '+91 40 2378 6300', website: 'https://www.divislabs.com', status: 'Active' },
  { id: 'bp_mfg_028', type: 'Manufacturer', name: 'Jubilant Generics Ltd.', nameEn: 'Jubilant Generics Ltd.', country: 'هند', city: 'نویدا', address: '1A Sector 16A Institutional Area', email: 'support@jubl.com', contactPerson: 'Anil Gupta', phone: '+91 120 436 1000', website: 'https://www.jubilantpharmova.com', status: 'Active' },
  { id: 'bp_mfg_029', type: 'Manufacturer', name: 'Zhejiang Hisun Pharmaceutical', nameEn: 'Zhejiang Hisun Pharmaceutical Co., Ltd.', country: 'چین', city: 'تایژو', address: 'No. 46 WaSha Road Jiaojiang', email: 'hisun@hisunpharm.com', contactPerson: 'Zhang Ming', phone: '+86 576 8882 7890', website: 'http://www.hisunpharm.com', status: 'Active' },
  { id: 'bp_mfg_030', type: 'Manufacturer', name: 'North China Pharmaceutical Group', nameEn: 'North China Pharmaceutical Group Corp.', country: 'چین', city: 'شیجیاژوانگ', address: 'No. 388 Heping East Road', email: 'ncpc@ncpc.com.cn', contactPerson: 'Chen Gang', phone: '+86 311 8599 8888', website: 'http://www.ncpc.com', status: 'Active' },
  { id: 'bp_mfg_031', type: 'Manufacturer', name: 'Shandong Xinhua Pharmaceutical', nameEn: 'Shandong Xinhua Pharmaceutical Co., Ltd.', country: 'چین', city: 'زیبو', address: 'No. 1 Lutai Avenue High-Tech Zone', email: 'xinhua@xinhuapharm.com', contactPerson: 'Wang Fang', phone: '+86 533 219 6000', website: 'http://www.xinhuapharm.com', status: 'Active' },
  { id: 'bp_mfg_032', type: 'Manufacturer', name: 'Northeast Pharmaceutical Group', nameEn: 'Northeast Pharmaceutical Group Co., Ltd.', country: 'چین', city: 'شن‌یانگ', address: 'No. 29 Kunming Lake Street Tiexi', email: 'nepharm@nepharm.com.cn', contactPerson: 'Liu Bo', phone: '+86 24 2580 6000', website: 'http://www.nepharm.com', status: 'Active' },
  { id: 'bp_mfg_033', type: 'Manufacturer', name: 'Teva Pharmaceutical Industries', nameEn: 'Teva Pharmaceutical Industries Ltd.', country: 'هلند', city: 'آمستردام', address: 'Piet Heinkade 107', email: 'info.teva@tevapharm.com', contactPerson: 'Jan van Dijk', phone: '+31 20 219 3000', website: 'https://www.tevapharm.com', status: 'Active' },
  { id: 'bp_mfg_034', type: 'Manufacturer', name: 'DSM Nutritional Products AG', nameEn: 'DSM Nutritional Products AG', country: 'سوئیس', city: 'کایزراوست', address: 'Wurmisweg 576 CH-4303', email: 'pharma.dsm@dsm.com', contactPerson: 'Beatrix Meyer', phone: '+41 61 815 8888', website: 'https://www.dsm.com', status: 'Active' },
  { id: 'bp_mfg_035', type: 'Manufacturer', name: 'Evonik Operations GmbH', nameEn: 'Evonik Operations GmbH', country: 'آلمان', city: 'اسن', address: 'Rellinghauser Straße 1-11', email: 'health-care@evonik.com', contactPerson: 'Dr. Stefan Koch', phone: '+49 201 177-01', website: 'https://healthcare.evonik.com', status: 'Active' },
  { id: 'bp_mfg_036', type: 'Manufacturer', name: 'Roquette Frères', nameEn: 'Roquette Freres', country: 'فرانسه', city: 'لستروم', address: '1 Rue de la Haute Loge', email: 'pharma.business@roquette.com', contactPerson: 'Jean-Luc Dupont', phone: '+33 3 21 63 36 00', website: 'https://www.roquette.com', status: 'Active' },
  { id: 'bp_mfg_037', type: 'Manufacturer', name: 'DFE Pharma GmbH & Co. KG', nameEn: 'DFE Pharma GmbH & Co. KG', country: 'آلمان', city: 'گوخ', address: 'Klever Strasse 187', email: 'pharma@dfepharma.com', contactPerson: 'Inga Schmidt', phone: '+49 2823 9288-0', website: 'https://www.dfepharma.com', status: 'Active' },
  { id: 'bp_mfg_038', type: 'Manufacturer', name: 'Colorcon Inc.', nameEn: 'Colorcon Inc.', country: 'انگلستان', city: 'دارتفورد', address: 'Flagship House Victory Way Crossways', email: 'info@colorcon.com', contactPerson: 'David Miller', phone: '+44 1322 293000', website: 'https://www.colorcon.com', status: 'Active' },
  { id: 'bp_mfg_039', type: 'Manufacturer', name: 'Shin-Etsu Chemical Co., Ltd.', nameEn: 'Shin-Etsu Chemical Co., Ltd.', country: 'ژاپن', city: 'توکیو', address: '6-1 Ohtemachi 2-chome Chiyoda-ku', email: 'cellulose@shinetsu.jp', contactPerson: 'Kenji Tanaka', phone: '+81 3 3246 5111', website: 'https://www.shinetsu.co.jp', status: 'Active' },
  { id: 'bp_mfg_040', type: 'Manufacturer', name: 'Kerry Group plc', nameEn: 'Kerry Group plc', country: 'ایرلند', city: 'تریلی', address: 'Prince\'s Street Tralee Co. Kerry', email: 'pharma@kerry.com', contactPerson: 'Liam O\'Connor', phone: '+353 66 718 2000', website: 'https://www.kerry.com', status: 'Active' },
  { id: 'bp_mfg_041', type: 'Manufacturer', name: 'Chemo Group (Insud Pharma)', nameEn: 'Chemo Group Insud Pharma', country: 'اسپانیا', city: 'مادرید', address: 'Manuel Pombo Angulo 28', email: 'info@chemogroup.com', contactPerson: 'Carlos Martinez', phone: '+34 91 771 15 00', website: 'https://www.insudpharma.com', status: 'Active' },
  { id: 'bp_mfg_042', type: 'Manufacturer', name: 'Sanofi Chimie', nameEn: 'Sanofi Chimie', country: 'فرانسه', city: 'پاریس', address: '54 Rue La Boetie', email: 'api.sales@sanofi.com', contactPerson: 'Pierre Moreau', phone: '+33 1 53 77 40 00', website: 'https://www.euroapi.com', status: 'Active' },
  { id: 'bp_mfg_043', type: 'Manufacturer', name: 'Merck KGaA Life Science', nameEn: 'Merck KGaA Life Science', country: 'آلمان', city: 'دارمشتات', address: 'Frankfurter Str. 250', email: 'service@emdgroup.com', contactPerson: 'Dr. Michael Bauer', phone: '+49 6151 72-0', website: 'https://www.merckgroup.com', status: 'Active' },
  { id: 'bp_mfg_044', type: 'Manufacturer', name: 'Cambrex Corporation', nameEn: 'Cambrex Corporation', country: 'سوئد', city: 'کارلسکوگا', address: 'Bjorkborns Industriomrade', email: 'sweden.info@cambrex.com', contactPerson: 'Lars Lindqvist', phone: '+46 586 78 30 00', website: 'https://www.cambrex.com', status: 'Active' },
  { id: 'bp_mfg_045', type: 'Manufacturer', name: 'Hovione Farmaciencia SA', nameEn: 'Hovione Farmaciencia SA', country: 'پرتغال', city: 'لوریس', address: 'Sete Casas 2674-506 Loures', email: 'hello@hovione.com', contactPerson: 'Antonio Silva', phone: '+351 21 982 9000', website: 'https://www.hovione.com', status: 'Active' },
  { id: 'bp_mfg_046', type: 'Manufacturer', name: 'Meggle Group Wasserburg', nameEn: 'Meggle Group Wasserburg', country: 'آلمان', city: 'واسربرگ', address: 'Megglestrasse 6-12', email: 'service.pharma@meggle.com', contactPerson: 'Hans Mueller', phone: '+49 8071 73-0', website: 'https://www.meggle-pharma.com', status: 'Active' },
  { id: 'bp_mfg_047', type: 'Manufacturer', name: 'Ashland Specialty Ingredients', nameEn: 'Ashland Specialty Ingredients', country: 'بلژیک', city: 'شافهاوزن', address: 'Industriestrasse 14', email: 'pharma@ashland.com', contactPerson: 'Marc Peeters', phone: '+32 3 543 51 11', website: 'https://www.ashland.com', status: 'Active' },
  { id: 'bp_mfg_048', type: 'Manufacturer', name: 'Capsugel (Lonza Capsules)', nameEn: 'Capsugel Lonza', country: 'فرانسه', city: 'کولمار', address: '10 Rue Timken', email: 'capsugel@lonza.com', contactPerson: 'Francois Robert', phone: '+33 3 89 20 57 00', website: 'https://www.capsugel.com', status: 'Active' },
  { id: 'bp_mfg_049', type: 'Manufacturer', name: 'Gerresheimer Bünde GmbH', nameEn: 'Gerresheimer Bunde GmbH', country: 'آلمان', city: 'بونده', address: 'Erich-Martens-Strasse 26-32', email: 'info-primarypack@gerresheimer.com', contactPerson: 'Jens Krueger', phone: '+49 5223 164-0', website: 'https://www.gerresheimer.com', status: 'Active' },
  { id: 'bp_mfg_050', type: 'Manufacturer', name: 'Constantia Flexibles Group', nameEn: 'Constantia Flexibles Group GmbH', country: 'اتریش', city: 'وین', address: 'Rivergate Handelskai 92', email: 'pharma@cflex.com', contactPerson: 'Wolfgang Huber', phone: '+43 1 888 5640', website: 'https://www.cflex.com', status: 'Active' }
];

const SUPPLIERS_RAW = [
  // 51-75: Foreign Suppliers
  { id: 'bp_sup_051', name: 'Sinoway International Ltd.', nameEn: 'Sinoway International Ltd.', country: 'چین', city: 'شیامن', address: 'Tower A Xiamen Int Centre', email: 'sales@sinowaychem.com', contactPerson: 'Helen Chen', phone: '+86 592 585 3888', website: 'http://www.sinowaychem.com', score: 92, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_052', name: 'Helm AG Pharma Division', nameEn: 'Helm AG Pharma Division', country: 'آلمان', city: 'هامبورگ', address: 'Nordkanalstrasse 28', email: 'pharma@helmag.com', contactPerson: 'Markus Schmidt', phone: '+49 40 2375-0', website: 'https://www.helmag.com', score: 88, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_053', name: 'Barentz International B.V.', nameEn: 'Barentz International B.V.', country: 'هلند', city: 'هوفدورپ', address: 'Saturnusstraat 15', email: 'info@barentz.com', contactPerson: 'Wouter Janssen', phone: '+31 23 567 3456', website: 'https://www.barentz.com', score: 84, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_054', name: 'Brenntag Specialties Pharma', nameEn: 'Brenntag Specialties Pharma', country: 'آلمان', city: 'اسن', address: 'Messeallee 11', email: 'pharma-emea@brenntag.com', contactPerson: 'Dirk Becker', phone: '+49 201 6496-0', website: 'https://www.brenntag.com', score: 81, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_055', name: 'IMCD Group N.V.', nameEn: 'IMCD Group N.V.', country: 'هلند', city: 'روتردام', address: 'Wilhelminaplein 32', email: 'pharma@imcdgroup.com', contactPerson: 'Lars van Leeuwen', phone: '+31 10 290 8684', website: 'https://www.imcdgroup.com', score: 78, grade: 'B', status: 'Conditional Approval' },
  { id: 'bp_sup_056', name: 'Caldic B.V. Life Sciences', nameEn: 'Caldic B.V. Life Sciences', country: 'بلژیک', city: 'آنتورپ', address: 'Ter Beke 1', email: 'pharma@caldic.com', contactPerson: 'Annelies Claes', phone: '+32 3 870 48 11', website: 'https://www.caldic.com', score: 72, grade: 'B', status: 'Conditional Approval' },
  { id: 'bp_sup_057', name: 'Safic-Alcan Pharma', nameEn: 'Safic-Alcan Pharma', country: 'فرانسه', city: 'پاریس', address: '3 Rue Bellini Puteaux', email: 'pharma@safic-alcan.com', contactPerson: 'Philippe Martin', phone: '+33 1 46 92 64 64', website: 'https://www.safic-alcan.com', score: 85, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_058', name: 'Faravelli Group International', nameEn: 'Faravelli Group International', country: 'ایتالیا', city: 'میلان', address: 'Via Faravelli 14', email: 'pharma@faravelli.it', contactPerson: 'Marco Rossi', phone: '+39 02 84893 1', website: 'https://www.faravelli.it', score: 68, grade: 'B', status: 'Conditional Approval' },
  { id: 'bp_sup_059', name: 'Azelis Pharma Division', nameEn: 'Azelis Pharma Division', country: 'بلژیک', city: 'آنتورپ', address: 'Posthofbrug 12', email: 'pharma@azelis.com', contactPerson: 'Sophie Dubois', phone: '+32 3 613 01 20', website: 'https://www.azelis.com', score: 87, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_060', name: 'CBC Co., Ltd. Medical Dept', nameEn: 'CBC Co., Ltd. Medical Dept', country: 'ژاپن', city: 'توکیو', address: '2-15-13 Tsukishima Chuo-ku', email: 'pharma@cbc.co.jp', contactPerson: 'Hiroshi Sato', phone: '+81 3 3536 4500', website: 'https://www.cbc.co.jp', score: 89, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_061', name: 'Mitsubishi Corporation Life Science', nameEn: 'Mitsubishi Corp Life Science', country: 'ژاپن', city: 'توکیو', address: '3-1 Marunouchi 2-chome Chiyoda-ku', email: 'life.science@mitsubishicorp.com', contactPerson: 'Takashi Ono', phone: '+81 3 3210 2121', website: 'https://www.mitsubishicorp.com', score: 94, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_062', name: 'Sojitz Corporation Chemicals', nameEn: 'Sojitz Corporation Chemicals', country: 'ژاپن', city: 'توکیو', address: '1-1 Uchisaiwaicho 2-chome', email: 'chem@sojitz.com', contactPerson: 'Yuki Takahashi', phone: '+81 3 6871 5000', website: 'https://www.sojitz.com', score: 83, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_063', name: 'Marubeni Corporation Chemicals', nameEn: 'Marubeni Corp Chemicals Dept', country: 'ژاپن', city: 'توکیو', address: '4-2 Ohtemachi 1-chome', email: 'pharma@marubeni.com', contactPerson: 'Daiki Ito', phone: '+81 3 3282 2111', website: 'https://www.marubeni.com', score: 79, grade: 'B', status: 'Conditional Approval' },
  { id: 'bp_sup_064', name: 'Shanghai Desano Chemical Pharma', nameEn: 'Shanghai Desano Chemical Pharma', country: 'چین', city: 'شانگهای', address: 'No. 1479 Wanghai Road Pudong', email: 'desano@desano.com', contactPerson: 'Zhang Lei', phone: '+86 21 5132 3388', website: 'http://www.desano.com', score: 86, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_065', name: 'Huahai US Inc. Distribution', nameEn: 'Huahai US Inc.', country: 'ایالات متحده آمریکا', city: 'کرنبری', address: '2002 Eastpark Blvd', email: 'sales@huahaius.com', contactPerson: 'Robert Miller', phone: '+1 609 655 1688', website: 'https://www.huahaius.com', score: 82, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_066', name: 'LGM Pharma LLC', nameEn: 'LGM Pharma LLC', country: 'ایالات متحده آمریکا', city: 'بوکا راتون', address: '6400 Congress Ave', email: 'api@lgmpharma.com', contactPerson: 'Michael Green', phone: '+1 800 881 8210', website: 'https://www.lgmpharma.com', score: 85, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_067', name: 'Aceto Corporation API Source', nameEn: 'Aceto Corporation', country: 'ایالات متحده آمریکا', city: 'پورت واشینگتن', address: '4 Tri Harbor Court', email: 'info@aceto.com', contactPerson: 'David Brown', phone: '+1 516 627 6000', website: 'https://www.aceto.com', score: 55, grade: 'C', status: 'Pending Approval' },
  { id: 'bp_sup_068', name: 'Spectrum Chemical Mfg. Corp.', nameEn: 'Spectrum Chemical Mfg. Corp.', country: 'ایالات متحده آمریکا', city: 'نیوبرانزویک', address: '769 Jersey Avenue', email: 'sales@spectrumchemical.com', contactPerson: 'James Wilson', phone: '+1 800 772 8786', website: 'https://www.spectrumchemical.com', score: 91, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_069', name: 'Signet Chemical Corporation', nameEn: 'Signet Chemical Corporation Pvt Ltd', country: 'هند', city: 'بمبئی', address: 'Signet House 414 Senapati Bapat Marg', email: 'sales@signetchem.com', contactPerson: 'Harish Shah', phone: '+91 22 6146 2727', website: 'https://www.signetchem.com', score: 93, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_070', name: 'DKSH Pharma Healthcare', nameEn: 'DKSH Pharma Healthcare', country: 'سوئیس', city: 'زوریخ', address: 'Wiesenstrasse 8', email: 'healthcare@dksh.com', contactPerson: 'Martin Keller', phone: '+41 44 386 7272', website: 'https://www.dksh.com', score: 88, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_071', name: 'Connell Brothers Company', nameEn: 'Connell Brothers Company', country: 'سنگاپور', city: 'سنگاپور', address: '1 Kim Seng Promenade', email: 'info@connellworld.com', contactPerson: 'Ken Tan', phone: '+65 6831 6688', website: 'https://www.connellworld.com', score: 76, grade: 'B', status: 'Conditional Approval' },
  { id: 'bp_sup_072', name: 'Nordmann Firnhaber GmbH', nameEn: 'Nordmann Firnhaber GmbH', country: 'آلمان', city: 'هامبورگ', address: 'Kajen 2', email: 'pharma@nordmann.global', contactPerson: 'Claus Becker', phone: '+49 40 3687-0', website: 'https://www.nordmann.global', score: 84, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_073', name: 'Velox GmbH Chemical Raw Materials', nameEn: 'Velox GmbH', country: 'آلمان', city: 'هامبورگ', address: 'Brandstwiete 1', email: 'info@velox.com', contactPerson: 'Klaus Fischer', phone: '+49 40 369688-0', website: 'https://www.velox.com', score: 80, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_074', name: 'Vivatis Pharma GmbH', nameEn: 'Vivatis Pharma GmbH', country: 'آلمان', city: 'هامبورگ', address: 'Gruener Deich 1-3', email: 'office@vivatis.de', contactPerson: 'Thorsten Meier', phone: '+49 40 23600-0', website: 'https://www.vivatis.de', score: 86, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_075', name: 'Caesar & Loretz GmbH (Caelo)', nameEn: 'Caesar & Loretz GmbH Caelo', country: 'آلمان', city: 'هیلدن', address: 'Herderstrasse 31', email: 'info@caelo.de', contactPerson: 'Dr. Julia Krause', phone: '+49 2103 4994-0', website: 'https://www.caelo.de', score: 90, grade: 'A', status: 'Approved Supplier' },

  // 76-100: Domestic Suppliers
  { id: 'bp_sup_076', name: 'شرکت بازرگانی شفا دارو', nameEn: 'Shafa Darou Commercial Co.', country: 'ایران', city: 'تهران', address: 'خیابان خالد اسلامبولی، خیابان بیست و یکم', email: 'commerce@shafadarou.ir', contactPerson: 'مهندس کاظمیان', phone: '021-88710000', website: 'https://www.shafadarou.ir', score: 95, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_077', name: 'بازرگانی دارویی پخش فردوس', nameEn: 'Ferdous Pharma Distribution', country: 'ایران', city: 'تهران', address: 'بزرگراه فتح، خیابان ۱۷ شهریور', email: 'info@ferdous-pharma.com', contactPerson: 'دکتر صابری', phone: '021-66800000', website: 'https://www.ferdous-pharma.com', score: 91, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_078', name: 'تامین دارو سلامت پیشرو', nameEn: 'Salamat Pishro Pharma Trading', country: 'ایران', city: 'تهران', address: 'خیابان مطهری، خیابان فجر', email: 'info@salamatpishro.ir', contactPerson: 'مهندس یوسفی', phone: '021-88304000', website: 'https://www.salamatpishro.ir', score: 88, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_079', name: 'شرکت پارس آزمون کیمیا', nameEn: 'Pars Azmoon Kimia Trading', country: 'ایران', city: 'تهران', address: 'خیابان آزادی، خیابان حبیب‌الهی', email: 'kimia@parsazmoon.com', contactPerson: 'دکتر افشار', phone: '021-66005000', website: 'https://www.parsazmoon.com', score: 84, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_080', name: 'پویا داروی ایرانیان', nameEn: 'Pouya Darou Iranian Co.', country: 'ایران', city: 'تهران', address: 'سعادت آباد، میدان فرهنگ', email: 'sales@pouyadarou.com', contactPerson: 'مهندس اکبری', phone: '021-22090000', website: 'https://www.pouyadarou.com', score: 86, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_081', name: 'کیمیا داروی فردا', nameEn: 'Kimia Darou Farda Co.', country: 'ایران', city: 'تهران', address: 'خیابان ولیعصر، نرسیده به میدان ونک', email: 'info@kimiadarou.ir', contactPerson: 'دکتر جعفری', phone: '021-88882000', website: 'https://www.kimiadarou.ir', score: 79, grade: 'B', status: 'Conditional Approval' },
  { id: 'bp_sup_082', name: 'پارسیان دارو تجارت', nameEn: 'Parsian Darou Tejarat', country: 'ایران', city: 'اصفهان', address: 'خیابان چهارباغ بالا، مجتمع کوثر', email: 'info@parsiandarou.com', contactPerson: 'مهندس صادقی', phone: '031-36200000', website: 'https://www.parsiandarou.com', score: 85, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_083', name: 'جهان فارما تجارت', nameEn: 'Jahan Pharma Trading', country: 'ایران', city: 'تهران', address: 'خیابان سهروردی شمالی، خیابان خرمشهر', email: 'info@jahanpharma.ir', contactPerson: 'دکتر حیدری', phone: '021-88750000', website: 'https://www.jahanpharma.ir', score: 82, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_084', name: 'آریا داروی پارس', nameEn: 'Aria Darou Pars', country: 'ایران', city: 'شیراز', address: 'بلوار ستارخان، مجتمع بهاران', email: 'info@ariadarou.ir', contactPerson: 'مهندس زارع', phone: '071-36280000', website: 'https://www.ariadarou.ir', score: 80, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_085', name: 'بهستان بهداشت دارو', nameEn: 'Behestan Behdasht Pharma Trading', country: 'ایران', city: 'تهران', address: 'خیابان ولیعصر، بالاتر از ظفر', email: 'info@behestan.com', contactPerson: 'دکتر سلیمانی', phone: '021-88775000', website: 'https://www.behestan.com', score: 92, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_086', name: 'تدبیر دارو رازی', nameEn: 'Tadbir Darou Razi Co.', country: 'ایران', city: 'تهران', address: 'خیابان بهشتی، خیابان کاووسی‌فر', email: 'info@tadbirdarou.com', contactPerson: 'مهندس ابراهیمی', phone: '021-88500000', website: 'https://www.tadbirdarou.com', score: 83, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_087', name: 'سینا شیمی تجارت', nameEn: 'Sina Shimi Tejarat Co.', country: 'ایران', city: 'تبریز', address: 'خیابان شریعتی جنوبی', email: 'sales@sinashimi.com', contactPerson: 'دکتر تبریزی', phone: '041-35560000', website: 'https://www.sinashimi.com', score: 75, grade: 'B', status: 'Conditional Approval' },
  { id: 'bp_sup_088', name: 'آوا فارما کیمیا', nameEn: 'Ava Pharma Kimia', country: 'ایران', city: 'تهران', address: 'شهرک غرب، بلوار دادمان', email: 'info@avapharma.ir', contactPerson: 'مهندس مرادی', phone: '021-88370000', website: 'https://www.avapharma.ir', score: 87, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_089', name: 'آراد طب داریا', nameEn: 'Arad Teb Darya Trading', country: 'ایران', city: 'تهران', address: 'خیابان شریعتی، بالاتر از پل رومی', email: 'info@aradteb.com', contactPerson: 'دکتر دریایی', phone: '021-22680000', website: 'https://www.aradteb.com', score: 89, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_090', name: 'سپهر داروی ایرانیان', nameEn: 'Sepehr Darou Iranian', country: 'ایران', city: 'مشهد', address: 'بلوار سجاد، خیابان بهار', email: 'info@sepehrdarou.ir', contactPerson: 'مهندس رضایی', phone: '051-37650000', website: 'https://www.sepehrdarou.ir', score: 81, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_091', name: 'نیک فارما کیش', nameEn: 'Nik Pharma Kish Trading', country: 'ایران', city: 'کیش', address: 'میدان پردیس، برج صدف', email: 'info@nikpharma-kish.com', contactPerson: 'دکتر نیک‌نژاد', phone: '076-44420000', website: 'https://www.nikpharma-kish.com', score: 77, grade: 'B', status: 'Conditional Approval' },
  { id: 'bp_sup_092', name: 'مهرگان داروی البرز', nameEn: 'Mehregan Darou Alborz', country: 'ایران', city: 'کرج', address: 'جهانشهر، بلوار مولانا', email: 'info@mehregandarou.com', contactPerson: 'مهندس کریمی', phone: '026-34480000', website: 'https://www.mehregandarou.com', score: 84, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_093', name: 'نگین شیمی رازی', nameEn: 'Negin Shimi Razi Trading', country: 'ایران', city: 'تهران', address: 'خیابان پاسداران، خیابان بوستان دوم', email: 'info@neginshimi.ir', contactPerson: 'دکتر نادری', phone: '021-22550000', website: 'https://www.neginshimi.ir', score: 86, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_094', name: 'کیمیاگران سلامت پاسارگاد', nameEn: 'Kimiagaran Salamat Pasargad', country: 'ایران', city: 'تهران', address: 'خیابان میرداماد، میدان مادر', email: 'info@pasargadpharma.com', contactPerson: 'مهندس زمانی', phone: '021-22220000', website: 'https://www.pasargadpharma.com', score: 88, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_095', name: 'ارس دارو تجارت', nameEn: 'Aras Darou Tejarat', country: 'ایران', city: 'جلفا', address: 'منطقه آزاد ارس، فاز تجاری', email: 'info@arasdarou.com', contactPerson: 'دکتر ارسی', phone: '041-42020000', website: 'https://www.arasdarou.com', score: 82, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_096', name: 'آرتا شیمی داروساز', nameEn: 'Arta Shimi Darousaz Co.', country: 'ایران', city: 'اردبیل', address: 'بلوار دانشگاه، مجتمع نوآوری', email: 'info@artashimi.ir', contactPerson: 'مهندس حاتمی', phone: '045-33720000', website: 'https://www.artashimi.ir', score: 78, grade: 'B', status: 'Conditional Approval' },
  { id: 'bp_sup_097', name: 'پایا سلامت کیان', nameEn: 'Paya Salamat Kian', country: 'ایران', city: 'تهران', address: 'خیابان کارگر شمالی، خیابان فرشی‌مقدم', email: 'info@payasalamat.ir', contactPerson: 'دکتر کیانی', phone: '021-88000000', website: 'https://www.payasalamat.ir', score: 85, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_098', name: 'آذر دارو تجارت', nameEn: 'Azar Darou Tejarat Co.', country: 'ایران', city: 'تبریز', address: 'خیابان ارتش جنوبی، برج ارتش', email: 'info@azardarou.com', contactPerson: 'مهندس قاسم‌زاده', phone: '041-35400000', website: 'https://www.azardarou.com', score: 83, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_099', name: 'رستا فارما نوآور', nameEn: 'Rasta Pharma Noavar', country: 'ایران', city: 'تهران', address: 'خیابان یوسف آباد، خیابان بیست و سوم', email: 'info@rastapharma.ir', contactPerson: 'دکتر رستمی', phone: '021-88060000', website: 'https://www.rastapharma.ir', score: 87, grade: 'A', status: 'Approved Supplier' },
  { id: 'bp_sup_100', name: 'سامان داروی سلامت', nameEn: 'Saman Darou Salamat', country: 'ایران', city: 'تهران', address: 'میدان آرژانتین، خیابان الوند', email: 'info@samandarou.com', contactPerson: 'مهندس سامانی', phone: '021-88670000', website: 'https://www.samandarou.com', score: 90, grade: 'A', status: 'Approved Supplier' }
];

const SOP_DOCS_CONFIG = [
  { key: 'manufacturerLetter', nameFa: 'معرفی‌نامه از تولیدکننده', nameEn: 'Manufacturer Authorization Letter', maxScore: 25 },
  { key: 'authorizedSignatory', nameFa: 'گواهی صاحبان امضای مجاز', nameEn: 'Authorized Signatory Certificate', maxScore: 20 },
  { key: 'businessLicense', nameFa: 'جواز تاسیس یا پروانه کسب', nameEn: 'Business License', maxScore: 20 },
  { key: 'officialEnglishTranslation', nameFa: 'ترجمه رسمی دادگستری مدارک', nameEn: 'Official English Translation', maxScore: 15 },
  { key: 'legalization', nameFa: 'تاییدیه سفارت یا آپوستیل', nameEn: 'Legalization / Apostille', maxScore: 20 }
];

function buildSupplierEvaluation(targetScore: number, grade: 'A' | 'B' | 'C' | 'D', status: 'Approved Supplier' | 'Pending Approval' | 'Conditional Approval' | 'Rejected') {
  const documents: Record<string, any> = {};
  const ratio = targetScore / 100;
  
  for (const doc of SOP_DOCS_CONFIG) {
    const docScore = Math.round(doc.maxScore * ratio * 10) / 10;
    const docStatus = ratio >= 0.8 ? 'Approved' : ratio >= 0.6 ? 'Permit Approval' : ratio >= 0.4 ? 'Permit Approval' : 'Expired';
    documents[doc.key] = {
      key: doc.key,
      nameFa: doc.nameFa,
      nameEn: doc.nameEn,
      status: docStatus,
      score: docScore,
      fileName: `${doc.key}_signed_verified.pdf`
    };
  }

  return {
    totalScore: targetScore,
    grade,
    status,
    documents
  };
}

const SUPPLIERS: PartnerDef[] = SUPPLIERS_RAW.map(s => ({
  id: s.id,
  type: 'Supplier',
  name: s.name,
  nameEn: s.nameEn,
  country: s.country,
  city: s.city,
  address: s.address,
  email: s.email,
  contactPerson: s.contactPerson,
  phone: s.phone,
  website: s.website,
  status: 'Active',
  evaluation: buildSupplierEvaluation(s.score, s.grade as any, s.status as any)
}));

export const ALL_BUSINESS_PARTNERS: PartnerDef[] = [...MANUFACTURERS, ...SUPPLIERS];
console.log(`Prepared ${ALL_BUSINESS_PARTNERS.length} Business Partners (${MANUFACTURERS.length} Manufacturers, ${SUPPLIERS.length} Suppliers).`);
