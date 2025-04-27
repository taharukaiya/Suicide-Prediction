import React, { useState } from "react";

const PredictionForm = () => {
  const initialFormData = {
    age: "",
    gender: "",
    stressLevel: "",
    academicPerformance: "",
    healthCondition: "",
    relationshipCondition: "",
    familyProblem: "",
    depressionLevel: "",
    anxietyLevel: "",
    mentalSupport: "",
    selfHarmHistory: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Reset the form
    setFormData(initialFormData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center my-10">
      <div className="w-full max-w-lg border-1 border-[#c9e9f6] shadow-lg rounded-lg p-8 bg-[#f3fafde3]">
        <h2 className="text-3xl font-bold text-center text-[#45b3e0] mb-6">
          Suicide Prediction Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Age */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-[#c9e9f6] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#45b3e0] focus:outline-none bg-white"
              placeholder="Enter your age"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-[#c9e9f6] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#45b3e0] focus:outline-none bg-white text-gray-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Stress Level */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Stress Level
            </label>
            <select
              name="stressLevel"
              value={formData.stressLevel}
              onChange={handleChange}
              className="w-full border border-[#c9e9f6] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#45b3e0] focus:outline-none bg-white text-gray-500"
              required
            >
              <option value="">Select Stress Level</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Academic Performance */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Academic Performance
            </label>
            <select
              name="academicPerformance"
              value={formData.academicPerformance}
              onChange={handleChange}
              className="w-full border border-[#c9e9f6] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#45b3e0] focus:outline-none bg-white text-gray-500"
              required
            >
              <option value="">Select Academic Performance</option>
              <option value="poor">Poor</option>
              <option value="average">Average</option>
              <option value="good">Good</option>
              <option value="excellent">Excellent</option>
            </select>
          </div>

          {/* Health Condition */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Health Condition
            </label>
            <select
              name="healthCondition"
              value={formData.healthCondition}
              onChange={handleChange}
              className="w-full border border-[#c9e9f6] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#45b3e0] focus:outline-none bg-white text-gray-500"
              required
            >
              <option value="">Select Health Condition</option>
              <option value="normal">Normal</option>
              <option value="fair">Fair</option>
              <option value="abnormal">Abnormal</option>
            </select>
          </div>

          {/* Relationship Condition */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Relationship Condition
            </label>
            <select
              name="relationshipCondition"
              value={formData.relationshipCondition}
              onChange={handleChange}
              className="w-full border border-[#c9e9f6] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#45b3e0] focus:outline-none bg-white text-gray-500"
              required
            >
              <option value="">Select Relationship Condition</option>
              <option value="single">Single</option>
              <option value="in a relationship">In a Relationship</option>
              <option value="breakup">Breakup</option>
            </select>
          </div>

          {/* Family Problem */}
          <div>
            <label className="block border-[#c9e9f6] font-medium mb-2">
              Family Problem
            </label>
            <select
              name="familyProblem"
              value={formData.familyProblem}
              onChange={handleChange}
              className="w-full border border-[#c9e9f6] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#45b3e0] focus:outline-none bg-white text-gray-500"
              required
            >
              <option value="">Select Family Problem</option>
              <option value="none">None</option>
              <option value="parental conflict">Parental Conflict</option>
              <option value="financial problem">Financial Problem</option>
            </select>
          </div>

          {/* Depression Level */}
          <div>
            <label className="block border-[#c9e9f6] font-medium mb-2">
              Depression Level
            </label>
            <select
              name="depressionLevel"
              value={formData.depressionLevel}
              onChange={handleChange}
              className="w-full border border-[#c9e9f6] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#45b3e0] focus:outline-none bg-white text-gray-500"
              required
            >
              <option value="">Select Depression Level</option>
              <option value="sometimes">Sometimes</option>
              <option value="often">Often</option>
              <option value="always">Always</option>
            </select>
          </div>

          {/* Anxiety Level */}
          <div>
            <label className="block border-[#c9e9f6] font-medium mb-2">
              Anxiety Level
            </label>
            <select
              name="anxietyLevel"
              value={formData.anxietyLevel}
              onChange={handleChange}
              className="w-full border border-[#c9e9f6] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#45b3e0] focus:outline-none bg-white text-gray-500"
              required
            >
              <option value="">Select Anxiety Level</option>
              <option value="sometimes">Sometimes</option>
              <option value="often">Often</option>
              <option value="always">Always</option>
            </select>
          </div>

          {/* Mental Support */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Mental Support
            </label>
            <select
              name="mentalSupport"
              value={formData.mentalSupport}
              onChange={handleChange}
              className="w-full border border-[#c9e9f6] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#45b3e0] focus:outline-none bg-white text-gray-500"
              required
            >
              <option value="">Select Mental Support</option>
              <option value="none">None</option>
              <option value="family">Family</option>
              <option value="friends">Friends</option>
            </select>
          </div>

          {/* Self Harm History */}
          <div>
            <label className="block border-[#c9e9f6] font-medium mb-2">
              Self Harm History
            </label>
            <select
              name="selfHarmHistory"
              value={formData.selfHarmHistory}
              onChange={handleChange}
              className="w-full border border-[#c9e9f6] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#45b3e0] focus:outline-none bg-white text-gray-500"
              required
            >
              <option value="">Select Self Harm History</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#45b3e0] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#3a9dc4] transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PredictionForm;
