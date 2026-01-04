export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Nav */}
      <nav className="bg-white border-b-2 border-primary-600 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
                <span className="text-white font-bold text-2xl -rotate-3">K</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Kaswell</div>
                <div className="text-xs text-primary-600 font-semibold">Property Management</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition">Services</a>
              <a href="#why-us" className="text-gray-700 hover:text-primary-600 font-medium transition">Why Us</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition">Reviews</a>
              <a href="#contact" className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80" 
            alt="Modern home exterior"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-transparent"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Austin's Trusted Property Managers Since 2015
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Investment.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-300">Our Expertise.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed">
              Stop worrying about late rent, bad tenants, and 3am maintenance calls. We handle everything so you can focus on growing your portfolio.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-primary-500/50 transform hover:-translate-y-1 transition-all inline-flex items-center group">
                Free Property Analysis
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#services" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all inline-flex items-center">
                See What We Do
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-16 border-b-4 border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-br from-primary-600 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-gray-600 font-medium">Properties Under Management</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-br from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-gray-600 font-medium">Client Retention Rate</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">10+</div>
              <div className="text-gray-600 font-medium">Years in Austin Market</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-br from-orange-600 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-gray-600 font-medium">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-bold mb-4">WHAT WE DO</div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Full-Service Property Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From tenant screening to emergency repairs, we've got every aspect covered
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-500 hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Bulletproof Tenant Screening</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We don't just run credit checks—we dive deep into employment history, rental references, and behavioral patterns to find tenants who pay on time and take care of your property.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Full credit & criminal background checks</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Employment & income verification</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Previous landlord interviews</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-500 hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Zero-Hassle Rent Collection</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Forget chasing down rent checks. Our automated system sends reminders, processes payments instantly, and handles late fees—all while you watch your bank account grow.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Automated ACH & credit card payments</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Instant late fee enforcement</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Monthly owner statements & tax docs</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Lightning-Fast Maintenance</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Burst pipe at 2am? AC died in August? Our 24/7 hotline and vetted contractor network means issues get resolved fast—keeping your tenants happy and your property protected.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">24/7 emergency repair hotline</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Pre-vetted, licensed contractors</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Quarterly property inspections</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&q=80" 
                alt="Professional property management team"
                className="relative rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border-2 border-primary-500">
                <div className="text-4xl font-black text-primary-600 mb-1">$2.4M+</div>
                <div className="text-sm text-gray-600 font-semibold">Rent Collected Annually</div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-bold mb-4">WHY KASWELL</div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">We Treat Your Property Like It's Ours</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Because we know what it's like to be a property owner. Our founders started as landlords themselves—dealing with the same headaches you face today.
              </p>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-600 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">1</div>
                  <div className="ml-5">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Radical Transparency</h4>
                    <p className="text-gray-600">Real-time financial dashboard, instant notifications, and direct access to your dedicated property manager. No surprises, ever.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">2</div>
                  <div className="ml-5">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Deep Austin Roots</h4>
                    <p className="text-gray-600">We know every neighborhood, every school district, and exactly what tenants will pay. That local knowledge = better rents for you.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">3</div>
                  <div className="ml-5">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Vacancy Guarantee</h4>
                    <p className="text-gray-600">We're so confident in our marketing that we guarantee your property will be rented within 30 days—or we work for free until it is.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-bold mb-4">REAL REVIEWS</div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Property Owners Love Us</h2>
            <p className="text-xl text-gray-600">And their tenants do too</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary-500 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                "I was drowning in property management stress before Kaswell. Now I literally don't think about it—rent shows up on time, tenants are happy, and I can focus on my day job. Best decision ever."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">SM</div>
                <div>
                  <div className="font-bold text-gray-900">Sarah Mitchell</div>
                  <div className="text-gray-600 text-sm">4 Single-Family Homes</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                "My last management company took 3 months to fill a vacancy. Kaswell had quality applicants within 10 days and filled it with an amazing tenant who's been there 2 years now. That's the difference."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">JR</div>
                <div>
                  <div className="font-bold text-gray-900">James Rodriguez</div>
                  <div className="text-gray-600 text-sm">Downtown Condo Owner</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                "The 24/7 maintenance response is no joke. My tenant's AC went out on a Saturday afternoon in July—Kaswell had someone there within 90 minutes. That's how you keep good tenants."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">LC</div>
                <div>
                  <div className="font-bold text-gray-900">Linda Chen</div>
                  <div className="text-gray-600 text-sm">South Austin Duplex</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Let's Talk About Your Property</h2>
            <p className="text-xl text-primary-100">Free consultation. Zero pressure. Real solutions.</p>
          </div>
          <form className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 text-white placeholder-white/60 backdrop-blur-sm" 
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 text-white placeholder-white/60 backdrop-blur-sm" 
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2 text-sm">Phone</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 text-white placeholder-white/60 backdrop-blur-sm" 
                placeholder="(512) 555-0123"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2 text-sm">Property Address (Optional)</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 text-white placeholder-white/60 backdrop-blur-sm" 
                placeholder="123 Main St, Austin, TX 78701"
              />
            </div>
            <div className="mb-8">
              <label className="block text-white font-semibold mb-2 text-sm">What's Your Biggest Property Management Challenge?</label>
              <textarea 
                rows="4" 
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 text-white placeholder-white/60 backdrop-blur-sm" 
                placeholder="Finding reliable tenants? Collecting rent? Maintenance headaches? Tell us what's keeping you up at night..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary-600 to-cyan-600 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-primary-500/50 transform hover:-translate-y-1 transition-all text-lg flex items-center justify-center group"
            >
              Get Your Free Property Analysis
              <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-center text-primary-200 text-sm mt-4 flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              We'll respond within 2 hours during business hours
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <span className="font-bold text-xl">Kaswell</span>
              </div>
              <p className="text-gray-400 mb-4">
                Austin's most trusted property management company.
              </p>
              <div className="text-sm text-gray-400">
                <div className="flex items-center mb-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Available 24/7
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-primary-400 transition">Tenant Screening</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Rent Collection</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">24/7 Maintenance</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Property Marketing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-primary-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Our Team</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Careers</a></li>
                <li><a href="#contact" className="hover:text-primary-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Get In Touch</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Austin, Texas
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  (512) 555-0100
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  hello@kaswellpm.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Kaswell Property Management. All rights reserved. | Made with ❤️ in Austin</p>
          </div>
        </div>
      </footer>
    </div>
  );
}