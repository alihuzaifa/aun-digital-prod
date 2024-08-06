import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface TableDemoProps {
  header1?: string;
  header2?: string;
  keyName1?: string;
  keyName2?: string;
  data?: Array<{ [key: string]: string }>;
}
const TableDemo: React.FC<TableDemoProps> = ({
  header1 = "",
  header2 = "",
  keyName1 = "city",
  keyName2 = "timing",
  data = [],
}) => {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">{header1}</TableHead>
          <TableHead className="font-bold">{header2}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item[keyName1]}</TableCell>
            <TableCell className="font-medium">{item[keyName2]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export const TableDemo2: React.FC = ({ }) => {
  const data = [
    {
      name: "Laravel",
      gStars: "76.5k",
      gForks: "23.9k",
      download: "24+",
      indeed: "29,000+",
    },
    {
      name: "Symfony",
      gStars: "24.3k",
      gForks: "8.4k",
      download: "18+",
      indeed: "12,000+",
    },
    {
      name: "Laravel",
      gStars: "76.5k",
      gForks: "23.9k",
      download: "24+",
      indeed: "29,000+",
    },
    {
      name: "CodeIgniter",
      gStars: "17.7k",
      gForks: "4.2k",
      download: "12+",
      indeed: "8,100+",
    },
    {
      name: "Zend Framework",
      gStars: "8.1k",
      gForks: "2.8k",
      download: "7+",
      indeed: "4,200+",
    },
    {
      name: "Phalcon",
      gStars: "6.5k",
      gForks: "1.9k",
      download: "4+",
      indeed: "2,100+",
    },
    {
      name: "Yii",
      gStars: "13.2k",
      gForks: "4.7k",
      download: "15+",
      indeed: "7,200+",
    },
  ];
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Framework</TableHead>
          <TableHead className="font-bold">GitHub Stars</TableHead>
          <TableHead className="font-bold">GitHub Forks</TableHead>
          <TableHead className="font-bold">
            Packagist Downloads (Millions)
          </TableHead>
          <TableHead className="font-bold">Indeed Jobs</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell className={`${index === 0 ? "font-medium" : ""}`}>
              {item.name}
            </TableCell>
            <TableCell className={`${index === 0 ? "font-medium" : ""}`}>
              {item.gStars}
            </TableCell>
            <TableCell className={`${index === 0 ? "font-medium" : ""}`}>
              {item.gForks}
            </TableCell>
            <TableCell className={`${index === 0 ? "font-medium" : ""}`}>
              {item.download}
            </TableCell>
            <TableCell className={`${index === 0 ? "font-medium" : ""}`}>
              {item.indeed}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export const TableDemo3: React.FC = ({ }) => {
  const data = [
    {
      name: "Laravel",
      exSalary: "$80,000 – $120,000",
      salary: "$100,000",
    },
    {
      name: "Symfony",
      exSalary: "$75,000 – $110,000",
      salary: "$90,000",
    },
    {
      name: "CodeIgniter",
      exSalary: "$65,000 – $100,000",
      salary: "$80,000",
    },
    {
      name: "Zend Framework",
      exSalary: "$70,000 – $105,000",
      salary: "$85,000",
    },
    {
      name: "Phalcon",
      exSalary: "$60,000 – $95,000",
      salary: "$75,000",
    },
    {
      name: "Yii",
      exSalary: "$70,000 – $100,000",
      salary: "$80,000",
    },
  ];
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">PHP Frameworks</TableHead>
          <TableHead className="font-bold">
            Expected Salary Range (USD)
          </TableHead>
          <TableHead className="font-bold">Average Salary (USD)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.exSalary}</TableCell>
            <TableCell>{item.salary}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export const TableDemo4: React.FC = ({ }) => {
  const data = [
    {
      date: "April 8",
      day: "Monday",
      islamicDate: "Ramadan 29th",
    },
    {
      date: "April 9",
      day: "Tuesday",
      islamicDate: "Ramadan 30th or Shawwal 1st",
    },
    {
      date: "April 10",
      day: "Wednesday",
      islamicDate: "Shawwal 1st or 2nd",
    },
    {
      date: "April 11",
      day: "Thursday",
      islamicDate: "Shawwal 2nd or 3rd",
    },
    {
      date: "April 12",
      day: "Friday",
      islamicDate: "Shawwal 3rd or 4th",
    },
  ];
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Date</TableHead>
          <TableHead className="font-bold">Day</TableHead>
          <TableHead className="font-bold">Islamic Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.day}</TableCell>
            <TableCell>{item.islamicDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export const TableDemo5: React.FC = ({ }) => {
  const data = [
    {
      feature: "Target",
      sUpdate: "Websites using manipulative tactics",
      cUpdate: "Improve overall search result quality",
    },
    {
      feature: "Techniques Addressed",
      sUpdate:
        "Specific practices (e.g., scaled content, expired domain abuse)",
      cUpdate: "Content quality, UX/UI design, user intent, and expertise",
    },
    {
      feature: "Impact",
      sUpdate: "Penalties for manipulative sites",
      cUpdate: "Ranking changes based on content and user experience",
    },
    {
      feature: "Goal",
      sUpdate: "Foster fairer search environment",
      cUpdate: "Prioritize websites that truly inform and serve users",
    },
  ];
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Feature</TableHead>
          <TableHead className="font-bold">Spam Update</TableHead>
          <TableHead className="font-bold">Core Update</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.feature}</TableCell>
            <TableCell>{item.sUpdate}</TableCell>
            <TableCell>{item.cUpdate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export const TableDemo6: React.FC = ({ }) => {
  const data = [
    {
      audience: "Younger (Teens & Adults in Early 20s)",
      weekDay: "Late Afternoon/Evenings (5 PM – 1 AM)",
      weekend: "Mornings (9 AM – 12 PM) & Evenings (8 PM – Late)",
    },
    {
      audience: "Older (Adults in Late 20s & Above)",
      weekDay: "Early Evenings (7 PM – 9 PM)",
      weekend: "Throughout the Day (Varied)",
    },
  ];
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Audience</TableHead>
          <TableHead className="font-bold">Weekdays</TableHead>
          <TableHead className="font-bold">Weekends</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.audience}</TableCell>
            <TableCell>{item.weekDay}</TableCell>
            <TableCell>{item.weekend}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export const TableDemo7: React.FC = ({ }) => {
  const data = [
    {
      category: "Public Sector",
      dTiming: "09:00 to 14:30",
      fTiming: "09:00 to 12:00 noon",
    },
    {
      category: "Private Sector",
      dTiming: "09:00 to 15:00",
      fTiming: "09:00 to 12:30 noon",
    },
    {
      category: "Schools",
      dTiming: "08:00 to 13:00",
      fTiming: "09:00 to 12:00 noon",
    },

  ];
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Category</TableHead>
          <TableHead className="font-bold">Normal week-day timing in Ramadan</TableHead>
          <TableHead className="font-bold">Friday timings in Ramadan</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.dTiming}</TableCell>
            <TableCell>{item.fTiming}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export const TableDemo8: React.FC = ({ }) => {
  const data = [
    {
      internetPackage: "Elife 10G",
      speed: "10 GB",
      tv: "300 + HD TV",
      mPrice: "1799",
      contractLength: "24",
    },
    {
      internetPackage: "ELife 5G",
      speed: "5 GB",
      tv: "300 + HD TV",
      mPrice: "2699",
      contractLength: "24",
    },
    {
      internetPackage: "Ultra Fusion",
      speed: "1 GB",
      tv: "300 + HD TV",
      mPrice: "815",
      contractLength: "24",
    },
    {
      internetPackage: "Unlimited Sports",
      speed: "500 Mbps",
      tv: "262+ Sports & Entertainment",
      mPrice: "465",
      contractLength: "24",
    },
    {
      internetPackage: "Unlimited Entertainment",
      speed: "500 Mbps",
      tv: "236 + Premium Entertainment & OSN channels",
      mPrice: "599",
      contractLength: "24",
    },
    {
      internetPackage: "Unlimited Starter",
      speed: "250 Mbps",
      tv: "187+ HD TV channels",
      mPrice: "389",
      contractLength: "24",
    },
    {
      internetPackage: "eLife Family",
      speed: "100 Mbps",
      tv: "150+ Free-to-Air & Basic channel",
      mPrice: "359",
      contractLength: "24",
    },
    {
      internetPackage: "eLife Sports",
      speed: "100 Mbps",
      tv: "120+ Sports & premium channels",
      mPrice: "435",
      contractLength: "24",
    },
    {
      internetPackage: "eLife Entertainment",
      speed: "100 Mbps",
      tv: "100+ OSN Premium channels",
      mPrice: "569",
      contractLength: "24",
    },
    {
      internetPackage: "eLife Lite 100",
      speed: "100 Mbps",
      tv: "eLife On",
      mPrice: "749",
      contractLength: "12",
    },
    {
      internetPackage: "eLife Lite 50",
      speed: "50 Mbps",
      tv: "eLife On",
      mPrice: "599",
      contractLength: "12",
    },
    {
      internetPackage: "eLife Lite 25",
      speed: "25 Mbps",
      tv: "eLife On",
      mPrice: "399",
      contractLength: "12",
    },
    {
      internetPackage: "eLife Lite 12",
      speed: "12 Mbps",
      tv: "eLife On",
      mPrice: "299",
      contractLength: "12",
    },


  ];
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Etisalat Home Internet Packages</TableHead>
          <TableHead className="font-bold">Speed</TableHead>
          <TableHead className="font-bold">TV Inclusions</TableHead>
          <TableHead className="font-bold">Monthly Price (AED)</TableHead>
          <TableHead className="font-bold">Contract Length (Months)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.internetPackage}</TableCell>
            <TableCell>{item.speed}</TableCell>
            <TableCell>{item.tv}</TableCell>
            <TableCell>{item.mPrice}</TableCell>
            <TableCell>{item.contractLength}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export const TableDemo9: React.FC = ({ }) => {
  const data = [
    {
      internetPackage: "Du Home Starter",
      speed: "500 Mbps",
      tv: "OSN+ Essential Pack – 1 pack of your choice",
      mPrice: "272",
      contractLength: "24",
    },
    {
      internetPackage: "Du Home Basic",
      speed: "800 Mbps",
      tv: "OSN+ Entertainment Pack – 19 Channels + Premium TV – 1 Pack",
      mPrice: "349",
      contractLength: "24",
    },
    {
      internetPackage: "Du Home Advanced",
      speed: "1 Gbps",
      tv: "OSN+ Entertainment Pack – 19 Channels + Premium TV – 1 Pack",
      mPrice: "455",
      contractLength: "24",
    },
    {
      internetPackage: "Du Home Ultimate",
      speed: "1 Gbps",
      tv: "Included (Premium TV, Entertainment Pack, Ultimate Pack, Essential TV)",
      mPrice: "905",
      contractLength: "24",
    },
  ];
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Dun Internet Packages</TableHead>
          <TableHead className="font-bold">Speed</TableHead>
          <TableHead className="font-bold">TV Inclusions</TableHead>
          <TableHead className="font-bold">Monthly Price (AED)</TableHead>
          <TableHead className="font-bold">Contract Length (Months)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.internetPackage}</TableCell>
            <TableCell>{item.speed}</TableCell>
            <TableCell>{item.tv}</TableCell>
            <TableCell>{item.mPrice}</TableCell>
            <TableCell>{item.contractLength}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableDemo;
