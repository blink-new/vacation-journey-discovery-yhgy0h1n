import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, Heart, Search, Waves, Users, Calendar, ChevronDown } from "lucide-react";

const VacationDiscovery = () => {
  const [activeTab, setActiveTab] = useState('travel');
  const [searchTerm] = useState('');

  const vacationSpots = [
    {
      id: 1,
      title: "Maldives Overwater Villa",
      location: "Maldives",
      price: 850,
      originalPrice: 1200,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      description: "Private overwater villa with infinity pool, crystal clear lagoon views, and world-class spa services.",
      type: "luxury"
    },
    {
      id: 2,
      title: "Bora Bora Pearl Beach",
      location: "French Polynesia", 
      price: 720,
      originalPrice: 950,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      description: "Turquoise lagoons and white sand beaches in the heart of the South Pacific paradise.",
      type: "romantic"
    },
    {
      id: 3,
      title: "Santorini Sunset Villa",
      location: "Greece",
      price: 450,
      originalPrice: 600,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&fit=crop",
      description: "Cliffside villa overlooking the Aegean Sea with private infinity pool and sunset views.",
      type: "adventure"
    },
    {
      id: 4,
      title: "Seychelles Beach Resort",
      location: "Seychelles",
      price: 680,
      originalPrice: 880,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Pristine beaches with granite boulders, lush tropical forests, and luxury beachfront suites.",
      type: "luxury"
    },
    {
      id: 5,
      title: "Turks & Caicos Paradise",
      location: "Caribbean",
      price: 520,
      originalPrice: 750,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop",
      description: "Powder-soft white sand beaches and impossibly blue waters perfect for total relaxation.",
      type: "romantic"
    },
    {
      id: 6,
      title: "Fiji Coral Coast",
      location: "Fiji",
      price: 390,
      originalPrice: 550,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      description: "Untouched coral reefs, warm Fijian hospitality, and secluded beach bungalows.",
      type: "adventure"
    }
  ];



  const filteredSpots = vacationSpots.filter(spot => {
    const matchesSearch = spot.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         spot.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Waves className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  Magnolia
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">Hotel</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">Flight</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">Travel</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">Destination</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">Travel Package</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">Log In</a>
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 rounded-md font-medium">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Premium Magazine Style */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center')`
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Discover Your Next Amazing
              <br />
              <span className="text-white/95">Journey Excitement and Wonder!</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
              Embark on our most incredible adventures filled with excitement and wonder, where every 
              moment is unexpectedly transformed into something magical and unforgettable.
            </p>
          </div>

          {/* Search Form */}
          <div className="w-full max-w-5xl bg-white rounded-xl p-6 shadow-2xl">
            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6 bg-gray-100 p-1 rounded-lg">
                <TabsTrigger value="travel" className="rounded-md font-medium">Travel</TabsTrigger>
                <TabsTrigger value="hotel" className="rounded-md font-medium">Hotel</TabsTrigger>
                <TabsTrigger value="flight" className="rounded-md font-medium">Flight</TabsTrigger>
                <TabsTrigger value="destination" className="rounded-md font-medium">Destination</TabsTrigger>
              </TabsList>

              <TabsContent value="travel" className="space-y-6">
                {/* Search Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Location</label>
                    <Select>
                      <SelectTrigger className="w-full h-12">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                          <SelectValue placeholder="Bali Indonesia" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bali">Bali Indonesia</SelectItem>
                        <SelectItem value="maldives">Maldives</SelectItem>
                        <SelectItem value="santorini">Santorini Greece</SelectItem>
                        <SelectItem value="borabora">Bora Bora</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Departure Month</label>
                    <Select>
                      <SelectTrigger className="w-full h-12">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                          <SelectValue placeholder="Select date range" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="january">January 2024</SelectItem>
                        <SelectItem value="february">February 2024</SelectItem>
                        <SelectItem value="march">March 2024</SelectItem>
                        <SelectItem value="april">April 2024</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Guests</label>
                    <Select>
                      <SelectTrigger className="w-full h-12">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-gray-400 mr-2" />
                          <SelectValue placeholder="Select guests" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="font-medium">Filters:</span>
                    <button className="hover:text-gray-900 transition-colors">Bali Indonesia</button>
                    <button className="hover:text-gray-900 transition-colors">Nusa Penida</button>
                    <button className="hover:text-gray-900 transition-colors">Kuta Bali</button>
                    <button className="hover:text-gray-900 transition-colors">Sanur Bali</button>
                  </div>
                  
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium flex items-center space-x-2">
                    <span>Search Now</span>
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Trusted by 300+ Companies</h3>
          <div className="flex justify-center items-center space-x-12 opacity-40">
            <div className="text-xl font-bold text-gray-600">Goodwell</div>
            <div className="text-xl font-bold text-gray-600">FocalPoint</div>
            <div className="text-xl font-bold text-gray-600">Screentime</div>
            <div className="text-xl font-bold text-gray-600">Segment</div>
            <div className="text-xl font-bold text-gray-600">Shutterframe</div>
            <div className="text-xl font-bold text-gray-600">Mastern</div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover the Best Travel
              <br />
              Deals of the Month
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our travel packages for every traveler. Whether a beach getaway, 
              mountain trek, or city exploration, we have something special!
            </p>
          </div>

          {/* Vacation Spots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpots.slice(0, 3).map((spot) => (
              <Card 
                key={spot.id} 
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden rounded-2xl bg-white"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={spot.image}
                    alt={spot.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300"
                    >
                      <Heart className="w-5 h-5 text-rose-500" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
                      {spot.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{spot.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{spot.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {spot.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${spot.price}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        ${spot.originalPrice}
                      </span>
                      <span className="text-sm text-gray-500">/night</span>
                    </div>
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Right Sidebar Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Most Popular Lodges Around the World</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSpots.slice(3, 7).map((spot) => (
                  <Card key={spot.id} className="overflow-hidden rounded-xl border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={spot.image}
                        alt={spot.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{spot.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{spot.description.slice(0, 80)}...</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">${spot.price}</span>
                        <Button size="sm" variant="outline" className="text-sm">
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Best Deals Section */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Discover the Best Travel Deals of the Month</h4>
                <p className="text-gray-600 mb-6 text-sm">
                  Explore our travel packages for every traveler. Whether a beach getaway, 
                  mountain trek, or city exploration, we have something special!
                </p>
                <div className="space-y-4">
                  {filteredSpots.slice(0, 2).map((spot) => (
                    <div key={spot.id} className="flex space-x-4">
                      <img
                        src={spot.image}
                        alt={spot.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900 text-sm">{spot.location}</h5>
                        <p className="text-xs text-gray-600 mb-1">{spot.description.slice(0, 50)}...</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-gray-900">${spot.price}</span>
                          <Button size="sm" variant="outline" className="text-xs px-3">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nature Beauty Section */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Enjoy the Mesmerizing Beauty of Nature
                </h4>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-cyan-100 to-blue-200"></div>
                  ))}
                </div>
                <div className="space-y-3">
                  {filteredSpots.slice(0, 2).map((spot) => (
                    <div key={spot.id} className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-900">{spot.location}</span>
                      <span className="text-gray-600">${spot.price}</span>
                      <Button size="sm" variant="outline" className="text-xs">
                        Book Now
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h4>
                <p className="text-sm text-gray-600 mb-6">
                  FAQ address common inquiries and provide concise information, helping 
                  users find solutions quickly.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-900">How do I book a trip on Magnolia?</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-900">Does Magnolia offer travel insurance?</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-900">Does Magnolia provide travel recommendations?</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm font-medium text-gray-900">Do you offer discount for group bookings?</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VacationDiscovery;