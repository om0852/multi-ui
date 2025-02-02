"use client";
import React from "react";
// import Countdown_2 from "./_components/Countdown_2";
// import Countdown_3 from "./_components/Countdown_3";
// import Countdown_4 from "./_components/Countdown_4";
// import Countdown_5 from "./_components/Countdown_5";
// import Countdown_6 from "./_components/Countdown_6";
// import Countdown_7 from "./_components/Countdown_7";
// import Countdown_8 from "./_components/Countdown_8";
// import Countdown_9 from "./_components/Countdown_9";
// import Countdown_10 from "./_components/Countdown_10";
// import Countdown_11 from "./_components/Countdown_11";
// import Countdown_12 from "./_components/Countdown_12";
// import Countdown_13 from "./_components/Countdown_13";
// import Countdown_14 from "./_components/Countdown_14";
// import Countdown_15 from "./_components/Countdown_15";
// import Countdown_16 from "./_components/Countdown_16";
// import Countdown_17 from "./_components/Countdown_17";
// import Countdown_18 from "./_components/Countdown_18";
// import Countdown_19 from "./_components/Countdown_19";
// import Countdown_20 from "./_components/Countdown_20";
// import Countdown_21 from "./_components/Countdown_21";
// import Countdown_22 from "./_components/Countdown_22";
// import Countdown_23 from "./_components/Countdown_23";
// import Countdown_24 from "./_components/Countdown_24";
// import Countdown_25 from "./_components/Countdown_25";
// import Countdown_26 from "./_components/Countdown_26";
// import Countdown_27 from "./_components/Countdown_27";
// import Countdown_28 from "./_components/Countdown_28";
// import Countdown_29 from "./_components/Countdown_29";
import Countdown_30 from "./_components/Countdown_45";
import Countdown_51 from "./_components/Countdown_51";
import Countdown_52 from "./_components/Countdown_52";
import Countdown_53 from "./_components/Countdown_53";
import Countdown_54 from "./_components/Countdown_54";
import Countdown_55 from "./_components/Countdown_55";
import Countdown_61 from "./_components/Countdown_61";
import Countdown_62 from "./_components/Countdown_62";
import Countdown_63 from "./_components/Countdown_63";
import Countdown_64 from "./_components/Countdown_64";
import Countdown_65 from "./_components/Countdown_65";
import Countdown_66 from "./_components/Countdown_66";
import Countdown_67 from "./_components/Countdown_67";
import Countdown_68 from "./_components/Countdown_68";
import Countdown_69 from "./_components/Countdown_69";
import Countdown_70 from "./_components/Countdown_70";

const CountdownPage = () => {
  // Set target date to 24 hours from now
  const targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Animated Countdown Collection
          </h1>
          <p className="text-lg text-gray-600">
            Interactive countdowns with unique page-turning animations
          </p>
        </div>

        <div className="space-y-12">
          {/* Book Page Flip Design */}
          <section className="rounded-lg shadow-xl overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 p-6 bg-white">
              1. Book Page Flip Design
            </h2>
            <Countdown_66 to={targetDate} />
          </section>

          {/* Rotating Cube Design */}
          <section className="rounded-lg shadow-xl overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 p-6 bg-white">
              2. Rotating Cube Design
            </h2>
            <Countdown_67 to={targetDate} />
          </section>

          {/* Split-Flap Display */}
          <section className="rounded-lg shadow-xl overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 p-6 bg-white">
              3. Split-Flap Display
            </h2>
            <Countdown_68 to={targetDate} />
          </section>

          {/* Rolling Numbers */}
          <section className="rounded-lg shadow-xl overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 p-6 bg-white">
              4. Rolling Numbers
            </h2>
            <Countdown_69 to={targetDate} />
          </section>

          {/* Slide Deck Design */}
          <section className="rounded-lg shadow-xl overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 p-6 bg-white">
              5. Slide Deck Design
            </h2>
            <Countdown_70 to={targetDate} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;
