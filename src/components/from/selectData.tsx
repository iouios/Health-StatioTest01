import React from 'react';

type FormDataProps = {
  id?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
};

const selectData: React.FC<FormDataProps> = ({
  id = "1", 
  name = "เลขประจำตัวประชาชน", 
  placeholder = "เลขประจำตัวประชาชน", 
  type = "text",
  value = "",
}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2">
        {name}
        <select
        id={id}
        name={name}
        className="form-select block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-base"
        value={value}>
      <option value={name}>{}</option>
      <option value={name}>{}</option>
      <option value={name}>{}</option>
      </select>
      </label>
    </div>
  );
};

export default selectData;
