const OverviewPage = () => {
  return (
    <div className="space-y-6">
      {/* Top stats */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-purple-100 text-purple-600 p-2 rounded-lg">
              <svg
                width="28"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="28"
                  height="28"
                  rx="8"
                  fill="#A78BFA"
                  stroke="none"
                />
                <path
                  d="M8 19v-1a4 4 0 014-4h4a4 4 0 014 4v1"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <circle cx="14" cy="11" r="3" stroke="#fff" strokeWidth="2" />
              </svg>
            </span>
            <div>
              <div className="text-2xl font-bold text-gray-800">3,256</div>
              <div className="text-gray-500">Total Patients</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-blue-100 text-blue-600 p-2 rounded-lg">
              <svg
                width="28"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="28"
                  height="28"
                  rx="8"
                  fill="#60A5FA"
                  stroke="none"
                />
                <circle cx="14" cy="14" r="6" stroke="#fff" strokeWidth="2" />
                <circle cx="14" cy="12" r="2" fill="#fff" />
              </svg>
            </span>
            <div>
              <div className="text-2xl font-bold text-gray-800">394</div>
              <div className="text-gray-500">Available Staff</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-orange-100 text-orange-600 p-2 rounded-lg">
              <svg
                width="28"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="28"
                  height="28"
                  rx="8"
                  fill="#FDBA74"
                  stroke="none"
                />
                <path
                  d="M9 14h10M9 18h10M9 10h10"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <div>
              <div className="text-2xl font-bold text-gray-800">$2,536</div>
              <div className="text-gray-500">Avg Treat. Costs</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-pink-100 text-pink-600 p-2 rounded-lg">
              <svg
                width="28"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="28"
                  height="28"
                  rx="8"
                  fill="#F472B6"
                  stroke="none"
                />
                <path d="M14 9v4l3 3" stroke="#fff" strokeWidth="2" />
              </svg>
            </span>
            <div>
              <div className="text-2xl font-bold text-gray-800">38</div>
              <div className="text-gray-500">Available Cars</div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle section: charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Outpatients vs. Inpatients Trend */}
        <div className="bg-white rounded-xl shadow p-4 md:p-6 md:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <div className="font-semibold text-gray-700">
              Outpatients vs. Inpatients Trend
            </div>
            <div className="text-sm text-gray-400">Show by months</div>
          </div>
          {/* Fake bar chart */}
          <div className="flex-1 flex items-end justify-evenly gap-2 h-40 mt-2">
            {[1500, 3000, 4500, 2000, 3500, 4000].map((val, idx) => (
              <div key={idx} className="flex flex-col items-center w-8">
                <div
                  className="bg-purple-400 rounded-t h-[80%]"
                  style={{ height: `${val / 50}px`, width: "32px" }}
                />
                <div
                  className="bg-green-400 rounded-t mt-1"
                  style={{ height: `${val / 150}px`, width: "32px" }}
                />
                <div className="text-xs text-gray-400 mt-1">Mar</div>
              </div>
            ))}
          </div>
        </div>
        {/* Patients by Gender */}
        <div className="bg-white rounded-xl shadow p-4 md:p-6 flex flex-col items-center">
          <div className="font-semibold text-gray-700 mb-2 w-full">
            Patients by Gender
          </div>
          {/* Fake donut chart */}
          <svg width="100" height="100" className="mb-2">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#A78BFA"
              strokeWidth="12"
              fill="none"
              strokeDasharray="251"
              strokeDashoffset="0"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#F472B6"
              strokeWidth="12"
              fill="none"
              strokeDasharray="125"
              strokeDashoffset="126"
            />
          </svg>
          <div className="flex gap-4 text-sm mt-2">
            <span className="flex items-center gap-1 text-purple-500">
              <span className="w-3 h-3 rounded-full bg-purple-400 inline-block"></span>
              Female
            </span>
            <span className="flex items-center gap-1 text-pink-500">
              <span className="w-3 h-3 rounded-full bg-pink-400 inline-block"></span>
              Male
            </span>
          </div>
        </div>
      </div>

      {/* Bottom section: 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {/* Time Admitted */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col ">
          <div className="flex justify-between items-center mb-2">
            <div className="font-semibold text-gray-700">Time Admitted</div>
            <div className="text-sm text-gray-400">Today</div>
          </div>
          {/* Fake line chart */}
          <svg width="100%" height="90" viewBox="0 0 300 60" className="mt-2">
            <polyline
              fill="none"
              stroke="#FB923C"
              strokeWidth="3"
              points="0,40 30,20 60,30 90,10 120,30 150,20 180,40 210,30 240,50 270,30 300,40"
            />
            <circle
              cx="90"
              cy="10"
              r="6"
              fill="#fff"
              stroke="#FB923C"
              strokeWidth="3"
            />
            <text x="80" y="5" fontSize="12" fill="#333" fontWeight="bold">
              113
            </text>
          </svg>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>07 am</span>
            <span className="text-orange-500 font-bold">08 am</span>
            <span>09 am</span>
            <span>10 am</span>
            <span>11 am</span>
            <span>12 pm</span>
          </div>
        </div>
        {/* Patients By Division */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <div className="font-semibold text-gray-700">
              Patients By Division
            </div>
            <div className="text-sm text-gray-400">Today</div>
          </div>
          <div className="divide-y divide-gray-100 mt-2">
            <div className="flex justify-between py-2 text-gray-600">
              <span>Cardiology</span>
              <span className="font-bold">247</span>
            </div>
            <div className="flex justify-between py-2 text-gray-600">
              <span>Neurology</span>
              <span className="font-bold">164</span>
            </div>
            <div className="flex justify-between py-2 text-gray-600">
              <span>Surgery</span>
              <span className="font-bold">86</span>
            </div>
          </div>
        </div>
        {/* Patients this month */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl shadow p-6 flex flex-col items-center justify-center text-white">
          <div className="text-3xl font-bold mb-2">3,240</div>
          <div className="mb-4">Patients this month</div>
          {/* Fake line chart */}
          <svg width="100%" height="60" viewBox="0 0 200 60">
            <polyline
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              points="0,50 20,40 40,45 60,30 80,35 100,20 120,30 140,15 160,25 180,10 200,20"
            />
            <circle cx="180" cy="10" r="5" fill="#fff" opacity="0.7" />
            <text x="185" y="18" fontSize="12" fill="#fff" fontWeight="bold">
              232
            </text>
          </svg>
          <div className="flex justify-between w-full text-xs mt-2 opacity-80">
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
            <span>18</span>
            <span>19</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
