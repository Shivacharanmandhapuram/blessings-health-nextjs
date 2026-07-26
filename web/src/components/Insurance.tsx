import React from "react";
import { INSURANCE_PLANS } from "../constants";
import { ShieldCheck, Check, Phone } from "lucide-react";

const Insurance: React.FC = () => {
    return (
        <section
            id="insurance"
            className="py-20 bg-white border-t border-gray-50 scroll-mt-32"
        >
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-gray-100 text-sm font-medium text-gray-600 bg-gray-50 mb-4 shadow-sm">
                        Coverage
                    </span>
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight leading-[1.15] max-w-2xl mb-4">
                        We accept most major insurance plans
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl font-normal leading-relaxed">
                        We believe quality healthcare should be accessible. If
                        you don't see your plan listed, please call us to verify
                        coverage.
                    </p>
                    <p className="mt-3 text-sm text-gray-500">
                        Coverage resources:{" "}
                        <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="font-medium text-teal hover:underline">Medicare</a>
                        {" · "}
                        <a href="https://www.mass.gov/masshealth" target="_blank" rel="noopener noreferrer" className="font-medium text-teal hover:underline">MassHealth</a>
                    </p>
                </div>

                {/* Insurance Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {INSURANCE_PLANS.map((plan) => (
                        <div
                            key={plan.name}
                            className="group flex flex-col p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-teal/30 transition-all duration-300 cursor-default"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="w-10 h-10 rounded-xl bg-teal/5 text-teal flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                {/* Consistent hover interaction */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Check className="w-5 h-5 text-teal" />
                                </div>
                            </div>
                            <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight">
                                {plan.name}
                            </h3>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                                {plan.type}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Guidance CTA */}
                <div className="mt-10 text-center">
                    <a
                        href="tel:6172515065"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-teal transition-colors px-6 py-3 rounded-full bg-gray-50 hover:bg-teal/5 border border-transparent hover:border-teal/20"
                    >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm font-medium">
                            Have questions about coverage? Call us to verify
                            your plan instantly.
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Insurance;
