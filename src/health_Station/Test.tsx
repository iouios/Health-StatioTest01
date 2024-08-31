import React, { useState } from 'react';

// กำหนดประเภทของ Input
interface Input {
  id: number;
  label: string;
  value: string;
}

const HealthForm: React.FC = () => {
  // สถานะของข้อมูลฟอร์มแต่ละประเภท
  const [surgeryInputs, setSurgeryInputs] = useState<Input[]>([]);
  const [drugAllergyInputs, setDrugAllergyInputs] = useState<Input[]>([]);
  const [foodAllergyInputs, setFoodAllergyInputs] = useState<Input[]>([]);

  // ฟังก์ชันในการเพิ่มฟิลด์ข้อมูลสำหรับการผ่าตัด
  const addSurgeryInput = () => {
    const newId = surgeryInputs.length + 1;
    const newInputs: Input[] = [
      { id: newId, label: "เมื่อ พ.ศ.", value: "" },
      { id: newId + 1, label: "โรงพยาบาล", value: "" },
    ];
    setSurgeryInputs(prevInputs => [...prevInputs, ...newInputs]);
  };

  // ฟังก์ชันในการเพิ่มฟิลด์ข้อมูลสำหรับการแพ้ยา
  const addDrugAllergyInput = () => {
    const newId = drugAllergyInputs.length + 1;
    const newInputs: Input[] = [
      { id: newId, label: "ชื่อยา", value: "" },
      { id: newId + 1, label: "อาการที่แพ้", value: "" },
    ];
    setDrugAllergyInputs(prevInputs => [...prevInputs, ...newInputs]);
  };

  // ฟังก์ชันในการเพิ่มฟิลด์ข้อมูลสำหรับการแพ้อาหาร
  const addFoodAllergyInput = () => {
    const newId = foodAllergyInputs.length + 1;
    const newInputs: Input[] = [
      { id: newId, label: "ชื่ออาหาร", value: "" },
      { id: newId + 1, label: "อาการที่แพ้", value: "" },
    ];
    setFoodAllergyInputs(prevInputs => [...prevInputs, ...newInputs]);
  };

  // ฟังก์ชันในการจัดการการเปลี่ยนแปลงข้อมูล
  const handleInputChange = (type: "surgery" | "drugAllergy" | "foodAllergy", id: number, value: string) => {
    switch (type) {
      case "surgery":
        setSurgeryInputs(prevInputs =>
          prevInputs.map(input =>
            input.id === id ? { ...input, value } : input
          )
        );
        break;
      case "drugAllergy":
        setDrugAllergyInputs(prevInputs =>
          prevInputs.map(input =>
            input.id === id ? { ...input, value } : input
          )
        );
        break;
      case "foodAllergy":
        setFoodAllergyInputs(prevInputs =>
          prevInputs.map(input =>
            input.id === id ? { ...input, value } : input
          )
        );
        break;
    }
  };

  // ฟังก์ชันในการส่งฟอร์ม
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // จัดการข้อมูลตามประเภท
    const surgeryDetails = [];
    const drugAllergyDetails = [];
    const foodAllergyDetails = [];

    for (let i = 0; i < surgeryInputs.length; i += 2) {
      const yearInput = surgeryInputs[i];
      const hospitalInput = surgeryInputs[i + 1];
      if (yearInput && hospitalInput) {
        surgeryDetails.push({
          year: yearInput.value,
          hospital: hospitalInput.value,
        });
      }
    }

    for (let i = 0; i < drugAllergyInputs.length; i += 2) {
      const drugNameInput = drugAllergyInputs[i];
      const reactionInput = drugAllergyInputs[i + 1];
      if (drugNameInput && reactionInput) {
        drugAllergyDetails.push({
          drug_name: drugNameInput.value,
          drug_allergic_reactions: reactionInput.value,
        });
      }
    }

    for (let i = 0; i < foodAllergyInputs.length; i += 2) {
      const foodNameInput = foodAllergyInputs[i];
      const reactionInput = foodAllergyInputs[i + 1];
      if (foodNameInput && reactionInput) {
        foodAllergyDetails.push({
          food_name: foodNameInput.value,
          food_allergic_reactions: reactionInput.value,
        });
      }
    }

    // สร้างข้อมูลที่จะส่ง
    const formData = {
      surgery_history: surgeryInputs.length > 0,
      surgery_details: surgeryDetails,
      drug_allergy_history: drugAllergyInputs.length > 0,
      drug_allergy_details: drugAllergyDetails,
      history_of_food_allergies: foodAllergyInputs.length > 0,
      history_of_food_details: foodAllergyDetails,
    };

    // ส่งข้อมูล (ที่นี่เราจะแค่พิมพ์ในคอนโซล)
    console.log(formData);

    // คุณสามารถส่งข้อมูลไปยังเซิร์ฟเวอร์ได้ที่นี่
    // เช่น
    // fetch('/api/save-form', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // }).then(response => response.json())
    //   .then(data => console.log('Success:', data))
    //   .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <button onClick={addSurgeryInput}>เพิ่มประวัติการผ่าตัด</button>
      <button onClick={addDrugAllergyInput}>เพิ่มประวัติการแพ้ยา</button>
      <button onClick={addFoodAllergyInput}>เพิ่มประวัติการแพ้อาหาร</button>

      <form onSubmit={handleSubmit}>
        <h2>ประวัติการผ่าตัด</h2>
        {surgeryInputs.map(input => (
          <div key={input.id}>
            <label htmlFor={`surgery_${input.id}`}>{input.label}:</label>
            <input
              type="text"
              id={`surgery_${input.id}`}
              value={input.value}
              onChange={(e) => handleInputChange("surgery", input.id, e.target.value)}
            />
          </div>
        ))}

        <h2>ประวัติการแพ้ยา</h2>
        {drugAllergyInputs.map(input => (
          <div key={input.id}>
            <label htmlFor={`drug_${input.id}`}>{input.label}:</label>
            <input
              type="text"
              id={`drug_${input.id}`}
              value={input.value}
              onChange={(e) => handleInputChange("drugAllergy", input.id, e.target.value)}
            />
          </div>
        ))}

        <h2>ประวัติการแพ้อาหาร</h2>
        {foodAllergyInputs.map(input => (
          <div key={input.id}>
            <label htmlFor={`food_${input.id}`}>{input.label}:</label>
            <input
              type="text"
              id={`food_${input.id}`}
              value={input.value}
              onChange={(e) => handleInputChange("foodAllergy", input.id, e.target.value)}
            />
          </div>
        ))}

        <button type="submit">ส่งข้อมูล</button>
      </form>
    </div>
  );
};

export default HealthForm;
