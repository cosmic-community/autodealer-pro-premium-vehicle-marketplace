export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">AutoDealer Pro</h3>
            <p className="text-sm">
              Premium vehicle marketplace connecting buyers with trusted dealers across Germany.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary">All Vehicles</a></li>
              <li><a href="/brands" className="hover:text-primary">Brands</a></li>
              <li><a href="/dealers" className="hover:text-primary">Dealers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm">
              Email: info@autodealer-pro.com<br />
              Phone: +49 30 1234 5678
            </p>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2025 AutoDealer Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}