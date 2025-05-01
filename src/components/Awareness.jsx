import React from "react";
import Banner from "./Banner";
import News from "./News";
import Papers from "./Papers";

const Awareness = () => {
  return (
    <div className="mx-auto">
      <Banner />

      {/* Texts Section */}
      <div className="sm:w-10/12 w-11/12 mx-auto py-12">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#45b3e0] mb-2">
          Suicide Prevention
        </h2>

        {/* Content*/}
        <div className="bg-white rounded-lg p-6 sm:p-10">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Suicide is a global public health issue that affects individuals,
            families, and communities. Every year, more than 700,000 people die
            by suicide, and countless others attempt it. It is the leading cause
            of death among young people aged 15-29.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Prevention is possible. By raising awareness, reducing stigma, and
            providing support, we can save lives. It is crucial to recognize the
            warning signs, such as feelings of hopelessness, withdrawal from
            loved ones, and changes in behavior. Early intervention and access
            to mental health resources can make a significant difference.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Together, we can create a supportive environment where individuals
            feel valued and understood. Let us work towards a future where
            suicide is no longer a silent epidemic.
          </p>
        </div>
      </div>

      <News />
      <Papers />
    </div>
  );
};

export default Awareness;
