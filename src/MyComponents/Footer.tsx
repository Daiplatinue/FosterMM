export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-[12px] font-normal text-neutral-200">
      {/* Quick Links Section */}
      <div className="max-w-[980px] mx-auto px-4 py-4">
        <h2 className="text-2xl font-semibold mb-3">Quick Links</h2>
        <div className="flex gap-2 flex-wrap">
          <button
            className="px-4 py-1 rounded-full bg-zinc-900 border border-gray-300 hover:border-gray-400 transition-colors text-sm"
            onClick={() => window.open("https://www.youtube.com/", "_blank", "noopener,noreferrer")}
            type="button"
          >
            Youtube ›
          </button>
          <button
            className="px-4 py-1 rounded-full bg-zinc-900 border border-gray-300 hover:border-gray-400 transition-colors text-sm"
            onClick={() => window.open("https://www.facebook.com/", "_blank", "noopener,noreferrer")}
            type="button"
          >
            Facebook ›
          </button>
          <button
            className="px-4 py-1 rounded-full bg-zinc-900 border border-gray-300 hover:border-gray-400 transition-colors text-sm"
            onClick={() => window.open("https://www.discord.com/", "_blank", "noopener,noreferrer")}
            type="button"
          >
            Discord ›
          </button>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-4">
        <div className="max-w-[980px] mx-auto px-4 py-5">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Shop and Learn */}
            <div>
              <h3 className="font-semibold mb-2">Special Thanks</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Sarah Rodriguez, M.</a></li>
                <li><a href="#" className="hover:underline">Ethan James, M.</a></li>
                <li><a href="#" className="hover:underline">Isabella Grace, T.</a></li>
                <li><a href="#" className="hover:underline">Noah Alexander, C.</a></li>
                <li><a href="#" className="hover:underline">Olivia Rose, H.</a></li>
                <li><a href="#" className="hover:underline">Liam Matthew, B.</a></li>
                <li><a href="#" className="hover:underline">Emily Claire, A.</a></li>
                <li><a href="#" className="hover:underline">Mason Elijah, T.</a></li>
                <li><a href="#" className="hover:underline">Ava Marie, P.</a></li>
                <li><a href="#" className="hover:underline">Jackson Thomas, W.</a></li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h3 className="font-semibold mb-2">Account Management</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Login Account</a></li>
                <li><a href="#" className="hover:underline">Change Password</a></li>
                <li><a href="#" className="hover:underline">Logout</a></li>
              </ul>
            </div>

            {/* Entertainment */}
            <div>
              <h3 className="font-semibold mb-2">Center Addresses</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Barangay Talamban, Cebu City</a></li>
                <li><a href="#" className="hover:underline">Barangay Pajo, Lapu-Lapu City</a></li>
                <li><a href="#" className="hover:underline">Barangay Poblacion, Talisay City</a></li>
              </ul>
            </div>

            {/* Business and Education */}
            <div>
              <div className="mb-8">
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">(+63) 956 254 5753</a></li>
                  <li><a href="#" className="hover:underline">(+63) 924 754 1812</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Programs</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Home Placement Program</a></li>
                  <li><a href="#" className="hover:underline">Emotional Support Program</a></li>
                  <li><a href="#" className="hover:underline">Health and Wellness Program</a></li>
                  <li><a href="#" className="hover:underline">Foster Parent Training Program</a></li>
                </ul>
              </div>
            </div>

            {/* Apple Values */}
            <div>
              <h3 className="font-semibold mb-2">Minimum Specs Requirements</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Intel (R) Core (TM) i3 CPU 10th Gen or higher</a></li>
                <li><a href="#" className="hover:underline">8GB of RAM or higer</a></li>
                <li><a href="#" className="hover:underline">NVIDIA GeForce GT 730 (1GB)</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Notes */}
          <div className="mt-8 pt-4 border-t border-gray-300">
            <p className="text-neutral-200 mb-3">
              More ways to support: Visit our center or contact us at <a href="#" className="text-[#0066cc] hover:underline">1800-1651-0525 (Smart / PLDT)</a> to learn more about fostering opportunities and how you can help.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-neutral-200">
              <p>Copyright © {new Date().getFullYear()} Enyaw Inc. All rights reserved.</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:underline">Terms of Use</a>
                <span>|</span>
                <a href="#" className="hover:underline">Sales and Refunds</a>
                <span>|</span>
                <a href="#" className="hover:underline">Legal</a>
                <span>|</span>
                <a href="#" className="hover:underline">Site Map</a>
              </div>
              <a href="#" className="hover:underline">Philippines</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};