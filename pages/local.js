import { useState } from 'react'

const sampleListings = [
  {
    id: 'l1',
    name: 'Johan Plumbing Co',
    category: 'Plumbers',
    rating: 4.8,
    reviews: 86,
    priceFrom: 'R350',
    location: 'Sandton, Johannesburg',
    tags: ['Emergency', 'Same-day'],
    distance: '3.2 km'
  },
  {
    id: 'l2',
    name: 'PowerFix Electricians',
    category: 'Electricians',
    rating: 4.6,
    reviews: 43,
    priceFrom: 'R420',
    location: 'Randburg, Johannesburg',
    tags: ['Licensed', '24/7'],
    distance: '6.1 km'
  },
  {
    id: 'l3',
    name: 'FitBox CrossFit Studio',
    category: 'Gyms',
    rating: 4.9,
    reviews: 120,
    priceFrom: 'R120/month trial',
    location: 'Rosebank, Johannesburg',
    tags: ['CrossFit', 'Small groups'],
    distance: '4.8 km'
  }
]

export default function Local() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = sampleListings.filter(l => {
    const q = query.toLowerCase()
    if(category !== 'All' && l.category !== category) return false
    return l.name.toLowerCase().includes(q) || l.category.toLowerCase().includes(q) || l.location.toLowerCase().includes(q)
  })

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2F8FFF] to-[#A04BFF] flex items-center justify-center text-white font-bold">CG</div>
          <div>
            <div className="font-semibold">CallGenie Local</div>
            <div className="text-xs text-slate-500">Find trusted local services — trades, gyms, ISPs</div>
          </div>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:underline">How it works</a>
          <a href="#" className="hover:underline">Categories</a>
          <a href="#" className="hover:underline">Help</a>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8 pb-20">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow mb-6">
            <div className="flex gap-3">
              <input value={query} onChange={e => setQuery(e.target.value)} className="flex-1 p-3 rounded-md border border-slate-200" placeholder="Search for a service or business (e.g. plumber, CrossFit, fibre)" />
              <select value={category} onChange={e => setCategory(e.target.value)} className="p-3 rounded-md border border-slate-200">
                <option>All</option>
                <option>Plumbers</option>
                <option>Electricians</option>
                <option>Gyms</option>
                <option>ISPs</option>
              </select>
              <button className="px-4 py-3 rounded-md bg-[#2F8FFF] text-white">Search</button>
            </div>
          </div>

          <div className="space-y-4">
            {filtered.map(listing => (
              <div key={listing.id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-md bg-gradient-to-br from-[#eef8ff] to-white flex items-center justify-center text-xl font-bold">{listing.name.split(' ')[0][0]}</div>
                  <div>
                    <div className="font-semibold text-lg">{listing.name}</div>
                    <div className="text-sm text-slate-500">{listing.category} • {listing.location} • {listing.distance}</div>
                    <div className="mt-2 text-sm text-slate-600">From <span className="font-semibold">{listing.priceFrom}</span></div>
                    <div className="mt-2 flex gap-2">
                      {listing.tags.map(tag => <span key={tag} className="text-xs p-1 rounded bg-slate-100">{tag}</span>)}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <div className="text-right">
                    <div className="font-semibold">{listing.rating} ★</div>
                    <div className="text-xs text-slate-500">{listing.reviews} reviews</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setSelected(listing)} className="px-3 py-2 rounded-md border border-slate-200">View</button>
                    <button onClick={() => alert('Calling business via CallGenie AI...')} className="px-3 py-2 rounded-md bg-[#2F8FFF] text-white">Call Now</button>
                    <button onClick={() => alert('Instant booking via AI...')} className="px-3 py-2 rounded-md border border-[#A04BFF] text-[#A04BFF]">Instant Book</button>
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="bg-white p-6 rounded-lg shadow text-slate-600">No results — try different keywords or expand your search area.</div>
            )}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold">Map (placeholder)</h4>
            <div className="mt-4 w-full h-48 bg-gradient-to-br from-[#eef6ff] to-white rounded-lg flex items-center justify-center">Map view</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold">Top categories</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Plumbers</li>
              <li>Electricians</li>
              <li>Gyms & Studios</li>
              <li>Fibre ISPs</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold">Safety & Trust</h4>
            <p className="text-sm text-slate-600 mt-2">Verified businesses, ratings, and secure booking.</p>
          </div>
        </aside>

        {selected && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-6">
            <div className="bg-white rounded-xl max-w-2xl w-full p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-xl">{selected.name}</div>
                  <div className="text-sm text-slate-500">{selected.category} • {selected.location}</div>
                </div>
                <button className="text-slate-500" onClick={() => setSelected(null)}>Close</button>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold">About</h5>
                  <p className="text-sm text-slate-600 mt-2">Reliable local service with rapid response time. CallGenie handles calls and bookings for this business automatically.</p>

                  <h5 className="font-semibold mt-4">Services</h5>
                  <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                    <li>Emergency call-outs</li>
                    <li>Installations</li>
                    <li>Maintenance</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold">Contact & Booking</h5>
                  <div className="mt-2 text-sm text-slate-600">CallGenie will answer the call and book for you. Or choose instant booking below.</div>
                  <div className="mt-4 flex gap-2">
                    <button onClick={() => alert('Calling via CallGenie AI...')} className="flex-1 py-2 rounded-md bg-[#2F8FFF] text-white">Call Now</button>
                    <button onClick={() => alert('Instant booking via AI...')} className="flex-1 py-2 rounded-md border border-[#A04BFF] text-[#A04BFF]">Instant Book</button>
                  </div>

                  <h5 className="font-semibold mt-4">Reviews</h5>
                  <div className="mt-2 text-sm text-slate-600">{selected.rating} ★ • {selected.reviews} reviews</div>
                  <div className="mt-3 space-y-2">
                    <div className="p-3 bg-slate-50 rounded">“Great service — came same day.” — M. Nkosi</div>
                    <div className="p-3 bg-slate-50 rounded">“Fast and professional.” — L. van der Merwe</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>

      <footer className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-500">© {new Date().getFullYear()} CallGenie Local — Find trusted local services.</footer>
    </div>
  )
}
