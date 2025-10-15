import Image from "next/image";
import { BarChart } from "@mui/x-charts/BarChart";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { LineChart } from "@mui/x-charts/LineChart";

export default function StatisticsParent() {
  const analysis_data = [
    {
      icon: "customer.svg",
      title: "Customers",
      num: 3782,
      stat: 11,
    },
    {
      icon: "order.svg",
      title: "Orders",
      num: 5395,
      stat: 9,
    },
  ];
  return (
    <div
      className={`container p-4 mx-auto
    flex flex-col gap-5 
    `}
    >
      <div
        className={`analysis_parent
        grid gap-7
        grid-cols-1
        md:grid-cols-[1fr_auto] 
        
        `}
      >
        {/* Analytics */}
        <div
          className={`analysis
        flex gap-5.5 flex-col
        `}
        >
          <div className={`flex gap-3.5
            max-md:flex-col
            `}>
            {analysis_data.map((a, idx) => (
              <div
                key={idx}
                className={`
                    h-[200px] bg-white
                    w-full
                relative p-5 rounded-lg
                `}
              >
                <div
                  className={`
                        flex flex-col justify-between
                        h-[120px]
                         lg:h-[150px]
                        
                        `}
                >
                  <div
                    className={`w-[40px] h-[40px] bg-gray-300
                    flex justify-center items-center
                        p-[10px] rounded-md`}
                  >
                    <Image
                      width={20}
                      height={20}
                      src={`${a.icon}`}
                      alt={`${a.title}`}
                    />
                  </div>
                  <span className={"flex flex-col gap-2.5"}>
                    <span className={`text-sm `}>{a.title}</span>
                    <span className={`text-2xl xl:text-3xl font-bold`}>
                      {a.num}
                    </span>
                  </span>
                </div>

                {/* ---------- */}

                <span
                  className={`w-[75px] h-[30px] bg-green-200
                            absolute bottom-0 right-0 m-[20px]
                            flex justify-center items-center rounded-md
                            `}
                >
                  {a.stat}%
                </span>
              </div>
            ))}
          </div>
          {/* bars chart */}
          <div className={`bg-white rounded-lg`}>
            <BarChart
              xAxis={[
                {
                  id: "barCategories",
                  data: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                },
              ]}
              series={[
                {
                  data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                },
              ]}
              height={300}
              borderRadius={10}
            />
          </div>
        </div>
        {/* Percentage Chart */}
        <div
          className={`bg-gray-200 rounded-lg
            w-full
            md:w-[300px]
            lg:w-[500px]
         
        `}
        >
          <div
            className={`flex flex-col gap-5 bg-white rounded-lg
            px-5 py-10 
            h-[80%]
            `}
          >
            <span>Monthly Target</span>
            <span>Target you’ve set for each month</span>
            <Gauge
              value={75}
              startAngle={-90}
              endAngle={90}
              sx={{
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 40,
                  transform: "translate(0px, -40px)",
                },
              }}
              text={({ value, valueMax }) => `${value} / ${valueMax}`}
            />
            <span className="text-center">
              You earn $3287 today, it's higher than last month. Keep up your
              good work!
            </span>
          </div>
          {/* -------------- */}
          <div
            className={`nums
            grid grid-cols-3 gap-5 md:px-5 my-5
            `}
          >
            <div
              className={`border-r border-r-gray-400
                flex flex-col justify-center items-center p-1
                `}
            >
              <span>Target</span>
              <span className={`flex items-center gap-1`}>
                $20k
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  fill="red"
                >
                  <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>
                </svg>
              </span>
            </div>
            <div
              className={`border-r border-r-gray-400
                flex flex-col justify-center items-center p-1
                `}
            >
              <span>Revenue</span>
              <span className={`flex items-center gap-1`}>
                $20k
                <svg
                  className="rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  fill="green"
                >
                  <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>
                </svg>
              </span>
            </div>
            <div
              className={`
                flex flex-col justify-center items-center p-1
                `}
            >
              <span>Today</span>
              <span className={`flex items-center gap-1`}>
                $20k 
                <svg
                  className="rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  fill="green"
                >
                  <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics */}
       <div className="bg-white rounded-md p-4">
      <LineChart
        xAxis={[
          {
            data: ["Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",], // ✅ Month names
            scaleType: 'band', // ✅ tells MUI to treat x values as categories, not numbers
          },
        ]}
        series={[
          {
            data: [100,3000,20,60,633,737,6000,0,100,500,1843,799],
            label: 'Revenue',
          },
        ]}
        height={300}
      />
    </div>
    </div>
  );
}
