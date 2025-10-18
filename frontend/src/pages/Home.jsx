import { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import Map from '../components/Map';
import { mockProperties } from '../data/mockProperties';

function Home() {
    const [selectedProperty, setSelectedProperty] = useState(null);

    const handlePropertyClick = (property) => {
        setSelectedProperty(property);
        console.log("Selected Property:", property);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">

            <header className="bg-white bg-opacity-80 background-blur-sm shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

                    {/*LOGO*/}
                    <div className="flex items-center space-x-3">
                        <div className="text-3xl">UP:Balloons</div>
                        <span className="text-2xl font-bold text-gray-800">PropGain</span>
                    </div>

                    {/*SEARCH & FILTERS*/}
                    <div className="flex items-center space-x-4">
                        <div className="bg-white rounded-full px-6 py-2 shadow-md flex items-center space-x-2">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input 
                                type="text" 
                                placeholder="Search by address, city, or ZIP" /** try Search Location INSTEAD SEE WHICH IS BETTER ! */
                                className="outline-none bg-transparent text-gray-700 placeholder-gray-400"
                            />
                        </div>

                        <div className="bg-white rounded-full px-4 py-2 shadow-md flex items-center space-x-2 cursor-pointer">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <select className="outline-none bg-transparent text-gray-700">
                                <option>5 miles</option>
                                <option>10 miles</option>
                                <option>25 miles</option>
                                <option>50 miles</option>
                            </select>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 shadow-md font-semibold transition-colors">
                            Salary Range
                        </button>
                    </div>
                </div>
            </header>
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-8 py-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left: Cards (70%) */}
                <div className="w-full md:w-[70%]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockProperties.map((property) => (
                      <PropertyCard
                        key={property.id}
                        property={property}
                        onClick={handlePropertyClick}
                      />
                    ))}
                  </div>

                  {/* Scroll Indicator */}
                  <div className="flex justify-center mt-12">
                    <button className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right: Map (30%) */}
                <div className="w-full md:w-[30%]">
                  <Map selectedProperty={selectedProperty} />
                </div>
              </div>
            </main>
    </div>
  );
}

export default Home;    {/* Property Cards Grid */}