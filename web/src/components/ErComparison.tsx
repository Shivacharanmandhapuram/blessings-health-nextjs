import React from 'react';
import { Clock, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';

const ErComparison: React.FC = () => {
  return (
    <div id="er-comparison" className="bg-sage py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-teal sm:text-4xl">
            ER Can Wait?
          </h2>
          <p className="mt-4 text-xl text-teal-dark font-serif">
            Know when to visit us versus the Emergency Room. Save time and money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Urgent Care Card */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden transform transition-transform duration-300">
            <div className="bg-teal py-4 px-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <CheckCircle className="mr-2" /> Blessings Clinic
              </h3>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4 text-teal">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-semibold">Avg. Wait: 15-30 Minutes</span>
              </div>
              <div className="flex items-center mb-6 text-teal">
                <DollarSign className="w-5 h-5 mr-2" />
                <span className="font-semibold">Cost: Lower Copay ($)</span>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 bg-sage rounded-full mr-2"></span>
                    Minor fractures & sprains
                </li>
                <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 bg-sage rounded-full mr-2"></span>
                    Fevers, flu, & colds
                </li>
                <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 bg-sage rounded-full mr-2"></span>
                    Cuts needing stitches
                </li>
                <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 bg-sage rounded-full mr-2"></span>
                    Rashes & infections
                </li>
              </ul>
            </div>
          </div>

          {/* ER Card */}
          <div className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden opacity-90">
            <div className="bg-gray-500 py-4 px-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <AlertCircle className="mr-2" /> Emergency Room
              </h3>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4 text-gray-700">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-semibold">Avg. Wait: 2-4 Hours</span>
              </div>
              <div className="flex items-center mb-6 text-gray-700">
                <DollarSign className="w-5 h-5 mr-2" />
                <span className="font-semibold">Cost: High Deductible ($$$)</span>
              </div>
              <ul className="space-y-3 text-gray-600">
                 <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 bg-gray-400 rounded-full mr-2"></span>
                    Chest pain or difficulty breathing
                </li>
                <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 bg-gray-400 rounded-full mr-2"></span>
                    Severe head injuries
                </li>
                <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 bg-gray-400 rounded-full mr-2"></span>
                    Uncontrolled bleeding
                </li>
                <li className="flex items-start">
                    <span className="h-2 w-2 mt-2 bg-gray-400 rounded-full mr-2"></span>
                    Stroke symptoms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErComparison;