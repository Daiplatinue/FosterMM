export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-[12px] font-normal text-neutral-200">
      {/* Quick Links Section */}
      <div className="max-w-[980px] mx-auto px-4 py-4">
        <h2 className="text-2xl font-semibold mb-3">Quick Links</h2>
        <div className="flex gap-2 flex-wrap">
          <button className="px-4 py-1 rounded-full bg-zinc-900 border border-gray-300 hover:border-gray-400 transition-colors text-sm">
            Order Status ›
          </button>
          <button className="px-4 py-1 rounded-full bg-zinc-900 border border-gray-300 hover:border-gray-400 transition-colors text-sm">
            Shopping Help ›
          </button>
          <button className="px-4 py-1 rounded-full bg-zinc-900 border border-gray-300 hover:border-gray-400 transition-colors text-sm">
            Your Saves ›
          </button>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-4">
        <div className="max-w-[980px] mx-auto px-4 py-5">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Shop and Learn */}
            <div>
              <h3 className="font-semibold mb-2">Shop and Learn</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Store</a></li>
                <li><a href="#" className="hover:underline">Mac</a></li>
                <li><a href="#" className="hover:underline">iPad</a></li>
                <li><a href="#" className="hover:underline">iPhone</a></li>
                <li><a href="#" className="hover:underline">Watch</a></li>
                <li><a href="#" className="hover:underline">AirPods</a></li>
                <li><a href="#" className="hover:underline">TV & Home</a></li>
                <li><a href="#" className="hover:underline">AirTag</a></li>
                <li><a href="#" className="hover:underline">Accessories</a></li>
                <li><a href="#" className="hover:underline">Gift Cards</a></li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h3 className="font-semibold mb-2">Account</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Manage Your Apple Account</a></li>
                <li><a href="#" className="hover:underline">Apple Store Account</a></li>
                <li><a href="#" className="hover:underline">iCloud.com</a></li>
              </ul>
            </div>

            {/* Entertainment */}
            <div>
              <h3 className="font-semibold mb-2">Entertainment</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Apple One</a></li>
                <li><a href="#" className="hover:underline">Apple TV+</a></li>
                <li><a href="#" className="hover:underline">Apple Music</a></li>
                <li><a href="#" className="hover:underline">Apple Arcade</a></li>
                <li><a href="#" className="hover:underline">Apple Podcasts</a></li>
                <li><a href="#" className="hover:underline">Apple Books</a></li>
                <li><a href="#" className="hover:underline">App Store</a></li>
              </ul>
            </div>

            {/* Business and Education */}
            <div>
              <div className="mb-8">
                <h3 className="font-semibold mb-2">For Business</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Apple and Business</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">For Education</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Apple and Education</a></li>
                  <li><a href="#" className="hover:underline">Shop for University</a></li>
                </ul>
              </div>
            </div>

            {/* Apple Values */}
            <div>
              <h3 className="font-semibold mb-2">Apple Values</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Accessibility</a></li>
                <li><a href="#" className="hover:underline">Environment</a></li>
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">Supply Chain</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Notes */}
          <div className="mt-8 pt-4 border-t border-gray-300">
            <p className="text-neutral-200 mb-3">
              More ways to shop: <a href="#" className="text-[#0066cc] hover:underline">Find a retailer</a> near you. Or call 1800-1651-0525 (Smart / PLDT), 1800-8474-7382 (Globe).
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