import React from 'react';
import Select from 'react-select';


const customStyles = {
    option: (provided, state) => ({
      ...provided,
      textAlign: 'center',
      color: 'black',
    }),
    control: (provided, state) => ({
      ...provided,
      // width: '800px',  
      
    }),
    
  };
  // const formatOptionLabel = ({ label, href }) => (
  //   <a href={href}>{label}</a>
  // );
const CustomSelect = ({ options, onChange }) => {
  return (
    
    <Select
      options={options}
      onChange={onChange}
      isSearchable={true}
      styles={customStyles}
      // formatOptionLabel={formatOptionLabel}


    />
  );
};

export default CustomSelect;
