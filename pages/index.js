import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2F8FFF] to-[#A04BFF] flex items-center justify-center text-white font-bold">CG</div>
          <div>
            <div className="font-semibold text-lg">CallGenie</div>
            <div className="text-xs text-slate-500">We answer. You grow.</div>
          </div>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <Link href="/local"><a className="px-4 py-2 rounded-md bg-white shadow text-sm font-medium">Directory</a></Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">
        <section>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight">Never miss a customer again.</h1>
          <p className="mt-4 text-slate-600 max-w-xl">
            CallGenie answers calls, handles enquiries, and books jobs for your business — automatically, 24/7.
            Built for trades, gyms, and fibre ISPs.
          </p>

          <div className="mt-8 flex gap-3">
            <button className="px-5 py-3 rounded-lg bg-[#2F8FFF] text-white font-semibold shadow">Start free trial</button>
            <button className="px-5 py-3 rounded-lg border border-slate-200 text-slate-700">See pricing</button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white shadow">24/7 AI Reception</div>
            <div className="p-4 rounded-lg bg-white shadow">Instant Booking</div>
            <div className="p-4 rounded-lg bg-white shadow">Outage Detection (ISPs)</div>
            <div className="p-4 rounded-lg bg-white shadow">Class & PT Scheduling (Gyms)</div>
          </div>
        </section>

        <aside>
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="text-xs text-slate-500">Live demo</div>
            <h3 className="mt-2 font-semibold">CallGenie in action</h3>
            <p className="text-sm text-slate-600 mt-2">
              See how CallGenie answers a call, captures details and books a job — all without human intervention.
            </p>

            <div className="mt-4 w-full h-44 rounded-lg bg-gradient-to-br from-[#eef8ff] to-white border border-slate-100 flex items-center justify-center">
              Demo card / video placeholder
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 px-4 py-2 rounded-lg bg-[#A04BFF] text-white font-medium">Request live demo</button>
              <button className="flex-1 px-4 py-2 rounded-lg border border-slate-200">Contact sales</button>
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-500">
            <strong>Industries:</strong>
            <ul className="mt-2 list-disc list-inside">
              <li>Trades (plumbers, electricians)</li>
              <li>Gyms & fitness studios</li>
              <li>Fibre ISPs & telecoms</li>
            </ul>
          </div>
        </aside>
      </main>

      <section id="features" className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="text-sm font-semibold text-[#2F8FFF]">1. Answer</div>
            <div className="mt-2 text-slate-600">CallGenie picks up instantly, greets the caller and identifies intent.</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="text-sm font-semibold text-[#2F8FFF]">2. Assist</div>
            <div className="mt-2 text-slate-600">Provides information, runs simple troubleshooting and qualifies the lead.</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="text-sm font-semibold text-[#2F8FFF]">3. Book</div>
            <div className="mt-2 text-slate-600">Schedules the job in your calendar and sends confirmation to both parties.</div>
          </div>
        </div>
      </section>

      <section id="pricing" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white shadow">
            <div className="text-sm text-slate-500">Starter</div>
            <div className="mt-2 text-3xl font-bold">R499<span className="text-base font-medium">/mo</span></div>
            <ul className="mt-4 text-slate-600 space-y-2">
              <li>24/7 answering</li>
              <li>200 call minutes</li>
              <li>Basic booking</li>
            </ul>
            <button className="mt-4 w-full py-2 rounded-md bg-[#2F8FFF] text-white font-semibold">Start trial</button>
          </div>

          <div className="p-6 rounded-xl bg-white shadow border-2 border-[#2F8FFF]">
            <div className="text-sm text-slate-500">Pro</div>
            <div className="mt-2 text-3xl font-bold">R899<span className="text-base font-medium">/mo</span></div>
            <ul className="mt-4 text-slate-600 space-y-2">
              <li>500 call minutes</li>
              <li>Advanced scheduling</li>
              <li>Transcripts & WhatsApp alerts</li>
            </ul>
            <button className="mt-4 w-full py-2 rounded-md bg-[#2F8FFF] text-white font-semibold">Choose Pro</button>
          </div>

          <div className="p-6 rounded-xl bg-white shadow">
            <div className="text-sm text-slate-500">Elite</div>
            <div className="mt-2 text-3xl font-bold">R1,499<span className="text-base font-medium">/mo</span></div>
            <ul className="mt-4 text-slate-600 space-y-2">
              <li>1,000 call minutes</li>
              <li>Multi-location & priority routing</li>
              <li>Outage & ISP features</li>
            </ul>
            <button className="mt-4 w-full py-2 rounded-md bg-[#2F8FFF] text-white font-semibold">Choose Elite</button>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-500">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} CallGenie — built for trades, gyms & fibre.</div>
          <div className="mt-4 md:mt-0">Terms • Privacy • Contact</div>
        </div>
      </footer>
    </div>
  )
}
